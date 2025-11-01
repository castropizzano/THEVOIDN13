// Script automático para padronizar Index.tsx para Bible v13
const fs = require('fs');

const file = 'src/pages/Index.tsx';
console.log(`\n🔥 PADRONIZANDO ${file} PARA BIBLE V13...\n`);

let content = fs.readFileSync(file, 'utf8');
let changeCount = 0;

// 1. TÍTULOS
const titleReplacements = [
  [/className="subsection-title"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mt-8"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-6"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-4"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-8"/g, 'className="bible-subtitle"'],
  [/className="section-title"/g, 'className="bible-title"'],
  [/className="section-title mb-8"/g, 'className="bible-title"'],
];

titleReplacements.forEach(([pattern, replacement]) => {
  const matches = content.match(pattern);
  if (matches) {
    changeCount += matches.length;
    content = content.replace(pattern, replacement);
    console.log(`✅ ${matches.length}x: ${pattern.source.slice(0, 40)}...`);
  }
});

// 2. TEXTOS
const bodyReplacements = [
  [/className="body-base text-justified"/g, 'className="bible-body"'],
  [/<div className="section-spacing">/g, '<>'],
  [/<\/div>\s*}\s*englishContent=/g, '</>\n            }\n            englishContent='],
  [/<\/div>\s*}\s*\/>/g, '</>\n            }\n          />'],
];

bodyReplacements.forEach(([pattern, replacement]) => {
  const matches = content.match(pattern);
  if (matches) {
    changeCount += matches.length;
    content = content.replace(pattern, replacement);
    console.log(`✅ ${matches.length}x: body/structure fix`);
  }
});

fs.writeFileSync(file, content, 'utf8');
console.log(`\n🎉 CONCLUÍDO! ${changeCount} mudanças aplicadas.\n`);
