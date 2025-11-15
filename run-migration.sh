#!/bin/bash

echo "🎨 MIGRAÇÃO TIPOGRÁFICA TVN — THEVØIDN13"
echo "=========================================="
echo ""

# Backup
echo "📦 Criando backup..."
timestamp=$(date +%Y%m%d_%H%M%S)
mkdir -p backups
tar -czf "backups/pre-tvn-migration-${timestamp}.tar.gz" src/

echo "✅ Backup criado em backups/pre-tvn-migration-${timestamp}.tar.gz"
echo ""

# Migração
echo "🔄 Iniciando migração..."
echo ""

# Contador
total=0

# TÍTULOS H2
echo "📝 Migrando títulos H2..."
count=$(find src -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-title"/className="tvn-h2"/g' {} \; -print | wc -l)
total=$((total + count))

# SUBTÍTULOS
echo "📝 Migrando subtítulos..."
count=$(find src -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-subtitle"/className="tvn-subtitle"/g' {} \; -print | wc -l)
total=$((total + count))

# PARÁGRAFOS
echo "📝 Migrando parágrafos..."
count=$(find src -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-body/className="tvn-paragraph/g' {} \; -print | wc -l)
total=$((total + count))

# GRID
echo "📐 Migrando grid bilíngue..."
find src -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-bilingual-grid/className="bilingual-grid/g' {} \;

# ESPAÇAMENTO
echo "📏 Migrando espaçamento..."
find src -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-block-spacing/className="tvn-block/g' {} \;
find src -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-section-spacing/className="tvn-block/g' {} \;

# LIMPEZA
echo "🧹 Limpando classes redundantes..."
find src -name "*.tsx" -type f -exec sed -i.bak 's/className="tvn-paragraph text-justify leading-relaxed"/className="tvn-paragraph"/g' {} \;
find src -name "*.tsx" -type f -exec sed -i.bak 's/className="tvn-paragraph text-base"/className="tvn-paragraph"/g' {} \;

# Remover backups .bak
find src -name "*.bak" -delete

echo ""
echo "✅ Migração concluída!"
echo "📊 Arquivos processados: ${total}"
echo ""
echo "🔍 Próximos passos:"
echo "   1. Verificar build: npm run build"
echo "   2. Testar páginas principais"
echo "   3. Validar responsividade"
echo "   4. Commit: git commit -m 'feat: sistema tipográfico TVN único'"
echo ""
echo "📁 Backup disponível em: backups/pre-tvn-migration-${timestamp}.tar.gz"
echo ""
