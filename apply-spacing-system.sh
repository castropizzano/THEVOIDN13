#!/bin/bash

# Script para aplicar o sistema de espaçamento THEVØIDN13

echo "Aplicando sistema de espaçamento THEVØIDN13..."

# 1. Substituir py-16 por bible-section em BilingualSection
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/BilingualSection className="py-16"/BilingualSection className="bible-section"/g' {} \;

# 2. Substituir py-8 sm:py-12 md:py-16 por bible-section
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/className="py-8 sm:py-12 md:py-16"/className="bible-section"/g' {} \;
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/BilingualSection className="py-8 sm:py-12 md:py-16"/BilingualSection className="bible-section"/g' {} \;

# 3. Substituir py-6 sm:py-8 por bible-section (seções de imagem)
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/section className="py-6 sm:py-8"/section className="bible-section"/g' {} \;

# 4. Substituir my-8 por bible-media (wraps de imagem)
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/<div className="my-8">/<div className="bible-media">/g' {} \;

# 5. Substituir bible-section-spacing por bible-block
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/className="bible-section-spacing"/className="bible-block"/g' {} \;
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/bible-body bible-section-spacing/bible-body/g' {} \;

# 6. Substituir space-y-6 por bible-block em divs de conteúdo
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/<div className="space-y-6">/<div className="bible-block">/g' {} \;
find src/pages -name "*.tsx" -type f -exec sed -i.bak 's/className="space-y-6 mb-12"/className="bible-block"/g' {} \;

# Limpar backups
find src/pages -name "*.bak" -type f -delete

echo "✅ Sistema de espaçamento THEVØIDN13 aplicado com sucesso!"
echo "📝 Classes atualizadas:"
echo "  - BilingualSection/section py-* → bible-section"
echo "  - my-8 → bible-media"  
echo "  - bible-section-spacing → bible-block"
echo "  - space-y-6 → bible-block"
