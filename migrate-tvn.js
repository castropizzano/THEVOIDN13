#!/usr/bin/env node

/**
 * MIGRAÇÃO AUTOMÁTICA TVN v3.0
 * Substitui classes bible-* por classes tvn-* em todos os arquivos
 */

const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Index.tsx',
  'src/pages/Autor.tsx',
  'src/pages/Dissertacao.tsx',
];

const replacements = [
  // Títulos
  { from: /className="bible-title"/g, to: 'className="tvn-h1"' },
  { from: /className="bible-subtitle"/g, to: 'className="tvn-h2"' },
  
  // Corpo de texto
  { from: /className="bible-body-large"/g, to: 'className="tvn-body-large"' },
  { from: /className="bible-body-small"/g, to: 'className="tvn-body-small"' },
  { from: /className="bible-body"/g, to: 'className="tvn-body"' },
  
  // Grid bilíngue
  { from: /className="bible-bilingual-grid"/g, to: 'className="bilingual-grid"' },
  
  // Remover classes de espaçamento (agora automático)
  { from: /bible-section-spacing\s*/g, to: '' },
  { from: /bible-block-spacing\s*/g, to: '' },
  
  // Limpar classes duplicadas ou vazias resultantes
  { from: /className="\s+/g, to: 'className="' },
  { from: /\s+"/g, to: '"' },
  { from: /className=""/g, to: '' },
  
  // Títulos com classes combinadas (múltiplas variações)
  { from: /className="bible-subtitle text-base sm:text-lg md:text-xl tvn-h2"/g, to: 'className="tvn-h2"' },
  { from: /className="bible-subtitle tvn-h2"/g, to: 'className="tvn-h2"' },
  { from: /className="bible-title tvn-h1"/g, to: 'className="tvn-h1"' },
];

let totalChanges = 0;

console.log('\n🚀 Iniciando migração TVN v3.0...\n');

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fileChanges = 0;
    
    replacements.forEach(({ from, to }) => {
      const matches = content.match(from);
      if (matches) {
        fileChanges += matches.length;
        content = content.replace(from, to);
      }
    });
    
    if (fileChanges > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${filePath}: ${fileChanges} transformações aplicadas`);
      totalChanges += fileChanges;
    } else {
      console.log(`⏭️  ${filePath}: Nenhuma alteração necessária`);
    }
  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Migração concluída!`);
console.log(`📊 Total de transformações: ${totalChanges}`);
console.log(`📁 Arquivos processados: ${files.length}`);
console.log(`\n✨ Próximos passos:`);
console.log(`   1. Verifique as mudanças no browser`);
console.log(`   2. Teste a responsividade mobile/desktop`);
console.log(`   3. Confirme a hierarquia tipográfica`);
console.log(`   4. Commit: "feat: migrate all pages to TVN v3.0 typography system"\n`);
