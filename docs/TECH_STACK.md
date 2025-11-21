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

## 🌐 TL;DR (English Summary)

**THEVOIDN13 Technical Infrastructure Overview**

This document details the complete technical stack and co-creation workflow of the THEVOIDN13 memorial project, a master's thesis in Cinema and Video Arts at UNESPAR, Brazil.

**Key Technical Decisions:**
- **98% Static Frontend:** React 18 + TypeScript + Vite + Tailwind CSS
- **2% Backend:** Lovable Cloud (Supabase) with only 1 public read-only table for creative prompts
- **Privacy by Architecture:** Zero tracking, zero cookies, zero data collection
- **AI Co-Creation:** Lovable AI (Claude/Gemini), Midjourney, Adobe Creative Cloud
- **Deployment:** Lovable Platform with automatic builds and custom domain
- **Assets:** Videos hosted on Vimeo, images in `/src/assets/`, documents in `/public/documents/`

**Design System (Shadow Interface Bible v13):**
- Single font: Manrope (variable weight)
- Canonical colors: Black Shadow (#1A1A1A), Empty White (#FFFFFF), Ghost Gray (#E6E6E6), Synthetic Red (#C40000)
- Semantic tokens in HSL format via Tailwind CSS
- Consistent typographic hierarchy across all interfaces

**Human-Machine Workflow:**
1. Planning & documentation review
2. AI-assisted generation (text via Claude/Gemini, images via Midjourney)
3. Human curation and selection
4. Post-production in Adobe Creative Cloud
5. Integration and deployment
6. Documentation and version control

**Philosophical Approach:**
- Privacy over features
- Simplicity over complexity
- Transparency over convenience
- Art over metrics

The architecture eliminates most web vulnerabilities by design: no complex backend, no user authentication, no personal data storage, no vulnerable APIs. Processing is distributed to user browsers, making abuse impossible and maintaining perfect alignment with the project's anti-surveillance philosophy.

For international contributors: All code is English, commits follow bilingual format (PT/EN), and this documentation provides complete technical context for collaboration.

───────────────────────────────────────────────────────────────

## INTRODUÇÃO

Este documento descreve a infraestrutura técnica do memorial THEVØIDN13.

**Público:** Banca de defesa, desenvolvedores, futuros colaboradores.

───────────────────────────────────────────────────────────────  
## VISÃO GERAL DA ARQUITETURA  
───────────────────────────────────────────────────────────────
```
THEVØIDN13 Memorial
│
├─ [FRONTEND] React + TypeScript (98% Estático)
│  ├─ Vite (build tool)
│  ├─ React Router (navegação)
│  ├─ Tailwind CSS (design system)
│  └─ shadcn/ui (componentes)
│
├─ [BACKEND] Lovable Cloud (Supabase) - MÍNIMO (2%)
│  └─ 1 Tabela: prompts (biblioteca pública)
│
├─ [CO-CRIAÇÃO] Humano + IA
│  ├─ Lovable AI (Claude, Gemini) - desenvolvimento
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
├── Videos.tsx         → Portfolio audiovisual
└── Transparency.tsx   → Transparência técnica
```

**Componentes Compartilhados:**
- `Header.tsx` → Navegação fixa
- `Footer.tsx` → Rodapé com badges
- `BilingualSection.tsx` → Seções PT/EN

───────────────────────────────────────────────────────────────  
## CAMADA 2: BACKEND (LOVABLE CLOUD)  
───────────────────────────────────────────────────────────────

### Lovable Cloud (Supabase)

**Project ID:** mkigpkfahuqkqxocsyjn

**Recursos Utilizados:**
- PostgreSQL Database (1 tabela apenas)
- Secrets Management
- Environment Variables

### Database: Tabela `prompts`

**Purpose:** Biblioteca pública de prompts criativos  
**Access:** Read-only (público)  
**Data:** Prompts pré-configurados para uso criativo

```sql
CREATE TABLE prompts (
  id uuid PRIMARY KEY,
  title text NOT NULL,
  category text NOT NULL,
  prompt_text text NOT NULL,
  description text,
  tags text[],
  parameters jsonb,
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Policy: Apenas leitura pública
CREATE POLICY "Anyone can view active prompts" 
ON prompts FOR SELECT 
USING (is_active = true);
```

**Segurança:**
- Nenhum dado pessoal armazenado
- Apenas leitura pública (no INSERT/UPDATE/DELETE)
- Zero tracking
- Zero data collection

### Secrets

Configurados via Lovable Cloud:
- `SUPABASE_URL` → Auto-configurado
- `SUPABASE_PUBLISHABLE_KEY` → Auto-configurado (público)

───────────────────────────────────────────────────────────────  
## CAMADA 3: CO-CRIAÇÃO COM IA
───────────────────────────────────────────────────────────────

### Lovable AI

**Plataforma:** ai.gateway.lovable.dev  
**Modelos:**
- `google/gemini-2.5-flash` (default)
- `google/gemini-2.5-pro` (tarefas complexas)
- `anthropic/claude-3.5-sonnet` (quando necessário)

**Uso no Projeto:**
- Geração de textos conceituais
- Estruturação de documentação
- Prompts criativos
- Co-autoria metodológica
- Desenvolvimento de código

**Declaração:** Textos gerados com IA são sempre revisados e contextualizados pelo autor.

### Midjourney / Adobe Firefly

**Função:** Geração de imagens (estética THEVØIDN13)

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

**Estratégia:** Hospedagem externa + API integration

**Workflow:**
1. Edição final (Premiere Pro)
2. Export H.264
3. Upload para Vimeo
4. API retorna metadata + embed URLs
5. Frontend renderiza players

**Vantagens:**
- Sem limitação de tamanho no repo
- Streaming otimizado
- Thumbnails automáticos
- CDN global

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
/documents/THEVOIDN13_ShadowInterfaceBible_v13.pdf
```

───────────────────────────────────────────────────────────────  
## CAMADA 5: DEPLOY E HOSPEDAGEM  
───────────────────────────────────────────────────────────────

### Lovable Platform

**URL Production:** `https://thevoidn13.com`

**Processo:**
1. Código commitado via Lovable
2. Build automático (Vite)
3. Deploy instantâneo
4. Preview sandbox ativo

**Recursos:**
- Zero-config deployment
- HTTPS automático
- Hot reload durante dev
- Custom domain (thevoidn13.com)

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

### Princípio: 98% Frontend Estático

O memorial THEVØIDN13 adota uma abordagem de "privacy by architecture" onde 98% da aplicação é puramente frontend estático. Esta escolha arquitetural:

1. **Elimina vetores de ataque:** Sem backend complexo = sem APIs vulneráveis
2. **Zero custo operacional:** Processamento distribuído nos navegadores
3. **Transparência total:** Todo código é inspecionável e auditável
4. **Impossível abuso:** Cada usuário consome seus próprios recursos
5. **Alinhamento ético:** Coerente com a filosofia anti-vigilância do projeto

### Armazenamento Mínimo

**sessionStorage** (único mecanismo usado):
- `language` → Preferência de idioma (PT/EN)
- `antiSurveillanceBannerSeen` → Estado do banner (boolean)

**Características:**
- Expira ao fechar navegador
- Local apenas (não enviado a servidores)
- Não contém dados pessoais
- Zero cookies
- Zero tracking

───────────────────────────────────────────────────────────────  
## PRÓXIMOS PASSOS TÉCNICOS  
───────────────────────────────────────────────────────────────

### Fase Atual (Production)

- ✅ Estrutura de páginas
- ✅ Design system Bible v13
- ✅ Integração Vimeo
- ✅ Deploy funcional
- ✅ SEO optimization
- ✅ Privacy by architecture
- ✅ Documentação completa

### Fase 2 (Refinamento)

- [ ] Performance audit continuado
- [ ] Accessibility review (WCAG)
- [ ] PWA enhancements

### Filosofia de Desenvolvimento

**Prioridades:**
1. Privacy acima de features
2. Simplicidade acima de complexidade
3. Transparência acima de conveniência
4. Arte acima de métricas

**Nunca adicionar:**
- ❌ Analytics/tracking
- ❌ Autenticação de usuários
- ❌ Coleta de dados pessoais
- ❌ Cookies desnecessários

───────────────────────────────────────────────────────────────

**© 2025 Castro Pizzano (цастро™)**  
**Projeto THEVØIDN13** — Memorial Artístico e Práxis Híbrida  
**Licença:** Creative Commons BY-NC-SA 4.0

Última atualização: 20 de Novembro de 2025

───────────────────────────────────────────────────────────────
