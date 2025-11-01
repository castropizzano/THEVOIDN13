// Script FINAL para completar 100% Bible v13 no Index.tsx
const fs = require('fs');

const file = 'src/pages/Index.tsx';
console.log(`\n🎯 FINALIZANDO BIBLE V13 COMPLETO EM ${file}...\n`);

let content = fs.readFileSync(file, 'utf8');
let changes = 0;

// FUNÇÃO HELPER: Contar ocorrências
const count = (pattern) => (content.match(pattern) || []).length;

// 1. TÍTULOS E SUBTÍTULOS
const titlePatterns = [
  [/className="subsection-title mb-4"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-6"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-8"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mt-8"/g, 'className="bible-subtitle"'],
  [/className="subsection-title"/g, 'className="bible-subtitle"'],
  [/className="section-title mb-8"/g, 'className="bible-title"'],
  [/className="section-title"/g, 'className="bible-title"'],
];

titlePatterns.forEach(([pattern, replacement]) => {
  const count = (content.match(pattern) || []).length;
  if (count > 0) {
    content = content.replace(pattern, replacement);
    changes += count;
    console.log(`✅ ${count}x: ${pattern.source.slice(0, 40)}...`);
  }
});

// 2. TEXTOS CORPO
const bodyPattern = /className="body-base text-justified"/g;
const bodyCount = count(bodyPattern);
if (bodyCount > 0) {
  content = content.replace(bodyPattern, 'className="bible-body"');
  changes += bodyCount;
  console.log(`✅ ${bodyCount}x: body-base text-justified → bible-body`);
}

// 3. ESTRUTURA HTML (div → fragment)
const divOpenPattern = /<div className="section-spacing">/g;
const divOpenCount = count(divOpenPattern);
if (divOpenCount > 0) {
  content = content.replace(divOpenPattern, '<>');
  changes += divOpenCount;
  console.log(`✅ ${divOpenCount}x: <div section-spacing> → <>`);
}

// 4. FECHAR ESTRUTURA (precisa ser mais cuidadoso)
// Substituir </div> apenas quando seguido de } englishContent ou } />
const divClosePatterns = [
  [/<\/div>\s*}\s*englishContent=/g, '</>\n            }\n            englishContent='],
  [/<\/div>\s*}\s*\/>/g, '</>\n            }\n          />'],
];

divClosePatterns.forEach(([pattern, replacement]) => {
  const count = (content.match(pattern) || []).length;
  if (count > 0) {
    content = content.replace(pattern, replacement);
    changes += count;
    console.log(`✅ ${count}x: closing div structure fix`);
  }
});

fs.writeFileSync(file, content, 'utf8');

console.log(`\n🎉 CONCLUÍDO! ${changes} correções aplicadas.`);
console.log(`📊 Verificação final...`);

// VERIFICAÇÃO FINAL
const remaining = {
  'subsection-title': count(/className="subsection-title/g),
  'section-title': count(/className="section-title"/g),
  'body-base text-justified': count(/className="body-base text-justified"/g),
  '<div section-spacing>': count(/<div className="section-spacing">/g),
};

const total = Object.values(remaining).reduce((a, b) => a + b, 0);
console.log(`\n📈 Classes antigas restantes: ${total}`);
Object.entries(remaining).forEach(([key, value]) => {
  if (value > 0) console.log(`   ⚠️  ${key}: ${value}`);
});

if (total === 0) {
  console.log(`\n✅ PERFEITO! 100% BIBLE V13 APLICADO!\n`);
} else {
  console.log(`\n⚠️  Ainda há ${total} classes para revisar manualmente.\n`);
}
