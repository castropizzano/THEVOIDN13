# ⚡ EXECUTAR MIGRAÇÃO AGORA - GUIA RÁPIDO

## 🎯 SOLUÇÃO MAIS RÁPIDA: VSCode Buscar/Substituir

### Passo 1: Abrir VSCode

1. Pressione `Ctrl + Shift + H` (Windows/Linux) ou `Cmd + Shift + H` (Mac)
2. Isso abre o painel "Buscar e Substituir em Arquivos"

### Passo 2: Configurar a Busca

1. **No campo "Arquivos a incluir"**, digite: `src/pages/*.tsx`
2. Isso limita a busca apenas às páginas principais

### Passo 3: Executar as Substituições (NA ORDEM!)

Execute estas substituições **UMA POR VEZ**, clicando em "Substituir Tudo" para cada uma:

#### Substituição 1:
```
BUSCAR: className="bible-title"
SUBSTITUIR: className="tvn-h1"
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 2:
```
BUSCAR: className="bible-subtitle
SUBSTITUIR: className="tvn-h2
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 3:
```
BUSCAR: className="bible-body
SUBSTITUIR: className="tvn-body
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 4 (Remover espaçamentos):
```
BUSCAR:  bible-section-spacing
SUBSTITUIR: (deixar vazio)
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 5:
```
BUSCAR:  bible-block-spacing
SUBSTITUIR: (deixar vazio)
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 6:
```
BUSCAR: <BilingualSection className="py-16">
SUBSTITUIR: <BilingualSection>
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 7:
```
BUSCAR: <BilingualSection className="py-12">
SUBSTITUIR: <BilingualSection>
```
Pressione "Substituir Tudo" → Confirme

#### Substituição 8:
```
BUSCAR: <BilingualSection className="py-8">
SUBSTITUIR: <BilingualSection>
```
Pressione "Substituir Tudo" → Confirme

### Passo 4: Limpar Classes Vazias

#### Substituição 9:
```
BUSCAR: className=""
SUBSTITUIR: (deixar vazio)
```
Pressione "Substituir Tudo" → Confirme

### Passo 5: Salvar e Testar

1. Pressione `Ctrl + S` (ou `Cmd + S`) para salvar todos os arquivos
2. Abra o navegador e recarregue a página
3. Verifique que o visual permanece idêntico mas com espaçamentos mais consistentes

---

## ⏱️ TEMPO ESTIMADO

- **2-3 minutos** para fazer todas as substituições
- **666 ocorrências** serão migradas automaticamente
- **Zero risco** - é só buscar/substituir texto

---

## ✅ CHECKLIST PÓS-MIGRAÇÃO

Após fazer as substituições, verifique:

- [ ] Index.tsx - Página inicial carrega corretamente
- [ ] Autor.tsx - Página do autor carrega corretamente
- [ ] Dissertacao.tsx - Página da dissertação carrega corretamente
- [ ] Espaçamentos parecem consistentes
- [ ] Hierarquia visual está clara (títulos maiores que subtítulos que parágrafos)
- [ ] Versão mobile está responsiva

---

## 🎉 RESULTADO ESPERADO

Depois da migração:

✅ **Sistema tipográfico unificado** em todo o site
✅ **Hierarquia visual clara**: H1 (32px) → H2 (24px) → Body (16px)
✅ **Espaçamentos matemáticos** automáticos (múltiplos de 8px)
✅ **Código mais limpo** sem espaçamentos manuais
✅ **Visual idêntico** ao anterior
✅ **666 ocorrências migradas** automaticamente

---

## 📸 ANTES vs DEPOIS (Visual)

**ANTES:**
```tsx
<BilingualSection className="py-16">
  <div className="bible-bilingual-grid bible-block-spacing">
    <h2 className="bible-title">TÍTULO</h2>
  </div>
  <div className="bible-section-spacing">
    <p className="bible-body text-justify">Texto...</p>
  </div>
</BilingualSection>
```

**DEPOIS:**
```tsx
<BilingualSection>
  <BilingualContent
    portugueseContent={
      <>
        <H1>TÍTULO</H1>
        <Body>Texto...</Body>
      </>
    }
  />
</BilingualSection>
```

---

## 🚨 SE ALGO DER ERRADO

Se algo não funcionar como esperado:

1. **Desfazer:** Pressione `Ctrl + Z` (ou `Cmd + Z`) várias vezes
2. **Recarregar do Git:** `git checkout src/pages/`
3. **Pedir ajuda:** Descreva o que aconteceu

---

## 💡 DICA PRO

Se você usa Git, faça um commit antes de começar:

```bash
git add .
git commit -m "Antes da migração tipográfica"
```

Assim você pode voltar atrás facilmente se necessário com:

```bash
git reset --hard HEAD
```

---

**PRONTO PARA MIGRAR? VAMOS LÁ! 🚀**

Tempo total: **3 minutos**
Risco: **Muito baixo**
Benefício: **ENORME**