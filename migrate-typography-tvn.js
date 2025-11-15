const fs = require('fs');
const path = require('path');

console.log('🎨 Iniciando migração tipográfica TVN...\n');

// Mapeamento de substituições
const replacements = [
  // Títulos H1
  { from: /className="bible-title"/g, to: 'className="tvn-h2"' },
  { from: /className="heading-hero"/g, to: 'className="tvn-h1"' },
  { from: /className="heading-1"/g, to: 'className="tvn-h1"' },
  
  // Títulos H2
  { from: /className="heading-2([^"]*)"/g, to: 'className="tvn-h2$1"' },
  { from: /className="section-title([^"]*)"/g, to: 'className="tvn-h2$1"' },
  
  // Títulos H3
  { from: /className="heading-3([^"]*)"/g, to: 'className="tvn-h3$1"' },
  { from: /className="heading-4([^"]*)"/g, to: 'className="tvn-h3$1"' },
  { from: /className="heading-5([^"]*)"/g, to: 'className="tvn-subtitle$1"' },
  { from: /className="subsection-title([^"]*)"/g, to: 'className="tvn-h3$1"' },
  { from: /className="section-subtitle([^"]*)"/g, to: 'className="tvn-h3$1"' },
  
  // Subtítulos
  { from: /className="bible-subtitle([^"]*)"/g, to: 'className="tvn-subtitle$1"' },
  { from: /className="label-large([^"]*)"/g, to: 'className="tvn-subtitle$1"' },
  { from: /className="label-small([^"]*)"/g, to: 'className="tvn-subtitle$1"' },
  
  // Parágrafos
  { from: /className="bible-body([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  { from: /className="body-base text-justified"/g, to: 'className="tvn-paragraph"' },
  { from: /className="body-base([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  { from: /className="body-large([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  { from: /className="body-small([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  
  // Grid e espaçamento
  { from: /className="bible-bilingual-grid([^"]*)"/g, to: 'className="bilingual-grid$1"' },
  { from: /className="bible-block-spacing([^"]*)"/g, to: 'className="tvn-block$1"' },
  { from: /className="bible-section-spacing([^"]*)"/g, to: 'className="tvn-block$1"' },
  
  // Limpar redundâncias
  { from: /className="tvn-paragraph text-justify leading-relaxed([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  { from: /className="tvn-paragraph text-base([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  { from: /className="tvn-paragraph leading-relaxed([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
  { from: /className="tvn-paragraph text-justify([^"]*)"/g, to: 'className="tvn-paragraph$1"' },
];

// Função recursiva para processar diretórios
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  });
}

// Função para processar arquivo
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  replacements.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to);
      modified = true;
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.relative('src', filePath)}`);
  }
}

// Processar diretório src
processDirectory('src');

console.log('\n✨ Migração concluída!');
console.log('📋 Sistema TVN é agora o padrão único do site.');
