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

**Público:** Banca de defesa, desenvolvedores, futuros colaboradores.

───────────────────────────────────────────────────────────────  
## VISÃO GERAL DA ARQUITETURA  
───────────────────────────────────────────────────────────────
```
THEVOIDN13 Memorial
│
├─ [FRONTEND] React + TypeScript (100% Estático)
│  ├─ Vite (build tool)
│  ├─ React Router (navegação)
│  ├─ Tailwind CSS (design system)
│  ├─ shadcn/ui (componentes)
│  └─ Pollinations.AI (geração de imagens IA, 100% client-side)
│
├─ [BACKEND] Lovable Cloud (Supabase) - MÍNIMO
│  ├─ Secrets Management
│  └─ Vimeo API Integration
│
├─ [CO-CRIAÇÃO] Humano + IA
│  ├─ Lovable AI (Claude, Gemini) - desenvolvimento
│  ├─ Pollinations.AI FLUX - geração de stills pelos usuários (zero auth)
│  ├─ Midjourney (imagens conceituais)
│  └─ Adobe Creative Cloud (edição)
│
├─ [HOSPEDAGEM] Lovable Platform
│  ├─ Deploy automático
│  ├─ Preview sandbox
│  └─ Domain customizável
│
└─ [ASSETS] Vimeo + Local
   ├─ Vídeos → Vimeo (streaming)
   ├─ Imagens → /src/assets/
   └─ Documentos → /public/documents/
```

───────────────────────────────────────────────────────────────  
## CAMADA 1: FRONTEND  
───────────────────────────────────────────────────────────────

### Stack Principal

**Framework:** React 18.3.1  
**Language:** TypeScript  
**Build Tool:** Vite  
**Router:** React Router DOM 6.30.1

**Justificativa:**
- Desenvolvimento ágil com componentes reutilizáveis
- Type safety com TypeScript
- Build otimizado com Vite (HMR, tree-shaking)
- Navegação client-side fluida

### Design System

**Estilização:** Tailwind CSS 3.4.1  
**Componentes:** shadcn/ui  
**Animações:** tailwindcss-animate

**Paleta Semântica (Shadow Interface Bible v13):**
```css
/* Design System - index.css (Bible v13) */
:root {
  --background: 0 0% 10.2%;    /* #1A1A1A - Preto Sombra */
  --foreground: 0 0% 90%;      /* #E6E6E6 - Cinza Fantasma */
  --card: 0 0% 12%;            /* #1F1F1F - Elevação */
  --primary: 0 100% 38.4%;     /* #C40000 - Vermelho Sintético */
  --muted: 0 0% 20%;           /* #333333 - Bordas, elementos muted */
}
```

**Cores Canônicas (Bible v13):**  
Preto Sombra: `#1A1A1A` (fundo global)  
Branco Vazio: `#FFFFFF` (títulos)  
Cinza Fantasma: `#E6E6E6` (texto corpo)  
Vermelho Sintético: `#C40000` (primária, tags, links)

**Hierarquia Tipográfica (Shadow Interface Bible v13):**  
Fonte: Manrope (peso variável)

