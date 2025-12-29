require('dotenv').config();
const { S3Client, ListObjectsV2Command, DeleteObjectsCommand } = require('@aws-sdk/client-s3');

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

const s3Client = new S3Client({
    region: 'auto',
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_ACCESS_KEY,
    },
});

async function  deleteRecursively(prefix) {
    console.log(`🗑️ Deleting files with prefix: ${prefix}...`);
    
    let continuationToken = null;
    let totalDeleted = 0;

    do {
        const listCommand = new ListObjectsV2Command({
            Bucket: R2_BUCKET_NAME,
            Prefix: prefix,
            ContinuationToken: continuationToken
        });

        const response = await s3Client.send(listCommand);
        
        if (response.Contents && response.Contents.length > 0) {
            const objectsToDelete = response.Contents.map(obj => ({ Key: obj.Key }));
            
            await s3Client.send(new DeleteObjectsCommand({
                Bucket: R2_BUCKET_NAME,
                Delete: { Objects: objectsToDelete }
            }));

            totalDeleted += objectsToDelete.length;
            console.log(`   Deleted ${objectsToDelete.length} items...`);
        }

        continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    console.log(`✅ Finished deleting ${totalDeleted} files from ${prefix}`);
}

async function main() {
    console.log('🚨 Starting Cleanup of Incorrect Uploads...');
    
    // The incorrect uploads were directly under assets/variant
    // e.g., assets/straight, assets/rounded
    // We want to delete these specific mistake folders
    
    // Check what we are deleting to be safe
    const wrongPrefixes = [
        'assets/straight/',
        'assets/rounded/',
        'assets/duotone/'
    ];

    for (const prefix of wrongPrefixes) {
        await deleteRecursively(prefix);
    }

    console.log('✨ Cleanup Complete!');
}

main();
