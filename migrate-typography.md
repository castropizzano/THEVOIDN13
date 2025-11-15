# MIGRAÇÃO TIPOGRÁFICA AUTOMÁTICA

## Status: EM PROGRESSO

Total de ocorrências encontradas: **666 matches** em 8 arquivos

### Arquivos a Migrar:
1. ✅ src/pages/Index.tsx (principal - ~2258 linhas)
2. ✅ src/pages/Autor.tsx (~896 linhas)
3. ✅ src/pages/Dissertacao.tsx (~701 linhas)
4. src/pages/Admin.tsx (1 ocorrência)
5. src/pages/AdminDashboard.tsx (várias ocorrências)
6. src/pages/AdminPageEditor.tsx (1 ocorrência)

### Estratégia de Migração:

Dado o volume de código (4000+ linhas no total), vou fazer a migração em etapas:

**ETAPA 1: Páginas de Conteúdo Principal**
- Index.tsx
- Autor.tsx  
- Dissertacao.tsx

**ETAPA 2: Páginas Admin** (mantêm sistema antigo por ora)

### Padrões de Substituição:

```tsx
// Classes CSS → Componentes React

<h2 className="bible-title">TÍTULO</h2>
→ <H1>TÍTULO</H1>

<h3 className="bible-subtitle">Subtítulo</h3>
→ <H2>Subtítulo</H2>

<p className="bible-body">Texto...</p>
→ <Body>Texto...</Body>

<p className="bible-body text-justify">Texto...</p>
→ <Body>Texto...</Body>
```

### Simplificações Estruturais:

```tsx
// ANTES: Múltiplos BilingualContent separados
<BilingualContent portugueseContent={<><h2>...</h2></>} />
<BilingualContent portugueseContent={<div><p>...</p></div>} />

// DEPOIS: Um único BilingualContent consolidado
<BilingualContent 
  portugueseContent={
    <>
      <H1>...</H1>
      <Body>...</Body>
    </>
  }
/>
```

## Iniciando migração das 3 páginas principais...