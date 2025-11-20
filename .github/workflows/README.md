# 🤖 GitHub Actions - Automação THEVØIDN13

Este diretório contém workflows automatizados para o projeto THEVØIDN13.

## 📋 Workflows Disponíveis

### 1. Deploy & Archive (`deploy.yml`)
**Trigger:** Push na branch `main`  
**Propósito:** Deploy automático e arquivamento no Wayback Machine

**Etapas:**
1. ✅ Instala dependências com Bun
2. 🏗️ Gera build estático (Vite)
3. 📦 Envia snapshot para Wayback Machine
4. 💾 Salva artifacts do build (30 dias)
5. 📊 Gera summary do deployment

### 2. Version Bump & Release (`version-bump.yml`)
**Trigger:** Manual dispatch  
**Propósito:** Automatiza versionamento semântico e criação de releases

**Inputs:**
- `version_type`: patch | minor | major
- `release_notes`: Resumo opcional

**Etapas:**
1. Lê versão atual do arquivo `VERSION`
2. Calcula nova versão baseado no tipo
3. Atualiza `VERSION`, `CITATION.cff`, `README.md`
4. Gera release notes do histórico git
5. Adiciona ao `RELEASE_NOTES.md`
6. Cria tag git
7. Cria GitHub Release

**Uso:**
```bash
# Via GitHub UI:
Actions → Version Bump & Release → Run workflow

# Selecione o tipo:
- patch: Correções (2.1.0 → 2.1.1)
- minor: Novas features (2.1.0 → 2.2.0)
- major: Breaking changes (2.1.0 → 3.0.0)
```

**Exemplo:**
```
Version type: minor
Release notes: Integração Creative Oracle com Mind Map

Resultado:
- VERSION atualizado: 2.1.0 → 2.2.0
- Tag criada: v2.2.0
- RELEASE_NOTES.md atualizado
- GitHub Release criada
```

## 📊 Versionamento Semântico

THEVØIDN13 segue SemVer 2.0.0:

**MAJOR.MINOR.PATCH**

- **MAJOR (3.0.0):** Breaking changes
  - Mudanças no schema do banco
  - Breaking changes na API
  - Mudanças arquiteturais importantes

- **MINOR (2.2.0):** Novas features
  - Novos componentes
  - Novas páginas
  - Funcionalidades aprimoradas
  - Adições não-breaking

- **PATCH (2.1.1):** Correções
  - Bug fixes
  - Atualizações de documentação
  - Melhorias de performance
  - Patches de segurança

## ⚙️ Configuração Necessária

### Secrets do GitHub
Vá em: **Settings → Secrets and variables → Actions**

```
VITE_SUPABASE_URL=https://mkigpkfahuqkqxocsyjn.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=[sua chave anon]
VITE_SUPABASE_PROJECT_ID=mkigpkfahuqkqxocsyjn
```

⚠️ **GITHUB_TOKEN** é fornecido automaticamente.

### Permissões
Settings → Actions → General → Workflow permissions:
- ✅ "Read and write permissions"

## 🚀 Como Usar

### Deploy Automático
```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main  # Workflow roda automaticamente
```

### Criar Release (Manual Alternativo)
```bash
# 1. Atualizar VERSION
echo "2.1.1" > VERSION

# 2. Atualizar CITATION.cff
# Editar manualmente: version e date-released

# 3. Atualizar badges no README.md
# Substituir Version-2.1.0- por Version-2.1.1-

# 4. Adicionar release notes ao RELEASE_NOTES.md
# Inserir nova seção de release no topo

# 5. Commit e tag
git add VERSION CITATION.cff README.md RELEASE_NOTES.md
git commit -m "chore: bump version to 2.1.1"
git tag -a v2.1.1 -m "Release v2.1.1"
git push origin main
git push origin v2.1.1
```

## 📦 Wayback Machine

