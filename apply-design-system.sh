#!/bin/bash

# Script para aplicar design system unificado nas páginas

echo "🎨 Aplicando design system THEVOIDN13..."

# Dissertacao.tsx
echo "📄 Processando Dissertacao.tsx..."
sed -i 's/className="site-title"/className="section-title"/g' src/pages/Dissertacao.tsx
sed -i 's/className="site-subtitle"/className="subsection-title"/g' src/pages/Dissertacao.tsx
sed -i 's/className="site-paragraph text-muted-foreground"/className="body-base text-muted-foreground"/g' src/pages/Dissertacao.tsx
sed -i 's/className="site-paragraph"/className="body-base text-justified"/g' src/pages/Dissertacao.tsx

# Autor.tsx
echo "📄 Processando Autor.tsx..."
sed -i 's/className="site-title"/className="section-title"/g' src/pages/Autor.tsx
sed -i 's/className="site-subtitle"/className="subsection-title"/g' src/pages/Autor.tsx
sed -i 's/className="site-paragraph"/className="body-base text-justified"/g' src/pages/Autor.tsx

# Limpar duplicações
sed -i 's/text-justified text-justified/text-justified/g' src/pages/Dissertacao.tsx
sed -i 's/text-justified text-justified/text-justified/g' src/pages/Autor.tsx
sed -i 's/text-justified text-muted-foreground/text-muted-foreground/g' src/pages/Dissertacao.tsx

echo "✅ Design system aplicado com sucesso!"
