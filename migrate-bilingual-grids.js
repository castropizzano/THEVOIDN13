#!/usr/bin/env node

/**
 * Migration script to convert bible-bilingual-grid to lang-pt/lang-en pattern
 * 
 * This script automatically converts deprecated bilingual grid patterns to
 * the new CSS-based language switching system.
 */

const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Dissertacao.tsx',
  'src/pages/Autor.tsx',
];

function convertSimpleTitles(content) {
  // Pattern 1: Simple title grids (h2, h3, h4, p with just text)
  const simpleTitlePattern = /<div className="bible-bilingual-grid bible-block">\s*<div>\s*<(h[1-6]|p) className="([^"]*)">((?:(?!<\/\1>).)*)<\/\1>\s*<\/div>\s*<div>\s*<\1 className="\2">((?:(?!<\/\1>).)*)<\/\1>\s*<\/div>\s*<\/div>/gs;
  
  content = content.replace(simpleTitlePattern, (match, tag, className, ptText, enText) => {
    return `<div className="bible-block">
            <${tag} className="${className}">
              <span className="lang-pt">${ptText}</span>
              <span className="lang-en">${enText}</span>
            </${tag}>
          </div>`;
  });

  return content;
}

function convertComplexBlocks(content) {
  // Pattern 2: Complex content blocks - convert grid to lang-pt/lang-en divs
  const complexBlockPattern = /<div className="bible-bilingual-grid bible-block">\s*<div>([\s\S]*?)<\/div>\s*<div>([\s\S]*?)<\/div>\s*<\/div>/g;
  
  content = content.replace(complexBlockPattern, (match, ptContent, enContent) => {
    // Check if it's already been converted
    if (ptContent.trim().startsWith('<div') || enContent.trim().startsWith('<div')) {
      return `<div className="bible-block">
            <div className="lang-pt">${ptContent}</div>
            <div className="lang-en">${enContent}</div>
          </div>`;
    }
    return match;
  });

  return content;
}

function migrateFile(filePath) {
  console.log(`\n📄 Processing: ${filePath}`);
  
  const fullPath = path.join(process.cwd(), filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`  ⚠️  File not found, skipping`);
    return;
  }

  let content = fs.readFileSync(fullPath, 'utf-8');
  const originalContent = content;
  
  // Count occurrences before
  const beforeCount = (content.match(/bible-bilingual-grid/g) || []).length;
  console.log(`  📊 Found ${beforeCount} bible-bilingual-grid occurrences`);
  
  if (beforeCount === 0) {
    console.log(`  ✅ Already migrated`);
    return;
  }

  // Apply conversions
  content = convertSimpleTitles(content);
  content = convertComplexBlocks(content);
  
  // Count after
  const afterCount = (content.match(/bible-bilingual-grid/g) || []).length;
  const converted = beforeCount - afterCount;
  
  if (converted > 0) {
    // Backup original
    fs.writeFileSync(fullPath + '.backup', originalContent);
    
    // Write migrated content
    fs.writeFileSync(fullPath, content);
    
    console.log(`  ✅ Converted ${converted} occurrences`);
    console.log(`  📋 Backup saved to ${filePath}.backup`);
    
    if (afterCount > 0) {
      console.log(`  ⚠️  ${afterCount} complex cases remaining (manual review needed)`);
    }
  } else {
    console.log(`  ⚠️  No automatic conversions possible`);
  }
}

function main() {
  console.log('🚀 Starting bilingual grid migration...\n');
  console.log('=' .repeat(60));
  
  files.forEach(file => migrateFile(file));
  
  console.log('\n' + '='.repeat(60));
  console.log('\n✨ Migration complete!');
  console.log('\n📝 Next steps:');
  console.log('  1. Review the changes in each file');
  console.log('  2. Test the bilingual switching');
  console.log('  3. Check console for validation warnings');
  console.log('  4. Remove .backup files when satisfied\n');
}

main();