Páginas arquivadas automaticamente:
- Home (`/`)
- Autor (`/autor`)
- Dissertação (`/dissertacao`)
- Vídeos (`/videos`)

Verificar snapshots: https://web.archive.org/web/*/thevoidn13.com

## 🔍 Monitoramento

### Ver Logs
1. Actions → Workflow executado → Job → Logs

### Ver Artifacts
1. Actions → Workflow executado → Artifacts → Download

### Ver Releases
1. Releases → Selecionar release → Assets

## 🛠️ Troubleshooting

| Erro | Solução |
|------|---------|
| "VITE_SUPABASE_URL not found" | Adicionar secret no GitHub |
| "Permission denied" | Ativar "Read and write permissions" |
| Wayback falhou | Normal, tentar manualmente em web.archive.org/save |
| Build falhou | Verificar logs no Actions |

## 📚 Recursos

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Wayback Machine API](https://archive.org/help/wayback_api.php)
- [Semantic Versioning](https://semver.org/)
- [GitHub CLI](https://cli.github.com/)

---

*Last Updated: November 20, 2025*  
*THEVØIDN13 — Memorial Artístico e Práxis Híbrida*

## ⚙️ Configuração Necessária

### Secrets do GitHub
Vá em: **Settings → Secrets and variables → Actions**

```
VITE_SUPABASE_URL=https://mkigpkfahuqkqxocsyjn.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=[sua chave anon]
VITE_SUPABASE_PROJECT_ID=mkigpkfahuqkqxocsyjn
```

⚠️ **GITHUB_TOKEN** é fornecido automaticamente.

### Permissões
Settings → Actions → General → Workflow permissions:
- ✅ "Read and write permissions"

## 🚀 Como Usar

### Deploy Automático
```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main  # Workflow roda automaticamente
```

### Versionamento Automático (Workflow)
```bash
# Via GitHub UI:
Actions → Version Bump & Release → Run workflow

# Selecione o tipo:
- patch: Bug fixes (2.1.0 → 2.1.1)
- minor: New features (2.1.0 → 2.2.0)
- major: Breaking changes (2.1.0 → 3.0.0)
```

### Versionamento Manual (Alternativo)
```bash
# 1. Atualizar VERSION
echo "2.1.1" > VERSION

# 2. Atualizar CITATION.cff
# Editar: version e date-released

# 3. Atualizar badges no README.md
# Substituir Version-2.1.0- por Version-2.1.1-

# 4. Adicionar release notes
# Inserir no topo do RELEASE_NOTES.md

# 5. Commit e tag
git add VERSION CITATION.cff README.md RELEASE_NOTES.md
git commit -m "chore: bump version to 2.1.1"
git tag -a v2.1.1 -m "Release v2.1.1"
git push origin main
git push origin v2.1.1
```

## 📦 Wayback Machine

Páginas arquivadas automaticamente:
- Home (`/`)
- Autor (`/autor`)
- Dissertação (`/dissertacao`)
- Vídeos (`/videos`)

Verificar: https://web.archive.org/web/*/thevoidn13.com

## 🔍 Monitoramento

**Ver Logs:** Actions → Workflow → Job → Logs  
**Ver Artifacts:** Actions → Workflow → Artifacts  
**Ver Releases:** Releases → Selecionar → Assets

## 🛠️ Troubleshooting

| Erro | Solução |
|------|---------|
| "VITE_SUPABASE_URL not found" | Adicionar secret no GitHub |
| "Permission denied" na release | Ativar "Read and write permissions" |
| Wayback falhou | Normal, arquivar manualmente em web.archive.org/save |
| Build falhou | Ver logs no Actions para detalhes |

## 📚 Recursos

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Wayback Machine API](https://archive.org/help/wayback_api.php)
- [Semantic Versioning](https://semver.org/)
- [GitHub CLI](https://cli.github.com/)

---

*Last Updated: November 20, 2025*  
*THEVØIDN13 — Memorial Artístico e Práxis Híbrida*
