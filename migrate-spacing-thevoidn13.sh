#!/bin/bash

echo "🎯 Aplicando Sistema de Espaçamento THEVØIDN13..."

# Backup
mkdir -p backups
cp -r src/pages backups/pages-$(date +%Y%m%d-%H%M%S)

# 1. BilingualSection e section com py-16 → bible-section
find src/pages -name "*.tsx" -exec sed -i.bak \
  -e 's/BilingualSection className="py-16"/BilingualSection className="bible-section"/g' \
  -e 's/section className="py-16"/section className="bible-section"/g' \
  {} \;

# 2. py-8 sm:py-12 md:py-16 → bible-section  
find src/pages -name "*.tsx" -exec sed -i.bak \
  -e 's/className="py-8 sm:py-12 md:py-16"/className="bible-section"/g' \
  {} \;

# 3. py-6 sm:py-8 → bible-section (seções imagem)
find src/pages -name "*.tsx" -exec sed -i.bak \
  -e 's/className="py-6 sm:py-8"/className="bible-section"/g' \
  {} \;

# 4. my-8 → bible-media
find src/pages -name "*.tsx" -exec sed -i.bak \
  -e 's/<div className="my-8">/<div className="bible-media">/g' \
  -e 's/className="my-8 mb-12"/className="bible-media"/g' \
  {} \;

# 5. bible-section-spacing → remover (agora é bible-block)
find src/pages -name "*.tsx" -exec sed -i.bak \
  -e 's/ bible-section-spacing//g' \
  -e 's/className="bible-section-spacing"/className="bible-block"/g' \
  {} \;

# 6. space-y-6 → bible-block
find src/pages -name "*.tsx" -exec sed -i.bak \
  -e 's/className="space-y-6"/className="bible-block"/g' \
  -e 's/className="space-y-6 mb-12"/className="bible-block"/g' \
  {} \;

# Limpar backups
find src/pages -name "*.bak" -delete

echo "✅ Migração concluída!"
echo "📦 Backup salvo em: backups/"
