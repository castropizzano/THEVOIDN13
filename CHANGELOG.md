# Changelog — THEVØIDN13

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

───────────────────────────────────────────────────────────────

## [2025-01-31] - Atualização Shadow Interface Bible v13

### Changed
- Atualizado sistema de cores conforme Shadow Interface Bible v13
  - Background: #1A1A1A (Preto Sombra)
  - Primary: #C40000 (Vermelho Sintético)
  - Foreground: #E6E6E6 (Cinza Fantasma)
  - Títulos: #FFFFFF (Branco Vazio)
- Padronizada grafia THEVØIDN13 em toda documentação (com Ø)
- Fonte única: Manrope (conforme especificação oficial)
- Atualizado TECH_STACK.md com especificações oficiais do Bible
- URLs atualizadas para https://thevoidn13.com
- Documentação alinhada com identidade visual canônica

───────────────────────────────────────────────────────────────

## [2025-01-30] - Expansão do Memorial

### Added
- Creative Oracle (Oráculo Criativo) com sistema de arquétipos junguianos
- Still Generator (Nano Banana) com integração Lovable AI
- Biblioteca de Prompts documentada e categorizada
- Creative-Ops Mind Map em formato dialog
- Seção Protótipo Nº13 expandida com contexto conceitual
- BilingualSection component padronizado

### Changed
- Tipografia padronizada conforme TYPOGRAPHY_GUIDE.md
- Sistema de cores unificado em index.css
- Melhoria em performance e acessibilidade
- Layout responsivo otimizado

───────────────────────────────────────────────────────────────

## [2025-01-28] - Melhorias de UX, Performance e Administração

### Added

**Sistema de Acesso e Newsletter**
- Access Gate: Cadastro obrigatório (email + nome) antes de acessar o site
- Cookie Consent: Banner de consentimento conforme LGPD/GDPR
- Newsletter Database: Tabela `newsletter_subscribers` com coleta completa
  - Email e nome completo
  - Consentimento explícito (LGPD)
  - IP address e User Agent para auditoria
  - Timestamp de inscrição

**Dashboard Administrativo**
- Admin Dashboard (`/admin/dashboard`): Gestão completa de inscritos
  - Estatísticas em tempo real (total, novos hoje, taxa de consentimento)
  - Busca por nome ou email
  - Exclusão de inscritos com confirmação
  - Exportação para CSV com todos os dados
- Integração no Admin Panel: Acesso rápido via card no painel principal

### Optimizations

**Componentes Otimizados**
- OptimizedImage: Componente com lazy loading automático
  - Intersection Observer para carregamento sob demanda
  - Skeleton loading durante carregamento
  - Prioridade configurável para imagens above-the-fold
  - Suporte a aspect ratio
  
- LoadingSpinner: Spinner de carregamento consistente
  - 4 tamanhos (sm, md, lg, xl)
  - Texto de loading opcional
  - Aplicado em Admin, AdminDashboard e AccessGate

- ErrorBoundary: Tratamento global de erros
  - Captura erros não tratados
  - UI amigável para usuário
  - Opção de reset e volta à homepage

**Melhorias no HTML**
- DNS prefetch para Google Fonts e Analytics
- Preconnect otimizado
- Meta viewport com maximum-scale para melhor UX mobile
- Estrutura completa de Open Graph e Twitter Cards

### Changed

**Mind Map**
- Botão de expansão usando componente do design system
- Consistência visual melhorada

**URLs Organizadas**
- `/lowmovie` (novo caminho principal para dissertação)
- `/sobre` (novo caminho principal para autor)
- `/galeria` (novo caminho principal para vídeos)
- Mantidos redirects legados (`/dissertacao`, `/autor`, `/videos`)

**Privacy Policy**
- Página completa com política de privacidade bilíngue (PT/EN)
- Explicações sobre coleta de dados
- Direitos do usuário (LGPD)
- Link acessível no Cookie Consent

### Security

**Row Level Security (RLS)**
- Política de DELETE para `newsletter_subscribers` (somente admins)
- Utiliza função `has_role` para validação server-side
- Proteção contra escalação de privilégios

**Validação de Dados**
- Schema Zod para validação de email e nome
- Sanitização de inputs
- Consentimento explícito obrigatório

### Technical

**Arquitetura**
- Componentes reutilizáveis e bem documentados
- Separação clara de responsabilidades
- Tipos TypeScript completos
- Error handling consistente

**Edge Functions**
- Gerador de HQ com marca d'água "THE VOID N13"
- Aspect ratio 16:9 forçado para cinema
- Integração com Lovable AI

───────────────────────────────────────────────────────────────

## [2025-01-27] - Lançamento do Portal

### Added
- Estrutura inicial do memorial artístico
- Páginas: Home, Dissertação, Autor, Vídeos
- Integração com Vimeo API
- SEO otimizado com Schema.org
- Documentação completa (README, TECH_STACK, PHILOSOPHY)
- Shadow Interface Bible v13 integrado

### Technical
- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- Lovable Cloud (Supabase)
- Deploy automático
- Sistema bilíngue (PT/EN)

───────────────────────────────────────────────────────────────

## Próximas Melhorias Sugeridas

### Analytics
- Dashboard de estatísticas de acesso
- Gráficos de crescimento da newsletter
- Métricas de engajamento por página

### Design System
- Tokens de cores otimizados para dark/light mode
- Variantes adicionais de componentes
- Guia de estilo interativo

### Internacionalização
- Sistema de i18n completo
- Detecção automática de idioma
- Alternância PT/EN persistente

### Email Marketing
- Integração com serviço de email (Resend/SendGrid)
- Templates de newsletter
- Automação de boas-vindas

───────────────────────────────────────────────────────────────

**© 2025 Castro Pizzano (цастро™)**  
**Projeto THEVØIDN13** — Memorial Artístico e Práxis Híbrida  
**Licença:** Creative Commons BY-NC-SA 4.0

Desenvolvido com: React, TypeScript, Tailwind CSS, Lovable Cloud (Supabase), Lovable AI

───────────────────────────────────────────────────────────────