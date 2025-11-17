#!/bin/bash

# ============================================
# SCRIPT DE MIGRAÇÃO GLOBAL DE ESPAÇAMENTO
# Sistema Oficial THEVØIDN13
# ============================================

echo "🎯 Aplicando Sistema de Espaçamento THEVØIDN13 em TODO o projeto..."

# Criar backup
mkdir -p backups
BACKUP_DIR="backups/spacing-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r src/pages "$BACKUP_DIR/"
cp -r src/components "$BACKUP_DIR/"
echo "📦 Backup criado em: $BACKUP_DIR"

# ============================================
# FASE 1: SEÇÕES
# ============================================
echo ""
echo "📐 FASE 1: Corrigindo seções..."

# 1.1. py-6 sm:py-8 → bible-section
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/className="py-6 sm:py-8"/className="bible-section"/g' \
  -e 's/section className="py-6 sm:py-8"/section className="bible-section"/g' \
  {} \;

# 1.2. py-8 sm:py-12 md:py-16 → bible-section
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/className="py-8 sm:py-12 md:py-16"/className="bible-section"/g' \
  -e 's/BilingualSection className="py-8 sm:py-12 md:py-16"/BilingualSection className="bible-section"/g' \
  {} \;

# 1.3. Garantir que BilingualSection sem classe específica não quebre
# (manter py-16 onde já está correto)

echo "✅ Seções corrigidas"

# ============================================
# FASE 2: MÍDIA (IMAGENS E VÍDEOS)
# ============================================
echo ""
echo "🖼️  FASE 2: Corrigindo containers de mídia..."

# 2.1. my-8 → bible-media
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/<div className="my-8">/<div className="bible-media">/g' \
  -e 's/className="my-8 mb-12"/className="bible-media"/g' \
  {} \;

echo "✅ Containers de mídia corrigidos"

# ============================================
# FASE 3: BLOCOS TEXTUAIS
# ============================================
echo ""
echo "📝 FASE 3: Corrigindo blocos textuais..."

# 3.1. space-y-6 sem mb → bible-block
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/<div className="space-y-6">/<div className="bible-block">/g' \
  {} \;

# 3.2. space-y-6 mb-12 → bible-block (corrigir valor)
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/className="space-y-6 mb-12"/className="bible-block"/g' \
  {} \;

# 3.3. space-y-8 → tvn-stack-lg (se for container genérico)
# NOTA: Não aplicar automaticamente em grids de cards
# find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
#   -e 's/<div className="space-y-8">/<div className="tvn-stack-lg">/g' \
#   {} \;

echo "✅ Blocos textuais corrigidos"

# ============================================
# FASE 4: CLASSES OBSOLETAS
# ============================================
echo ""
echo "🧹 FASE 4: Removendo classes obsoletas..."

# 4.1. Remover bible-block-spacing (obsoleto)
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/ bible-block-spacing//g' \
  -e 's/bible-block-spacing //g' \
  -e 's/className="bible-block-spacing"/className=""/g' \
  {} \;

# 4.2. Remover bible-section-spacing (obsoleto)
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/ bible-section-spacing//g' \
  -e 's/bible-section-spacing //g' \
  -e 's/className="bible-section-spacing"/className=""/g' \
  {} \;

echo "✅ Classes obsoletas removidas"

# ============================================
# FASE 5: MARGENS MANUAIS EM PARÁGRAFOS
# ============================================
echo ""
echo "🚫 FASE 5: Removendo margens manuais de parágrafos..."

# 5.1. bible-body mt-4 → bible-body
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/bible-body mt-4/bible-body/g' \
  {} \;

# 5.2. bible-body mt-6 → bible-body
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/bible-body mt-6/bible-body/g' \
  {} \;

# 5.3. bible-body mt-8 → bible-body
find src/pages src/components -name "*.tsx" -type f -exec sed -i.bak \
  -e 's/bible-body mt-8/bible-body/g' \
  {} \;

echo "✅ Margens manuais removidas"

# ============================================
# LIMPEZA
# ============================================
echo ""
echo "🧼 Limpando arquivos temporários..."

# Remover backups .bak
find src/pages src/components -name "*.bak" -type f -delete

echo "✅ Limpeza concluída"

# ============================================
# RELATÓRIO FINAL
# ============================================
echo ""
echo "═══════════════════════════════════════════"
echo "✨ MIGRAÇÃO CONCLUÍDA COM SUCESSO!"
echo "═══════════════════════════════════════════"
echo ""
echo "📋 Mudanças aplicadas:"
echo "  ✓ Seções padronizadas com .bible-section"
echo "  ✓ Mídia padronizada com .bible-media"
echo "  ✓ Blocos textuais com .bible-block"
echo "  ✓ Classes obsoletas removidas"
echo "  ✓ Margens manuais de parágrafos removidas"
echo ""
echo "📦 Backup salvo em: $BACKUP_DIR"
echo ""
echo "⚠️  PRÓXIMOS PASSOS:"
echo "  1. Revisar visualmente cada página"
echo "  2. Testar responsividade mobile"
echo "  3. Validar espaçamento entre seções"
echo "  4. Verificar se há className=\"\" vazias"
echo ""
echo "🔍 Para verificar arquivos modificados:"
echo "  git diff src/pages/"
echo "  git diff src/components/"
echo ""
