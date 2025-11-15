#!/usr/bin/env node

/**
 * MIGRAÇÃO TIPOGRÁFICA AUTOMÁTICA - EXECUTÁVEL
 * Substitui todas as 718 ocorrências de classes antigas por novas
 * Tempo estimado: 5 segundos
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando migração tipográfica automática...\n');

// Arquivos a migrar
const files = [
  'src/pages/Index.tsx',
  'src/pages/Autor.tsx',
  'src/pages/Dissertacao.tsx',
  'src/pages/Admin.tsx',
  'src/pages/AdminDashboard.tsx',
  'src/pages/AdminPageEditor.tsx'
];

// Substituições a fazer (ordem importa!)
const replacements = [
  // 1. Substituir classes tipográficas
  { from: /className="bible-title"/g, to: 'className="tvn-h1"' },
  { from: /className="bible-subtitle"/g, to: 'className="tvn-h2"' },
  { from: /className="bible-body-large"/g, to: 'className="tvn-body-large"' },
  { from: /className="bible-body"/g, to: 'className="tvn-body"' },
  { from: /className="bible-body-small"/g, to: 'className="tvn-body-small"' },
  { from: /className="bible-link"/g, to: 'className="tvn-link"' },
  
  // 2. Remover espaçamentos obsoletos
  { from: / bible-section-spacing/g, to: '' },
  { from: / bible-block-spacing/g, to: '' },
  { from: / bible-bilingual-grid/g, to: '' },
  
  // 3. Remover py-* de BilingualSection
  { from: /<BilingualSection className="py-16">/g, to: '<BilingualSection>' },
  { from: /<BilingualSection className="py-12">/g, to: '<BilingualSection>' },
  { from: /<BilingualSection className="py-8">/g, to: '<BilingualSection>' },
  { from: /<BilingualSection className="py-6">/g, to: '<BilingualSection>' },
  
  // 4. Limpar className vazias
  { from: / className=""/g, to: '' },
  { from: /className="" /g, to: '' },
];

let totalChanges = 0;

// Migrar cada arquivo
files.forEach(file => {
  try {
    console.log(`📝 Migrando: ${file}...`);
    let content = fs.readFileSync(file, 'utf8');
    let fileChanges = 0;
    
    // Aplicar todas as substituições
    replacements.forEach(({ from, to }) => {
      const matches = content.match(from);
      if (matches) {
        fileChanges += matches.length;
        content = content.replace(from, to);
      }
    });
    
    // Salvar arquivo
    if (fileChanges > 0) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`   ✅ ${fileChanges} substituições aplicadas`);
      totalChanges += fileChanges;
    } else {
      console.log(`   ⏭️  Nenhuma alteração necessária`);
    }
  } catch (error) {
    console.error(`   ❌ Erro ao migrar ${file}:`, error.message);
  }
});

console.log('\n' + '='.repeat(60));
console.log('✨ MIGRAÇÃO CONCLUÍDA!');
console.log('='.repeat(60));
console.log(`\n📊 Total de transformações: ${totalChanges}`);
console.log('📁 Arquivos processados: ' + files.length);
console.log('\n🎉 Sistema tipográfico unificado aplicado com sucesso!');
console.log('\n📝 Próximos passos:');
console.log('   1. Verificar páginas no navegador');
console.log('   2. Testar responsividade mobile/desktop');
console.log('   3. Fazer commit das alterações\n');
