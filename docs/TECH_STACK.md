TECH STACK — THEVOIDN13  
Infraestrutura Técnica e Workflow de Co-Criação  
por Castro Pizzano (цастро™)  
Curitiba — 2025

───────────────────────────────────────────────────────────────  
(EN)  
TECH STACK — THEVOIDN13  
Technical Infrastructure and Co-Creation Workflow  
by Castro Pizzano (цастро™)  
Curitiba — 2025  
───────────────────────────────────────────────────────────────

## INTRODUÇÃO

Este documento descreve a infraestrutura técnica do memorial THEVOIDN13.

É o complemento técnico de [FILOSOFIA_DO_PROJETO.md](./FILOSOFIA_DO_PROJETO.md):
- FILOSOFIA → explica o "POR QUÊ" (decisões artísticas)
- TECH_STACK → explica o "COMO" (implementação técnica)

**Público:** Banca de defesa, desenvolvedores, futuros colaboradores.

───────────────────────────────────────────────────────────────  
(EN) INTRODUCTION  

This document describes the technical infrastructure of the THEVOIDN13 memorial.

It is the technical complement to [FILOSOFIA_DO_PROJETO.md](./FILOSOFIA_DO_PROJETO.md):
- FILOSOFIA → explains the "WHY" (artistic decisions)
- TECH_STACK → explains the "HOW" (technical implementation)

**Audience:** Defense committee, developers, future collaborators.

───────────────────────────────────────────────────────────────  
## VISÃO GERAL DA ARQUITETURA  
───────────────────────────────────────────────────────────────
```
THEVOIDN13 Memorial
│
├─ [REPOSITÓRIO] GitHub
│  └─ Versionamento, documentação, estrutura
│
├─ [CO-CRIAÇÃO] Humano + IA
│  ├─ Google AI Studio (texto, prompts)
│  ├─ Midjourney / Firefly (imagens)
│  ├─ ElevenLabs (voz sintética)
│  └─ Adobe Creative Cloud (edição)
│
├─ [ASSETS] Arquivos Otimizados
│  ├─ Imagens < 25 MB (PNG, JPG, WebP)
│  ├─ Vídeos via Vimeo (links)
│  └─ Documentos (PDF, MD)
│
└─ [INTERFACE] Portal Web
   ├─ HTML/CSS/JS vanilla
   ├─ GitHub Pages (deploy)
   └─ Estética neon-noir
```

───────────────────────────────────────────────────────────────  
## CAMADA 1: VERSIONAMENTO E REPOSITÓRIO  
───────────────────────────────────────────────────────────────

### GitHub

**Função:** Hub central (Single Source of Truth)

**Por que GitHub:**
- Versionamento completo com Git
- Hospedagem gratuita via GitHub Pages
- Interface web para edição (usado durante o projeto)
- Histórico de commits como diário de bordo

**Estrutura:**
```
/THEVOIDN13/
├── README.md (manifesto)
├── LICENSE.md (CC BY-NC-SA 4.0)
├── /docs/ (metodologia)
├── /assets/ (exports visuais)
├── /src/ (código)
└── /public/ (interface web)
```

Veja [STRUCTURE.md](../STRUCTURE.md) para detalhes.

### Git LFS (Large File Storage)

**Status:** NÃO utilizado

**Justificativa:**  
Optou-se por limitar arquivos a **25 MB** e usar **links externos** (Vimeo)  
em vez de versionar arquivos grandes.

**Vantagens desta escolha:**
- Repositório leve e rápido
- Sem custos de LFS
- Fácil de clonar e navegar

**Desvantagens:**
- Dependência de serviços externos (Vimeo)
- Arquivos brutos não versionados (mantidos localmente)

───────────────────────────────────────────────────────────────  
## CAMADA 2: FERRAMENTAS DE CO-CRIAÇÃO (IA)  
───────────────────────────────────────────────────────────────

### Pipeline de Co-Criação Humano-Máquina
```
1. CAPTURA REAL          → Fotografias, vídeos, sketches
2. ANCORAGEM             → Reference images para IA
3. GERAÇÃO (IA)          → Expansão via algoritmos
4. CURADORIA (HUMANO)    → Seleção e refinamento
5. EDIÇÃO FINAL          → Adobe Creative Cloud
6. EXPORT OTIMIZADO      → Para /assets/
```

