const fs = require('fs');
const path = require('path');

/**
 * Convert icon filename to PascalCase component name
 */
function toComponentName(filename) {
    let name = filename
        .replace(/\.svg$/, '')
        .replace(/^fi-[rsd][srbtc]-/, ''); // Updated: r=rounded, s=straight, d=duotone; s/r/b/t/c weights
    
    const numberMap = {
        '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
        '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
    };
    
    if (numberMap[name[0]]) {
        name = numberMap[name[0]] + name.slice(1);
    }
    
    return name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
        .replace(/^(\d)/, 'Icon$1');
}

/**
 * Generate manifest of all icons
 */
function generateManifest() {
    console.log('🚀 Generating icons manifest...\n');
    
    const variants = [
        { style: 'rounded', weight: 'regular' },
        { style: 'rounded', weight: 'thin' },
        { style: 'rounded', weight: 'bold' },
        { style: 'rounded', weight: 'solid' },
        { style: 'straight', weight: 'regular' },
        { style: 'straight', weight: 'thin' },
        { style: 'straight', weight: 'bold' },
        { style: 'straight', weight: 'solid' },
        { style: 'duotone', weight: 'chubby' }
    ];
    
    const icons = [];
    
    variants.forEach(({ style, weight }) => {
        const iconDir = path.join(__dirname, '..', 'icons', style, weight, 'svg');
        
        if (!fs.existsSync(iconDir)) {
            console.log(`  ⚠️  Directory not found: ${iconDir}`);
            return;
        }
        
        const files = fs.readdirSync(iconDir).filter(f => f.endsWith('.svg'));
        console.log(`  📂 ${style}/${weight}: ${files.length} icons`);
        
        files.forEach(file => {
            const componentName = toComponentName(file);
            const name = file.replace('.svg', '').replace(/^fi-[rsd][srbtc]-/, '');
            
            // Generate keywords for searchability
            const keywords = name.split('-');
            
            icons.push({
                name: name,
                component: componentName,
                keywords: keywords,
                filename: file,
                style: style,
                weight: weight,
                cdn: `https://edge.iseer.co/assets/icons/${style}/${weight}/svg/${file}`
            });
        });
    });
    
    // Write as JS module for docs
    const jsContent = `// Auto-generated icon manifest
const ICONS_MANIFEST = ${JSON.stringify(icons, null, 2)};
`;
    
    const docsOutputPath = path.join(__dirname, '..', 'docs', 'icons-manifest.js');
    fs.writeFileSync(docsOutputPath, jsContent);

    // Write as pure JSON for other uses
    const jsonOutputPath = path.join(__dirname, '..', 'icons.json');
    fs.writeFileSync(jsonOutputPath, JSON.stringify(icons, null, 2));
    
    console.log('\n' + '='.repeat(50));
    console.log(`✨ Generated manifest with ${icons.length} icons`);
    console.log(`📁 Docs Output: ${docsOutputPath}`);
    console.log(`📁 JSON Output: ${jsonOutputPath}`);
    console.log('='.repeat(50) + '\n');
}

generateManifest();
