#!/bin/bash

# ============================================
# SCRIPT FINAL DE CORREÇÃO DE ESPAÇAMENTO
# Sistema Oficial THEVØIDN13
# ============================================

echo "🎯 Aplicando correções de espaçamento THEVØIDN13..."

# Criar backup
mkdir -p backups
BACKUP_DIR="backups/spacing-final-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r src/pages "$BACKUP_DIR/"
cp -r src/components "$BACKUP_DIR/"
echo "📦 Backup criado em: $BACKUP_DIR"

# ============================================
# FASE 1: SEÇÕES (py-* → bible-section)
# ============================================
echo ""
echo "📐 FASE 1: Padronizando seções..."

# BilingualSection com py-16 → bible-section
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/BilingualSection className="py-16"/BilingualSection className="bible-section"/g' \
  {} \;

# BilingualSection com py-8 sm:py-12 md:py-16 → bible-section
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/BilingualSection className="py-8 sm:py-12 md:py-16"/BilingualSection className="bible-section"/g' \
  {} \;

# section com py-6 sm:py-8 → bible-section
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/section className="py-6 sm:py-8"/section className="bible-section"/g' \
  {} \;

# section com py-8 sm:py-12 md:py-16 → bible-section
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/section className="py-8 sm:py-12 md:py-16 bg-card\/30"/section className="bible-section bg-card\/30"/g' \
  -e 's/section className="py-8 sm:py-12 md:py-16"/section className="bible-section"/g' \
  {} \;

echo "✅ Seções padronizadas"

# ============================================
# FASE 2: MÍDIA (my-8 → bible-media)
# ============================================
echo ""
echo "🖼️  FASE 2: Padronizando containers de mídia..."

# my-8 → bible-media
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/className="my-8 mb-12"/className="bible-media"/g' \
  -e 's/className="my-8"/className="bible-media"/g' \
  {} \;

echo "✅ Mídia padronizada"

# ============================================
# FASE 3: BLOCOS TEXTUAIS
# ============================================
echo ""
echo "📝 FASE 3: Padronizando blocos textuais..."

# space-y-6 mt-6 → bible-block
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/className="space-y-6 mt-6"/className="bible-block"/g' \
  {} \;

# space-y-6 mb-12 → bible-block
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/className="space-y-6 mb-12"/className="bible-block"/g' \
  {} \;

# space-y-6 → bible-block (quando for container de texto)
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/<div className="space-y-6">/<div className="bible-block">/g' \
  {} \;

echo "✅ Blocos textuais padronizados"

# ============================================
# FASE 4: CLASSES OBSOLETAS
# ============================================
echo ""
echo "🧹 FASE 4: Removendo classes obsoletas..."

# Remover bible-block-spacing
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/ bible-block-spacing//g' \
  -e 's/bible-block-spacing //g' \
  {} \;

# Remover bible-section-spacing (exceto em mt-8)
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/ bible-section-spacing"/" bible-block"/g' \
  -e 's/bible-bilingual-grid bible-section-spacing mt-8/bible-bilingual-grid bible-block mt-8/g' \
  -e 's/bible-bilingual-grid bible-section-spacing/bible-bilingual-grid bible-block/g' \
  {} \;

# Corrigir casos especiais de bible-section-spacing
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/bible-body bible-section-spacing/bible-body/g' \
  {} \;

echo "✅ Classes obsoletas removidas"

# ============================================
# FASE 5: MARGENS MANUAIS EM PARÁGRAFOS
# ============================================
echo ""
echo "🚫 FASE 5: Removendo margens manuais de parágrafos..."

# bible-body mt-4 → bible-body
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/bible-body mt-4/bible-body/g' \
  {} \;

# bible-body mt-6 → bible-body
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/bible-body mt-6/bible-body/g' \
  {} \;

# bible-body mt-8 → bible-body
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/bible-body mt-8/bible-body/g' \
  {} \;

echo "✅ Margens manuais removidas"

# ============================================
# FASE 6: BILINGUALCONTENT DEFAULT PADDING
# ============================================
echo ""
echo "🔧 FASE 6: Ajustando BilingualSection..."

# Atualizar BilingualSection.tsx para usar bible-section como default
if [ -f "src/components/BilingualSection.tsx" ]; then
  sed -i '' \
    -e 's/const customPadding = className.match(\/py-\\d+\/)?.\[0\] || "py-12 sm:py-16 md:py-20";/const customPadding = className.includes("bible-section") ? "" : (className.match(\/py-\\d+\/)?.[0] || "");/' \
    -e 's/<section className={`${customPadding} bg-background`}>/<section className={`bible-section ${customPadding} bg-background`}>/' \
    src/components/BilingualSection.tsx
fi

echo "✅ BilingualSection atualizado"

# ============================================
# RELATÓRIO FINAL
# ============================================
echo ""
echo "═══════════════════════════════════════════"
echo "✨ CORREÇÕES APLICADAS COM SUCESSO!"
echo "═══════════════════════════════════════════"
echo ""
echo "📋 Mudanças aplicadas:"
echo "  ✓ Todas as seções agora usam .bible-section"
echo "  ✓ Todas as mídias usam .bible-media"
echo "  ✓ Todos os blocos textuais usam .bible-block"
echo "  ✓ Classes obsoletas removidas"
echo "  ✓ Margens manuais de parágrafos removidas"
echo "  ✓ BilingualSection padronizado"
echo ""
echo "📦 Backup salvo em: $BACKUP_DIR"
echo ""
echo "⚠️  PRÓXIMOS PASSOS:"
echo "  1. Revisar visualmente cada página"
echo "  2. Testar responsividade mobile"
echo "  3. Validar espaçamento entre seções"
echo ""
echo "🔍 Para verificar mudanças:"
echo "  git diff src/pages/"
echo "  git diff src/components/"
echo ""
