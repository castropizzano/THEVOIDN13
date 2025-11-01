// SCRIPT FINAL - Completa 100% Bible v13 no Index.tsx
// Processa APENAS seções 9-14 (linhas 1220+)
const fs = require('fs');

const file = 'src/pages/Index.tsx';
console.log(`\n🎯 FINALIZANDO SEÇÕES 9-14 BIBLE V13...\n`);

let content = fs.readFileSync(file, 'utf8');
let totalChanges = 0;

// FUNÇÃO: Conta ocorrências de um pattern
const count = (pattern) => (content.match(pattern) || []).length;

console.log(`📊 SITUAÇÃO INICIAL:`);
console.log(`   subsection-title: ${count(/className="subsection-title/g)}`);
console.log(`   section-title: ${count(/className="section-title"/g)}`);
console.log(`   body-base text-justified: ${count(/className="body-base text-justified"/g)}`);
console.log(`   <div section-spacing>: ${count(/<div className="section-spacing">/g)}\n`);

// === SUBSTITUIÇÕES PRINCIPAIS ===

// 1. TÍTULOS (subsection-title → bible-subtitle)
const titlePatterns = [
  [/className="subsection-title mb-8 text-left"/g, 'className="bible-subtitle text-left"'],
  [/className="subsection-title mb-8"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-6"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mb-4"/g, 'className="bible-subtitle"'],
  [/className="subsection-title mt-8"/g, 'className="bible-subtitle"'],
  [/className="subsection-title"/g, 'className="bible-subtitle"'],
  [/className="section-title mb-8"/g, 'className="bible-title"'],
  [/className="section-title"/g, 'className="bible-title"'],
];

console.log(`🔄 APLICANDO SUBSTITUIÇÕES...\n`);

titlePatterns.forEach(([pattern, replacement]) => {
  const matches = count(pattern);
  if (matches > 0) {
    content = content.replace(pattern, replacement);
    totalChanges += matches;
    console.log(`✅ ${matches}x: ${replacement.slice(12, 40)}...`);
  }
});

// 2. TEXTOS (body-base text-justified → bible-body)
const bodyPattern = /className="body-base text-justified mt-4"/g;
const bodyPatternSimple = /className="body-base text-justified"/g;

let bodyCount = count(bodyPattern);
if (bodyCount > 0) {
  content = content.replace(bodyPattern, 'className="bible-body mt-4"');
  totalChanges += bodyCount;
  console.log(`✅ ${bodyCount}x: bible-body mt-4`);
}

bodyCount = count(bodyPatternSimple);
if (bodyCount > 0) {
  content = content.replace(bodyPatternSimple, 'className="bible-body"');
  totalChanges += bodyCount;
  console.log(`✅ ${bodyCount}x: bible-body`);
}

// 3. ESTRUTURA (<div section-spacing> → <>)
const divOpenPattern = /<div className="section-spacing">/g;
const divOpenCount = count(divOpenPattern);
if (divOpenCount > 0) {
  content = content.replace(divOpenPattern, '<>');
  totalChanges += divOpenCount;
  console.log(`✅ ${divOpenCount}x: <div> → <>`);
}

// 4. FECHAR ESTRUTURA (</div> → </>)
const divClosePatterns = [
  [/<\/div>\s*}\s*englishContent=/g, '</>\n            }\n            englishContent='],
  [/<\/div>\s*}\s*\/>/g, '</>\n            }\n          />'],
];

divClosePatterns.forEach(([pattern, replacement]) => {
  const matches = count(pattern);
  if (matches > 0) {
    content = content.replace(pattern, replacement);
    totalChanges += matches;
    console.log(`✅ ${matches}x: </div> close fix`);
  }
});

// SALVAR ARQUIVO
fs.writeFileSync(file, content, 'utf8');

console.log(`\n📊 SITUAÇÃO FINAL:`);
console.log(`   subsection-title: ${count(/className="subsection-title/g)}`);
console.log(`   section-title: ${count(/className="section-title"/g)}`);
console.log(`   body-base text-justified: ${count(/className="body-base text-justified"/g)}`);
console.log(`   <div section-spacing>: ${count(/<div className="section-spacing">/g)}`);

const remaining = 
  count(/className="subsection-title/g) + 
  count(/className="section-title"/g) + 
  count(/className="body-base text-justified"/g) +
  count(/<div className="section-spacing">/g);

console.log(`\n🎉 TOTAL DE MUDANÇAS: ${totalChanges}`);
console.log(`📈 CLASSES ANTIGAS REST ANTES: ${remaining}\n`);

if (remaining === 0) {
  console.log(`✅✅✅ PERFEITO! 100% BIBLE V13 CONCLUÍDO! ✅✅✅\n`);
} else if (remaining < 10) {
  console.log(`⚠️  Restam ${remaining} classes (precisam revisão manual)\n`);
} else {
  console.log(`❌ Ainda há ${remaining} classes antigas\n`);
}
