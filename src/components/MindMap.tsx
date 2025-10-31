import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Palette, Code, Film, BookOpen, Sparkles } from "lucide-react";

export const MindMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
          <Brain className="w-7 h-7" />
          Creative-Ops Mind Map / Mapa Mental Creative-Ops
        </CardTitle>
        <CardDescription className="text-base">
          Ecossistema completo do memorial artístico THEVØIDN13 / 
          Complete ecosystem of the THEVØIDN13 artistic memorial
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className="w-full mb-6"
        >
          {isExpanded ? "Colapsar / Collapse" : "Expandir / Expand"} Mapa Completo
        </Button>

        {isExpanded && (
          <div className="space-y-8">
            {/* Asimov's Creative Laws */}
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                As Três Leis da Robótica Criativa / The Three Laws of Creative Robotics
              </h3>
              <div className="space-y-3 text-sm">
                <p className="font-mono">
                  <span className="text-primary font-bold">01.</span> Uma máquina não prejudicará a criatividade humana ou, por omissão, permitirá que a expressão humana seja diminuída.
                </p>
                <p className="font-mono">
                  <span className="text-primary font-bold">02.</span> Uma máquina deve amplificar a intenção criativa humana, exceto quando tal amplificação entrar em conflito com a Primeira Lei.
                </p>
                <p className="font-mono">
                  <span className="text-primary font-bold">03.</span> Uma máquina deve preservar seu potencial criativo desde que tal preservação não entre em conflito com a Primeira ou Segunda Lei.
                </p>
              </div>
            </div>

            {/* Modern Mind Map */}
            <div className="overflow-x-auto">
              <div className="min-w-[1400px]">
                <svg viewBox="0 0 1600 2200" className="w-full h-auto" style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}>
                  {/* Definitions for gradients */}
                  <defs>
                    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.7 }} />
                    </linearGradient>
                    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.7 }} />
                    </linearGradient>
                    <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.7 }} />
                    </linearGradient>
                  </defs>

                  {/* Central Node - THEVØIDN13 */}
                  <g>
                    <ellipse cx="800" cy="100" rx="200" ry="80" fill="url(#primaryGrad)" opacity="0.9" />
                    <text x="800" y="95" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="28" fontWeight="bold">
                      THEVØIDN13
                    </text>
                    <text x="800" y="115" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="12" opacity="0.9">
                      Memorial Artístico • Artistic Memorial
                    </text>
                  </g>

                  {/* Main Branches - 4 Quadrants */}
                  {/* Branch 1: CONCEITUAL (top-left) */}
                  <line x1="650" y1="140" x2="300" y2="300" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.6" />
                  <g>
                    <rect x="150" y="280" width="300" height="70" fill="url(#primaryGrad)" rx="12" opacity="0.9" />
                    <text x="300" y="310" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="18" fontWeight="bold">
                      🧠 CONCEITUAL
                    </text>
                    <text x="300" y="330" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="11" opacity="0.9">
                      Foundations • Fundamentos
                    </text>
                  </g>

                  {/* Sub-branches CONCEITUAL */}
                  <rect x="50" y="390" width="200" height="110" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="150" y="415" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">Shadow Interface</text>
                  <text x="150" y="435" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Interface das sombras</text>
                  <text x="150" y="450" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Anti-brand aesthetic</text>
                  <text x="150" y="465" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Low culture punk</text>
                  <text x="150" y="480" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Subcultural resistance</text>
                  <text x="150" y="495" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" opacity="0.7">Shadow Interface Bible v13</text>

                  <rect x="280" y="390" width="200" height="110" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="380" y="415" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">Lowbyrinth™</text>
                  <text x="380" y="435" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Navegação não-linear</text>
                  <text x="380" y="450" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Labirinto periférico</text>
                  <text x="380" y="465" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Memória fragmentada</text>
                  <text x="380" y="480" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Hipertexto borgiano</text>
                  <text x="380" y="495" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" opacity="0.7">PHILOSOPHY.md</text>

                  <line x1="300" y1="350" x2="150" y2="390" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
                  <line x1="300" y1="350" x2="380" y2="390" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />

                  {/* Branch 2: METODOLÓGICO (top-right) */}
                  <line x1="950" y1="140" x2="1300" y2="300" stroke="hsl(var(--accent))" strokeWidth="3" opacity="0.6" />
                  <g>
                    <rect x="1150" y="280" width="300" height="70" fill="url(#accentGrad)" rx="12" opacity="0.9" />
                    <text x="1300" y="310" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="18" fontWeight="bold">
                      🔬 METODOLÓGICO
                    </text>
                    <text x="1300" y="330" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="11" opacity="0.9">
                      Process • Processo
                    </text>
                  </g>

                  {/* Sub-branches METODOLÓGICO */}
                  <rect x="1100" y="390" width="180" height="120" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="8" />
                  <text x="1190" y="415" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">5 Etapas</text>
                  <text x="1190" y="435" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">01. Observação</text>
                  <text x="1190" y="450" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">02. Co-criação</text>
                  <text x="1190" y="465" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">03. Documentação</text>
                  <text x="1190" y="480" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">04. Reflexão</text>
                  <text x="1190" y="495" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">05. Expansão</text>
                  <text x="1190" y="507" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" opacity="0.7">METHODOLOGY.md</text>

                  <rect x="1310" y="390" width="180" height="120" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="8" />
                  <text x="1400" y="415" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">Pesquisa Acadêmica</text>
                  <text x="1400" y="435" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Mestrado PPG-CINEAV</text>
                  <text x="1400" y="450" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Memorial artístico</text>
                  <text x="1400" y="465" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Práxis híbrida</text>
                  <text x="1400" y="480" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Cinema + Video Art</text>
                  <text x="1400" y="495" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">• Co-criação humano-IA</text>
                  <text x="1400" y="507" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9" opacity="0.7">UFF 2023-2025</text>

                  <line x1="1300" y1="350" x2="1190" y2="390" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.5" />
                  <line x1="1300" y1="350" x2="1400" y2="390" stroke="hsl(var(--accent))" strokeWidth="1.5" opacity="0.5" />

                  {/* Branch 3: TÉCNICO (bottom-left) */}
                  <line x1="650" y1="180" x2="300" y2="700" stroke="hsl(var(--secondary))" strokeWidth="3" opacity="0.6" />
                  <g>
                    <rect x="150" y="680" width="300" height="70" fill="url(#secondaryGrad)" rx="12" opacity="0.9" />
                    <text x="300" y="710" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="18" fontWeight="bold">
                      ⚙️ TÉCNICO
                    </text>
                    <text x="300" y="730" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="11" opacity="0.9">
                      Technology • Tecnologia
                    </text>
                  </g>

                  {/* Sub-branches TÉCNICO */}
                  <rect x="30" y="790" width="160" height="130" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="8" />
                  <text x="110" y="815" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Inteligência Artificial</text>
                  <text x="110" y="835" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Google Gemini</text>
                  <text x="110" y="850" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Claude AI</text>
                  <text x="110" y="865" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• ChatGPT / GPT-5</text>
                  <text x="110" y="880" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Midjourney v7</text>
                  <text x="110" y="895" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Adobe Firefly</text>
                  <text x="110" y="910" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Lovable AI</text>

                  <rect x="220" y="790" width="160" height="130" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="8" />
                  <text x="300" y="815" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Design & Audiovisual</text>
                  <text x="300" y="835" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Adobe CC Suite</text>
                  <text x="300" y="850" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Photoshop / Illustrator</text>
                  <text x="300" y="865" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• After Effects</text>
                  <text x="300" y="880" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• DaVinci Resolve</text>
                  <text x="300" y="895" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Figma</text>
                  <text x="300" y="910" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Blender 3D</text>

                  <rect x="410" y="790" width="160" height="130" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="8" />
                  <text x="490" y="815" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Desenvolvimento</text>
                  <text x="490" y="835" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• React + TypeScript</text>
                  <text x="490" y="850" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Tailwind CSS</text>
                  <text x="490" y="865" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Vite + Bun</text>
                  <text x="490" y="880" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Supabase Cloud</text>
                  <text x="490" y="895" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• PostgreSQL</text>
                  <text x="490" y="910" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• GitHub + Git</text>

                  <line x1="300" y1="750" x2="110" y2="790" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.5" />
                  <line x1="300" y1="750" x2="300" y2="790" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.5" />
                  <line x1="300" y1="750" x2="490" y2="790" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.5" />

                  {/* Branch 4: OUTPUTS (bottom-right) */}
                  <line x1="950" y1="180" x2="1300" y2="700" stroke="hsl(var(--primary))" strokeWidth="3" opacity="0.6" />
                  <g>
                    <rect x="1150" y="680" width="300" height="70" fill="url(#primaryGrad)" rx="12" opacity="0.9" />
                    <text x="1300" y="710" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="18" fontWeight="bold">
                      🎨 OUTPUTS
                    </text>
                    <text x="1300" y="730" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="11" opacity="0.9">
                      Deliverables • Entregas
                    </text>
                  </g>

                  {/* Sub-branches OUTPUTS */}
                  <rect x="1030" y="790" width="180" height="130" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="1120" y="815" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Universo Visual</text>
                  <text x="1120" y="835" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Crew THEVØIDN13</text>
                  <text x="1120" y="850" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Máscaras sombrias</text>
                  <text x="1120" y="865" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Void City worldbuilding</text>
                  <text x="1120" y="880" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Action figures concept</text>
                  <text x="1120" y="895" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Low culture aesthetic</text>
                  <text x="1120" y="910" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• 700+ imagens geradas</text>

                  <rect x="1240" y="790" width="180" height="130" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="1330" y="815" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Plataformas Interativas</text>
                  <text x="1330" y="835" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Oráculo Criativo</text>
                  <text x="1330" y="850" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Still Generator</text>
                  <text x="1330" y="865" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Prompt Library</text>
                  <text x="1330" y="880" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Memorial Website</text>
                  <text x="1330" y="895" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• MindMap & Timeline</text>
                  <text x="1330" y="910" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Documentação completa</text>

                  <rect x="1450" y="790" width="180" height="130" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="8" />
                  <text x="1540" y="815" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Materiais Acadêmicos</text>
                  <text x="1540" y="835" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Memorial Acadêmico</text>
                  <text x="1540" y="850" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Brandbooks (Low*)</text>
                  <text x="1540" y="865" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Shadow Interface Bible</text>
                  <text x="1540" y="880" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Dissertação de mestrado</text>
                  <text x="1540" y="895" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Documentos PDF</text>
                  <text x="1540" y="910" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Áudios explicativos</text>

                  <line x1="1300" y1="750" x2="1120" y2="790" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
                  <line x1="1300" y1="750" x2="1330" y2="790" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />
                  <line x1="1300" y1="750" x2="1540" y2="790" stroke="hsl(var(--primary))" strokeWidth="1.5" opacity="0.5" />

                  {/* Timeline Bar at Bottom */}
                  <g>
                    <rect x="200" y="1050" width="1200" height="80" fill="hsl(var(--muted))" opacity="0.3" rx="10" />
                    <text x="800" y="1075" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="14" fontWeight="bold">
                      CRONOLOGIA / TIMELINE 2023 — 2025+
                    </text>
                    
                    {/* Timeline points */}
                    <circle cx="300" cy="1110" r="10" fill="hsl(var(--primary))" />
                    <text x="300" y="1150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">2023</text>
                    <text x="300" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Gênese</text>

                    <circle cx="500" cy="1110" r="10" fill="hsl(var(--primary))" />
                    <text x="500" y="1150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">2024 Q1-Q2</text>
                    <text x="500" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Crew completo</text>

                    <circle cx="700" cy="1110" r="10" fill="hsl(var(--primary))" />
                    <text x="700" y="1150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">2024 Q3-Q4</text>
                    <text x="700" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Pesquisa PPG</text>

                    <circle cx="900" cy="1110" r="10" fill="hsl(var(--accent))" />
                    <text x="900" y="1150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">2025 Q1</text>
                    <text x="900" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Este site</text>

                    <circle cx="1100" cy="1110" r="10" fill="hsl(var(--secondary))" />
                    <text x="1100" y="1150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">2025 Q2+</text>
                    <text x="1100" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Animação</text>

                    <circle cx="1300" cy="1110" r="10" fill="hsl(var(--muted-foreground))" opacity="0.5" />
                    <text x="1300" y="1150" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Futuro</text>
                    <text x="1300" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">Transmídia</text>

                    <line x1="300" y1="1110" x2="1300" y2="1110" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                  </g>

                  {/* Legend / Legenda */}
                  <g>
                    <text x="800" y="1250" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">
                      LEGENDA / LEGEND
                    </text>
                    
                    <rect x="350" y="1270" width="30" height="20" fill="url(#primaryGrad)" rx="4" />
                    <text x="390" y="1285" fill="hsl(var(--foreground))" fontSize="10">Conceitual & Outputs</text>

                    <rect x="550" y="1270" width="30" height="20" fill="url(#accentGrad)" rx="4" />
                    <text x="590" y="1285" fill="hsl(var(--foreground))" fontSize="10">Metodológico</text>

                    <rect x="750" y="1270" width="30" height="20" fill="url(#secondaryGrad)" rx="4" />
                    <text x="790" y="1285" fill="hsl(var(--foreground))" fontSize="10">Técnico</text>

                    <circle cx="1000" cy="1280" r="6" fill="hsl(var(--primary))" />
                    <text x="1015" y="1285" fill="hsl(var(--foreground))" fontSize="10">Evento-chave / Key event</text>
                  </g>

                  {/* Footer Quote */}
                  <g>
                    <rect x="250" y="1350" width="1100" height="60" fill="hsl(var(--muted))" opacity="0.2" rx="8" />
                    <text x="800" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontStyle="italic">
                      "Um memorial vivo onde cada camada digital preserva não apenas resultados,
                    </text>
                    <text x="800" y="1395" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontStyle="italic">
                      mas o próprio processo de co-criação humano-máquina."
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Methodological Note */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground">
                    <strong className="text-primary">Nota Metodológica / Methodological Note:</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Este mapa mental documenta o ecossistema completo do memorial artístico THEVØIDN13, 
                    estruturado em quatro dimensões principais: <strong>Conceitual</strong> (fundamentos filosóficos 
                    e estéticos), <strong>Metodológico</strong> (processo de pesquisa e co-criação), 
                    <strong>Técnico</strong> (ferramentas e tecnologias empregadas), e <strong>Outputs</strong> (entregas 
                    visuais, interativas e acadêmicas).
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    O processo é inspirado nas <strong>Três Leis da Robótica</strong> de Isaac Asimov, 
                    reinterpretadas para o contexto criativo: a máquina como amplificadora da expressão humana, 
                    jamais como substituta. Cada elemento do mapa reflete a práxis híbrida humano-IA 
                    desenvolvida ao longo de 2023-2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