- Títulos: Bold 16pt uppercase (#FFFFFF - Branco Vazio)
- Subtítulos: Semibold 15pt uppercase (#FFFFFF)
- Tags: Medium 13pt uppercase (#C40000 - Vermelho Sintético)
- Textos: Regular 13pt normal case (#E6E6E6 - Cinza Fantasma)
- Links: Regular 11pt normal case (#C40000)

**Implementação Web:**
- `.title` → 16px/1rem font-bold uppercase
- `.subtitle` → 15px/0.9375rem font-semibold uppercase  
- `.lang-pill` → 13px/0.8125rem font-medium uppercase text-primary
- `.body-base` → 13px/0.8125rem font-regular
- `.body-small` → 13px/0.8125rem font-regular leading-relaxed

**Fontes:**
- Manrope (única fonte oficial - Bible v13)
- Fonte Google Fonts, SIL Open Font License

### Estrutura de Páginas

```
/src/pages/
├── Index.tsx          → Página inicial (hero + intro)
├── Dissertacao.tsx    → LowMovie™ e metodologia
├── Autor.tsx          → Castro Pizzano (autor)
└── Videos.tsx         → Portfolio audiovisual
```

**Componentes Compartilhados:**
- `Header.tsx` → Navegação fixa
- `Footer.tsx` → Rodapé com links
- `BilingualSection.tsx` → Seções PT/EN

───────────────────────────────────────────────────────────────  
## CAMADA 2: BACKEND (LOVABLE CLOUD)  
───────────────────────────────────────────────────────────────

### Lovable Cloud (Supabase)

**Project ID:** mkigpkfahuqkqxocsyjn

**Recursos Utilizados:**
- Edge Functions (serverless Deno)
- Secrets Management
- Environment Variables

### Edge Functions

**Function:** `vimeo-videos`  
**Runtime:** Deno  
**Purpose:** Buscar vídeos da API do Vimeo

**Workflow:**
1. Frontend invoca função via Supabase client
2. Edge function usa `VIMEO_ACCESS_TOKEN` (secret)
3. Fetch à API do Vimeo (`/me/videos`)
4. Transformação de dados
5. Retorno JSON otimizado

**Segurança:**
- Token armazenado como secret
- CORS habilitado
- Rate limiting via Vimeo API

### Secrets

Configurados via Lovable Cloud:
- `VIMEO_ACCESS_TOKEN` → API do Vimeo
- `SUPABASE_*` → Auto-configurados

### Geração de Imagens com IA (Pollinations.AI)

**Plataforma:** Pollinations.AI  
**Modelo:** FLUX (Black Forest Labs)  
**Arquitetura:** 100% Client-side (zero backend, zero autenticação)

**Características:**
- ✅ Gratuito e ilimitado
- ✅ **Zero autenticação** - sem login ou cadastro necessário
- ✅ Zero configuração (sem API keys)
- ✅ Processamento no navegador do usuário
- ✅ Impossível abuso de quota (cada usuário usa seus próprios recursos)
- ✅ Open-source e transparente
- ✅ UX instantânea e sem fricção

**Implementação:**
```typescript
// Frontend-only (ComicGenerator.tsx)
const pollinationsUrl = new URL('https://image.pollinations.ai/prompt/' + encodeURIComponent(detailedPrompt));
pollinationsUrl.searchParams.set('width', '1024');
pollinationsUrl.searchParams.set('height', '1024');
pollinationsUrl.searchParams.set('model', 'flux');
pollinationsUrl.searchParams.set('nologo', 'true');
pollinationsUrl.searchParams.set('enhance', 'true');

const response = await fetch(pollinationsUrl.toString());
const imageBlob = await response.blob();
```

**Prompt Style (Shadow Interface Bible v13):**
O gerador utiliza um prompt cinematográfico detalhado baseado no Shadow Interface Bible v13:
- Estética cinematic dark realism com urban decay
- Máscara branca expressionless, parka verde oliva, iluminação neon azul/vermelho
- Composição cinematográfica, profundidade de campo, grain
- Referências: Blade Runner 2049, Akira, Christiane F.

**Marca d'água:**
Todas as imagens incluem marca d'água THEVØIDN13 (80% opacidade, vermelho #c40000, inferior direito) aplicada via canvas manipulation no frontend.

**Rate Limiting:**
Implementação client-side com `sessionStorage` (cooldown de 10 segundos entre gerações).

**Escolha Estratégica:**
Pollinations.AI foi escolhido por:
- Ser completamente gratuito e ilimitado (sem API keys ou cadastro)
- **Zero autenticação** - usuários não precisam criar conta ou fazer login (vs. Puter.js que exigia login)
- Processar no cliente (zero backend)
- Usar modelo open-source FLUX de alta qualidade
- Alinhar-se perfeitamente com "privacy by architecture"
- UX instantânea sem popups ou fricções

───────────────────────────────────────────────────────────────  
## CAMADA 3: CO-CRIAÇÃO COM IA
───────────────────────────────────────────────────────────────

### Lovable AI

**Plataforma:** ai.gateway.lovable.dev  
**Modelos:**
- `google/gemini-2.5-flash` (default)
- `google/gemini-2.5-pro` (tarefas complexas)
- `openai/gpt-5-mini` (quando necessário)

**Uso no Projeto:**
- Geração de textos conceituais
- Estruturação de documentação
- Prompts para Midjourney
- Co-autoria metodológica

**Declaração:** Textos gerados com IA são sempre revisados e contextualizados pelo autor.

### Midjourney / Adobe Firefly

**Função:** Geração de imagens (estética THEVOIDN13)

**Workflow:**
1. Captura de referência real
2. Prompt baseado na Shadow Interface Bible
3. Geração de variações
4. Seleção manual
5. Pós-produção (Photoshop/Illustrator)
6. Export otimizado → `/src/assets/`

**Prompts Padronizados:**
```
The Void No. 13 — expressionless white mask,
olive-green parka, dim blue neon, red backlight,
wet concrete, cinematic grain, high contrast
```

### Adobe Creative Cloud

**Softwares:**
- Photoshop → Tratamento de imagens
- Illustrator → Identidade visual
- Premiere Pro → Edição de vídeo
- After Effects → Motion graphics

**Nota:** Arquivos-fonte (.psd, .ai) mantidos localmente. Apenas exports otimizados em `/src/assets/`.

───────────────────────────────────────────────────────────────  
## CAMADA 4: GESTÃO DE ASSETS  
───────────────────────────────────────────────────────────────

### Vídeos (Vimeo)

**Estratégia:** Hospedagem externa + embedding

**Workflow:**
1. Edição final (Premiere Pro)
2. Export H.264
3. Upload para Vimeo
4. API retorna metadata + embed URLs
5. Frontend renderiza players

**Vantagens:**
- Sem limitação de tamanho no repo
- Streaming otimizado
- Analytics do Vimeo
- Thumbnails automáticos

### Imagens

**Localização:** `/src/assets/`

**Formatos:**
- PNG → Transparências, logos
- JPG → Fotografias, renders
- WebP → Web (quando suportado)

**Otimização:**
- Redimensionamento (máx 1920px)
- Compressão via TinyPNG
- Lazy loading (React)

**Import ES6:**
```typescript
import heroImage from "@/assets/hero-concept-art.png";
```

### Documentos

**Localização:** `/public/documents/`

**Acesso direto:**
```
/documents/THEVOIDN13_ShadowInterfaceBible_v1.3.pdf
```

───────────────────────────────────────────────────────────────  
## CAMADA 5: DEPLOY E HOSPEDAGEM  
───────────────────────────────────────────────────────────────

### Lovable Platform

**URL Sandbox:**  
`https://77991fba-1759-4282-b7d4-1a8f89499483.lovableproject.com`

**Processo:**
1. Código commitado via Lovable
2. Build automático (Vite)
3. Deploy instantâneo
4. Preview sandbox ativo

**Recursos:**
- Zero-config deployment
- HTTPS automático
- Hot reload durante dev
- Domain customizável (futuro)

### Build

**Comando:** `npm run build`  
**Output:** `/dist/`  
**Otimizações:**
- Code splitting
- Tree shaking
- Asset minification
- Source maps (dev)

───────────────────────────────────────────────────────────────  
## INTEGRAÇÃO VIMEO  
───────────────────────────────────────────────────────────────

### API Vimeo

**Endpoint:** `https://api.vimeo.com/me/videos`  
**Auth:** Bearer token (secret)  
**Rate Limit:** ~1000 req/hour

### Categorização de Vídeos

**Lógica:** Cliente categoriza por keywords

**Categorias:**
- Curta-Metragem / Experimental
- Videoperformance
- Documentário
- Brandbook / Comercial
- Outros

**Algoritmo:**
```typescript
if (name.includes('curta-metragem') || desc.includes('experimental'))
  → Curta-Metragem / Experimental
else if (name.includes('videoperformance'))
  → Videoperformance
...
```

### Player Embedding

**Featured Video:** Background autoplay  
**Catalog:** Click-to-play modal

**Features:**
- Responsive iframes
- Metadata overlay (duração, título)
- Link para Vimeo direto
- Lazy loading

───────────────────────────────────────────────────────────────  
## WORKFLOW DIÁRIO  
───────────────────────────────────────────────────────────────

### Desenvolvimento

**Plataforma:** Lovable Editor

**Processo:**
1. Chat com Lovable AI
2. Code generation + preview
3. Iteração em tempo real
4. Testes visuais no sandbox
5. Commit quando satisfatório

**Vantagens:**
- Zero setup local
- AI-assisted development
- Preview instantâneo
- Versionamento automático

### Co-Criação com IA

**1. PLANEJAMENTO**
- Definir objetivo da sessão
- Revisar documentação

**2. GERAÇÃO**
- Textos via Lovable AI
- Imagens via Midjourney
- Salvar outputs brutos

**3. CURADORIA**
- Selecionar melhores resultados
- Editar no Adobe CC
- Otimizar para web

**4. INTEGRAÇÃO**
- Upload para Vimeo (vídeos)
- Commit assets (imagens)
- Update código (metadata)

**5. DOCUMENTAÇÃO**
- Atualizar README/TECH_STACK
- Commit descritivo
- Push para produção

───────────────────────────────────────────────────────────────  
## DEPENDÊNCIAS  
───────────────────────────────────────────────────────────────

### NPM Packages (package.json)

**Core:**
- react: ^18.3.1
- react-dom: ^18.3.1
- react-router-dom: ^6.30.1

**Build:**
- vite: ^5.0.0
- typescript: ~5.6.2

**Styling:**
- tailwindcss: ^3.4.1
- tailwindcss-animate: ^1.0.7
- class-variance-authority: ^0.7.1

**UI Components:**
- @radix-ui/* (shadcn base)
- lucide-react: ^0.462.0

**Backend:**
- @supabase/supabase-js: ^2.76.1
- @tanstack/react-query: ^5.83.0

### Browser Support

**Target:**
- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari 14+

**Features Utilizadas:**
- CSS Grid / Flexbox
- ES6+ (transpilado via Vite)
- Web APIs modernas (Fetch, IntersectionObserver)

───────────────────────────────────────────────────────────────  
## FILOSOFIA ARQUITETURAL: PRIVACY BY ARCHITECTURE  
───────────────────────────────────────────────────────────────

### Princípio: 100% Frontend Estático

O memorial THEVØIDN13 adota uma abordagem de "privacy by architecture" onde 98-100% da aplicação é puramente frontend estático. Esta escolha arquitetural:

1. **Elimina vetores de ataque:** Sem backend = sem APIs vulneráveis a exploração
2. **Zero custo operacional:** Processamento distribuído nos navegadores dos usuários
3. **Transparência total:** Todo código é inspecionável e auditável
4. **Impossível abuso:** Cada usuário consome seus próprios recursos (CPU/RAM)
5. **Alinhamento ético:** Coerente com a filosofia anti-vigilância do projeto

**Exceções justificadas:**
- Vimeo API (apenas para listagem de vídeos, não coleta dados)
- Futuros recursos opcionais que exigem persistência de dados

### Por que Pollinations.AI?

Pollinations.AI foi escolhido como solução definitiva após testar Puter.js, que exigia login obrigatório (contradizendo a filosofia "privacy by architecture").

**Comparativo: Puter.js vs Pollinations.AI**

| Aspecto | Puter.js (Testado) | Pollinations.AI (Implementado) |
|---------|-------------------|-------------------------------|
| **Custo** | Gratuito | Gratuito |
| **Autenticação** | ❌ Login obrigatório (popup modal) | ✅ Zero autenticação |
| **UX** | ❌ Popup frustrante | ✅ Experiência fluida |
| **Privacy** | ⚠️ Coleta dados de usuário | ✅ 100% anônimo |
| **API Keys** | Não requer | Não requer |
| **Modelo** | FLUX.1-Schnell | FLUX (mesmo modelo) |
| **Qualidade** | 1024x1024 | 1024x1024 |
| **Backend** | Client-side | Client-side |
| **Rate Limiting** | N/A | Client-side (contornável) |
| **Filosofia** | ❌ Contradiz "zero vigilância" | ✅ Alinha perfeitamente |

**Por que Pollinations.AI é superior:**
1. **Zero fricção** — Nenhum popup de login, nenhuma conta necessária
2. **Privacy total** — API pública anônima, zero rastreamento
3. **UX perfeita** — Geração instantânea sem interrupções
4. **Filosofia alinhada** — Verdadeiramente "privacy by architecture"
5. **Mesma qualidade** — Modelo FLUX de alta qualidade
6. **Open-source** — Código e modelo totalmente transparentes

───────────────────────────────────────────────────────────────  
## PRÓXIMOS PASSOS TÉCNICOS  
───────────────────────────────────────────────────────────────

### Fase Atual (MVP)

- ✅ Estrutura de páginas
- ✅ Design system base
- ✅ Integração Vimeo
- ✅ Deploy funcional
- ✅ Hierarquia tipográfica
- ✅ Categorização de vídeos

### Fase 2 (Refinamento)

- [ ] SEO optimization (meta tags, sitemap)
- [ ] Performance audit (Lighthouse)
- [ ] Accessibility review (WCAG)
- [ ] Analytics (opcional)

### Fase 3 (Expansão)

- [ ] Search dentro do portfolio
- [ ] Filtros por categoria
- [ ] Playlists customizadas
- [ ] Domain customizado

### Fase 4 (Defesa)

- [ ] Documentação técnica completa
- [ ] Case study do processo
- [ ] Backup de todos assets
- [ ] Preparação de apresentação

───────────────────────────────────────────────────────────────  
## CONSIDERAÇÕES FINAIS  
───────────────────────────────────────────────────────────────

### Princípios Técnicos

**1. AI-First Development**  
Lovable AI como co-criador técnico

**2. Simplicidade sobre complexidade**  
React + TypeScript sem over-engineering

**3. Design System rigoroso**  
Hierarquia tipográfica consistente

**4. Assets otimizados**  
Vimeo para vídeos, /assets para imagens

**5. Transparência metodológica**  
Documentação como parte da obra

### Limitações Conhecidas

- Dependência de Vimeo API
- Sem backend database próprio
- Categorização manual de vídeos
- Sem versão mobile-first (ainda)

### Conclusão Técnica

THEVOIDN13 é um memorial digital construído com tecnologias modernas, mas mantendo foco na essência: arte, filosofia e processo criativo. A stack técnica serve ao conceito, não o contrário.

───────────────────────────────────────────────────────────────

**Stack Version:** 2.1 (Pollinations.AI - Final)  
**Last Update:** Novembro 2025  
**Maintainer:** Castro Pizzano (цастро™)

───────────────────────────────────────────────────────────────
