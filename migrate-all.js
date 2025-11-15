/**
 * SCRIPT DE MIGRAÇÃO AUTOMÁTICA DE TIPOGRAFIA
 * 
 * Este script substitui todas as classes antigas pelo novo sistema tipográfico
 * em todos os arquivos de página
 */

const fs = require('fs');
const path = require('path');

// Arquivos a serem migrados
const files = [
  'src/pages/Index.tsx',
  'src/pages/Autor.tsx',
  'src/pages/Dissertacao.tsx'
];

// Substituições a serem feitas (na ordem correta!)
const replacements = [
  // 1. Substituir classes específicas
  { from: 'className="bible-title"', to: 'className="tvn-h1"' },
  { from: 'className="bible-subtitle', to: 'className="tvn-h2' },
  { from: 'className="bible-body', to: 'className="tvn-body' },
  
  // 2. Remover classes de espaçamento que agora são automáticas
  { from: / bible-section-spacing/g, to: '' },
  { from: / bible-block-spacing/g, to: '' },
  { from: / bible-bilingual-grid/g, to: '' },
  
  // 3. Remover py-* de BilingualSection
  { from: /<BilingualSection className="py-16">/g, to: '<BilingualSection>' },
  { from: /<BilingualSection className="py-12">/g, to: '<BilingualSection>' },
  { from: /<BilingualSection className="py-8">/g, to: '<BilingualSection>' },
  { from: /<BilingualSection className="py-6">/g, to: '<BilingualSection>' },
  
  // 4. Remover mt-* e mb-* de elementos tipográficos (espaçamento automático)
  { from: /className="tvn-h1 mt-\d+"/g, to: 'className="tvn-h1"' },
  { from: /className="tvn-h2 mt-\d+"/g, to: 'className="tvn-h2"' },
  { from: /className="tvn-body mt-\d+"/g, to: 'className="tvn-body"' },
  { from: /className="tvn-h1 mb-\d+"/g, to: 'className="tvn-h1"' },
  { from: /className="tvn-h2 mb-\d+"/g, to: 'className="tvn-h2"' },
  { from: /className="tvn-body mb-\d+"/g, to: 'className="tvn-body"' },
  
  // 5. Limpar classes vazias
  { from: /className=""/g, to: '' },
  { from: / className=""/g, to: '' },
];

// Função para aplicar substituições
function migrateFile(filePath) {
  console.log(`\n📝 Migrando: ${filePath}`);
  
  try {
    // Ler arquivo
    let content = fs.readFileSync(filePath, 'utf8');
    let changes = 0;
    
    // Aplicar cada substituição
    replacements.forEach((replacement, index) => {
      const before = content;
      content = content.replace(replacement.from, replacement.to);
      
      if (content !== before) {
        changes++;
        console.log(`   ✅ Substituição ${index + 1} aplicada`);
      }
    });
    
    // Salvar arquivo
    if (changes > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`   🎉 ${changes} transformações aplicadas com sucesso!`);
    } else {
      console.log(`   ⏭️  Nenhuma mudança necessária`);
    }
    
    return changes;
  } catch (error) {
    console.error(`   ❌ Erro ao migrar ${filePath}:`, error.message);
    return 0;
  }
}

// Executar migração
console.log('🚀 INICIANDO MIGRAÇÃO AUTOMÁTICA DE TIPOGRAFIA\n');
console.log('📦 Arquivos a migrar:', files.length);

let totalChanges = 0;

files.forEach(file => {
  const changes = migrateFile(file);
  totalChanges += changes;
});

console.log('\n' + '='.repeat(60));
console.log(`✨ MIGRAÇÃO CONCLUÍDA!`);
console.log(`📊 Total de transformações: ${totalChanges}`);
console.log('='.repeat(60) + '\n');

console.log('📝 Próximos passos:');
console.log('   1. Verificar visualmente as páginas migradas');
console.log('   2. Testar responsividade (mobile/tablet/desktop)');
console.log('   3. Confirmar que o espaçamento está correto');
console.log('   4. Celebrar! 🎉\n');
