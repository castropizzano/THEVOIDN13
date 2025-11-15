# SISTEMA TIPOGRÁFICO OFICIAL — THEVØIDN13
## Única hierarquia válida para TODO o site

### 📋 PRINCÍPIOS

1. **Uma classe, um propósito**
2. **Semântica clara**
3. **Zero duplicação**
4. **Mobile-first responsive**

---

## 🎯 HIERARQUIA DEFINITIVA

### TÍTULOS (Headings)

```tsx
.tvn-h1      // Hero/Títulos principais de página (5xl → 7xl)
.tvn-h2      // Títulos de seção (3xl → 4xl)  
.tvn-h3      // Subtítulos de seção (2xl → 3xl)
.tvn-subtitle // Labels e micro-títulos (sm uppercase tracking-wide)
```

### CORPO DE TEXTO (Body)

```tsx
.tvn-paragraph  // Texto padrão (base → lg) + text-justify + hyphens
```

### UTILITÁRIOS

```tsx
.tvn-block         // Espaçamento entre blocos (space-y-6)
.tvn-card-spacing  // Espaçamento interno de cards (p-6 → p-8)
```

---

## ✅ USO CORRETO

### Exemplo: Seção Bilíngue

```tsx
<BilingualSection>
  <div className="bilingual-grid tvn-block">
    <div>
      <h2 className="tvn-h2">TÍTULO DA SEÇÃO</h2>
      <p className="tvn-paragraph">
        Texto do parágrafo que será justificado automaticamente
        e terá hifenização correta em múltiplas linhas.
      </p>
    </div>
    <div>
      <h2 className="tvn-h2">SECTION TITLE</h2>
      <p className="tvn-paragraph">
        Paragraph text that will be automatically justified
        with proper hyphenation across multiple lines.
      </p>
    </div>
  </div>
</BilingualSection>
```

### Exemplo: Card com Conteúdo

```tsx
<Card className="tvn-card-spacing">
  <p className="tvn-subtitle text-primary">CATEGORIA</p>
  <h3 className="tvn-h3 mt-2">Título do Card</h3>
  <p className="tvn-paragraph mt-4">
    Descrição do card com texto justificado.
  </p>
</Card>
```

---

## ❌ CLASSES OBSOLETAS (REMOVER)

Todas as seguintes classes devem ser substituídas:

```tsx
// Sistema "bible-*" → OBSOLETO
bible-title → tvn-h2
bible-subtitle → tvn-subtitle  
bible-body → tvn-paragraph

// Sistema "heading-*" → OBSOLETO
heading-hero → tvn-h1
heading-1 → tvn-h1
heading-2 → tvn-h2
heading-3 → tvn-h3
heading-4 → tvn-h3
heading-5 → tvn-subtitle

// Sistema "body-*" → OBSOLETO
body-base → tvn-paragraph
body-large → tvn-paragraph
body-small → tvn-paragraph

// Sistema "section-*" → OBSOLETO  
section-title → tvn-h2
subsection-title → tvn-h3
section-subtitle → tvn-subtitle

// Sistema "label-*" → OBSOLETO
label-large → tvn-subtitle
label-small → tvn-subtitle
```

---

## 🔧 MIGRAÇÃO AUTOMÁTICA

### Substituições Globais

```bash
# Títulos principais
"bible-title" → "tvn-h2"
"heading-1" → "tvn-h1"  
"heading-2" → "tvn-h2"
"heading-3" → "tvn-h3"
"section-title" → "tvn-h2"
"subsection-title" → "tvn-h3"

# Subtítulos/Labels
"bible-subtitle" → "tvn-subtitle"
"section-subtitle" → "tvn-subtitle"
"label-large" → "tvn-subtitle"
"label-small" → "tvn-subtitle"

# Corpo de texto
"bible-body" → "tvn-paragraph"
"body-base" → "tvn-paragraph"
"body-large" → "tvn-paragraph"
"body-small" → "tvn-paragraph"

# Remover classes redundantes
Remover: text-justify, leading-relaxed, text-base
(já incluídas em tvn-paragraph)
```

---

## 📦 COMPONENTES AUXILIARES

Use os componentes React quando precisar de tipagem forte:

```tsx
import { TVNTitle, TVNSubtitle, TVNParagraph } from "@/components/TVNSpacing";

<TVNTitle level={2}>Título</TVNTitle>
<TVNSubtitle>Label</TVNSubtitle>  
<TVNParagraph>Texto do parágrafo</TVNParagraph>
```

---

## 🎨 CORES

**NUNCA use cores hardcoded.** Sempre use tokens do design system:

```tsx
// ✅ CORRETO
<h2 className="tvn-h2 text-primary">

// ❌ ERRADO
<h2 className="tvn-h2 text-red-500">
```

---

## 📋 CHECKLIST DE CONFORMIDADE

- [ ] Todos os `<h1>` usam `tvn-h1`
- [ ] Todos os `<h2>` usam `tvn-h2`
- [ ] Todos os `<h3>`, `<h4>`, `<h5>` usam `tvn-h3`
- [ ] Todos os labels/categorias usam `tvn-subtitle`
- [ ] Todos os `<p>` de conteúdo usam `tvn-paragraph`
- [ ] Nenhuma classe obsoleta (bible-*, heading-*, body-*, section-*, label-*)
- [ ] Cores via design tokens (text-primary, text-foreground, text-muted-foreground)
- [ ] Sem classes redundantes (text-base, text-justify, leading-relaxed)

---

**STATUS**: Sistema único ativo. Todas as páginas devem seguir esta hierarquia.
