#!/bin/bash

# Script para aplicar design system unificado nas páginas

echo "Aplicando design system em Dissertacao.tsx..."
sed -i 's/className="site-title"/className="section-title"/g' src/pages/Dissertacao.tsx
sed -i 's/className="site-subtitle"/className="subsection-title"/g' src/pages/Dissertacao.tsx
sed -i 's/className="site-paragraph"/className="body-base text-justified"/g' src/pages/Dissertacao.tsx
sed -i 's/className="micro-title"/className="subsection-title"/g' src/pages/Dissertacao.tsx

echo "Aplicando design system em Autor.tsx..."
sed -i 's/className="site-title"/className="section-title"/g' src/pages/Autor.tsx
sed -i 's/className="site-subtitle"/className="subsection-title"/g' src/pages/Autor.tsx
sed -i 's/className="site-paragraph"/className="body-base text-justified"/g' src/pages/Autor.tsx
sed -i 's/className="micro-title"/className="subsection-title"/g' src/pages/Autor.tsx

# Remover text-justified duplicado que pode ter sido criado
sed -i 's/text-justified text-justified/text-justified/g' src/pages/Dissertacao.tsx
sed -i 's/text-justified text-justified/text-justified/g' src/pages/Autor.tsx

echo "Design system aplicado com sucesso!"
