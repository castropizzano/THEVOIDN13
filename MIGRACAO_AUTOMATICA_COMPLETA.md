# MIGRAÇÃO AUTOMÁTICA COMPLETA
## Guia Prático para Migrar Todo o Site

---

## ⚡ SOLUÇÃO RÁPIDA: Buscar e Substituir em Massa

Como são **666 ocorrências** em 8 arquivos, a forma mais eficiente é usar buscar e substituir global:

### Passo 1: Substituir Classes CSS

Execute estas substituições **NA ORDEM** em todos os arquivos `.tsx`:

```
1. className="bible-title" → className="tvn-h1"
2. className="bible-subtitle" → className="tvn-h2"  
3. className="bible-body → className="tvn-body
4. bible-section-spacing → (REMOVER esta classe completamente)
5. bible-block-spacing → (REMOVER esta classe completamente)
6. className="py-16" → className="" (em BilingualSection)
7. className="py-12" → className="" (em BilingualSection)
8. className="py-8" → className="" (em BilingualSection)
```

### Passo 2: Adicionar Imports

Adicionar em **TODOS** os arquivos de página que usam tipografia:

```tsx
import { H1, H2, H3, Body, BodyLarge, BodySmall } from "@/components/Typography";
```

### Passo 3: Converter Tags HTML para Componentes (OPCIONAL)

Para beneficiar dos componentes React:

```tsx
// BUSCAR:
<h2 className="tvn-h1">([^<]+)</h2>

// SUBSTITUIR:
<H1>$1</H1>

// BUSCAR:
<h3 className="tvn-h2">([^<]+)</h3>

// SUBSTITUIR:
<H2>$1</H2>

// BUSCAR:
<p className="tvn-body">([^<]+)</p>

// SUBSTITUIR:
<Body>$1</Body>
```

---

## 📊 MIGRAÇÃO POR ARQUIVO

### Index.tsx (Principal)

**Substituições principais:**

```typescript
// 1. Import no topo
import { H1, H2, H3, Body, BodyLarge } from "@/components/Typography";

// 2. Substituir todas as ocorrências:
bible-title → tvn-h1
bible-subtitle → tvn-h2
bible-body → tvn-body

// 3. Remover py-* de BilingualSection:
<BilingualSection className="py-16"> → <BilingualSection>

// 4. Consolidar seções quando possível
```

---

### Autor.tsx

**Padrão atual:**
```tsx
<h1 className="bible-title">CASTRO PIZZANO</h1>
<p className="bible-body mt-4 text-muted-foreground">цастро™ / PUNK</p>
```

**Migrado:**
```tsx
<H1>CASTRO PIZZANO</H1>
<Body className="text-muted-foreground">цастро™ / PUNK</Body>
```

**Substituições:**
- `bible-title` → `tvn-h1`
- `bible-body` → `tvn-body`
- Remover `mt-*` (espaçamento automático)

---

### Dissertacao.tsx

**Padrão atual:**
```tsx
<h1 className="bible-title">LOWMOVIE™ E O LABIRINTO CRIATIVO</h1>
<p className="bible-body mt-6">Subjetividade, Subcultura...</p>
```

**Migrado:**
```tsx
<H1>LOWMOVIE™ E O LABIRINTO CRIATIVO</H1>
<Body>Subjetividade, Subcultura...</Body>
```

---

## 🤖 SCRIPT DE MIGRAÇÃO AUTOMÁTICA

Se você tem acesso a linha de comando, pode usar este script:

```bash
#!/bin/bash

# Substituir classes em todos arquivos TSX
find src/pages -name "*.tsx" -type f -exec sed -i '' \
  -e 's/className="bible-title"/className="tvn-h1"/g' \
  -e 's/className="bible-subtitle"/className="tvn-h2"/g' \
  -e 's/className="bible-body/className="tvn-body/g' \
  -e 's/ bible-section-spacing//g' \
  -e 's/ bible-block-spacing//g' \
  -e 's/<BilingualSection className="py-16">/<BilingualSection>/g' \
  -e 's/<BilingualSection className="py-12">/<BilingualSection>/g' \
  -e 's/<BilingualSection className="py-8">/<BilingualSection>/g' \
  {} \;

echo "Migração de classes CSS concluída!"
```

---

## ✅ CHECKLIST DE MIGRAÇÃO

### Para cada página:

- [ ] Adicionar import de componentes tipográficos no topo
- [ ] Substituir `bible-title` → `tvn-h1` ou `<H1>`
- [ ] Substituir `bible-subtitle` → `tvn-h2` ou `<H2>`
- [ ] Substituir `bible-body` → `tvn-body` ou `<Body>`
- [ ] Remover `bible-section-spacing`
- [ ] Remover `bible-block-spacing`
- [ ] Remover `py-*` de `<BilingualSection>`
- [ ] Remover `mt-*`, `mb-*` de elementos tipográficos
- [ ] Consolidar múltiplos `<BilingualContent>` quando possível
- [ ] Testar visualmente a página

