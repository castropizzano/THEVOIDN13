# SISTEMA TIPOGRÁFICO OFICIAL TVN — THEVØIDN13
## Hierarquia única e definitiva para todo o site

---

## 🎯 CLASSES OFICIAIS

### Títulos
```css
.tvn-h1       /* Hero/H1: 5xl→7xl, bold, uppercase */
.tvn-h2       /* Seção/H2: 3xl→4xl, bold, uppercase */
.tvn-h3       /* Subtítulo/H3: 2xl→3xl, bold, uppercase */
.tvn-subtitle /* Label: sm→base, semibold, uppercase, tracking-wider */
```

### Corpo de Texto
```css
.tvn-paragraph /* Parágrafo: base→lg, justify, hyphens auto */
```

### Layout
```css
.tvn-block         /* Espaçamento vertical entre blocos (space-y-6→8) */
.tvn-card-spacing  /* Padding interno de cards (p-6→8) */
.bilingual-grid    /* Grid responsivo 2 colunas → 1 coluna mobile */
.bilingual-col     /* Coluna do grid bilíngue */
```

### Extras
```css
.tvn-quote  /* Citação: border-l-4 primary, italic */
.tvn-image  /* Imagem: w-full, rounded-lg, auto margins */
```

---

## ✅ EXEMPLO COMPLETO

```tsx
import { BilingualSection } from "@/components/BilingualSection";

<BilingualSection>
  <div className="bilingual-grid tvn-block">
    {/* Português */}
    <div className="bilingual-col">
      <h2 className="tvn-h2">TÍTULO DA SEÇÃO</h2>
      
      <p className="tvn-subtitle text-primary">CATEGORIA</p>
      
      <p className="tvn-paragraph">
        Este é um parágrafo que será automaticamente justificado
        com hifenização correta em múltiplas linhas seguindo
        as melhores práticas tipográficas.
      </p>
      
      <h3 className="tvn-h3">SUBTÍTULO</h3>
      
      <p className="tvn-paragraph">
        Mais texto aqui com espaçamento automático.
      </p>
    </div>
    
    {/* English */}
    <div className="bilingual-col">
      <h2 className="tvn-h2">SECTION TITLE</h2>
      
      <p className="tvn-subtitle text-primary">CATEGORY</p>
      
      <p className="tvn-paragraph">
        This is a paragraph that will be automatically justified
        with proper hyphenation across multiple lines following
        the best typographic practices.
      </p>
      
      <h3 className="tvn-h3">SUBTITLE</h3>
      
      <p className="tvn-paragraph">
        More text here with automatic spacing.
      </p>
    </div>
  </div>
</BilingualSection>
```

---

## 🔧 COMPONENTES REACT

Para tipagem forte, use os componentes em `TVNSpacing.tsx`:

```tsx
import { 
  TVNTitle, 
  TVNSubtitle, 
  TVNParagraph,
  TVNBlock
} from "@/components/TVNSpacing";

<TVNBlock>
  <TVNTitle level={2}>TÍTULO</TVNTitle>
  <TVNSubtitle>Label</TVNSubtitle>
  <TVNParagraph>Texto do parágrafo</TVNParagraph>
</TVNBlock>
```

---

## 🎨 CORES

**SEMPRE use tokens do design system:**

```tsx
// ✅ CORRETO
<h2 className="tvn-h2 text-primary">
<p className="tvn-paragraph text-foreground">
<p className="tvn-subtitle text-muted-foreground">

// ❌ ERRADO  
<h2 className="tvn-h2 text-red-500">
<p className="tvn-paragraph text-white">
```

---

## 📋 CLASSES OBSOLETAS

**As seguintes classes foram DESCONTINUADAS** e devem ser substituídas:

```
bible-title → tvn-h2
bible-subtitle → tvn-subtitle
bible-body → tvn-paragraph
bible-bilingual-grid → bilingual-grid
bible-block-spacing → tvn-block

heading-1 → tvn-h1
heading-2 → tvn-h2
heading-3 → tvn-h3
heading-4 → tvn-h3
heading-5 → tvn-subtitle

section-title → tvn-h2
subsection-title → tvn-h3
section-subtitle → tvn-h3

body-base → tvn-paragraph
body-large → tvn-paragraph
body-small → tvn-paragraph

label-large → tvn-subtitle
label-small → tvn-subtitle
```

**⚠️ IMPORTANTE:** As classes antigas ainda funcionam (via @apply) para compatibilidade, mas **devem ser migradas** para TVN o quanto antes.

---

## 🚀 SCRIPT DE MIGRAÇÃO

Execute o script para converter automaticamente:

```bash
node migrate-typography-tvn.js
```

Este script irá:
1. Substituir todas as classes antigas por TVN
2. Remover classes redundantes (text-justify, leading-relaxed, etc)
3. Padronizar espaçamento
4. Limpar duplicações

---

## ✨ BENEFÍCIOS

1. **Consistência Total**: Uma única fonte de verdade
2. **Manutenção Simples**: Altere em um lugar, afeta todo o site
3. **Código Limpo**: Sem redundâncias ou classes múltiplas
4. **Responsive**: Mobile-first, escalas corretas
5. **Semântico**: Classes com significado claro
6. **Tipografia Profissional**: Justify, hyphens, leading perfeitos

---

## 📌 REGRAS DE OURO

1. **Nunca use cores hardcoded** → sempre tokens do design system
2. **Nunca adicione classes redundantes** → tvn-paragraph já tem tudo
3. **Sempre use a classe mais específica** → tvn-h2 não "tvn-h2 text-3xl"
4. **Mantenha simetria PT/EN** → mesmas classes em ambas colunas
5. **Use TVNBlock para espaçamento** → não margin/padding manual

---

**STATUS**: Sistema TVN é a única hierarquia oficial do site THEVØIDN13.
**VERSÃO**: 1.0 Final
**DATA**: 2025-11-15
