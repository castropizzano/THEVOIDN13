#!/bin/bash

# Script para aplicar correções tipográficas em massa

echo "Aplicando correções tipográficas em Index.tsx..."
sed -i 's/className="text-base text-justify leading-relaxed"/className="body-base text-justified"/g' src/pages/Index.tsx
sed -i 's/className="heading-2 text-primary title-break"/className="section-title"/g' src/pages/Index.tsx
sed -i 's/className="heading-2 text-primary"/className="section-title"/g' src/pages/Index.tsx
sed -i 's/className="heading-3 text-primary"/className="section-title"/g' src/pages/Index.tsx
sed -i 's/className="heading-4 text-primary"/className="subsection-title text-primary"/g' src/pages/Index.tsx

echo "Aplicando correções tipográficas em Autor.tsx..."
sed -i 's/className="text-base text-justify leading-relaxed"/className="body-base text-justified"/g' src/pages/Autor.tsx
sed -i 's/className="heading-2 text-primary title-break"/className="section-title"/g' src/pages/Autor.tsx
sed -i 's/className="heading-2 text-primary"/className="section-title"/g' src/pages/Autor.tsx
sed -i 's/className="heading-3 text-primary title-break"/className="subsection-title"/g' src/pages/Autor.tsx
sed -i 's/className="heading-3 text-primary"/className="subsection-title text-primary"/g' src/pages/Autor.tsx
sed -i 's/className="heading-3 text-white mb-4"/className="subsection-title text-white mb-4"/g' src/pages/Autor.tsx
sed -i 's/className="heading-4 text-primary"/className="subsection-title text-primary"/g' src/pages/Autor.tsx

echo "Aplicando correções tipográficas em Dissertacao.tsx..."
sed -i 's/className="text-base text-justify leading-relaxed"/className="body-base text-justified"/g' src/pages/Dissertacao.tsx
sed -i 's/className="text-base text-justify leading-relaxed text-muted-foreground"/className="body-base text-justified text-muted-foreground"/g' src/pages/Dissertacao.tsx
sed -i 's/className="text-base text-justify leading-relaxed font-medium"/className="body-base text-justified font-medium"/g' src/pages/Dissertacao.tsx

echo "Correções aplicadas com sucesso!"
