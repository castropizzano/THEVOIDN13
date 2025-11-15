#!/bin/bash

# Script de migração tipográfica THEVØIDN13
# Substitui TODOS os sistemas antigos pelo sistema TVN único

echo "🎨 Iniciando migração tipográfica para sistema TVN..."

# Arquivos a processar
FILES="src/**/*.tsx"

# TÍTULOS PRINCIPAIS (H1)
echo "📝 Migrando títulos H1..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="bible-title"/className="tvn-h2"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="heading-hero"/className="tvn-h1"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="heading-1"/className="tvn-h1"/g' {} \;

# TÍTULOS DE SEÇÃO (H2)
echo "📝 Migrando títulos H2..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="heading-2/className="tvn-h2/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="section-title/className="tvn-h2/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="title/className="tvn-h2/g' {} \;

# SUBTÍTULOS (H3)
echo "📝 Migrando subtítulos H3..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="heading-3/className="tvn-h3/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="heading-4/className="tvn-h3/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="subsection-title/className="tvn-h3/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="section-subtitle/className="tvn-h3/g' {} \;

# LABELS E MICRO-TÍTULOS
echo "📝 Migrando labels..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="bible-subtitle/className="tvn-subtitle/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="subtitle/className="tvn-subtitle/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="label-large/className="tvn-subtitle/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="label-small/className="tvn-subtitle/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="site-subtitle/className="tvn-subtitle/g' {} \;

# PARÁGRAFOS E CORPO DE TEXTO
echo "📝 Migrando parágrafos..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="bible-body/className="tvn-paragraph/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="body-base text-justified"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="body-base"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="body-large"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="body-small"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="site-paragraph"/className="tvn-paragraph"/g' {} \;

# LIMPAR CLASSES REDUNDANTES
echo "🧹 Limpando classes redundantes..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="tvn-paragraph text-justify leading-relaxed"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="tvn-paragraph text-base"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="tvn-paragraph leading-relaxed"/className="tvn-paragraph"/g' {} \;

# GRID E ESPAÇAMENTO
echo "📐 Migrando grid e espaçamento..."
find src -name "*.tsx" -type f -exec sed -i '' 's/className="bible-bilingual-grid/className="bilingual-grid/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="bible-block-spacing/className="tvn-block/g' {} \;
find src -name "*.tsx" -type f -exec sed -i '' 's/className="bible-section-spacing/className="tvn-block/g' {} \;

echo "✅ Migração tipográfica concluída!"
echo "📊 Sistema TVN agora é o único sistema oficial"