### Google AI Studio

**Função:** Geração de texto, prompts, narrativas

**Uso no projeto:**
- Desenvolvimento de manifestos e textos conceituais
- Prompts para geração de imagens
- Estruturação de documentação
- Co-autoria simbólica (humano orienta, IA expande)

**Modelos utilizados:**
- Gemini (texto e análise)
- Bard experimental (brainstorming)

**Declaração de Co-Autoria:**  
Textos gerados com IA são sempre revisados, editados e contextualizados pelo autor.  
A IA funciona como "cúmplice silenciosa", não como substituta.

### Midjourney / Adobe Firefly

**Função:** Geração de imagens (estética THEVOIDN13)

**Workflow:**
1. Captura de referência real (máscara, figurino)
2. Upload como imagem-âncora
3. Prompt detalhado baseado na Shadow Interface Bible:
```
   The Void No. 13 — expressionless white mask, 
   olive-green parka, dim blue neon, red backlight, 
   wet concrete, cinematic grain, high contrast
```
4. Geração de variações
5. Seleção manual das melhores
6. Pós-produção no Photoshop/Illustrator

**Consistência visual mantida via:**
- Reference images fixas
- Prompts padronizados (veja Shadow Interface Bible)
- Estilo-matriz documentado

### ElevenLabs / Síntese de Voz

**Função:** Geração de voz sintética para THEVOIDN13

**Parâmetros:**
- Tom: grave, andrógino
- Velocidade: 0.85× (pausado)
- Respiração: sutil, entre frases
- Timbre: melancólico, contido

**Uso:**
- Narração de vídeos conceituais
- Fragmentos para Instagram (@thevoidno13)
- Experimentos de voz para o portal

### Adobe Creative Cloud

**Função:** Edição final e produção de assets

**Softwares utilizados:**
- **Photoshop:** Tratamento de imagens, composição
- **Illustrator:** Identidade visual, diagramas
- **Premiere Pro:** Edição de vídeo (quando necessário)
- **After Effects:** Motion graphics, efeitos visuais

**Nota:** Arquivos-fonte (.psd, .ai, .aep) são mantidos **localmente**.  
Apenas exports otimizados vão para `/assets/`.

───────────────────────────────────────────────────────────────  
## CAMADA 3: GESTÃO DE ASSETS  
───────────────────────────────────────────────────────────────

### Política de Arquivos

**Regra central:**  
Bruto fica local. Export vai para Git.
```
LOCAL (não versionado):
├── /raw/
│   ├── *.psd (Photoshop)
│   ├── *.ai (Illustrator)
│   ├── *.aep (After Effects)
│   └── *.mp4 (vídeos não editados)

GIT (versionado):
└── /assets/
    ├── *.jpg (otimizado)
    ├── *.png (otimizado)
    └── *.webp (web-ready)
```

### Otimização de Imagens

**Processo:**
1. Export do Adobe em alta qualidade
2. Redimensionamento (máx 2000px largura)
3. Compressão inteligente (TinyPNG, Squoosh)
4. Verificação de tamanho (< 25 MB)
5. Upload para `/assets/`

**Formatos:**
- **JPG:** Fotografias, renders complexos
- **PNG:** Logos, elementos com transparência
- **WebP:** Para web (quando suportado)

### Vídeos

**Estratégia:** Hospedar externamente, linkar no repo

**Workflow:**
1. Edição final no Premiere Pro
2. Export em H.264 (alta qualidade)
3. Upload para **Vimeo** (conta Pro para privacidade)
4. Criar arquivo `.md` em `/links/` com embed

**Exemplo:**
```markdown
# LowMovie™ — Corte Atual

**Status:** Pós-qualificação (julho/2025)

**Vimeo:**  
https://vimeo.com/XXXXXXX

**Senha:** [se privado]

<iframe src="https://player.vimeo.com/video/XXXXXXX" ...>
```

───────────────────────────────────────────────────────────────  
## CAMADA 4: INTERFACE WEB (PORTAL)  
───────────────────────────────────────────────────────────────

### Stack Frontend

**Decisão:** HTML/CSS/JS vanilla (sem frameworks)

**Justificativa:**
- Projeto artístico, não aplicação complexa
- Performance máxima
- Estética minimalista
- Sem dependências externas

