import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export const MindMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
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
              <h3 className="text-lg font-bold mb-4 text-primary">
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

            {/* Compact Mind Map */}
            <div className="w-full">
              <svg viewBox="0 0 1200 1600" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.6 }} />
                  </linearGradient>
                  <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--accent))", stopOpacity: 0.6 }} />
                  </linearGradient>
                  <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.9 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--secondary))", stopOpacity: 0.6 }} />
                  </linearGradient>
                </defs>

                {/* Central Node */}
                <g>
                  <rect x="420" y="40" width="360" height="80" fill="url(#primaryGrad)" rx="6" />
                  <text x="600" y="75" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="22" fontWeight="bold">
                    THEVØIDN13
                  </text>
                  <text x="600" y="95" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="10" opacity="0.8">
                    Memorial Artístico • Artistic Memorial
                  </text>
                </g>

                {/* 4 Main Branches */}
                {/* Top Left - CONCEITUAL */}
                <line x1="420" y1="120" x2="200" y2="220" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                <rect x="50" y="200" width="300" height="55" fill="url(#primaryGrad)" rx="6" />
                <text x="200" y="225" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                  CONCEITUAL
                </text>
                <text x="200" y="242" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="9" opacity="0.8">
                  Foundations • Fundamentos
                </text>

                {/* Sub-items CONCEITUAL */}
                <rect x="60" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="125" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Shadow Interface</text>
                <text x="125" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Anti-brand aesthetic</text>
                <text x="125" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Low culture punk</text>
                <text x="125" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Subcultural resistance</text>
                <text x="125" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">Shadow Interface Bible</text>
                <text x="125" y="358" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">v13</text>

                <rect x="210" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="275" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Lowbyrinth™</text>
                <text x="275" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Navegação não-linear</text>
                <text x="275" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Labirinto periférico</text>
                <text x="275" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Memória fragmentada</text>
                <text x="275" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">PHILOSOPHY.md</text>

                <line x1="200" y1="255" x2="125" y2="275" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <line x1="200" y1="255" x2="275" y2="275" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />

                {/* Top Right - METODOLÓGICO */}
                <line x1="780" y1="120" x2="1000" y2="220" stroke="hsl(var(--accent))" strokeWidth="2" opacity="0.5" />
                <rect x="850" y="200" width="300" height="55" fill="url(#accentGrad)" rx="6" />
                <text x="1000" y="225" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="16" fontWeight="bold">
                  METODOLÓGICO
                </text>
                <text x="1000" y="242" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="9" opacity="0.8">
                  Process • Processo
                </text>

                {/* Sub-items METODOLÓGICO */}
                <rect x="860" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="1.5" rx="6" />
                <text x="925" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">5 Etapas</text>
                <text x="925" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">01. Observação</text>
                <text x="925" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">02. Co-criação</text>
                <text x="925" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">03. Documentação</text>
                <text x="925" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">04. Reflexão</text>
                <text x="925" y="360" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">05. Expansão</text>

                <rect x="1010" y="275" width="130" height="90" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="1.5" rx="6" />
                <text x="1075" y="295" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">PPG-CINEAV</text>
                <text x="1075" y="310" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Mestrado UFF</text>
                <text x="1075" y="323" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Memorial artístico</text>
                <text x="1075" y="336" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Práxis híbrida</text>
                <text x="1075" y="349" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">• Cinema + Video Art</text>
                <text x="1075" y="360" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7" opacity="0.6">2023-2025</text>

                <line x1="1000" y1="255" x2="925" y2="275" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />
                <line x1="1000" y1="255" x2="1075" y2="275" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.4" />

                {/* Bottom Left - TÉCNICO */}
                <line x1="420" y1="120" x2="200" y2="430" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.5" />
                <rect x="50" y="410" width="300" height="55" fill="url(#secondaryGrad)" rx="6" />
                <text x="200" y="435" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="16" fontWeight="bold">
                  TÉCNICO
                </text>
                <text x="200" y="452" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="9" opacity="0.8">
                  Technology • Tecnologia
                </text>

                {/* Sub-items TÉCNICO - 3 boxes compactas */}
                <rect x="60" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="1.5" rx="6" />
                <text x="100" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">AI</text>
                <text x="100" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Gemini</text>
                <text x="100" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Claude</text>
                <text x="100" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• GPT-5</text>
                <text x="100" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Midjourney</text>
                <text x="100" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Firefly</text>
                <text x="100" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Lovable</text>

                <rect x="160" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="1.5" rx="6" />
                <text x="200" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Design</text>
                <text x="200" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Adobe CC</text>
                <text x="200" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Photoshop</text>
                <text x="200" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Illustrator</text>
                <text x="200" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• After Effects</text>
                <text x="200" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• DaVinci</text>
                <text x="200" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Figma</text>

                <rect x="260" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="1.5" rx="6" />
                <text x="300" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Dev</text>
                <text x="300" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• React</text>
                <text x="300" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• TypeScript</text>
                <text x="300" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Tailwind</text>
                <text x="300" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Supabase</text>
                <text x="300" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• PostgreSQL</text>
                <text x="300" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• GitHub</text>

                <line x1="200" y1="465" x2="100" y2="485" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.4" />
                <line x1="200" y1="465" x2="200" y2="485" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.4" />
                <line x1="200" y1="465" x2="300" y2="485" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.4" />

                {/* Bottom Right - OUTPUTS */}
                <line x1="780" y1="120" x2="1000" y2="430" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.5" />
                <rect x="850" y="410" width="300" height="55" fill="url(#primaryGrad)" rx="6" />
                <text x="1000" y="435" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                  OUTPUTS
                </text>
                <text x="1000" y="452" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="9" opacity="0.8">
                  Deliverables • Entregas
                </text>

                {/* Sub-items OUTPUTS - 3 boxes compactas */}
                <rect x="860" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="900" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Visual</text>
                <text x="900" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Crew</text>
                <text x="900" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Máscaras</text>
                <text x="900" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Void City</text>
                <text x="900" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Action figs</text>
                <text x="900" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Low aesthetic</text>
                <text x="900" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">700+ images</text>

                <rect x="960" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="1000" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Digital</text>
                <text x="1000" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Oráculo</text>
                <text x="1000" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Generator</text>
                <text x="1000" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Prompt Lib</text>
                <text x="1000" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Website</text>
                <text x="1000" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• MindMap</text>
                <text x="1000" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Timeline</text>

                <rect x="1060" y="485" width="80" height="100" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" rx="6" />
                <text x="1100" y="502" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontWeight="bold">Academic</text>
                <text x="1100" y="517" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Memorial</text>
                <text x="1100" y="529" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Brandbooks</text>
                <text x="1100" y="541" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Bible v13</text>
                <text x="1100" y="553" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Dissertação</text>
                <text x="1100" y="565" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• PDFs</text>
                <text x="1100" y="577" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="7">• Áudios</text>

                <line x1="1000" y1="465" x2="900" y2="485" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <line x1="1000" y1="465" x2="1000" y2="485" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />
                <line x1="1000" y1="465" x2="1100" y2="485" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.4" />

                {/* Timeline Compact */}
                <g>
                  <rect x="100" y="650" width="1000" height="90" fill="hsl(var(--muted))" opacity="0.2" rx="8" />
                  <text x="600" y="675" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontWeight="bold">
                    CRONOLOGIA / TIMELINE 2023 — 2025+
                  </text>
                  
                  <line x1="150" y1="710" x2="1050" y2="710" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.4" />
                  
                  <rect x="194" y="704" width="12" height="12" fill="hsl(var(--primary))" />
                  <text x="200" y="732" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="bold">2023</text>
                  
                  <rect x="344" y="704" width="12" height="12" fill="hsl(var(--primary))" />
                  <text x="350" y="732" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="bold">2024 Q1</text>
                  
                  <rect x="494" y="704" width="12" height="12" fill="hsl(var(--primary))" />
                  <text x="500" y="732" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="bold">2024 Q3</text>
                  
                  <rect x="643" y="703" width="14" height="14" fill="hsl(var(--accent))" />
                  <text x="650" y="732" textAnchor="middle" fill="hsl(var(--accent))" fontSize="9" fontWeight="bold">2025 Q1</text>
                  
                  <rect x="794" y="704" width="12" height="12" fill="hsl(var(--secondary))" />
                  <text x="800" y="732" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="9" fontWeight="bold">2025+</text>
                  
                  <rect x="945" y="705" width="10" height="10" fill="hsl(var(--muted-foreground))" opacity="0.5" />
                  <text x="950" y="732" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Futuro</text>
                </g>

                {/* Compact Legend */}
                <g>
                  <text x="600" y="800" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">
                    LEGENDA / LEGEND
                  </text>
                  
                  <rect x="250" y="815" width="25" height="15" fill="url(#primaryGrad)" rx="3" />
                  <text x="283" y="827" fill="hsl(var(--foreground))" fontSize="9">Conceitual & Outputs</text>

                  <rect x="450" y="815" width="25" height="15" fill="url(#accentGrad)" rx="3" />
                  <text x="483" y="827" fill="hsl(var(--foreground))" fontSize="9">Metodológico</text>

                  <rect x="650" y="815" width="25" height="15" fill="url(#secondaryGrad)" rx="3" />
                  <text x="683" y="827" fill="hsl(var(--foreground))" fontSize="9">Técnico</text>

                  <rect x="882" y="817" width="10" height="10" fill="hsl(var(--primary))" />
                  <text x="898" y="827" fill="hsl(var(--foreground))" fontSize="9">Marco-chave</text>
                </g>

                {/* Quote Footer */}
                <g>
                  <rect x="150" y="880" width="900" height="70" fill="hsl(var(--muted))" opacity="0.15" rx="6" />
                  <text x="600" y="910" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontStyle="italic">
                    "Um memorial vivo onde cada camada digital preserva não apenas resultados,
                  </text>
                  <text x="600" y="928" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10" fontStyle="italic">
                    mas o próprio processo de co-criação humano-máquina."
                  </text>
                  <text x="600" y="943" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="8">
                    — Manifesto Creative-Ops, 2025
                  </text>
                </g>
              </svg>
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
