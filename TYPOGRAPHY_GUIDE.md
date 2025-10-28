# Guia de Padronização Tipográfica | Typography Standardization Guide

## Sistema Hierárquico | Hierarchical System

### Classes de Títulos | Title Classes

```tsx
.heading-hero    // 5xl-7xl - Hero sections, main page titles
.heading-1       // 3xl-4xl - Page titles, main sections
.heading-2       // 2xl-3xl - Section titles
.heading-3       // xl-2xl  - Subsection titles
.heading-4       // lg-xl   - Small section titles
.heading-5       // base-lg - Minor titles
```

### Classes de Corpo | Body Classes

```tsx
.body-large      // text-lg - Introductory paragraphs
.body-base       // text-base - Standard body text
.body-small      // text-sm - Small details
```

### Classes de Label | Label Classes

```tsx
.label-large     // text-sm uppercase - Section labels
.label-small     // text-xs uppercase - Small labels
```

### Classes Utilitárias | Utility Classes

```tsx
.text-justified  // Justified text with hyphens
.title-break     // Break long titles responsively
.content-spacing // space-y-6 - Standard content spacing
.section-spacing // space-y-12 - Section spacing
```

---

## Regras de Uso | Usage Rules

### 1. Títulos Bilíngues | Bilingual Titles

**SEMPRE use quebras de linha para títulos extensos:**

```tsx
// ❌ ERRADO - Título muito longo sem quebra
<h1 className="heading-1">
  LowMovie™ e o Labirinto Criativo: Subjetividade, Subcultura e a Construção de uma Estética
</h1>

// ✅ CORRETO - Com quebras responsivas
<h1 className="heading-1 title-break">
  LowMovie™ e o Labirinto Criativo:<br className="hidden md:block" />
  Subjetividade, Subcultura e a Construção<br className="hidden md:block" />
  de uma Estética em Movimento
</h1>
```

### 2. BilingualContent - Simetria Perfeita

**Use o componente com prop alignTop quando necessário:**

```tsx
// Para conteúdo com alturas iguais (padrão)
<BilingualContent
  portugueseContent={<p className="body-base">...</p>}
  englishContent={<p className="body-base">...</p>}
/>

// Para conteúdo com alturas diferentes
<BilingualContent
  alignTop
  portugueseContent={...}
  englishContent={...}
/>
```

### 3. Estrutura de Seção Padrão

```tsx
<BilingualSection>
  <BilingualContent
    portugueseContent={
      <div className="section-spacing">
        <h2 className="heading-2 title-break">Título da Seção</h2>
        <p className="body-base text-justified">
          Texto do parágrafo...
        </p>
      </div>
    }
    englishContent={
      <div className="section-spacing">
        <h2 className="heading-2 title-break">Section Title</h2>
        <p className="body-base text-justified">
          Paragraph text...
        </p>
      </div>
    }
  />
</BilingualSection>
```

### 4. Labels de Categoria

```tsx
// Labels acima de títulos
<p className="label-small text-foreground/60">CATEGORIA</p>
<h2 className="heading-2">Título Principal</h2>
```

---

## Exemplos por Contexto | Context Examples

### Hero Section
```tsx
<h1 className="heading-hero text-primary">THEVOIDN13</h1>
<p className="body-large text-muted-foreground">
  Shadow Interface Bible v13
</p>
```

### Seção de Conteúdo Principal
```tsx
<div className="section-spacing">
  <h2 className="heading-2 text-primary">O Gesto</h2>
  <p className="body-base text-justified">
    Cada movimento é um ruído controlado...
  </p>
</div>
```

### Cards e Destaques
```tsx
<div className="content-spacing">
  <p className="label-large text-primary">PROCESSO</p>
  <h3 className="heading-3 title-break">
    Metodologia Criativa
  </h3>
  <p className="body-small text-muted-foreground">
    Descrição breve...
  </p>
</div>
```

---

## Checklist de Padronização | Standardization Checklist

- [ ] Todos os títulos usam classes `.heading-*`
- [ ] Todos os parágrafos usam classes `.body-*`
- [ ] Labels usam classes `.label-*`
- [ ] Títulos extensos têm `.title-break`
- [ ] Texto justificado usa `.text-justified`
- [ ] Espaçamento consistente (`.content-spacing` / `.section-spacing`)
- [ ] BilingualContent com labels padronizados
- [ ] Quebras de linha responsivas em títulos longos
- [ ] Simetria entre colunas PT e EN
- [ ] Cores via design system (não hardcoded)

---

## Migração de Código Existente | Existing Code Migration

### Antes (inconsistente):
```tsx
<h2 className="text-2xl font-bold text-primary">Título</h2>
<p className="text-base text-justify leading-relaxed">Texto...</p>
```

### Depois (padronizado):
```tsx
<h2 className="heading-2 text-primary">Título</h2>
<p className="body-base text-justified">Texto...</p>
```

---

**IMPORTANTE:** Este sistema deve ser usado em TODAS as páginas do projeto para garantir consistência visual e hierárquica total.
