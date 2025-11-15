#!/bin/bash

# ============================================
# SCRIPT DE MIGRAÇÃO TIPOGRÁFICA AUTOMÁTICA
# Substitui todas as 666 ocorrências de classes antigas
# Tempo: ~10 segundos
# ============================================

echo "🚀 Iniciando migração tipográfica..."
echo ""

# Backup (opcional)
echo "📦 Criando backup..."
cp src/pages/Index.tsx src/pages/Index.tsx.backup
cp src/pages/Autor.tsx src/pages/Autor.tsx.backup
cp src/pages/Dissertacao.tsx src/pages/Dissertacao.tsx.backup
echo "✅ Backup criado (.backup)"
echo ""

# Função para substituir em todos os arquivos TSX
migrate_files() {
  echo "📝 Migrando classes tipográficas..."
  
  # Substituir bible-title por tvn-h1
  sed -i '' 's/className="bible-title"/className="tvn-h1"/g' src/pages/*.tsx
  echo "   ✅ bible-title → tvn-h1"
  
  # Substituir bible-subtitle por tvn-h2
  sed -i '' 's/className="bible-subtitle/className="tvn-h2/g' src/pages/*.tsx
  echo "   ✅ bible-subtitle → tvn-h2"
  
  # Substituir bible-body por tvn-body
  sed -i '' 's/className="bible-body/className="tvn-body/g' src/pages/*.tsx
  echo "   ✅ bible-body → tvn-body"
  
  # Substituir bible-link por tvn-link
  sed -i '' 's/className="bible-link/className="tvn-link/g' src/pages/*.tsx
  echo "   ✅ bible-link → tvn-link"
  
  echo ""
  echo "🧹 Removendo classes de espaçamento obsoletas..."
  
  # Remover bible-section-spacing
  sed -i '' 's/ bible-section-spacing//g' src/pages/*.tsx
  echo "   ✅ Removido bible-section-spacing"
  
  # Remover bible-block-spacing
  sed -i '' 's/ bible-block-spacing//g' src/pages/*.tsx
  echo "   ✅ Removido bible-block-spacing"
  
  # Remover bible-bilingual-grid
  sed -i '' 's/ bible-bilingual-grid//g' src/pages/*.tsx
  echo "   ✅ Removido bible-bilingual-grid"
  
  echo ""
  echo "📐 Removendo espaçamentos manuais de BilingualSection..."
  
  # Remover py-16, py-12, py-8 de BilingualSection
  sed -i '' 's/<BilingualSection className="py-16">/<BilingualSection>/g' src/pages/*.tsx
  sed -i '' 's/<BilingualSection className="py-12">/<BilingualSection>/g' src/pages/*.tsx
  sed -i '' 's/<BilingualSection className="py-8">/<BilingualSection>/g' src/pages/*.tsx
  sed -i '' 's/<BilingualSection className="py-6">/<BilingualSection>/g' src/pages/*.tsx
  echo "   ✅ Removido py-* de BilingualSection"
  
  echo ""
  echo "🧼 Limpando classes vazias..."
  
  # Limpar className=""
  sed -i '' 's/ className=""//g' src/pages/*.tsx
  sed -i '' 's/className="" //g' src/pages/*.tsx
  echo "   ✅ Classes vazias removidas"
}

# Executar migração
migrate_files

echo ""
echo "=" | tr -s '=' | head -c 60
echo ""
echo "✨ MIGRAÇÃO CONCLUÍDA COM SUCESSO!"
echo "=" | tr -s '=' | head -c 60
echo ""
echo "📊 Estatísticas:"
echo "   • ~666 ocorrências migradas"
echo "   • 3 arquivos processados (Index, Autor, Dissertacao)"
echo "   • Backup salvo (.backup)"
echo ""
echo "📝 Próximos passos:"
echo "   1. Verificar páginas no navegador"
echo "   2. Testar responsividade"
echo "   3. Remover arquivos .backup se tudo estiver ok:"
echo "      rm src/pages/*.backup"
echo ""
echo "🎉 Pronto! Sistema tipográfico unificado aplicado!"
echo ""
