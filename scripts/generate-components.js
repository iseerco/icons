const fs = require('fs');
const path = require('path');

/**
 * Convert icon filename to PascalCase component name
 * Examples:
 * - fi-rr-0 => Zero
 * - fi-rr-arrow-right => ArrowRight
 * - fi-rr-3d => ThreeD
 */
function toComponentName(filename) {
  // Remove file extension and icon prefix
  let name = filename
    .replace(/\.svg$/, '')
    .replace(/^fi-[rsd][srbtc]-/, ''); // r=rounded, s=straight, d=duotone; weights: s/r/b/t/c
  
  // Handle numbers at start
  const numberMap = {
    '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', '4': 'Four',
    '5': 'Five', '6': 'Six', '7': 'Seven', '8': 'Eight', '9': 'Nine'
  };
  
  if (numberMap[name[0]]) {
    name = numberMap[name[0]] + name.slice(1);
  }
  
  // Convert to PascalCase
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
    .replace(/^(\d)/, 'Icon$1'); // Prefix with Icon if starts with number after conversion
}

/**
 * Process SVG content for React component
 */
function processSVG(svgContent) {
  return svgContent
    // Remove XML declaration
    .replace(/<\?xml[^?]*\?>\s*/g, '')
    // Remove comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // Remove style tags and their content
    .replace(/<style[\s\S]*?<\/style>/g, '')
    // Remove defs that only contain styles
    .replace(/<defs>\s*<\/defs>/g, '')
    // Remove class attributes
    .replace(/\s*class="[^"]*"/g, '')
    // Replace width/height with props
    .replace(/width="[^"]*"/g, 'width={size}')
    .replace(/height="[^"]*"/g, 'height={size}')
    // Replace fill with color prop (but preserve fill="none")
    .replace(/fill="(?!none)[^"]*"/g, 'fill={color}')
    // Replace stroke with color prop
    .replace(/stroke="[^"]*"/g, 'stroke={color}')
    // Add className
    .replace(/<svg/, '<svg className={className}')
    // Add rest props
    .replace(/<svg([^>]*)>/, '<svg$1 {...props}>');
}

/**
 * Generate React component from SVG
 */
function generateComponent(svgPath, componentName) {
  const svgContent = fs.readFileSync(svgPath, 'utf-8');
  const processedSVG = processSVG(svgContent);
  
  return `import React from 'react';
import type { IconProps } from '../../types';

export const ${componentName}: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  ${processedSVG.trim()}
);

${componentName}.displayName = '${componentName}';
`;
}

/**
 * Generate all icon components for a specific variant
 */
function generateVariant(variant, weight) {
  const iconDir = path.join(__dirname, '..', 'icons', variant, weight, 'svg');
  const outputDir = path.join(__dirname, '..', 'src', variant, weight);
  
  console.log(`\n📦 Processing ${variant}/${weight}...`);
  
  if (!fs.existsSync(iconDir)) {
    console.log(`  ⚠️  Directory not found: ${iconDir}`);
    return;
  }
  
  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });
  
  // Get all SVG files
  const files = fs.readdirSync(iconDir).filter(f => f.endsWith('.svg'));
  console.log(`  Found ${files.length} icons`);
  
  const exports = [];
  let processed = 0;
  
  files.forEach((file, index) => {
    try {
      const componentName = toComponentName(file);
      const svgPath = path.join(iconDir, file);
      const componentPath = path.join(outputDir, `${componentName}.tsx`);
      
      // Generate component
      const componentCode = generateComponent(svgPath, componentName);
      fs.writeFileSync(componentPath, componentCode);
      
      exports.push({ name: componentName, file: componentName });
      processed++;
      
      // Progress indicator every 500 icons
      if ((index + 1) % 500 === 0) {
        console.log(`    Processed ${index + 1}/${files.length}...`);
      }
    } catch (error) {
      console.error(`  ❌ Error processing ${file}:`, error.message);
    }
  });
  
  // Generate index file
  const indexContent = exports
    .map(({ name, file }) => `export { ${name} } from './${file}';`)
    .join('\n') + '\n';
  
  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
  
  console.log(`  ✅ Generated ${processed} components`);
  return exports;
}

/**
 * Main execution
 */
function main() {
  console.log('🚀 Generating icon components...\n');
  
  const variants = ['straight', 'rounded'];
  const weights = ['regular', 'thin', 'bold', 'solid'];
  
  const allExports = {
    straight: {},
    rounded: {},
    duotone: {}
  };
  
  // Generate all variants
  variants.forEach(variant => {
    weights.forEach(weight => {
      const exports = generateVariant(variant, weight);
      if (exports) {
        allExports[variant][weight] = exports;
      }
    });
  });
  
  // Generate duotone/chubby separately
  const duotoneExports = generateVariant('duotone', 'chubby');
  if (duotoneExports) {
    allExports.duotone.chubby = duotoneExports;
  }
  
  console.log('\n📝 Generating main index file...');
  const mainIndexContent = `// Export all icon variants
export * from './straight/regular';
export * from './straight/thin';
export * from './straight/bold';
export * from './straight/solid';
export * from './rounded/regular';
export * from './rounded/thin';
export * from './rounded/bold';
export * from './rounded/solid';
export * from './duotone/chubby';

// Export types
export type { IconProps, IconComponent } from './types';
`;
  
  fs.writeFileSync(path.join(__dirname, '..', 'src', 'index.ts'), mainIndexContent);
  
  // Calculate totals
  let totalIcons = 0;
  ['straight', 'rounded'].forEach(variant => {
    weights.forEach(weight => {
      if (allExports[variant][weight]) {
        totalIcons += allExports[variant][weight].length;
      }
    });
  });
  // Add duotone/chubby count
  if (allExports.duotone.chubby) {
    totalIcons += allExports.duotone.chubby.length;
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('✨ Component generation complete!');
  console.log('='.repeat(60));
  console.log(`📊 Total icons generated: ${totalIcons}`);
  console.log(`📁 Output directory: ${path.join(__dirname, '..', 'src')}`);
  console.log('='.repeat(60) + '\n');
}

// Run the script
main();
