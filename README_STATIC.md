# THEVØIDN13 — Memorial Artístico Estático v2.0

> **Um memorial artístico 100% estático. Zero tracking, zero cookies, zero dados.**

---

## 🎯 Sobre Esta Versão

Esta é a versão **100% estática** do THEVØIDN13, convertida em 19 de Novembro de 2025. O site agora funciona sem qualquer backend, banco de dados, analytics ou coleta de dados—um verdadeiro memorial aberto e sem fricção.

### O Que Mudou

**Removido:**
- ❌ Todo o backend Supabase
- ❌ Google Analytics e tracking
- ❌ Sistema de autenticação
- ❌ Cookies e localStorage
- ❌ Formulários de contato
- ❌ API calls e edge functions

**Mantido:**
- ✅ Todo o conteúdo artístico e visual
- ✅ Navegação completa
- ✅ Troca de idioma PT/EN
- ✅ PWA (funciona offline)
- ✅ Design system completo
- ✅ SEO otimizado

---

## 🚀 Stack Técnico

```
React 18.3.1
TypeScript 5.x
Vite 6.x
Tailwind CSS 3.x
PWA (vite-plugin-pwa)
React Router 6.x
```

**Zero Dependências de Backend**

---

## 📦 Instalação Local

```bash
# Clonar repositório
git clone https://github.com/castropizzano/thevoidn13.git
cd thevoidn13

# Instalar dependências
npm install

# Rodar localmente
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

---

## 🏗️ Estrutura do Projeto

```
thevoidn13/
├── public/
│   ├── documents/          # PDFs acadêmicos
│   ├── audio/              # Arquivos de áudio
│   ├── videos/             # Vídeo intro
│   ├── sitemap.xml         # SEO
│   └── robots.txt          # SEO
├── src/
│   ├── components/         # Componentes React
│   ├── pages/              # Páginas principais
│   ├── hooks/              # Custom hooks
│   ├── contexts/           # Context providers
│   ├── assets/             # Imagens e mídia
│   └── index.css           # Design system
├── index.html              # Entry point
└── vite.config.ts          # Build config
```

---

## 🎨 Páginas Disponíveis

- **`/`** — Homepage (Manifesto Integrado)
- **`/dissertacao`** — LowMovie e pesquisa acadêmica
- **`/autor`** — Biografia de Castro Pizzano
- **`/videos`** — Redirecionamento para portfolio Vimeo
- **`/style-guide`** — Guia de design (desenvolvimento)

---

## 🔒 Privacidade & Segurança

Este site segue os princípios de **Privacy First by Design**:

- ✅ **Zero coleta de dados**: Nenhum dado pessoal é coletado
- ✅ **Zero cookies**: Nenhum dado é armazenado no navegador
- ✅ **Zero tracking**: Sem Google Analytics, pixels ou scripts de terceiros
- ✅ **Zero backend**: Sem servidor, sem banco de dados, sem APIs
- ✅ **100% open source**: Código completamente auditável

### Conformidade Legal
- ✅ LGPD (Brasil)
- ✅ GDPR (União Europeia)
- ✅ CCPA (Califórnia)

---

## ⚡ Performance

### Core Web Vitals (Estimados)
- **LCP** (Largest Contentful Paint): <2.5s
- **FID** (First Input Delay): <100ms
- **CLS** (Cumulative Layout Shift): <0.1

### Lighthouse Scores (Estimados)
- **Performance**: 95-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 95-100

### Otimizações Implementadas
- ✅ PWA com service worker
- ✅ Cache agressivo de assets
- ✅ Lazy loading de imagens
- ✅ Font optimization
- ✅ Code splitting
- ✅ Minificação automática

---

## 🌍 SEO

### Meta Tags Completas
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Canonical URLs
- ✅ Hreflang (PT-BR/EN)
- ✅ Structured Data (JSON-LD)

### Sitemap & Robots
- ✅ `sitemap.xml` atualizado
- ✅ `robots.txt` otimizado
- ✅ Sem bloqueios desnecessários

---

## 📱 PWA (Progressive Web App)

O THEVØIDN13 pode ser instalado como app:

### Features PWA
- ✅ Funciona offline
- ✅ Installable (Add to Home Screen)
- ✅ App-like experience
- ✅ Cache inteligente
- ✅ Updates automáticos

### Instalação
1. Acesse o site no Chrome/Edge/Safari
2. Clique em "Instalar" quando o prompt aparecer
3. Ou: Menu → "Instalar THEVØIDN13"

---

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Dev server (localhost:8080)

# Build
npm run build            # Build para produção
npm run preview          # Preview do build

# Type checking
npm run type-check       # Verificar tipos TypeScript

# Linting
npm run lint             # ESLint
```

### Estrutura de Build

```
dist/
├── index.html
├── assets/
│   ├── *.css           # CSS minificado
│   ├── *.js            # JS minificado e code-split
│   └── *.(png|jpg)     # Imagens otimizadas
└── pwa-*.png           # PWA icons
```

---

## 🎓 Contexto Acadêmico

Este projeto é parte da pesquisa de mestrado em Cinema e Artes do Vídeo (PPG-CINEAV/UNESPAR) por Castro Pizzano (цастро™).

### Temas de Pesquisa
- Co-criação humano-máquina
- Práxis híbrida em arte digital
- Cinema experimental e anti-branding
- Interfaces de sombra e vazio

### Documentação Acadêmica
- **Shadow Interface Bible v1.3**: `/documents/THEVOIDN13_ShadowInterfaceBible_v13.pdf`
- **Memorial Acadêmico**: `/documents/Memorial_Academico.pdf`

---

## 📄 Licença

Este projeto está sob licença MIT. Veja `LICENSE.md` para detalhes.

### Uso e Atribuição
- ✅ Livre para uso pessoal e educacional
- ✅ Requer atribuição ao autor
- ✅ Código open source
- ⚠️ Conteúdo artístico © Castro Pizzano

---

## 🔗 Links Úteis

- **Site**: [thevoidn13.lovableproject.com](https://thevoidn13.lovableproject.com)
- **Vimeo**: [vimeo.com/castropizzano](https://vimeo.com/castropizzano)
- **GitHub**: [github.com/castropizzano/thevoidn13](https://github.com/castropizzano/thevoidn13)

---

## 📞 Contato

**Castro Pizzano (цастро™)**  
Artista Visual, Designer, Filmmaker

- 🎓 Mestrando em Cinema e Artes do Vídeo (UNESPAR)
- 🎨 CasaTrezeStudio® | LowPressure™ | LowMovie™

*Para questões sobre o projeto, utilize os canais públicos listados na página /autor*

---

## 🌟 Filosofia do Projeto

> "O vazio não é falta, é incubação de forma. Silêncio como respiração. THEVØIDN13 como presença que respira onde o corpo falha."

Este memorial existe como um espaço de exploração livre—sem barreiras, sem coleta de informações, sem vigilância. Um arquivo vivo de processos criativos, pensamento crítico e experimentação estética.

---

**Versão**: 2.0 (Static Memorial)  
**Data**: 19 de Novembro de 2025  
**Status**: ✅ Production Ready