**Estrutura planejada:**
```
/public/
├── index.html          → Página principal
├── styles.css          → Estética neon-noir
├── app.js              → Navegação e interações
└── /assets/            → Assets específicos da web
    ├── favicon.ico
    └── og-image.png
```

### Estética Visual

Baseada na **Shadow Interface Bible**:

**Paleta de cores:**
```css
--tvn-bg: #0C0C0C;      /* fundo escuro */
--tvn-fg: #DADADA;      /* texto claro */
--tvn-muted: #323A46;   /* bordas, tons médios */
--tvn-accent: #A32424;  /* vermelho canônico */
```

**Tipografia:**
- Manrope (base)
- Inter 500 (rótulos técnicos)

**Atmosfera:**
- Neon-noir urbano
- Grão 35mm
- Alto contraste
- Silêncio como ritmo

### Deploy

**Plataforma:** GitHub Pages

**Processo:**
1. Código em `/public/`
2. Configurar GitHub Pages (Settings → Pages)
3. Branch: `main`, folder: `/public/`
4. URL gerada automaticamente

**URL esperada:**  
`https://castropizzano.github.io/THEVOIDN13/`

**Status:** A desenvolver (Fase 4)

───────────────────────────────────────────────────────────────  
## CAMADA 5: DOCUMENTAÇÃO E VERSIONAMENTO  
───────────────────────────────────────────────────────────────

### Markdown

**Formato principal:** Markdown (.md)

**Por quê:**
- Legível como texto puro
- Renderizado automaticamente no GitHub
- Portável (pode ser convertido para HTML, PDF, etc)
- Versionável linha por linha

**Convenções:**
- Headers com `#` (não HTML)
- Listas com `-` (não `*`)
- Links relativos sempre que possível
- Código com triple backticks

### Commits

**Formato:** Conventional Commits (adaptado)

Veja [COMMIT_GUIDE.md](./COMMIT_GUIDE.md) para detalhes.

**Estrutura:**
```
tipo(escopo): TÍTULO EM MAIÚSCULAS / english title

Descrição em português.
Contexto adicional quando necessário.

BREAKING CHANGE: se houver mudanças incompatíveis.
```

**Tipos:**
- `feat:` Nova funcionalidade/conteúdo
- `fix:` Correção de erro
- `docs:` Documentação
- `style:` Formatação
- `refactor:` Reestruturação
- `chore:` Manutenção

### Branches

**Estratégia:** Simples (projeto solo)
```
main          → produção (sempre estável)
dev           → desenvolvimento (merge diário)
feat/nome     → features específicas (opcional)
```

**Quando necessário:**
- Criar branch para experimento
- Testar localmente
- Merge para `dev`
- Quando estável, merge para `main`

───────────────────────────────────────────────────────────────  
## WORKFLOW DIÁRIO  
───────────────────────────────────────────────────────────────

### Processo Típico de Trabalho

**1. PLANEJAMENTO (Mental/Anotações)**
- Definir foco do dia
- Revisar STRUCTURE.md para contexto

**2. CO-CRIAÇÃO COM IA**
- Gerar textos/imagens via Google AI Studio, Midjourney
- Salvar outputs brutos em `/raw/` local
- Iterar até satisfatório

**3. CURADORIA E EDIÇÃO**
- Selecionar melhores resultados
- Editar no Adobe Creative Cloud
- Otimizar para web

**4. DOCUMENTAÇÃO**
- Escrever/atualizar .md conforme necessário
- Manter coerência com manifesto

**5. COMMIT E PUSH**
- Adicionar arquivos ao Git
- Commit com mensagem descritiva
- Push para GitHub

**6. REFLEXÃO**
- Registrar insights em `/docs/journal/` (futuro)
- Atualizar roadmap se necessário

### Ferramentas de Suporte

**Editor de código:** VS Code, Sublime, ou GitHub web
**Terminal Git:** (se local) Git Bash, Terminal
**Otimização de imagens:** TinyPNG, Squoosh
**Markdown preview:** Extensões de navegador ou VS Code

───────────────────────────────────────────────────────────────  
## DEPENDÊNCIAS E REQUISITOS  
───────────────────────────────────────────────────────────────

### Para Desenvolvimento Local (Opcional)

Se quiser trabalhar localmente (não é obrigatório):

