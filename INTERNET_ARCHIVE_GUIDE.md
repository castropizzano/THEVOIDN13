# 📦 Guia de Upload para Internet Archive

**Objetivo:** Preservar permanentemente o pacote cultural digital THEVØIDN13 v20251113

---

## 🎯 O QUE SUBIR

### Estrutura do Upload

Criar um **único item** no Internet Archive chamado:
```
thevoidn13_v20251113
```

Com os seguintes arquivos:

### 1. Build Completo (ZIP)
```
thevoidn13-v20251113-build.zip
```
**Contém:**
- Pasta `dist/` completa (build estático)
- Todos os assets compilados
- HTML/CSS/JS minificados

**Como gerar:**
```bash
# Na raiz do projeto
bun run build
cd dist/
zip -r ../thevoidn13-v20251113-build.zip .
```

### 2. Documentos Acadêmicos (PDFs)
```
thevoidn13-v20251113-pdfs.zip
```
**Contém:**
```
THEVOIDN13_ShadowInterfaceBible_v13.pdf
Memorial_Academico.pdf
Memorial_Academico_Ecos_Criativos.pdf
LowMovie_brandbook.pdf
LowPressure_brandbook.pdf
CasaTrezeStudio_Release.pdf
Skate_Punk_Interview_Transcript.pdf
Black_Media_Skate_LowMovie_Interview.pdf
Gabriel_Peralta_Photos_Interview.pdf
Rafao_VM_Skate_Marginal_Interview.pdf
Werner_Herzog_Skateboarding_Interview.pdf
```

**Como gerar:**
```bash
cd public/documents/
zip -r ../../thevoidn13-v20251113-pdfs.zip *.pdf
```

### 3. Áudios Narrados
```
thevoidn13-v20251113-audio.zip
```
**Contém:**
```
thevoidn13-manifesto-pt.mp3
thevoidn13-manifesto-en.mp3
thevoidn13-projeto.mp3
thevoidn13-resumo.mp3
Shadow_In_The_Dark.mp3
```

**Como gerar:**
```bash
cd public/audio/
zip -r ../../thevoidn13-v20251113-audio.zip *.mp3
```

### 4. Repositório Completo (Source Code)
```
thevoidn13-v20251113-source.zip
```
**Contém:**
- Todo o código-fonte
- Documentação markdown
- Configs
- **Excluir:** `node_modules/`, `.git/`, `dist/`

**Como gerar:**
```bash
# Na raiz do projeto
zip -r thevoidn13-v20251113-source.zip . \
  -x "node_modules/*" \
  -x ".git/*" \
  -x "dist/*" \
  -x "*.log" \
  -x ".env"
```

### 5. README e Release Notes
```
README.md
RELEASE_NOTES_v20251113.md
LICENSE.md
```

---

## 🌐 PASSO A PASSO DO UPLOAD

### 1. Criar conta no Internet Archive
https://archive.org/account/signup

### 2. Ir para Upload
https://archive.org/upload/

### 3. Preencher Metadados

**Identifier (URL):**
```
thevoidn13_v20251113
```

**Title:**
```
THEVØIDN13 v20251113 — Memorial Artístico e Práxis Híbrida (Humano + Máquina)
```

**Description:**
```
Memorial artístico e dissertação de mestrado em Artes Visuais (Unespar, 2025).
Projeto experimental de práxis híbrida (humano + máquina) explorando linguagens do vazio, 
estética punk/underground, e co-criação com IA.

Desenvolvido por Castro Pizzano (цастро™) entre 2023-2025.

Conteúdo desta release:
- Build estático completo do portal web
- 12 PDFs acadêmicos (dissertação, entrevistas, brandbooks)
- 5 áudios narrados bilíngues (PT/EN)
- Código-fonte completo
- Shadow Interface Bible v13
- Documentação técnica e metodológica

Portal oficial: https://thevoidn13.com
GitHub: https://github.com/[seu-usuario]/thevoidn13
Licença: CC BY-NC-SA 4.0

Palavras-chave: arte digital, práxis híbrida, inteligência artificial, estética punk, 
design de interfaces, narrativas visuais, memória cultural, arquivamento digital
```

