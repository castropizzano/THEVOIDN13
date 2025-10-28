# PADRONIZAÇÃO TIPOGRÁFICA COMPLETA - THEVOIDN13

## ✅ Correções Aplicadas

### Pages Corrigidas:
1. **Videos.tsx** - ✅ Completo
   - Substituído `text-base` por `body-base` com `text-justified`
   
2. **NotFound.tsx** - ✅ Completo
   - Redesenhado completamente seguindo design system
   - Removido `text-center`
   - Aplicado `section-title` e `body-base`

### Padrão Aplicado:

**Títulos de Seção (Vermelho, Pequeno, Uppercase):**
```tsx
className="section-title"
```

**Subtítulos (Médio, Negrito):**
```tsx
className="subsection-title"
```

**Micro Títulos (Pequeno, Cinza, Uppercase):**
```tsx
className="micro-title"
```

**Corpo de Texto:**
```tsx
className="body-base text-justified"
```

### ⚠️ Arquivos que AINDA precisam correção manual:

**Index.tsx** (15 instâncias):
- Linhas 846, 853, 860: `text-base text-justify leading-relaxed` → `body-base text-justified`
- Linha 927: `heading-2 text-primary` → `section-title`
- Linhas 984, 985, 988: Similar

**Dissertacao.tsx** (130+ instâncias):
- Múltiplas seções com `text-base` que devem ser `body-base`
- Vários `text-base font-bold` que são subtítulos e devem usar `subsection-title`

**Autor.tsx** (104+ instâncias):
- Listas com `text-base` → `body-base`
- Parágrafos com `text-base text-justify leading-relaxed` → `body-base text-justified`
- Títulos `heading-2`, `heading-3` → `section-title` ou `subsection-title`

## 🎯 Próximos Passos Recomendados:

Devido ao alto volume de alterações em Dissertacao.tsx e Autor.tsx (230+ substituições), recomendo:

1. **Automatização via Script**: Criar script shell para substituir padrões
2. **Revisão Manual Seção por Seção**: Corrigir seções específicas de cada vez
3. **Validação Visual**: Checar cada página após as alterações

## 📋 Regras de Substituição:

```bash
# Parágrafos
"text-base text-justify leading-relaxed" → "body-base text-justified"
"text-base leading-relaxed text-justify" → "body-base text-justified"

# Listas
"<li className=\"text-base\">" → "<li className=\"body-base\">"

# Títulos
"heading-2 text-primary" → "section-title"
"heading-3 text-primary" → "subsection-title"
"text-base font-bold text-primary" → "subsection-title text-primary"

# NÃO SUBSTITUIR:
- "text-base font-bold" (quando usado em títulos de documentos)
- "text-base text-muted-foreground" (meta informações)
```
