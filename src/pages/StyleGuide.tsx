import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BackToTop } from "@/components/BackToTop";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const StyleGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, id }: { code: string; id: string }) => (
    <div className="relative group">
      <pre className="bg-muted/30 p-4 rounded-lg text-sm overflow-x-auto border border-border/50">
        <code className="text-foreground/90 font-mono">{code}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => copyCode(code, id)}
      >
        {copiedCode === id ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO 
        title="Style Guide — Sistema Tipográfico TVN | THEVØIDN13"
        description="Guia visual interativo do sistema tipográfico oficial THEVØIDN13. Todos os elementos, classes e exemplos de uso do sistema TVN."
      />
      <Header />
      <BackToTop />
      
      <main className="max-w-6xl mx-auto px-4 py-20">
        {/* Hero */}
        <div className="mb-16 text-center">
          <h1 className="tvn-h1 text-primary mb-4">STYLE GUIDE TVN</h1>
          <p className="tvn-paragraph max-w-2xl mx-auto">
            Sistema tipográfico oficial THEVØIDN13. Hierarquia única, consistente e responsiva 
            para todo o portal. Exemplos interativos e código pronto para uso.
          </p>
        </div>

        <Tabs defaultValue="typography" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="typography">Tipografia</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="colors">Cores</TabsTrigger>
            <TabsTrigger value="examples">Exemplos</TabsTrigger>
          </TabsList>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            {/* H1 */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="tvn-subtitle text-primary">.tvn-h1</p>
                  <span className="text-xs text-muted-foreground">5xl → 7xl / Bold / Uppercase</span>
                </div>
                <h1 className="tvn-h1">TÍTULO PRINCIPAL HERO</h1>
                <CodeBlock 
                  id="h1"
                  code={`<h1 className="tvn-h1">TÍTULO PRINCIPAL HERO</h1>`}
                />
                <p className="text-sm text-muted-foreground">
                  Use para títulos hero, headers de página principal, elementos de máximo destaque.
                </p>
              </div>
            </Card>

            {/* H2 */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="tvn-subtitle text-primary">.tvn-h2</p>
                  <span className="text-xs text-muted-foreground">3xl → 4xl / Bold / Uppercase</span>
                </div>
                <h2 className="tvn-h2">TÍTULO DE SEÇÃO</h2>
                <CodeBlock 
                  id="h2"
                  code={`<h2 className="tvn-h2">TÍTULO DE SEÇÃO</h2>`}
                />
                <p className="text-sm text-muted-foreground">
                  Use para títulos de seção, divisões principais de conteúdo, headers de blocos importantes.
                </p>
              </div>
            </Card>

            {/* H3 */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="tvn-subtitle text-primary">.tvn-h3</p>
                  <span className="text-xs text-muted-foreground">2xl → 3xl / Bold / Uppercase</span>
                </div>
                <h3 className="tvn-h3">SUBTÍTULO DE SEÇÃO</h3>
                <CodeBlock 
                  id="h3"
                  code={`<h3 className="tvn-h3">SUBTÍTULO DE SEÇÃO</h3>`}
                />
                <p className="text-sm text-muted-foreground">
                  Use para subtítulos dentro de seções, divisões secundárias, headers de subsections.
                </p>
              </div>
            </Card>

            {/* Subtitle */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="tvn-subtitle text-primary">.tvn-subtitle</p>
                  <span className="text-xs text-muted-foreground">sm → base / Semibold / Uppercase / Tracking-wider</span>
                </div>
                <p className="tvn-subtitle">LABEL OU CATEGORIA</p>
                <CodeBlock 
                  id="subtitle"
                  code={`<p className="tvn-subtitle">LABEL OU CATEGORIA</p>`}
                />
                <p className="text-sm text-muted-foreground">
                  Use para labels, categorias, tags, micro-títulos, metadata de conteúdo.
                </p>
              </div>
            </Card>

            {/* Paragraph */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="tvn-subtitle text-primary">.tvn-paragraph</p>
                  <span className="text-xs text-muted-foreground">base → lg / Justify / Hyphens / Leading-relaxed</span>
                </div>
                <p className="tvn-paragraph">
                  Este é um parágrafo de exemplo que demonstra como o texto flui naturalmente 
                  com justificação automática e hifenização correta. O espaçamento entre linhas 
                  é otimizado para leitura confortável em qualquer dispositivo. A tipografia 
                  mantém ritmo visual consistente e hierarquia clara em todo o site.
                </p>
                <CodeBlock 
                  id="paragraph"
                  code={`<p className="tvn-paragraph">
  Texto do parágrafo com justificação automática...
</p>`}
                />
                <p className="text-sm text-muted-foreground">
                  Use para todo corpo de texto, parágrafos principais, descrições longas.
                  Já inclui: text-justify, hyphens, leading-relaxed.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-8">
            {/* Grid Bilíngue */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <p className="tvn-subtitle text-primary">.bilingual-grid</p>
                <div className="bilingual-grid border border-border/50 rounded-lg p-6">
                  <div className="bg-muted/30 p-4 rounded">
                    <p className="tvn-subtitle">COLUNA PORTUGUÊS</p>
                    <p className="tvn-paragraph mt-4">
                      Conteúdo em português alinhado automaticamente com a coluna inglesa.
                    </p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded">
                    <p className="tvn-subtitle">ENGLISH COLUMN</p>
                    <p className="tvn-paragraph mt-4">
                      English content automatically aligned with Portuguese column.
                    </p>
                  </div>
                </div>
                <CodeBlock 
                  id="grid"
                  code={`<div className="bilingual-grid">
  <div className="bilingual-col">
    <h2 className="tvn-h2">PORTUGUÊS</h2>
    <p className="tvn-paragraph">Conteúdo...</p>
  </div>
  <div className="bilingual-col">
    <h2 className="tvn-h2">ENGLISH</h2>
    <p className="tvn-paragraph">Content...</p>
  </div>
</div>`}
                />
              </div>
            </Card>

            {/* Block Spacing */}
            <Card className="tvn-card-spacing">
              <div className="space-y-4">
                <p className="tvn-subtitle text-primary">.tvn-block</p>
                <div className="tvn-block border border-border/50 rounded-lg p-6 bg-muted/10">
                  <p className="tvn-subtitle">ELEMENTO 1</p>
                  <p className="tvn-paragraph">Espaçamento automático entre elementos.</p>
                  <p className="tvn-subtitle">ELEMENTO 2</p>
                  <p className="tvn-paragraph">Ritmo vertical consistente.</p>
                  <p className="tvn-subtitle">ELEMENTO 3</p>
                  <p className="tvn-paragraph">Sem necessidade de margin manual.</p>
                </div>
                <CodeBlock 
                  id="block"
                  code={`<div className="tvn-block">
  <p className="tvn-subtitle">ELEMENTO 1</p>
  <p className="tvn-paragraph">Texto...</p>
  <p className="tvn-subtitle">ELEMENTO 2</p>
  <p className="tvn-paragraph">Texto...</p>
</div>`}
                />
              </div>
            </Card>

            {/* Card Spacing */}
            <Card className="tvn-card-spacing border-2 border-primary/20">
              <div className="space-y-4">
                <p className="tvn-subtitle text-primary">.tvn-card-spacing</p>
                <p className="tvn-paragraph">
                  Aplica padding responsivo interno (p-6 → p-8). Ideal para cards, containers,
                  seções com conteúdo interno que precisa de respiro visual.
                </p>
                <CodeBlock 
                  id="card"
                  code={`<Card className="tvn-card-spacing">
  <h3 className="tvn-h3">TÍTULO DO CARD</h3>
  <p className="tvn-paragraph">Conteúdo...</p>
</Card>`}
                />
              </div>
            </Card>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <Card className="tvn-card-spacing">
              <p className="tvn-subtitle text-primary mb-6">DESIGN TOKENS</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-primary"></div>
                    <div>
                      <p className="text-sm font-semibold">text-primary</p>
                      <p className="text-xs text-muted-foreground">#C40000</p>
                    </div>
                  </div>
                  <CodeBlock id="primary" code={`className="tvn-h2 text-primary"`} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-foreground"></div>
                    <div>
                      <p className="text-sm font-semibold">text-foreground</p>
                      <p className="text-xs text-muted-foreground">#E6E6E6</p>
                    </div>
                  </div>
                  <CodeBlock id="foreground" code={`className="tvn-paragraph text-foreground"`} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-muted-foreground"></div>
                    <div>
                      <p className="text-sm font-semibold">text-muted-foreground</p>
                      <p className="text-xs text-muted-foreground">#A3A3A3</p>
                    </div>
                  </div>
                  <CodeBlock id="muted" code={`className="tvn-subtitle text-muted-foreground"`} />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-background border border-border"></div>
                    <div>
                      <p className="text-sm font-semibold">bg-background</p>
                      <p className="text-xs text-muted-foreground">#1A1A1A</p>
                    </div>
                  </div>
                  <CodeBlock id="background" code={`className="bg-background"`} />
                </div>
              </div>

              <div className="mt-8 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
                <p className="text-sm text-destructive font-semibold mb-2">⚠️ NUNCA USE CORES HARDCODED</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <code>className="tvn-h2 text-primary"</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    <code className="line-through opacity-50">className="tvn-h2 text-red-500"</code>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-8">
            {/* Example 1: Seção Bilíngue Completa */}
            <Card className="tvn-card-spacing">
              <p className="tvn-subtitle text-primary mb-6">EXEMPLO: SEÇÃO BILÍNGUE COMPLETA</p>
              
              <div className="border border-border/50 rounded-lg p-6 bg-muted/5 mb-4">
                <div className="bilingual-grid tvn-block">
                  <div className="bilingual-col">
                    <h2 className="tvn-h2 text-primary">TÍTULO DA SEÇÃO</h2>
                    <p className="tvn-subtitle text-muted-foreground">CATEGORIA</p>
                    <p className="tvn-paragraph">
                      Este é um exemplo completo de uma seção bilíngue usando o sistema TVN.
                      Todos os espaçamentos são automáticos e responsivos. A hierarquia visual
                      é clara e consistente.
                    </p>
                    <h3 className="tvn-h3">SUBTÍTULO</h3>
                    <p className="tvn-paragraph">
                      Mais conteúdo aqui demonstrando o ritmo vertical perfeito.
                    </p>
                  </div>
                  <div className="bilingual-col">
                    <h2 className="tvn-h2 text-primary">SECTION TITLE</h2>
                    <p className="tvn-subtitle text-muted-foreground">CATEGORY</p>
                    <p className="tvn-paragraph">
                      This is a complete example of a bilingual section using the TVN system.
                      All spacing is automatic and responsive. The visual hierarchy is clear
                      and consistent.
                    </p>
                    <h3 className="tvn-h3">SUBTITLE</h3>
                    <p className="tvn-paragraph">
                      More content here demonstrating the perfect vertical rhythm.
                    </p>
                  </div>
                </div>
              </div>

              <CodeBlock 
                id="example1"
                code={`<div className="bilingual-grid tvn-block">
  <div className="bilingual-col">
    <h2 className="tvn-h2 text-primary">TÍTULO DA SEÇÃO</h2>
    <p className="tvn-subtitle text-muted-foreground">CATEGORIA</p>
    <p className="tvn-paragraph">Conteúdo...</p>
    <h3 className="tvn-h3">SUBTÍTULO</h3>
    <p className="tvn-paragraph">Mais conteúdo...</p>
  </div>
  <div className="bilingual-col">
    <h2 className="tvn-h2 text-primary">SECTION TITLE</h2>
    <p className="tvn-subtitle text-muted-foreground">CATEGORY</p>
    <p className="tvn-paragraph">Content...</p>
    <h3 className="tvn-h3">SUBTITLE</h3>
    <p className="tvn-paragraph">More content...</p>
  </div>
</div>`}
              />
            </Card>

            {/* Example 2: Card com Conteúdo */}
            <Card className="tvn-card-spacing">
              <p className="tvn-subtitle text-primary mb-6">EXEMPLO: CARD COM CONTEÚDO</p>
              
              <Card className="tvn-card-spacing border-2 border-primary/20 mb-4">
                <p className="tvn-subtitle text-primary">PROJETO DESTACADO</p>
                <h3 className="tvn-h3 mt-2">LOWMOVIE™</h3>
                <p className="tvn-paragraph mt-4">
                  Filme experimental sobre skate, subcultura e processos criativos.
                  Produzido pelo coletivo LowPressure™ entre 2019-2023.
                </p>
                <Button className="mt-6">Ver Projeto</Button>
              </Card>

              <CodeBlock 
                id="example2"
                code={`<Card className="tvn-card-spacing">
  <p className="tvn-subtitle text-primary">PROJETO DESTACADO</p>
  <h3 className="tvn-h3 mt-2">LOWMOVIE™</h3>
  <p className="tvn-paragraph mt-4">Descrição...</p>
  <Button className="mt-6">Ver Projeto</Button>
</Card>`}
              />
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <Card className="tvn-card-spacing mt-16 bg-primary/5 border-primary/20">
          <div className="text-center">
            <p className="tvn-subtitle text-primary mb-4">DOCUMENTAÇÃO COMPLETA</p>
            <p className="tvn-paragraph">
              Consulte <code className="bg-muted px-2 py-1 rounded text-sm">TYPOGRAPHY_SYSTEM_FINAL.md</code> e{" "}
              <code className="bg-muted px-2 py-1 rounded text-sm">TVN_TYPOGRAPHY_FINAL.md</code> para
              documentação completa do sistema tipográfico oficial THEVØIDN13.
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default StyleGuide;
