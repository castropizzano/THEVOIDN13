import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Separator } from "@/components/ui/separator";
import { BackToTop } from "@/components/BackToTop";
import { useTranslation } from "@/hooks/useTranslation";
import { BilingualSection } from "@/components/BilingualSection";
import { SkillCard } from "@/components/SkillCard";
import { CollectiveCard } from "@/components/CollectiveCard";

const Transparency = () => {
  const { t, language } = useTranslation();

  return (
    <>
      <SEO
        title={language === "pt" ? "Transparência Técnica | THEVØIDN13" : "Technical Transparency | THEVØIDN13"}
        description={language === "pt" 
          ? "Documentação técnica completa: arquitetura, fluxo de dados, privacidade e código aberto do THEVØIDN13." 
          : "Complete technical documentation: architecture, data flow, privacy and open source code of THEVØIDN13."}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-24">
          {/* Architecture Overview */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">ARQUITETURA GERAL</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Stack Tecnológico"
                  period="2025"
                  description="Frontend: React 18.3.1 + TypeScript, Vite, Tailwind CSS, Radix UI. Backend opcional: Lovable Cloud, Edge Function (Deno), Lovable AI Gateway."
                />
                
                <CollectiveCard
                  title="Proporção de Dados"
                  period="2025"
                  description="95% estático (HTML/CSS/JS), 5% dinâmico opcional (apenas feature AI). Não armazeno dados pessoais permanentes."
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">GENERAL ARCHITECTURE</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Technology Stack"
                  period="2025"
                  description="Frontend: React 18.3.1 + TypeScript, Vite, Tailwind CSS, Radix UI. Optional backend: Lovable Cloud, Edge Function (Deno), Lovable AI Gateway."
                />
                
                <CollectiveCard
                  title="Data Proportion"
                  period="2025"
                  description="95% static (HTML/CSS/JS), 5% optional dynamic (AI feature only). I do not store permanent personal data."
                />
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Zero Surveillance Section */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">ZERO VIGILÂNCIA (O QUE NÃO EXISTE)</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <SkillCard
                  title="❌ Analytics"
                  content="Google Analytics, Plausible, etc."
                />
                <SkillCard
                  title="❌ Tracking"
                  content="Pixels, tags, scripts de terceiros"
                />
                <SkillCard
                  title="❌ Cookies"
                  content="Nenhum cookie (apenas sessionStorage mínimo)"
                />
                <SkillCard
                  title="❌ Formulários"
                  content="Contato, newsletter, cadastros"
                />
                <SkillCard
                  title="❌ Coleta de Dados"
                  content="Nenhum dado pessoal coletado"
                />
                <SkillCard
                  title="❌ Autenticação"
                  content="Sem login, sem contas"
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">ZERO SURVEILLANCE (WHAT DOESN'T EXIST)</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <SkillCard
                  title="❌ Analytics"
                  content="Google Analytics, Plausible, etc."
                />
                <SkillCard
                  title="❌ Tracking"
                  content="Pixels, tags, third-party scripts"
                />
                <SkillCard
                  title="❌ Cookies"
                  content="No cookies (only minimal sessionStorage)"
                />
                <SkillCard
                  title="❌ Forms"
                  content="Contact, newsletter, registrations"
                />
                <SkillCard
                  title="❌ Data Collection"
                  content="No personal data collected"
                />
                <SkillCard
                  title="❌ Authentication"
                  content="No login, no accounts"
                />
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Deleted Infrastructure */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">INFRAESTRUTURA DELETADA (NOVEMBRO 2025)</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="De 13 Tabelas para 1 Tabela"
                  period="Novembro 2025"
                  description="Descobri uma contradição crítica entre a filosofia e a arquitetura. A documentação prometia 'zero vigilância', mas a infraestrutura tinha tabelas ativas."
                  highlight
                />
                
                <div className="bg-destructive/10 border-2 border-destructive/50 p-6 font-mono text-sm space-y-4">
                  <p className="font-bold text-destructive text-base">❌ Tabelas Deletadas:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• page_views - Rastreamento de visitas</li>
                    <li>• search_queries - Rastreamento de buscas</li>
                    <li>• section_engagement - Rastreamento de comportamento</li>
                    <li>• contact_messages - Coleta de mensagens</li>
                    <li>• newsletter_subscribers - Coleta de emails</li>
                    <li>• profiles + user_roles - Sistema de autenticação</li>
                    <li>• content_settings, media_assets, page_sections, section_contents, video_settings - Sistema CMS não utilizado</li>
                  </ul>
                </div>

                <div className="bg-muted/50 border-2 border-primary/50 p-6 font-mono text-sm space-y-4">
                  <p className="font-bold text-primary text-base">✅ O que mantive:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• prompts - Biblioteca de prompts de IA (somente leitura pública)</li>
                    <li>• Pollinations.AI - Geração de imagens 100% client-side (modelo FLUX, sem autenticação)</li>
                  </ul>
                </div>

                <CollectiveCard
                  title="O Problema"
                  period="2025"
                  description="Essas tabelas tinham políticas RLS que permitiam inserção pública de dados. Como as credenciais do Supabase estão no código-fonte (public), qualquer pessoa poderia usar essas tabelas para rastrear usuários—mesmo que eu nunca as usasse."
                />

                <CollectiveCard
                  title="A Solução"
                  period="2025"
                  description="Deletei todas as tabelas de rastreamento e autenticação. O site agora funciona 100% estático (exceto pela feature opcional de geração de imagens, que usa validação de input)."
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">DELETED INFRASTRUCTURE (NOVEMBER 2025)</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="From 13 Tables to 1 Table"
                  period="November 2025"
                  description="I discovered a critical contradiction between philosophy and architecture. The documentation promised 'zero surveillance,' but the infrastructure had active tables."
                  highlight
                />
                
                <div className="bg-destructive/10 border-2 border-destructive/50 p-6 font-mono text-sm space-y-4">
                  <p className="font-bold text-destructive text-base">❌ Deleted Tables:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• page_views - Page visit tracking</li>
                    <li>• search_queries - Search tracking</li>
                    <li>• section_engagement - Behavior tracking</li>
                    <li>• contact_messages - Message collection</li>
                    <li>• newsletter_subscribers - Email collection</li>
                    <li>• profiles + user_roles - Authentication system</li>
                    <li>• content_settings, media_assets, page_sections, section_contents, video_settings - Unused CMS system</li>
                  </ul>
                </div>

                <div className="bg-muted/50 border-2 border-primary/50 p-6 font-mono text-sm space-y-4">
                  <p className="font-bold text-primary text-base">✅ What I kept:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• prompts - AI prompt library (public read-only)</li>
                    <li>• Puter.js - Client-side image generation (100% free, unlimited, runs in your browser)</li>
                  </ul>
                </div>

                <CollectiveCard
                  title="The Problem"
                  period="2025"
                  description="These tables had RLS policies that allowed public data insertion. Since Supabase credentials are in the source code (public), anyone could use these tables to track users—even though I never used them."
                />

                <CollectiveCard
                  title="The Solution"
                  period="2025"
                  description="I deleted all tracking and authentication tables. The site now works 100% static (except for the optional image generation feature, which uses input validation)."
                />
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Minimal Storage */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">ARMAZENAMENTO MÍNIMO</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="sessionStorage Apenas"
                  period="2025"
                  description="Usado para: (1) preferência de idioma PT/EN, (2) controle de banner anti-vigilância, (3) rate limiting do Comic Generator (cooldown de 10s). Expira quando você fecha o navegador. Nenhum cookie, nenhum localStorage permanente."
                />
                
                <div className="bg-muted/50 border-2 border-primary/50 p-6 font-mono text-sm">
                  <p className="font-bold text-primary mb-3">O que armazeno:</p>
                  <div className="space-y-2">
                    <code className="block text-muted-foreground">sessionStorage.setItem(&apos;language&apos;, &apos;pt&apos; | &apos;en&apos;)</code>
                    <code className="block text-muted-foreground">sessionStorage.setItem(&apos;antiSurveillanceBannerDismissed&apos;, &apos;true&apos;)</code>
                    <code className="block text-muted-foreground">sessionStorage.setItem(&apos;lastImageGeneration&apos;, timestamp)</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">MINIMAL STORAGE</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="sessionStorage Only"
                  period="2025"
                  description="Used for: (1) language preference PT/EN, (2) anti-surveillance banner control, (3) Comic Generator rate limiting (10s cooldown). Expires when you close the browser. No cookies, no permanent localStorage."
                />
                
                <div className="bg-muted/50 border-2 border-primary/50 p-6 font-mono text-sm">
                  <p className="font-bold text-primary mb-3">What I store:</p>
                  <div className="space-y-2">
                    <code className="block text-muted-foreground">sessionStorage.setItem(&apos;language&apos;, &apos;pt&apos; | &apos;en&apos;)</code>
                    <code className="block text-muted-foreground">sessionStorage.setItem(&apos;antiSurveillanceBannerDismissed&apos;, &apos;true&apos;)</code>
                    <code className="block text-muted-foreground">sessionStorage.setItem(&apos;lastImageGeneration&apos;, timestamp)</code>
                  </div>
                </div>
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Optional AI Feature */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">FEATURE AI OPCIONAL</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Gerador de Still Cinemático"
                  period="2025"
                  description="Única feature interativa do site. Processa prompt 100% no navegador do usuário → Pollinations.AI API (modelo FLUX) → Imagem gerada instantaneamente. Zero backend, zero autenticação. Marca d'água aplicada localmente via canvas. Não armazena prompts ou imagens. Rate limiting de 10 segundos (via sessionStorage, contornável). Feature opcional—site funciona sem ela."
                  highlight
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <SkillCard
                    title="Input"
                    content="Prompt de texto do usuário (máx. 500 caracteres)"
                  />
                  <SkillCard
                    title="Validação"
                    content="Sanitização de input, rate limiting, timeout de 30s"
                  />
                  <SkillCard
                    title="Output"
                    content="URL temporária da imagem gerada (Google Cloud)"
                  />
                  <SkillCard
                    title="Logs"
                    content="Apenas erros técnicos (sem identificação de usuário)"
                  />
                </div>
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">OPTIONAL AI FEATURE</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Cinematic Still Generator"
                  period="2025"
                  description="Site's only interactive feature. Processes prompt 100% in user's browser → Pollinations.AI API (FLUX model) → Image generated instantly. Zero backend, zero authentication. Watermark applied locally via canvas. Does not store prompts or images. 10-second rate limiting (via sessionStorage, bypassable). Optional feature—site works without it."
                  highlight
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <SkillCard
                    title="Input"
                    content="User text prompt (max 500 characters)"
                  />
                  <SkillCard
                    title="Validation"
                    content="Input sanitization, rate limiting, 30s timeout"
                  />
                  <SkillCard
                    title="Output"
                    content="Temporary image URL (Google Cloud)"
                  />
                  <SkillCard
                    title="Logs"
                    content="Only technical errors (no user identification)"
                  />
                </div>
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Data Flow */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">FLUXO DE DADOS COMPLETO</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="1. Navegação Normal"
                  period="2025"
                  description="Você acessa o site → HTML/CSS/JS estático carregado do Lovable CDN → Nenhum dado enviado para servidores → Preferência de idioma salva em sessionStorage (local)."
                />
                
                <CollectiveCard
                  title="2. Feature AI (Opcional)"
                  period="2025"
                  description="Você digita prompt → Frontend valida input → Envia para edge function Lovable Cloud → Edge function envia para Lovable AI Gateway → Lovable AI chama Google Gemini → Imagem gerada retorna → Exibida no frontend → Nenhum dado armazenado permanentemente."
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">COMPLETE DATA FLOW</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="1. Normal Navigation"
                  period="2025"
                  description="You access the site → Static HTML/CSS/JS loaded from Lovable CDN → No data sent to servers → Language preference saved in sessionStorage (local)."
                />
                
                <CollectiveCard
                  title="2. AI Feature (Optional)"
                  period="2025"
                  description="You type prompt → Frontend validates input → Sends to Lovable Cloud edge function → Edge function sends to Lovable AI Gateway → Lovable AI calls Google Gemini → Generated image returns → Displayed in frontend → No data stored permanently."
                />
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* PWA & Cache */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">PWA & CACHE</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Service Worker"
                  period="2025"
                  description="Cache de assets estáticos para funcionamento offline. Estratégia: Cache-First para assets, Network-First para páginas HTML."
                />
                
                <CollectiveCard
                  title="Progressive Web App"
                  period="2025"
                  description="Site instalável como app nativo. Manifesto PWA inclui: ícones, cores, orientação. Funciona offline após primeira visita."
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">PWA & CACHE</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Service Worker"
                  period="2025"
                  description="Static assets cache for offline functionality. Strategy: Cache-First for assets, Network-First for HTML pages."
                />
                
                <CollectiveCard
                  title="Progressive Web App"
                  period="2025"
                  description="Installable site as native app. PWA manifest includes: icons, colors, orientation. Works offline after first visit."
                />
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Legal Compliance */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">CONFORMIDADE LEGAL</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <SkillCard
                  title="LGPD (Brasil)"
                  content="Sem coleta de dados pessoais = sem obrigação de políticas de privacidade complexas"
                />
                <SkillCard
                  title="GDPR (Europa)"
                  content="Sem cookies = sem banners de consentimento. Sem tracking = sem DPO necessário"
                />
                <SkillCard
                  title="CCPA (Califórnia)"
                  content="Sem venda de dados = compliance automática"
                />
                <SkillCard
                  title="Código Aberto"
                  content="Repositório público no GitHub - código verificável por qualquer pessoa"
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">LEGAL COMPLIANCE</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                <SkillCard
                  title="LGPD (Brazil)"
                  content="No personal data collection = no complex privacy policy requirements"
                />
                <SkillCard
                  title="GDPR (Europe)"
                  content="No cookies = no consent banners. No tracking = no DPO required"
                />
                <SkillCard
                  title="CCPA (California)"
                  content="No data sales = automatic compliance"
                />
                <SkillCard
                  title="Open Source"
                  content="Public GitHub repository - code verifiable by anyone"
                />
              </div>
            </div>
          </BilingualSection>

          <Separator />

          {/* Philosophy */}
          <BilingualSection className="bible-section">
            <div className="lang-pt">
              <h2 className="bible-section-title mb-8">FILOSOFIA</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Privacidade por Design"
                  period="2025"
                  description="Não coletar dados não é uma feature — é a arquitetura padrão. A melhor forma de proteger dados dos usuários é simplesmente não tê-los."
                  highlight
                />
                
                <CollectiveCard
                  title="Verificável e Auditável"
                  period="2025"
                  description="Código aberto no GitHub. Qualquer pessoa pode auditar, verificar e confirmar que nada está escondido."
                />
                
                <CollectiveCard
                  title="Minimalismo Técnico"
                  period="2025"
                  description="Cada linha de código tem propósito. Cada feature é necessária. Sem bloatware, sem tracking, sem manipulação."
                />
              </div>
            </div>
            
            <div className="lang-en">
              <h2 className="bible-section-title mb-8">PHILOSOPHY</h2>
              
              <div className="bible-block">
                <CollectiveCard
                  title="Privacy by Design"
                  period="2025"
                  description="Not collecting data is not a feature — it is the default architecture. The best way to protect user data is to simply not have it."
                  highlight
                />
                
                <CollectiveCard
                  title="Verifiable and Auditable"
                  period="2025"
                  description="Open source on GitHub. Anyone can audit, verify, and confirm that nothing is hidden."
                />
                
                <CollectiveCard
                  title="Technical Minimalism"
                  period="2025"
                  description="Every line of code has purpose. Every feature is necessary. No bloatware, no tracking, no manipulation."
                />
              </div>
            </div>
          </BilingualSection>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Transparency;
