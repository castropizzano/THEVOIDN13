# MIGRAÇÃO TVN v3.0 — INSTRUÇÕES DE EXECUÇÃO

## ⚡ Migração Rápida (Recomendado)

Execute no terminal do projeto:

```bash
node migrate-tvn.js
```

Este script automaticamente:
- ✅ Substitui `bible-title` → `tvn-h1`
- ✅ Substitui `bible-subtitle` → `tvn-h2`
- ✅ Substitui `bible-body` → `tvn-body`
- ✅ Substitui `bible-body-large` → `tvn-body-large`
- ✅ Substitui `bible-body-small` → `tvn-body-small`
- ✅ Substitui `bible-bilingual-grid` → `bilingual-grid`
- ✅ Remove `bible-section-spacing` (espaçamento automático)
- ✅ Remove `bible-block-spacing` (espaçamento automático)
- ✅ Limpa classes duplicadas e vazias

## 📊 Status

**Arquivos a serem migrados:**
- `src/pages/Index.tsx` (2258 linhas)
- `src/pages/Autor.tsx` (897 linhas) 
- `src/pages/Dissertacao.tsx` (702 linhas)

**Total de ocorrências:** ~757 substituições

## ✨ Após a Migração

1. Verifique as mudanças no browser
2. Teste responsividade mobile/desktop  
3. Confirme hierarquia tipográfica
4. Commit: `feat: migrate all pages to TVN v3.0 typography system`

## 🎨 O Novo Sistema

### Hierarquia Poética

```css
.tvn-h1   → 22px/19px — lowercase, linha vermelha, prefixo #
.tvn-h2   → 19px/17px — normal, linha vermelha, prefixo ##
.tvn-h3   → 17px/16px — italic, linha vermelha, prefixo ###
.tvn-h4   → 15px/14px — uppercase, linha vermelha fina

.tvn-body-large → 16px/15px — introduções
.tvn-body       → 15px/14px — texto padrão
.tvn-body-small → 13px/13px — detalhes
```

### Características Underground

- ✨ Prefixos markdown (#, ##, ###)
- 🔴 Linhas verticais vermelhas
- 📐 Espaçamento matemático (múltiplos de 8px)
- 🎭 Estética minimalista/poética
- 📱 100% responsivo

---

**EXECUTE AGORA:** `node migrate-tvn.js`
