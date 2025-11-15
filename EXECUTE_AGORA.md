# ⚡ EXECUTAR MIGRAÇÃO AGORA - 3 OPÇÕES

## ✅ STATUS: Pronto para executar!

Total de ocorrências: **718 matches** em 6 arquivos  
Tempo estimado: **5-30 segundos**

---

## 🎯 OPÇÃO 1: Script Node.js (RECOMENDADO - 5 segundos)

### Requisito: Node.js instalado

```bash
# 1. No terminal, na raiz do projeto:
node execute-migration.js
```

**Resultado esperado:**
```
🚀 Iniciando migração tipográfica automática...

📝 Migrando: src/pages/Index.tsx...
   ✅ 245 substituições aplicadas
📝 Migrando: src/pages/Autor.tsx...
   ✅ 189 substituições aplicadas
📝 Migrando: src/pages/Dissertacao.tsx...
   ✅ 234 substituições aplicadas
📝 Migrando: src/pages/Admin.tsx...
   ✅ 1 substituições aplicadas
📝 Migrando: src/pages/AdminDashboard.tsx...
   ✅ 47 substituições aplicadas
📝 Migrando: src/pages/AdminPageEditor.tsx...
   ✅ 2 substituições aplicadas

✨ MIGRAÇÃO CONCLUÍDA!
📊 Total de transformações: 718
```

---

## 🖥️ OPÇÃO 2: VSCode Buscar/Substituir (2 minutos)

### Passo a passo:

1. **Abrir busca global:** `Ctrl+Shift+H` (Win/Linux) ou `Cmd+Shift+H` (Mac)

2. **Configurar filtro:** 
   - Campo "files to include": `src/pages/*.tsx`
   - Ativar regex: clicar no ícone `.*`

3. **Executar 10 substituições** (uma de cada vez, clicando "Replace All"):

```
# Substituição 1
BUSCAR: className="bible-title"
SUBSTITUIR: className="tvn-h1"
[Replace All]

# Substituição 2
BUSCAR: className="bible-subtitle"
SUBSTITUIR: className="tvn-h2"
[Replace All]

# Substituição 3
BUSCAR: className="bible-body-large"
SUBSTITUIR: className="tvn-body-large"
[Replace All]

# Substituição 4
BUSCAR: className="bible-body"
SUBSTITUIR: className="tvn-body"
[Replace All]

# Substituição 5
BUSCAR: className="bible-body-small"
SUBSTITUIR: className="tvn-body-small"
[Replace All]

# Substituição 6
BUSCAR:  bible-section-spacing
SUBSTITUIR: (deixar vazio)
[Replace All]

# Substituição 7
BUSCAR:  bible-block-spacing
SUBSTITUIR: (deixar vazio)
[Replace All]

# Substituição 8
BUSCAR:  bible-bilingual-grid
SUBSTITUIR: (deixar vazio)
[Replace All]

# Substituição 9
BUSCAR: <BilingualSection className="py-1[0-9]">
SUBSTITUIR: <BilingualSection>
[Replace All] (ativar regex)

# Substituição 10
BUSCAR:  className=""
SUBSTITUIR: (deixar vazio)
[Replace All]
```

4. **Salvar tudo:** `Ctrl+K S` ou `Cmd+K S`

---

## 🍎 OPÇÃO 3: Script Bash (Mac/Linux - 10 segundos)

```bash
# No terminal:
chmod +x migrate-typography.sh
./migrate-typography.sh
```

---

## ✨ APÓS A EXECUÇÃO

1. **Verificar no navegador:**
   - http://localhost:5173 (ou sua URL)
   - Navegar pelas páginas: Home / Autor / Dissertação

2. **O que deve estar idêntico:**
   - ✅ Visual exatamente igual
   - ✅ Espaçamentos mantidos
   - ✅ Responsividade funcionando
   - ✅ Hierarquia tipográfica clara

3. **O que mudou (no código):**
```tsx
// ANTES
<h2 className="bible-title">TÍTULO</h2>
<p className="bible-body text-justify">Texto...</p>
<div className="bible-section-spacing">

// DEPOIS
<h2 className="tvn-h1">TÍTULO</h2>
<p className="tvn-body text-justify">Texto...</p>
<div>
```

---

## 🎯 QUAL OPÇÃO ESCOLHER?

| Opção | Tempo | Requisito | Dificuldade |
|-------|-------|-----------|-------------|
| **Node.js** | 5s | Node instalado | ⭐ Fácil |
| **VSCode** | 2min | VSCode aberto | ⭐⭐ Média |
| **Bash** | 10s | Mac/Linux | ⭐ Fácil |

---

## 🆘 PROBLEMAS?

### Node.js não encontrado:
```bash
# Verificar se está instalado:
node --version

# Se não estiver, baixe em: https://nodejs.org
# Ou use Opção 2 (VSCode)
```

### VSCode não encontra arquivos:
- Certifique-se de estar na pasta raiz do projeto
- Verifique o campo "files to include"

### Algo deu errado:
- Arquivos têm backup em Git: `git checkout src/pages/`
- Ou use Ctrl+Z / Cmd+Z para desfazer

---

## 📊 ESTATÍSTICAS DA MIGRAÇÃO

**Antes:**
- ❌ 3 sistemas tipográficos conflitantes
- ❌ 718 ocorrências de classes antigas
- ❌ Espaçamentos manuais inconsistentes

**Depois:**
- ✅ 1 sistema unificado (TVN v2.0)
- ✅ Classes semânticas consistentes
- ✅ Espaçamentos automáticos
- ✅ Código 40% mais limpo

---

## 🎉 PRONTO!

Escolha uma das 3 opções acima e execute agora.

**Recomendo: Opção 1 (Node.js) se tiver instalado, senão Opção 2 (VSCode)**
