# 🤖 GitHub Actions - Automação THEVØIDN13

Este workflow automatiza o deploy, arquivamento e release do projeto.

## 📋 O que o workflow faz

### A cada push na branch `main`:
1. ✅ Instala dependências com Bun
2. 🏗️ Gera build estático (Vite)
3. 📦 Envia snapshot para Wayback Machine
4. 💾 Salva artifacts do build (30 dias)
5. 📊 Gera summary do deployment

### Quando você cria uma release (tag):
1. 📥 Baixa o build gerado
2. 📦 Cria arquivos `.tar.gz` e `.zip`
3. 🚀 Publica assets na release do GitHub
4. 📊 Gera summary da release

## ⚙️ Configuração necessária

### 1. Adicionar secrets no GitHub (IMPORTANTE!)

Vá em: **Settings → Secrets and variables → Actions → New repository secret**

Adicione os seguintes secrets:

```
VITE_SUPABASE_URL=https://mkigpkfahuqkqxocsyjn.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1raWdwa2ZhaHVxa3F4b2NzeWpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1ODI4NTcsImV4cCI6MjA3NzE1ODg1N30.bHx3qYVWRaNz3f87WxaAGF352xdsAwgvoh97eCozLnQ
VITE_SUPABASE_PROJECT_ID=mkigpkfahuqkqxocsyjn
```

⚠️ **IMPORTANTE:** O `GITHUB_TOKEN` já existe automaticamente, não precisa criar.

### 2. Ajustar URLs do Wayback Machine (opcional)

No arquivo `deploy.yml`, linha 39-45, atualize as URLs para o seu domínio customizado (se tiver):

```bash
URLS=(
  "https://thevoidn13.com"  # Se tiver domínio próprio
  "https://thevoidn13.com/autor"
  # ... etc
)
```

## 🚀 Como usar

### Deployment automático (push na main)

```bash
git add .
git commit -m "feat: nova funcionalidade"
git push origin main
```

O workflow roda automaticamente! Acompanhe em: **Actions → Deploy & Archive**

### Criar release

#### Opção 1: Via GitHub Interface
1. Vá em **Releases → Create a new release**
2. Crie uma tag (exemplo: `v1.0.0`)
3. Título: "THEVØIDN13 v1.0.0"
4. Descrição: Changelog das mudanças
5. Click **Publish release**

#### Opção 2: Via linha de comando
```bash
# Criar tag
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# Criar release via GitHub CLI
gh release create v1.0.0 \
  --title "THEVØIDN13 v1.0.0" \
  --notes "Changelog aqui"
```

## 📦 Wayback Machine

O workflow arquiva automaticamente estas páginas:
- Home (`/`)
- Autor (`/autor`)
- Dissertação (`/dissertacao`)
- Vídeos (`/videos`)
- LowMovie (`/lowmovie`)

Você pode verificar os snapshots em: https://web.archive.org/web/*/seu-site.lovable.app

## 🔍 Monitoramento

### Ver logs do workflow
1. Vá em **Actions**
2. Clique no workflow executado
3. Clique no job para ver logs detalhados

### Ver artifacts gerados
1. Vá em **Actions**
2. Clique no workflow executado
3. Scroll até **Artifacts**
4. Baixe o `dist-{SHA}` se precisar

### Ver release assets
1. Vá em **Releases**
2. Clique na release
3. Baixe os arquivos `.tar.gz` ou `.zip`

## 🎯 Exemplos de uso

### Versionamento semântico recomendado:

- `v1.0.0` - Major release (breaking changes)
- `v1.1.0` - Minor release (new features)
- `v1.1.1` - Patch release (bug fixes)

### Workflow de desenvolvimento:

```bash
# 1. Desenvolver feature
git checkout -b feature/nova-funcionalidade
# ... fazer mudanças ...
git commit -m "feat: adiciona nova funcionalidade"

# 2. Merge na main (via PR ou direto)
git checkout main
git merge feature/nova-funcionalidade
git push origin main
# → Workflow roda automaticamente (build + archive)

# 3. Quando pronto para release
git tag -a v1.1.0 -m "Release v1.1.0"
git push origin v1.1.0
gh release create v1.1.0 --title "v1.1.0" --notes "Changelog"
# → Workflow de release roda (cria assets)
```

## 🛠️ Troubleshooting

### Erro: "VITE_SUPABASE_URL not found"
→ Adicione o secret no GitHub (veja seção Configuração)

### Erro: "Permission denied" ao fazer release
→ Verifique se o `GITHUB_TOKEN` tem permissão de escrita em releases:
- Settings → Actions → General → Workflow permissions → "Read and write permissions"

### Wayback Machine não arquivou
→ Normal! Às vezes demora ou falha. Você pode arquivar manualmente em: https://web.archive.org/save/

### Build falhou
→ Verifique os logs no Actions para ver o erro específico

## 📝 Customizações possíveis

### Adicionar mais páginas ao Wayback Machine
Edite o array `URLS` em `deploy.yml`:

```bash
URLS=(
  "https://seu-site.lovable.app"
  "https://seu-site.lovable.app/nova-pagina"
)
```

### Mudar retenção dos artifacts (padrão: 30 dias)
```yaml
retention-days: 90  # Manter por 90 dias
```

### Adicionar notificações (Discord, Slack, etc.)
Adicione step no final do workflow:

```yaml
- name: Notify Discord
  uses: sarisia/actions-status-discord@v1
  with:
    webhook: ${{ secrets.DISCORD_WEBHOOK }}
```

## 📚 Recursos úteis

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Wayback Machine Save API](https://archive.org/help/wayback_api.php)
- [Semantic Versioning](https://semver.org/)
- [GitHub CLI](https://cli.github.com/)

---

**Nota:** Este workflow foi configurado especificamente para o projeto THEVØIDN13 e usa Bun + Vite + Supabase.
