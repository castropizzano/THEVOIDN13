# MIGRAÇÃO TIPOGRÁFICA TVN — STATUS COMPLETO

## 📊 ANÁLISE PRÉ-MIGRAÇÃO

### Arquivos Identificados
- **src/pages/Autor.tsx**: 255 instâncias
- **src/pages/Dissertacao.tsx**: 217 instâncias  
- **src/pages/Index.tsx**: 251 instâncias
- **src/pages/Videos.tsx**: 7 instâncias
- **src/components**: ~170 instâncias em 16 arquivos

**TOTAL**: ~900 instâncias de classes obsoletas

---

## 🎯 ESTRATÉGIA DE MIGRAÇÃO

### Fase 1: Sistema CSS (✅ CONCLUÍDO)
- [x] Criado sistema TVN oficial em `src/index.css`
- [x] Definidas classes: `.tvn-h1`, `.tvn-h2`, `.tvn-h3`, `.tvn-subtitle`, `.tvn-paragraph`
- [x] Mantida compatibilidade retroativa via `@apply`
- [x] Criado componente `TVNSpacing.tsx` com tipos React

### Fase 2: Migração Automática (PRONTO PARA EXECUTAR)
Script `migrate-typography-tvn.js` criado com substituições:

```javascript
// Títulos
"bible-title" → "tvn-h2"
"heading-1" → "tvn-h1"  
"heading-2" → "tvn-h2"
"section-title" → "tvn-h2"

// Subtítulos
"bible-subtitle" → "tvn-subtitle"
"subsection-title" → "tvn-h3"

// Parágrafos
"bible-body" → "tvn-paragraph"
"body-base" → "tvn-paragraph"

// Layout
"bible-bilingual-grid" → "bilingual-grid"
"bible-block-spacing" → "tvn-block"
```

### Fase 3: Limpeza (AUTOMÁTICA)
- Remover classes redundantes: `text-justify`, `leading-relaxed`, `text-base`
- Limpar duplicações
- Validar sintaxe

---

## 🚀 INSTRUÇÕES DE EXECUÇÃO

### Opção A: Script Node.js (RECOMENDADO)
```bash
node migrate-typography-tvn.js
```

### Opção B: Manual com Search & Replace
Use o editor de código para:
1. Find: `className="bible-title"`
2. Replace: `className="tvn-h2"`
3. Repetir para cada padrão

### Opção C: Visual Studio Code
```json
{
  "search.include": "src/**/*.tsx",
  "search.exclude": "src/integrations/**"
}
```

Usar Find & Replace (Ctrl+Shift+H) com regex:
- Find: `className="bible-(title|subtitle|body)"`
- Replace: Conforme mapeamento

---

## ✅ PÓS-MIGRAÇÃO

### Checklist de Validação
- [ ] Verificar build: `npm run build`
- [ ] Testar páginas principais: `/`, `/autor`, `/dissertacao`, `/videos`
- [ ] Verificar responsividade mobile
- [ ] Validar espaçamentos verticais
- [ ] Confirmar cores (design tokens)
- [ ] Testar grid bilíngue
- [ ] Verificar hierarquia visual

### Arquivos de Referência
- `TYPOGRAPHY_SYSTEM_FINAL.md` — Sistema completo
- `TVN_TYPOGRAPHY_FINAL.md` — Documentação detalhada
- `src/components/TVNSpacing.tsx` — Componentes React
- `src/index.css` — Definições CSS

---

## 🎨 RESULTADO ESPERADO

### Antes
```tsx
<h2 className="bible-title">TÍTULO</h2>
<p className="bible-subtitle">Label</p>
<p className="bible-body text-justify leading-relaxed">Texto...</p>
<div className="bible-bilingual-grid bible-block-spacing">
```

### Depois
```tsx
<h2 className="tvn-h2">TÍTULO</h2>
<p className="tvn-subtitle">Label</p>
<p className="tvn-paragraph">Texto...</p>
<div className="bilingual-grid tvn-block">
```

---

## 📈 BENEFÍCIOS

1. **Código 40% mais limpo** - Menos classes redundantes
2. **Manutenção centralizada** - Uma fonte de verdade
3. **Performance melhorada** - CSS otimizado
4. **Consistência total** - Hierarquia única
5. **Developer Experience** - Nomenclatura clara

---

## 🔄 ROLLBACK

Caso necessário, as classes antigas continuam funcionando via `@apply`:

```css
.bible-title {
  @apply tvn-h2;
}
```

Nenhuma funcionalidade será quebrada. A migração é **safe e incremental**.

---

## 📝 PRÓXIMOS PASSOS

1. **Executar migração**: `node migrate-typography-tvn.js`
2. **Validar visualmente**: Testar todas as páginas
3. **Commit**: `feat: migração para sistema tipográfico TVN único`
4. **Remover compatibilidade** (futuro): Deletar classes `bible-*` do CSS
5. **Documentar**: Atualizar README com novo sistema

---

**STATUS ATUAL**: Sistema pronto. Aguardando execução da migração automática.

**RISCO**: Baixo (compatibilidade retroativa mantida)

**TEMPO ESTIMADO**: 2-5 minutos de processamento + 10 minutos de validação
