# 🎯 MARCO DE LANÇAMENTO v20251113

**Data:** 13 de novembro de 2025, 3h33 (BRT)  
**Versão:** v20251113  
**Status:** ✅ PRONTO PARA EXECUÇÃO

---

## 🚀 ROTEIRO COMPLETO DO DIA

### 📍 O QUE FAZER AGORA (ORDEM EXATA)

---

#### ✅ **ETAPA 1: GIT PUSH E AUTOMAÇÃO**

```bash
# 1. Push para main (ativa GitHub Actions)
git push origin main

# Aguarde o workflow rodar (3-5 min)
# Acompanhe em: https://github.com/[seu-usuario]/thevoidn13/actions
```

**O que acontece automaticamente:**
- ✅ Build do projeto
- ✅ Snapshot para Wayback Machine
- ✅ Artifacts salvos por 30 dias
- ✅ Summary do deployment

---

#### ✅ **ETAPA 2: CRIAR BRANCH ARCHIVE**

```bash
# 2. Criar branch de preservação histórica
git checkout -b archive/2025_11_13
git push origin archive/2025_11_13
git checkout main
```

**Propósito:** Snapshot perpétuo deste momento exato.

---

#### ✅ **ETAPA 3: CRIAR TAG E RELEASE**

```bash
# 3. Criar tag anotada
git tag -a v20251113 -m "Release v20251113 — Marco de Lançamento (2025-11-13 03:33 BRT)"
git push origin v20251113

# 4. Criar release no GitHub (escolha uma opção)
```

**Opção A - GitHub CLI (recomendado):**
```bash
gh release create v20251113 \
  --title "v20251113 — Marco de Lançamento (2025-11-13 03:33 BRT)" \
  --notes-file RELEASE_NOTES_v20251113.md \
  --latest
```

**Opção B - Interface GitHub:**
1. Vá em: https://github.com/[seu-usuario]/thevoidn13/releases/new
2. Tag: `v20251113`
3. Title: `v20251113 — Marco de Lançamento (2025-11-13 03:33 BRT)`
4. Description: Cole `RELEASE_NOTES_v20251113.md`
5. Publish release

**Aguarde:** GitHub Actions vai gerar automaticamente:
- `thevoidn13-v20251113.tar.gz`
- `thevoidn13-v20251113.zip`

---

#### ✅ **ETAPA 4: PREPARAR PACOTE PARA INTERNET ARCHIVE**

```bash
# 5. Gerar ZIPs dos artefatos

# Build completo (já foi gerado pelo workflow, mas se precisar local)
bun run build
cd dist/
zip -r ../thevoidn13-v20251113-build.zip .
cd ..

# PDFs acadêmicos
cd public/documents/
zip -r ../../thevoidn13-v20251113-pdfs.zip *.pdf
cd ../..

# Áudios narrados
cd public/audio/
zip -r ../../thevoidn13-v20251113-audio.zip *.mp3
cd ../..

# Código-fonte (sem node_modules, .git, dist)
zip -r thevoidn13-v20251113-source.zip . \
  -x "node_modules/*" \
  -x ".git/*" \
  -x "dist/*" \
  -x "*.log" \
  -x ".env"
```

**Resultado esperado:**
```
thevoidn13-v20251113-build.zip    (~25MB)
thevoidn13-v20251113-pdfs.zip     (~50-100MB)
thevoidn13-v20251113-audio.zip    (~30-50MB)
thevoidn13-v20251113-source.zip   (~5-10MB)
```

---

#### ✅ **ETAPA 5: UPLOAD NO INTERNET ARCHIVE**

**Siga o guia completo:** `INTERNET_ARCHIVE_GUIDE.md`

**Resumo rápido:**

1. **Criar conta:** https://archive.org/account/signup
2. **Ir para Upload:** https://archive.org/upload/
3. **Identifier:** `thevoidn13_v20251113`
4. **Title:** `THEVØIDN13 v20251113 — Memorial Artístico e Práxis Híbrida`
5. **Upload arquivos** (nesta ordem):
   - `thevoidn13-v20251113-source.zip`
   - `thevoidn13-v20251113-build.zip`
   - `thevoidn13-v20251113-pdfs.zip`
   - `thevoidn13-v20251113-audio.zip`
   - `README.md`
   - `RELEASE_NOTES_v20251113.md`
   - `LICENSE.md`

6. **Preencher metadados:**
   ```
   Creator: Castro Pizzano (цастро™)
   Date: 2025-11-13
   Language: Portuguese/English
   License: CC BY-NC-SA 4.0
   Subject Tags: arte digital, dissertação, mestrado, artes visuais, 
                 inteligência artificial, práxis híbrida, design de interfaces,
                 cultura punk, narrativas visuais, thevoidn13
   ```

7. **Aguardar processamento** (30-60 min)

---

#### ✅ **ETAPA 6: ATUALIZAR LINKS**

Após o Internet Archive processar:

```bash
# 6. Atualizar README com link do Archive
# Edite README.md linha ~287 (seção VERSION HISTORY)
# Adicione:
# **Internet Archive:** https://archive.org/details/thevoidn13_v20251113

git add README.md
git commit -m "docs: add Internet Archive link to v20251113"
git push origin main
```

---

## 📋 CHECKLIST FINAL

Marque conforme completa:

### Git & GitHub
- [ ] ✅ Push para `main` executado
- [ ] ✅ GitHub Actions workflow completou
- [ ] ✅ Branch `archive/2025_11_13` criada
- [ ] ✅ Tag `v20251113` criada e pushed
- [ ] ✅ Release publicada no GitHub
- [ ] ✅ Assets (ZIP/TAR) gerados automaticamente
- [ ] ✅ Wayback Machine arquivou páginas

### Internet Archive
- [ ] ✅ ZIPs gerados (build, PDFs, audio, source)
- [ ] ✅ Conta no Internet Archive criada/logada
- [ ] ✅ Item `thevoidn13_v20251113` criado
- [ ] ✅ Todos os arquivos uploaded
- [ ] ✅ Metadados preenchidos corretamente
- [ ] ✅ Processamento completo (item público)

### Documentação
- [ ] ✅ README.md atualizado com VERSION HISTORY
- [ ] ✅ Link do Internet Archive adicionado
- [ ] ✅ Commit final pushed

---

## 🔗 LINKS IMPORTANTES

**Documentação criada hoje:**
- `README.md` — Seção VERSION HISTORY adicionada
- `RELEASE_NOTES_v20251113.md` — Notas detalhadas da release
- `INTERNET_ARCHIVE_GUIDE.md` — Guia de upload step-by-step
- `GIT_RELEASE_COMMANDS.md` — Comandos Git completos
- `MARCO_LANCAMENTO_13112025.md` — Este arquivo (roteiro do dia)

**GitHub:**
- Repositório: https://github.com/[seu-usuario]/thevoidn13
- Actions: https://github.com/[seu-usuario]/thevoidn13/actions
- Releases: https://github.com/[seu-usuario]/thevoidn13/releases
- Tag v20251113: https://github.com/[seu-usuario]/thevoidn13/releases/tag/v20251113

**Internet Archive:**
- Upload: https://archive.org/upload/
- Item (após criar): https://archive.org/details/thevoidn13_v20251113

**Portal:**
- Live: https://thevoidn13.com
- Wayback: https://web.archive.org/web/*/thevoidn13.com

---

## ⏱️ TEMPO ESTIMADO

```
Etapa 1 (Git push):           5 min
Etapa 2 (Branch archive):     1 min
Etapa 3 (Tag + Release):      5 min
Etapa 4 (Gerar ZIPs):         10 min
Etapa 5 (Upload Archive):     30-60 min (upload + processamento)
Etapa 6 (Atualizar links):    2 min
─────────────────────────────────────
TOTAL:                        ~1h (estimado)
```

---

## 🎯 RESULTADO ESPERADO AO FINAL DO DIA

✅ **Release v20251113 publicada** no GitHub  
✅ **Branch archive/2025_11_13** preservada  
✅ **Wayback Machine** com snapshot de todas as páginas  
✅ **Internet Archive** com pacote cultural completo  
✅ **README.md** atualizado com timeline oficial  
✅ **Links permanentes** para citação acadêmica  

**Status do Projeto:**
```
Version:     v20251113 ✅
Security:    95/100 🔒
Status:      Production Ready 🚀
Archive:     Perpetual Preservation 🏛️
Timestamp:   2025-11-13 03:33 BRT ⏰
```

---

## 📜 CITAÇÃO FINAL DESTA VERSÃO

**ABNT:**
```
PIZZANO, C. THEVØIDN13 v20251113 — Memorial Artístico e Práxis Híbrida 
(Humano + Máquina). Curitiba: Unespar, 2025. Disponível em: 
https://thevoidn13.com. Archive: https://archive.org/details/thevoidn13_v20251113. 
Acesso em: 13 nov. 2025.
```

**APA:**
```
Pizzano, C. (2025). THEVØIDN13 v20251113 — Artistic Memorial and Hybrid Praxis 
(Human + Machine). Unespar. https://thevoidn13.com | 
https://archive.org/details/thevoidn13_v20251113
```

---

## 💭 NOTA FINAL

Este é um **marco temporal** — um snapshot perpétuo de 2 anos de pesquisa, 
experimentação e co-criação híbrida.

**THEVØIDN13 não busca exclusividade — busca coerência.**

O código, a palavra e a imagem são portais: devem permanecer abertos, mas jamais anônimos.

---

**Compilado por:** Castro Pizzano (цастро™)  
**Com assistência de:** Lovable AI  
**Data:** 13/11/2025, 3h33 BRT  
**Status:** ✅ READY TO LAUNCH

🚀 **EXECUTE OS COMANDOS E PRESERVE ESTE MOMENTO.** 🚀