**Creator:**
```
Castro Pizzano (цастро™)
```

**Date:**
```
2025-11-13
```

**Subject Tags (separados por vírgula):**
```
arte digital, dissertação, mestrado, artes visuais, inteligência artificial, 
práxis híbrida, design de interfaces, cultura punk, narrativas visuais, 
memória cultural, curitiba, brasil, 2025, thevoidn13, castro pizzano
```

**Language:**
```
Portuguese/English (bilingual)
```

**Media Type:**
```
Software
```

**Collection:**
```
opensource
community_texts (adicional)
```

**License:**
```
Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)
```

---

## 📤 ORDEM DE UPLOAD DOS ARQUIVOS

Upload nesta ordem (do maior para o menor):

1. ✅ `thevoidn13-v20251113-source.zip` (~5-10MB)
2. ✅ `thevoidn13-v20251113-build.zip` (~25MB)
3. ✅ `thevoidn13-v20251113-pdfs.zip` (~50-100MB)
4. ✅ `thevoidn13-v20251113-audio.zip` (~30-50MB)
5. ✅ `README.md`
6. ✅ `RELEASE_NOTES_v20251113.md`
7. ✅ `LICENSE.md`

**IMPORTANTE:** Aguarde cada arquivo ser processado antes de subir o próximo.

---

## ✅ APÓS O UPLOAD

### 1. Verificar se o item está público
URL esperada:
```
https://archive.org/details/thevoidn13_v20251113
```

### 2. Copiar o link permanente
Exemplo:
```
https://archive.org/details/thevoidn13_v20251113
```

### 3. Atualizar README.md do GitHub
Adicionar o link do Internet Archive na seção de VERSION HISTORY:

```markdown
**Internet Archive:** https://archive.org/details/thevoidn13_v20251113
```

### 4. Atualizar Release Notes no GitHub
Adicionar o link na release `v20251113`:

```
Archive: https://archive.org/details/thevoidn13_v20251113
```

### 5. Commit final
```bash
git add README.md RELEASE_NOTES_v20251113.md
git commit -m "docs: add Internet Archive link to v20251113 release"
git push origin main
```

---

## 🔗 LINKS ÚTEIS

- **Internet Archive Upload:** https://archive.org/upload/
- **Metadata Guidelines:** https://help.archive.org/help/metadata/
- **Software Collection:** https://archive.org/details/software
- **CC BY-NC-SA 4.0 License:** https://creativecommons.org/licenses/by-nc-sa/4.0/

---

## 📊 ESTATÍSTICAS ESTIMADAS

```
Total Upload Size: ~120-200MB
Upload Time (100Mbps): ~5-10 minutos
Processing Time: 30-60 minutos
Permanência: Perpétua (Internet Archive preserva indefinidamente)
```

---

## ⚠️ IMPORTANTE

1. **Não incluir secrets** (.env, tokens, API keys)
2. **Não incluir node_modules** (muito grande e desnecessário)
3. **Verificar licenças** de todos os assets antes do upload
4. **Testar os ZIPs** antes de subir (extrair e verificar conteúdo)
5. **Aguardar processamento** completo antes de divulgar o link

---

## 🎯 RESULTADO FINAL

Após o upload bem-sucedido, você terá:

✅ URL permanente no Internet Archive  
✅ Download público de todos os artefatos  
✅ Metadados indexados para busca  
✅ Backup perpétuo do projeto  
✅ DOI-like permanent identifier  
✅ Citação acadêmica possível  

**O projeto THEVØIDN13 estará preservado para sempre.** 🏛️

---

*Guia preparado em 13/11/2025, 3h33 BRT*  
*Castro Pizzano (цастро™)*