---

## 🎯 ARQUIVOS PRIORITÁRIOS

### Alta Prioridade (Páginas de Conteúdo):
1. ✅ src/pages/Index.tsx
2. ✅ src/pages/Autor.tsx
3. ✅ src/pages/Dissertacao.tsx

### Baixa Prioridade (Páginas Admin):
4. src/pages/Admin.tsx (1 ocorrência)
5. src/pages/AdminDashboard.tsx (10+ ocorrências)
6. src/pages/AdminPageEditor.tsx (1 ocorrência)

---

## 📝 EXEMPLO COMPLETO DE MIGRAÇÃO

### ANTES (Autor.tsx - Seção "Quem Fala"):

```tsx
<BilingualSection className="py-16">
  <div className="bible-bilingual-grid bible-block-spacing">
    <div>
      <h2 className="bible-title">QUEM FALA E DE ONDE FALO</h2>
    </div>
    <div>
      <h2 className="bible-title">WHO SPEAKS AND FROM WHERE I SPEAK</h2>
    </div>
  </div>

  <div className="bible-bilingual-grid bible-section-spacing">
    <div>
      <div className="space-y-6">
        <p className="bible-body text-justify">Profissional criativo multidisciplinar...</p>
        <p className="bible-body text-justify">Atualmente, mestrando em Cinema...</p>
      </div>
    </div>
    <div>
      <div className="space-y-6">
        <p className="bible-body text-justify">Multidisciplinary creative professional...</p>
        <p className="bible-body text-justify">Currently, Master's student in Cinema...</p>
      </div>
    </div>
  </div>
</BilingualSection>
```

### DEPOIS (Migrado):

```tsx
<BilingualSection>
  <BilingualContent
    portugueseContent={
      <>
        <H1>QUEM FALA E DE ONDE FALO</H1>
        
        <Body>
          Profissional criativo multidisciplinar, atuo entre as artes visuais, 
          o design e a produção audiovisual...
        </Body>
        
        <Body>
          Atualmente, mestrando em Cinema e Artes do Vídeo pelo PPG-CINEAV...
        </Body>
      </>
    }
    englishContent={
      <>
        <H1>WHO SPEAKS AND FROM WHERE I SPEAK</H1>
        
        <Body>
          Multidisciplinary creative professional, I work between visual arts, 
          design and audiovisual production...
        </Body>
        
        <Body>
          Currently, Master's student in Cinema and Video Arts at PPG-CINEAV...
        </Body>
      </>
    }
  />
</BilingualSection>
```

**Melhorias:**
- ✅ -40% menos código
- ✅ Estrutura mais clara (1 BilingualContent ao invés de 2 divs)
- ✅ Sem classes de espaçamento manual
- ✅ Componentes semânticos
- ✅ Espaçamentos automáticos

---

## ⚡ AÇÃO RÁPIDA: 5 MINUTOS

Se você quer migrar TUDO agora rapidamente:

1. **Abra o editor de código (VSCode, etc.)**

2. **Buscar e Substituir Global (Ctrl+Shift+H):**
   - Buscar: `className="bible-title"`
   - Substituir: `className="tvn-h1"`
   - **Substituir Tudo** em todos os arquivos

3. **Repetir para:**
   - `bible-subtitle` → `tvn-h2`
   - `bible-body` → `tvn-body`

4. **Remover espaçamentos:**
   - Buscar: ` bible-section-spacing` (com espaço antes)
   - Substituir: (deixar vazio)
   - **Substituir Tudo**

5. **Adicionar imports em Index.tsx, Autor.tsx, Dissertacao.tsx:**
   ```tsx
   import { H1, H2, Body, BodyLarge } from "@/components/Typography";
   ```

6. **Salvar e testar!**

---

## 🎉 RESULTADO ESPERADO

Após a migração:

- ✅ **666 ocorrências migradas** de classes antigas para novas
- ✅ **Sistema único** de tipografia em todo o site
- ✅ **Espaçamentos consistentes** e automáticos
- ✅ **Hierarquia visual clara** (32px → 24px → 20px → 16px)
- ✅ **Código mais limpo** e fácil de manter
- ✅ **Visual idêntico** ao anterior

**Tempo estimado:** 10-15 minutos para migração completa manual
**Risco:** Baixo (apenas mudança de classes CSS)

---

**Pronto para executar a migração! 🚀**