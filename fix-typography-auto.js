// Script para automatizar fix de tipografia THEVOIDN13
const fs = require('fs');

// Arquivos a processar
const files = [
  'src/pages/Dissertacao.tsx',
  'src/pages/Autor.tsx'
];

files.forEach(file => {
  console.log(`🎨 Processando ${file}...`);
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Substituições
  content = content.replace(/className="site-title"/g, 'className="section-title"');
  content = content.replace(/className="site-subtitle"/g, 'className="subsection-title"');
  content = content.replace(/className="site-paragraph text-muted-foreground"/g, 'className="body-base text-muted-foreground"');
  content = content.replace(/className="site-paragraph"/g, 'className="body-base text-justified"');
  
  // Limpar duplicações
  content = content.replace(/text-justified text-justified/g, 'text-justified');
  content = content.replace(/text-justified text-muted-foreground/g, 'text-muted-foreground');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`✅ ${file} atualizado`);
});

console.log('✅ Design system aplicado com sucesso!');
