#!/bin/bash

# Script para padronizar hierarquia tipográfica
# Substitui classes inconsistentes pelas classes padronizadas

echo "Padronizando tipografia em todas as páginas..."

# Index.tsx
sed -i 's/className="text-3xl font-bold/className="heading-1/g' src/pages/Index.tsx
sed -i 's/className="text-2xl font-bold/className="heading-2/g' src/pages/Index.tsx  
sed -i 's/className="text-xl font-bold/className="heading-3/g' src/pages/Index.tsx

# Dissertacao.tsx
sed -i 's/className="text-4xl font-bold/className="heading-1/g' src/pages/Dissertacao.tsx
sed -i 's/className="text-3xl font-bold/className="heading-2/g' src/pages/Dissertacao.tsx
sed -i 's/className="text-2xl font-bold/className="heading-3/g' src/pages/Dissertacao.tsx
sed -i 's/className="text-xl font-bold/className="heading-4/g' src/pages/Dissertacao.tsx

# Autor.tsx
sed -i 's/className="text-4xl font-bold/className="heading-1/g' src/pages/Autor.tsx
sed -i 's/className="text-2xl font-bold/className="heading-3/g' src/pages/Autor.tsx
sed -i 's/className="text-xl font-bold/className="heading-4/g' src/pages/Autor.tsx

echo "Padronização concluída!"