**Requisitos mínimos:**
- Git instalado
- Editor de texto (VS Code recomendado)
- Navegador moderno (Chrome, Firefox, Safari)

**Comandos básicos:**
```bash
# Clonar repositório
git clone https://github.com/castropizzano/THEVOIDN13.git

# Navegar
cd THEVOIDN13

# Abrir no VS Code
code .

# Commit
git add .
git commit -m "docs: atualizar documentação"
git push origin main
```

### Para Trabalho via GitHub Web (Atual)

**Requisitos:**
- Navegador moderno
- Conta GitHub
- Acesso ao repositório

**Vantagens:**
- Zero setup
- Funciona de qualquer lugar
- Interface intuitiva

**Desvantagens:**
- Não pode testar localmente antes de commit
- Sem preview de mudanças complexas

───────────────────────────────────────────────────────────────  
## PRÓXIMOS PASSOS TÉCNICOS  
───────────────────────────────────────────────────────────────

### Fase Atual (Fundação)

- ✅ Estruturar repositório
- ✅ Documentar metodologia
- ✅ Corrigir configurações (.gitignore, .gitattributes)
- ✅ Criar documentos-chave (README, LICENSE, STRUCTURE, FILOSOFIA, TECH_STACK)

### Fase 2 (Conteúdo)

- [ ] Povoar `/01_lowmovie/` com material do mestrado
- [ ] Criar `/00_thevoidn13/` com Shadow Interface Bible
- [ ] Adicionar assets otimizados em `/assets/`
- [ ] Documentar projetos em `/02_lowpressure/` e `/03_castro_pizzano/`

### Fase 3 (Interface)

- [ ] Desenvolver `/public/index.html` (portal navegável)
- [ ] Implementar estética neon-noir em CSS
- [ ] Adicionar navegação entre seções
- [ ] Configurar GitHub Pages

### Fase 4 (Refinamento)

- [ ] Testes de acessibilidade
- [ ] Otimização de performance
- [ ] Revisão de documentação
- [ ] Preparação para defesa

───────────────────────────────────────────────────────────────  
## CONSIDERAÇÕES FINAIS  
───────────────────────────────────────────────────────────────

### Princípios Técnicos do Projeto

**1. Simplicidade sobre complexidade**  
HTML/CSS/JS vanilla > frameworks pesados

**2. Portabilidade sobre dependências**  
Markdown e assets otimizados > formatos proprietários

**3. Versionamento como diário**  
Git commits documentam o processo, não apenas o produto

**4. IA como cúmplice, não substituta**  
Humano orienta, decide e assina; IA expande possibilidades

**5. Performance artística > performance técnica**  
Headers longos podem "pesar", mas carregam significado

### Stack Resumida
```
REPOSITÓRIO:    GitHub (Git)
VERSIONAMENTO:  Conventional Commits (adaptado)
DOCUMENTAÇÃO:   Markdown
CO-CRIAÇÃO:     Google AI Studio, Midjourney, Adobe CC
ASSETS:         JPG/PNG/WebP < 25 MB, Vimeo para vídeos
INTERFACE:      HTML/CSS/JS vanilla
DEPLOY:         GitHub Pages
```

### Para Mais Informações

- **Filosofia:** [FILOSOFIA_DO_PROJETO.md](./FILOSOFIA_DO_PROJETO.md)
- **Estrutura:** [STRUCTURE.md](../STRUCTURE.md)
- **Commits:** [COMMIT_GUIDE.md](./COMMIT_GUIDE.md)
- **Manifesto:** [README.md](../README.md)

───────────────────────────────────────────────────────────────  
(EN) FINAL CONSIDERATIONS  
───────────────────────────────────────────────────────────────

### Technical Principles of the Project

**1. Simplicity over complexity**  
Vanilla HTML/CSS/JS > heavy frameworks

**2. Portability over dependencies**  
Markdown and optimized assets > proprietary formats

**3. Versioning as diary**  
Git commits document the process, not just the product

**4. AI as accomplice, not substitute**  
Human guides, decides, and signs; AI expands possibilities

**5. Artistic performance > technical performance**  
Long headers may "weigh", but carry meaning

───────────────────────────────────────────────────────────────

© 2025 Castro Pizzano (цастро™)

Este documento pode ser citado e adaptado sob licença CC BY-NC-SA 4.0.

───────────────────────────────────────────────────────────────
