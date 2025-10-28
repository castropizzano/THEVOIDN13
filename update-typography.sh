#!/bin/bash

# Script para padronizar tipografia seguindo o padrão "Formação Acadêmica"

echo "Atualizando tipografia em Index.tsx..."

# Substituir heading-2 text-primary por section-title
sed -i 's/className="heading-2 text-primary title-break"/className="section-title"/g' src/pages/Index.tsx
sed -i 's/className="heading-2 text-primary"/className="section-title"/g' src/pages/Index.tsx

# Substituir heading-3 text-primary por section-title  
sed -i 's/className="heading-3 text-primary"/className="section-title"/g' src/pages/Index.tsx

# Substituir heading-3 text-white por section-title text-white
sed -i 's/className="heading-3 text-white"/className="section-title text-white"/g' src/pages/Index.tsx

# Substituir text-base text-justify leading-relaxed por body-base text-justified
sed -i 's/className="text-base text-justify leading-relaxed"/className="body-base text-justified"/g' src/pages/Index.tsx

# Substituir text-xs uppercase tracking-wider text-muted-foreground por label-small text-muted-foreground
sed -i 's/className="text-xs uppercase tracking-wider text-muted-foreground"/className="label-small text-muted-foreground"/g' src/pages/Index.tsx

echo "Tipografia atualizada com sucesso!"
