# 🔍 Bilingual Content Scanner

Script automático de varredura para detectar conteúdo bilíngue hardcoded (PT/EN) no código do projeto THEVØIDN13.

## 📋 O que o scanner detecta

O script identifica os seguintes padrões problemáticos:

### 1. Separadores PT/EN explícitos
```tsx
❌ <h1>Título / Title</h1>
❌ <p>Texto | Text</p>
```

### 2. Marcadores de idioma
```tsx
❌ PT> Texto em português
❌ EN> English text
❌ (PT) Conteúdo (EN) Content
```

### 3. Strings hardcoded comuns
```tsx
❌ <Button>Salvar</Button>
❌ <p>Carregando...</p>
❌ toast.error("Erro ao carregar")
```

### 4. Traduções inline
```tsx
❌ const title = "Memorial Artístico / Artistic Memorial"
```

## 🚀 Como usar

### 1. Executar o scanner

```bash
node scan-bilingual-issues.js
```

### 2. Revisar o relatório gerado

O script cria automaticamente o arquivo `BILINGUAL_SCAN_REPORT.md` com:

- Total de arquivos escaneados
- Arquivos com problemas identificados
- Lista detalhada de cada ocorrência (arquivo, linha, padrão)
- Recomendações de correção

### 3. Corrigir os problemas

Para cada ocorrência encontrada:

#### Opção A: Usar `useTranslation()`

```tsx
// ❌ Antes
<Button>Salvar</Button>

// ✅ Depois
import { useTranslation } from "@/hooks/useTranslation";

const { t } = useTranslation();
<Button>{t("save")}</Button>
```

#### Opção B: Usar `<BilingualContent>`

```tsx
// ❌ Antes
<h1>Título / Title</h1>

// ✅ Depois
import { BilingualContent } from "@/components/BilingualSection";

<BilingualContent
  portugueseContent={<h1>Título</h1>}
  englishContent={<h1>Title</h1>}
/>
```

### 4. Adicionar novas chaves de tradução

Se necessário, adicione novas chaves em `src/hooks/useTranslation.tsx`:

```typescript
// 1. Adicionar o tipo
type TranslationKey = 
  // ... existing keys
  | "newKey";

// 2. Adicionar a tradução
const translations: Record<TranslationKey, { pt: string; en: string }> = {
  // ... existing translations
  newKey: { pt: "Novo Texto", en: "New Text" },
};
```

### 5. Rodar novamente

```bash
node scan-bilingual-issues.js
```

O script retorna:
- **Exit code 0**: ✅ Nenhum problema encontrado
- **Exit code 1**: ⚠️ Problemas ainda existem

## 📁 Arquivos escaneados

O scanner processa:
- ✅ `.tsx`, `.ts`, `.jsx`, `.js` no diretório `src/`
- ❌ Ignora: `node_modules`, `dist`, `build`, `.git`, `public`

## 🔧 Configuração

Para customizar os padrões detectados, edite as constantes no arquivo `scan-bilingual-issues.js`:

```javascript
const PATTERNS = {
  // Adicione ou remova padrões conforme necessário
  slashSeparator: /\s\/\s/g,
  // ...
};
```

## 📊 Exemplo de relatório

```markdown
# 🔍 BILINGUAL CONTENT SCAN REPORT

**Data:** 2025-11-15T13:00:00.000Z
**Arquivos Escaneados:** 142
**Arquivos com Problemas:** 3
**Total de Ocorrências:** 8

---

## ⚠️ Problemas Encontrados

### `src/components/Example.tsx`

**2 ocorrência(s) encontrada(s)**

- **Linha 45** (slashSeparator):
  ```
  <h1>Título / Title</h1>
  ```
  Matches: [" / "]

- **Linha 67** (portugueseStrings):
  ```
  <Button>Salvar</Button>
  ```
  Matches: ["Salvar"]

---
```

## 🎯 Objetivo

Garantir que **100% do conteúdo textual** do site use o sistema de tradução, permitindo:

- ✅ Alternância perfeita entre PT/EN
- ✅ Manutenção centralizada de textos
- ✅ Consistência em todo o projeto
- ✅ Facilidade para adicionar novos idiomas no futuro

## 🔄 Integração no workflow

Recomendado adicionar ao CI/CD:

```yaml
# .github/workflows/check-bilingual.yml
name: Check Bilingual Content

on: [push, pull_request]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run bilingual scanner
        run: node scan-bilingual-issues.js
```

---

**Desenvolvido para THEVØIDN13 Project**  
Garantindo bilinguismo perfeito em todo o site. 🌐
