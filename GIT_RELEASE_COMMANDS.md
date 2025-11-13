# 🚀 Comandos Git para Release v20251113

**Data:** 13/11/2025, 3h33 BRT  
**Versão:** v20251113  
**Branch Archive:** archive/2025_11_13

---

## 📋 PASSO A PASSO COMPLETO

Execute estes comandos **na ordem exata**:

---

### ✅ PASSO 1: Commit final (se houver mudanças pendentes)

```bash
# Ver status
git status

# Se houver mudanças, commitar
git add .
git commit -m "docs: prepare v20251113 release - marco de lançamento"
```

---

### ✅ PASSO 2: Push para main (ativa GitHub Actions)

```bash
# Push para main
git push origin main

# AGUARDE: O workflow do GitHub Actions vai rodar automaticamente
# Acompanhe em: https://github.com/[seu-usuario]/thevoidn13/actions
```

**O que acontece:**
- ✅ Build automático
- ✅ Snapshot para Wayback Machine
- ✅ Artifacts salvos
- ✅ Summary gerado

---

### ✅ PASSO 3: Criar branch archive (preservação histórica)

```bash
# Criar branch archive
git checkout -b archive/2025_11_13

# Push da branch archive
git push origin archive/2025_11_13

# Voltar para main
git checkout main
```

---

### ✅ PASSO 4: Criar tag v20251113

```bash
# Criar tag anotada
git tag -a v20251113 -m "Release v20251113 — Marco de Lançamento (2025-11-13 03:33 BRT)

Esta release marca o momento exato onde o memorial artístico THEVØIDN13 
atinge maturidade técnica, conceitual e estética antes da defesa de dissertação final.

Principais conquistas:
- Shadow Interface Bible v13 completo
- Security 95/100 (RLS 100%, OWASP protected)
- GitHub Actions workflow automático
- Wayback Machine integration
- Sistema bilíngue PT/EN completo
- 12 PDFs acadêmicos preservados
- Ferramentas interativas (Creative Oracle, Comic Generator, Mind Map)
- Performance otimizada

Artefatos: build completo, PDFs, áudios, código-fonte.
Licença: CC BY-NC-SA 4.0
Portal: https://thevoidn13.com"

# Push da tag
git push origin v20251113
```

**Verificar tag criada:**
```bash
git tag -l
git show v20251113
```

---

### ✅ PASSO 5: Criar Release no GitHub

#### Opção A: Via GitHub CLI (recomendado)

```bash
# Instalar GitHub CLI se não tiver
# macOS: brew install gh
# Linux: https://github.com/cli/cli/blob/trunk/docs/install_linux.md

# Login no GitHub CLI
gh auth login

# Criar release
gh release create v20251113 \
  --title "v20251113 — Marco de Lançamento (2025-11-13 03:33 BRT)" \
  --notes-file RELEASE_NOTES_v20251113.md \
  --latest

# AGUARDE: O workflow vai rodar novamente e gerar os ZIPs
```

#### Opção B: Via Interface do GitHub

1. Vá em: https://github.com/[seu-usuario]/thevoidn13/releases
2. Click em **"Draft a new release"**
3. **Choose a tag:** Selecione `v20251113`
4. **Release title:**
   ```
   v20251113 — Marco de Lançamento (2025-11-13 03:33 BRT)
   ```
5. **Description:** Cole o conteúdo de `RELEASE_NOTES_v20251113.md`
6. **Set as the latest release:** ✅ Marcar
7. Click em **"Publish release"**

---

### ✅ PASSO 6: Aguardar Build dos Assets

Após publicar a release, o GitHub Actions vai:

1. Baixar o build gerado
2. Criar `thevoidn13-v20251113.tar.gz`
3. Criar `thevoidn13-v20251113.zip`
4. Fazer upload dos assets na release

**Acompanhe em:**
```
https://github.com/[seu-usuario]/thevoidn13/actions
```

**Tempo estimado:** 3-5 minutos

---

### ✅ PASSO 7: Verificar Release

```bash
# Listar releases via CLI
gh release list

# Ver detalhes da release
gh release view v20251113

# Download dos assets (testar)
gh release download v20251113
```

**Ou via browser:**
```
https://github.com/[seu-usuario]/thevoidn13/releases/tag/v20251113
```

**Deve conter:**
- `thevoidn13-v20251113.tar.gz` (~25MB)
- `thevoidn13-v20251113.zip` (~25MB)
- Source code (zip)
- Source code (tar.gz)

---

## 📦 PRÓXIMO PASSO: INTERNET ARCHIVE

Agora siga o guia `INTERNET_ARCHIVE_GUIDE.md` para:

1. Gerar os ZIPs dos PDFs e áudios
2. Criar item no Internet Archive
3. Upload dos artefatos
4. Atualizar links no README

---

## ✅ CHECKLIST FINAL

Marque conforme for completando:

- [ ] ✅ Push para `main` (GitHub Actions rodou)
- [ ] ✅ Branch `archive/2025_11_13` criada e pushed
- [ ] ✅ Tag `v20251113` criada e pushed
- [ ] ✅ Release `v20251113` publicada no GitHub
- [ ] ✅ Assets (ZIP/TAR.GZ) gerados automaticamente
- [ ] ✅ Wayback Machine arquivou as páginas
- [ ] ✅ README.md atualizado com VERSION HISTORY
- [ ] 🔄 **PENDENTE:** Upload no Internet Archive
- [ ] 🔄 **PENDENTE:** Atualizar link do Archive no README

---

## 🔍 COMANDOS ÚTEIS PARA VERIFICAÇÃO

```bash
# Ver todas as tags
git tag -l

# Ver detalhes de uma tag
git show v20251113

# Ver todas as branches
git branch -a

# Ver releases (GitHub CLI)
gh release list

# Ver workflows rodando
gh run list --limit 5

# Ver logs do último workflow
gh run view

# Clone da release (testar)
git clone --branch v20251113 https://github.com/[seu-usuario]/thevoidn13.git thevoidn13-v20251113
```

---

## ⚠️ TROUBLESHOOTING

### Erro: "tag already exists"
```bash
# Deletar tag local e remota
git tag -d v20251113
git push origin --delete v20251113

# Recriar tag
git tag -a v20251113 -m "mensagem"
git push origin v20251113
```

### Erro: "release already exists"
```bash
# Deletar release (GitHub CLI)
gh release delete v20251113 --yes

# Ou via interface do GitHub
```

### Workflow não rodou
```bash
# Trigger manual (se configurado)
gh workflow run deploy.yml

# Ver logs
gh run list
gh run view [run-id]
```

### Assets não foram gerados
- Verifique se o workflow completou sem erros
- Veja logs do job "release" no Actions
- Verifique se a tag foi criada corretamente

---

## 🎯 RESULTADO ESPERADO

Após completar todos os passos:

✅ **Branch main:** código atualizado  
✅ **Branch archive/2025_11_13:** snapshot histórico  
✅ **Tag v20251113:** marco de versão  
✅ **Release v20251113:** publicada no GitHub com assets  
✅ **Wayback Machine:** páginas arquivadas  
✅ **README:** VERSION HISTORY atualizado  
🔄 **Internet Archive:** pendente upload manual  

---

**Status:** Pronto para execução  
**Tempo estimado:** 15-20 minutos  
**Data alvo:** 13/11/2025, 3h33 BRT

---

*Comandos preparados por Castro Pizzano (цастро™)*  
*Com assistência de Lovable AI*
