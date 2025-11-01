// Script para padronizar Index.tsx para Bible v13
const fs = require('fs');

const file = 'src/pages/Index.tsx';

console.log(`🎨 Padronizando ${file} para Bible v13...`);

let content = fs.readFileSync(file, 'utf8');

// Substituir subsection-title por bible-subtitle
content = content.replace(/className="subsection-title"/g, 'className="bible-subtitle"');
content = content.replace(/className="subsection-title mt-8"/g, 'className="bible-subtitle"');
content = content.replace(/className="subsection-title mb-6"/g, 'className="bible-subtitle"');
content = content.replace(/className="subsection-title mb-4"/g, 'className="bible-subtitle"');
content = content.replace(/className="subsection-title mb-8"/g, 'className="bible-subtitle"');

// Substituir section-title por bible-title
content = content.replace(/className="section-title"/g, 'className="bible-title"');
content = content.replace(/className="section-title mb-8"/g, 'className="bible-title"');

// Substituir body-base text-justified por bible-body
content = content.replace(/className="body-base text-justified"/g, 'className="bible-body"');

// Substituir section-spacing por bible-section-spacing
content = content.replace(/<div className="section-spacing">/g, '<>');
content = content.replace(/<\/div>\s*}\s*englishContent=/g, '</>\n            }\n            englishContent=');
content = content.replace(/<\/div>\s*}\s*\/>/g, '</>\n            }\n          />');

fs.writeFileSync(file, content, 'utf8');
console.log(`✅ ${file} padronizado para Bible v13!`);
