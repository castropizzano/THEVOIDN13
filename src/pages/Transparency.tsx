import { Shield, ShieldOff, Database, Sparkles, Eye, FileCode, GitBranch, Server, Lock, Code, FileText, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackToTop } from "@/components/BackToTop";
import { useTranslation } from "@/hooks/useTranslation";

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
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="bible-section bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <div className="flex justify-center mb-6">
                <FileCode className="h-16 w-16 text-primary" />
              </div>
              <h1 className="bible-title mb-4">
                {language === "pt" ? "TRANSPARÊNCIA TÉCNICA" : "TECHNICAL TRANSPARENCY"}
              </h1>
              <p className="bible-subtitle text-muted-foreground max-w-2xl mx-auto">
                {language === "pt" 
                  ? "Documentação completa de como este site funciona—nada escondido, tudo verificável" 
                  : "Complete documentation of how this site works—nothing hidden, everything verifiable"}
              </p>
            </div>
          </section>

          <Separator className="my-0" />

          {/* Architecture Overview */}
          <section className="bible-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <GitBranch className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "ARQUITETURA GERAL" : "GENERAL ARCHITECTURE"}
                </h2>
              </div>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    {language === "pt" ? "Stack Tecnológico" : "Technology Stack"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 bible-body text-sm">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-2">{language === "pt" ? "Frontend:" : "Frontend:"}</p>
                      <ul className="space-y-1 ml-4">
                        <li>• React 18.3.1 + TypeScript</li>
                        <li>• Vite (build tool)</li>
                        <li>• Tailwind CSS (design system)</li>
                        <li>• Radix UI (components)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">{language === "pt" ? "Backend (Opcional):" : "Backend (Optional):"}</p>
                      <ul className="space-y-1 ml-4">
                        <li>• Lovable Cloud (Supabase)</li>
                        <li>• Edge Function (Deno)</li>
                        <li>• Lovable AI Gateway</li>
                      </ul>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="font-semibold text-primary mb-2">
                      {language === "pt" ? "📊 Proporção:" : "📊 Proportion:"}
                    </p>
                    <p>
                      <span className="text-2xl font-bold text-primary">95%</span> {language === "pt" ? "Estático (frontend puro)" : "Static (pure frontend)"}<br/>
                      <span className="text-2xl font-bold text-muted-foreground">5%</span> {language === "pt" ? "Backend (feature experimental opcional)" : "Backend (optional experimental feature)"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* What Doesn't Exist */}
          <section className="bible-section bg-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <ShieldOff className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "ZERO VIGILÂNCIA (O QUE NÃO EXISTE)" : "ZERO SURVEILLANCE (WHAT DOESN'T EXIST)"}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Eye, title: language === "pt" ? "Analytics" : "Analytics", desc: language === "pt" ? "Google Analytics, Plausible, etc." : "Google Analytics, Plausible, etc." },
                  { icon: Eye, title: language === "pt" ? "Tracking" : "Tracking", desc: language === "pt" ? "Pixels, tags, scripts de terceiros" : "Pixels, tags, third-party scripts" },
                  { icon: Database, title: language === "pt" ? "Cookies" : "Cookies", desc: language === "pt" ? "Nenhum cookie (apenas sessionStorage mínimo)" : "No cookies (only minimal sessionStorage)" },
                  { icon: FileText, title: language === "pt" ? "Formulários" : "Forms", desc: language === "pt" ? "Contato, newsletter, cadastros" : "Contact, newsletter, registrations" },
                  { icon: Lock, title: language === "pt" ? "Coleta de Dados" : "Data Collection", desc: language === "pt" ? "Nenhum dado pessoal coletado" : "No personal data collected" },
                  { icon: Shield, title: language === "pt" ? "Autenticação" : "Authentication", desc: language === "pt" ? "Sem login, sem contas" : "No login, no accounts" },
                ].map((item, idx) => (
                  <Card key={idx} className="border-destructive/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-base">
                        <item.icon className="h-5 w-5 text-destructive" />
                        ❌ {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="bible-body text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <Separator />

          {/* What Exists (Infrastructure Deletion Section) */}
          <section className="bible-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <Database className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "🗑️ INFRAESTRUTURA DELETADA (NOVEMBRO 2025)" : "🗑️ DELETED INFRASTRUCTURE (NOVEMBER 2025)"}
                </h2>
              </div>

              <Card className="border-primary/50 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ShieldOff className="h-6 w-6 text-primary" />
                    {language === "pt" ? "De 13 Tabelas para 1 Tabela" : "From 13 Tables to 1 Table"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 bible-body text-sm">
                  <div className="space-y-4">
                    <p className="text-foreground font-bold">
                      {language === "pt" 
                        ? "Por que deletamos 12 tabelas do banco de dados?"
                        : "Why did we delete 12 database tables?"}
                    </p>
                    
                    <p className="text-muted-foreground">
                      {language === "pt"
                        ? "Descobrimos uma contradição crítica entre nossa filosofia e nossa arquitetura. A documentação prometia 'zero vigilância', mas a infraestrutura tinha tabelas ativas para:"
                        : "We discovered a critical contradiction between our philosophy and our architecture. The documentation promised 'zero surveillance,' but the infrastructure had active tables for:"}
                    </p>

                    <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-md space-y-2">
                      <p className="font-semibold text-destructive">❌ {language === "pt" ? "Tabelas Deletadas:" : "Deleted Tables:"}</p>
                      <ul className="space-y-1 ml-4 text-muted-foreground">
                        <li>• <code>page_views</code> - {language === "pt" ? "Rastreamento de visitas" : "Page visit tracking"}</li>
                        <li>• <code>search_queries</code> - {language === "pt" ? "Rastreamento de buscas" : "Search tracking"}</li>
                        <li>• <code>section_engagement</code> - {language === "pt" ? "Rastreamento de comportamento" : "Behavior tracking"}</li>
                        <li>• <code>contact_messages</code> - {language === "pt" ? "Coleta de mensagens" : "Message collection"}</li>
                        <li>• <code>newsletter_subscribers</code> - {language === "pt" ? "Coleta de emails" : "Email collection"}</li>
                        <li>• <code>profiles</code> + <code>user_roles</code> - {language === "pt" ? "Sistema de autenticação" : "Authentication system"}</li>
                        <li>• <code>content_settings</code>, <code>media_assets</code>, <code>page_sections</code>, <code>section_contents</code>, <code>video_settings</code> - {language === "pt" ? "Sistema CMS não utilizado" : "Unused CMS system"}</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-md space-y-2">
                      <p className="font-semibold text-primary">✅ {language === "pt" ? "O que mantivemos:" : "What we kept:"}</p>
                      <ul className="space-y-1 ml-4 text-muted-foreground">
                        <li>• <code>prompts</code> - {language === "pt" ? "Biblioteca de prompts de IA (somente leitura pública)" : "AI prompt library (public read-only)"}</li>
                        <li>• <code>generate-cinematic-still</code> - {language === "pt" ? "Edge function para geração de imagens (com validação de input)" : "Edge function for image generation (with input validation)"}</li>
                      </ul>
                    </div>

                    <p className="text-foreground font-bold mt-4">
                      {language === "pt" ? "O Problema:" : "The Problem:"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "pt"
                        ? "Essas tabelas tinham políticas RLS que permitiam inserção pública de dados. Como as credenciais do Supabase estão no código-fonte (public), qualquer pessoa poderia usar essas tabelas para rastrear usuários—mesmo que nunca as usássemos."
                        : "These tables had RLS policies that allowed public data insertion. Since Supabase credentials are in the source code (public), anyone could use these tables to track users—even though we never used them."}
                    </p>

                    <p className="text-foreground font-bold mt-4">
                      {language === "pt" ? "A Solução:" : "The Solution:"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "pt"
                        ? "Deletamos tudo que contradizia nossa filosofia anti-vigilância. Verdadeiro minimalismo não é 'não usar' infraestrutura—é removê-la completamente."
                        : "We deleted everything that contradicted our anti-surveillance philosophy. True minimalism isn't 'not using' infrastructure—it's removing it completely."}
                    </p>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mt-4">
                      {language === "pt"
                        ? '"O vazio não é falta, é incubação de forma" — arquitetura sem rastreamento cria espaço para contemplação sem vigilância.'
                        : '"The void is not lack, it is the incubation of form" — architecture without tracking creates space for contemplation without surveillance.'}
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Minimal Storage */}
          <section className="bible-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <Database className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "ARMAZENAMENTO MÍNIMO" : "MINIMAL STORAGE"}
                </h2>
              </div>

              <Card className="border-primary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    ⚠️ sessionStorage {language === "pt" ? "(apenas 1 uso)" : "(only 1 use)"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 bible-body text-sm">
                  <div className="bg-muted/50 p-4 rounded-md font-mono text-xs space-y-2">
                    <p><strong>Key:</strong> <code>"antiSurveillanceBannerSeen"</code></p>
                    <p><strong>{language === "pt" ? "Propósito:" : "Purpose:"}</strong> {language === "pt" ? "UX do banner (não re-exibir na mesma sessão)" : "Banner UX (don't re-display in the same session)"}</p>
                    <p><strong>{language === "pt" ? "Persistência:" : "Persistence:"}</strong> {language === "pt" ? "Apaga ao fechar o navegador" : "Deletes when closing the browser"}</p>
                    <p><strong>{language === "pt" ? "Dados armazenados:" : "Data stored:"}</strong> Boolean <code>true</code> ({language === "pt" ? "não contém dados pessoais" : "contains no personal data"})</p>
                    <p><strong>{language === "pt" ? "Código-fonte:" : "Source code:"}</strong> <code>src/components/AntiSurveillanceBanner.tsx</code> (lines 13, 26)</p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-primary mb-2">
                      {language === "pt" ? "Por que sessionStorage e não cookies?" : "Why sessionStorage and not cookies?"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "pt" 
                        ? "sessionStorage é mais transparente e efêmero—apaga automaticamente ao fechar o navegador. Cookies persistem por dias/meses. Escolhemos a opção mais respeitosa com sua privacidade." 
                        : "sessionStorage is more transparent and ephemeral—automatically deletes when closing the browser. Cookies persist for days/months. We chose the most respectful option for your privacy."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Optional AI Feature */}
          <section className="bible-section bg-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "FEATURE OPCIONAL DE IA (GERADOR DE STILLS)" : "OPTIONAL AI FEATURE (STILL GENERATOR)"}
                </h2>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    {language === "pt" ? "Gerador de Stills Cinematográficos" : "Cinematic Still Generator"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 bible-body text-sm">
                  <div>
                    <p className="font-semibold mb-2">{language === "pt" ? "Como funciona:" : "How it works:"}</p>
                    <ol className="space-y-2 ml-4">
                      <li>1. {language === "pt" ? "Você escreve um prompt de texto" : "You write a text prompt"}</li>
                      <li>2. {language === "pt" ? "O prompt é enviado para uma edge function (backend)" : "The prompt is sent to an edge function (backend)"}</li>
                      <li>3. {language === "pt" ? "A edge function usa Lovable AI (google/gemini-2.5-flash-image-preview)" : "The edge function uses Lovable AI (google/gemini-2.5-flash-image-preview)"}</li>
                      <li>4. {language === "pt" ? "Uma imagem é gerada e retornada para você" : "An image is generated and returned to you"}</li>
                    </ol>
                  </div>

                  <Separator />

                  <div className="bg-muted/50 p-4 rounded-md">
                    <p className="font-semibold text-primary mb-2">
                      {language === "pt" ? "📝 Stack da Feature:" : "📝 Feature Stack:"}
                    </p>
                    <ul className="space-y-1 font-mono text-xs">
                      <li><strong>{language === "pt" ? "Componente:" : "Component:"}</strong> <code>src/components/ComicGenerator.tsx</code></li>
                      <li><strong>{language === "pt" ? "Edge Function:" : "Edge Function:"}</strong> <code>supabase/functions/generate-cinematic-still/index.ts</code></li>
                      <li><strong>{language === "pt" ? "Modelo:" : "Model:"}</strong> <code>google/gemini-2.5-flash-image-preview</code></li>
                      <li><strong>{language === "pt" ? "Autenticação:" : "Authentication:"}</strong> {language === "pt" ? "Pública (sem JWT)" : "Public (no JWT)"}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-destructive pl-4">
                    <p className="font-semibold text-destructive mb-2">
                      {language === "pt" ? "❌ O que NÃO fazemos:" : "❌ What we DON'T do:"}
                    </p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• {language === "pt" ? "Não armazenamos seus prompts" : "We don't store your prompts"}</li>
                      <li>• {language === "pt" ? "Não associamos prompts a usuários (não há autenticação)" : "We don't associate prompts with users (no authentication)"}</li>
                      <li>• {language === "pt" ? "Não vendemos ou compartilhamos seus prompts" : "We don't sell or share your prompts"}</li>
                      <li>• {language === "pt" ? "Não armazenamos imagens geradas" : "We don't store generated images"}</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-md">
                    <p className="font-semibold mb-2">
                      ⚠️ {language === "pt" ? "Limitação:" : "Limitation:"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "pt" 
                        ? "Esta feature usa créditos de IA do desenvolvedor, então pode haver rate limits ou indisponibilidade temporária." 
                        : "This feature uses the developer's AI credits, so there may be rate limits or temporary unavailability."}
                    </p>
                  </div>

                  <div className="text-center pt-4">
                    <p className="bible-body text-sm text-muted-foreground">
                      {language === "pt" 
                        ? "💡 É opcional: Você pode navegar 95% do site sem usar esta feature." 
                        : "💡 It's optional: You can navigate 95% of the site without using this feature."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Data Flow Diagram */}
          <section className="bible-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <Server className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "FLUXO DE DADOS COMPLETO" : "COMPLETE DATA FLOW"}
                </h2>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6 bible-body text-sm">
                    <div>
                      <p className="font-semibold mb-3 text-primary">
                        {language === "pt" ? "📊 Navegação Normal (95% do site):" : "📊 Normal Navigation (95% of the site):"}
                      </p>
                      <div className="flex items-center justify-center gap-4 flex-wrap">
                        <div className="text-center">
                          <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Shield className="h-12 w-12 text-primary" />
                          </div>
                          <p className="font-semibold">{language === "pt" ? "Usuário" : "User"}</p>
                        </div>
                        <div className="text-2xl">→</div>
                        <div className="text-center">
                          <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Code className="h-12 w-12 text-primary" />
                          </div>
                          <p className="font-semibold">Frontend</p>
                          <p className="text-xs text-muted-foreground">(React)</p>
                        </div>
                      </div>
                      <p className="text-center mt-4 text-muted-foreground">
                        {language === "pt" ? "Nenhum dado sai do seu navegador." : "No data leaves your browser."}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <p className="font-semibold mb-3 text-primary">
                        {language === "pt" ? "🎨 Gerador de Stills (5%, opcional):" : "🎨 Still Generator (5%, optional):"}
                      </p>
                      <div className="flex items-center justify-center gap-3 flex-wrap text-xs">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Shield className="h-10 w-10 text-primary" />
                          </div>
                          <p className="font-semibold">{language === "pt" ? "Usuário" : "User"}</p>
                        </div>
                        <div className="text-xl">→</div>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Code className="h-10 w-10 text-primary" />
                          </div>
                          <p className="font-semibold">Frontend</p>
                        </div>
                        <div className="text-xl">→</div>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Server className="h-10 w-10 text-primary" />
                          </div>
                          <p className="font-semibold">Edge Fn</p>
                        </div>
                        <div className="text-xl">→</div>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <Sparkles className="h-10 w-10 text-primary" />
                          </div>
                          <p className="font-semibold">Lovable AI</p>
                        </div>
                        <div className="text-xl">→</div>
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                            <FileText className="h-10 w-10 text-primary" />
                          </div>
                          <p className="font-semibold">{language === "pt" ? "Imagem" : "Image"}</p>
                        </div>
                      </div>
                      <p className="text-center mt-4 text-muted-foreground">
                        {language === "pt" 
                          ? "Prompt enviado → Imagem gerada → Imagem retornada (não armazenada)" 
                          : "Prompt sent → Image generated → Image returned (not stored)"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* PWA & Cache */}
          <section className="bible-section bg-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <Database className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "PWA E CACHE" : "PWA & CACHE"}
                </h2>
              </div>

              <Card>
                <CardContent className="pt-6 space-y-4 bible-body text-sm">
                  <div>
                    <p className="font-semibold mb-2">{language === "pt" ? "Service Worker:" : "Service Worker:"}</p>
                    <p className="text-muted-foreground">
                      {language === "pt" 
                        ? "Ativo (workbox) para permitir acesso offline e melhor performance." 
                        : "Active (workbox) to allow offline access and better performance."}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-2">{language === "pt" ? "Estratégia de Cache:" : "Cache Strategy:"}</p>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• <strong>{language === "pt" ? "Fontes:" : "Fonts:"}</strong> 1 {language === "pt" ? "ano" : "year"}</li>
                      <li>• <strong>{language === "pt" ? "Imagens:" : "Images:"}</strong> 30 {language === "pt" ? "dias" : "days"}</li>
                      <li>• <strong>PDFs:</strong> 30 {language === "pt" ? "dias" : "days"}</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <p className="font-semibold text-primary mb-2">
                      {language === "pt" ? "Propósito:" : "Purpose:"}
                    </p>
                    <p className="text-muted-foreground">
                      {language === "pt" 
                        ? "Performance e acesso offline—não rastreamento. Cache é armazenamento técnico local, não vigilância." 
                        : "Performance and offline access—not tracking. Cache is local technical storage, not surveillance."}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Legal Compliance */}
          <section className="bible-section">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="flex items-center gap-3 mb-8">
                <Lock className="h-8 w-8 text-primary" />
                <h2 className="bible-section-title">
                  {language === "pt" ? "CONFORMIDADE LEGAL" : "LEGAL COMPLIANCE"}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Shield className="h-5 w-5 text-primary" />
                      LGPD (Brasil)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bible-body text-sm">
                    <p className="text-muted-foreground">
                      ✓ {language === "pt" ? "Conformidade total: zero coleta de dados pessoais" : "Full compliance: zero personal data collection"}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Shield className="h-5 w-5 text-primary" />
                      GDPR (Europa)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bible-body text-sm">
                    <p className="text-muted-foreground">
                      ✓ {language === "pt" ? "Conformidade total: zero tracking e cookies" : "Full compliance: zero tracking and cookies"}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Separator />

          {/* Philosophy */}
          <section className="bible-section bg-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <div className="flex justify-center mb-6">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <blockquote className="bible-body text-lg italic max-w-2xl mx-auto mb-6">
                "{language === "pt" 
                  ? "O vazio não é falta, é incubação de forma" 
                  : "The void is not absence, it is incubation of form"}"
              </blockquote>
              <p className="bible-body text-sm text-muted-foreground max-w-2xl mx-auto">
                {language === "pt" 
                  ? "Aplicado à privacidade: o vazio de vigilância não é promessa vazia—é arquitetura ética por design. Transparência radical não é marketing—é documentação honesta de código. Um site que respeita usuários mostra como funciona, não apenas diz que respeita." 
                  : "Applied to privacy: the void of surveillance is not an empty promise—it's ethical architecture by design. Radical transparency is not marketing—it's honest code documentation. A site that respects users shows how it works, not just says it respects."}
              </p>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Transparency;
