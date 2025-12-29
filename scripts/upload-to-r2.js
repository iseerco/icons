require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { glob } = require('glob');
const mime = require('mime-types');

// 1. Environment Check
const {
    R2_ACCOUNT_ID,
    R2_ACCESS_KEY_ID,
    R2_SECRET_ACCESS_KEY,
    R2_BUCKET_NAME
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME) {
    console.error('❌ Missing environment variables in .env file.');
    process.exit(1);
}

// 2. R2 Client Setup
const s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

// 3. Configuration
const ICONS_DIR = path.join(__dirname, '..', 'icons');
const BATCH_SIZE = 50; // Upload 50 files at a time (Safe & Fast)

async function main() {
    console.log('🚀 Starting R2 icon upload...');
    console.log(`📦 Bucket: ${R2_BUCKET_NAME}`);

    // Force forward slashes for Windows compatibility
    // This finds all .svg files recursively
    const searchPattern = `${ICONS_DIR.replace(/\\/g, '/')}/**/*.svg`;
    
    console.log(`🔍 Scanning: ${searchPattern}`);
    
    // Glob v10+ usage
    const files = await glob(searchPattern);

    if (files.length === 0) {
        console.warn('⚠️ No icons found! Check your path:', ICONS_DIR);
        return;
    }

    console.log(`📊 Found ${files.length} icons. Uploading in batches of ${BATCH_SIZE}...`);

    let completed = 0;
    let errors = 0;
    const startTime = Date.now();

    // 4. Batch Processing Loop (Replaces p-limit)
    for (let i = 0; i < files.length; i += BATCH_SIZE) {
        const batch = files.slice(i, i + BATCH_SIZE);
        
        // Process this batch in parallel
        await Promise.all(batch.map(async (filepath) => {
            try {
                const fileContent = fs.readFileSync(filepath);
                // Auto-detect mime type or fallback to svg
                const contentType = mime.lookup(filepath) || 'image/svg+xml';
                
                // create relative path key: "icons/brand/logo.svg" -> "assets/icons/brand/logo.svg"
                // We normalize path separators to '/' for S3
                const relativePath = path.relative(ICONS_DIR, filepath).split(path.sep).join('/');
                const key = `assets/icons/${relativePath}`;

                await s3Client.send(new PutObjectCommand({
                    Bucket: R2_BUCKET_NAME,
                    Key: key,
                    Body: fileContent,
                    ContentType: contentType,
                    // Cache for 1 year (User instruction: Unlimited viewing strategy)
                    CacheControl: 'public, max-age=31536000', 
                }));

                completed++;
            } catch (error) {
                errors++;
                console.error(`❌ Failed: ${path.basename(filepath)} - ${error.message}`);
            }
        }));

        // Log progress every batch
        const percent = ((completed / files.length) * 100).toFixed(1);
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
        process.stdout.write(`\r✅ Progress: ${percent}% | Uploaded: ${completed} | Errors: ${errors} | Time: ${elapsed}s`);
    }

    const totalTime = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`\n\n✨ Upload complete in ${totalTime}s`);
}

main();