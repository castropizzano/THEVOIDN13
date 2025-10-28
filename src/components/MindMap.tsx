import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const MindMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-card/80 border-primary/30 hover:border-primary transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          Creative-Ops Mind Map / Mapa Mental Creative-Ops
        </CardTitle>
        <CardDescription className="text-base">
          Processos híbridos humano-máquina inspirados nas Leis de Asimov / 
          Human-machine hybrid processes inspired by Asimov's Laws
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          className="w-full mb-6"
        >
          {isExpanded ? "Colapsar / Collapse" : "Expandir / Expand"} Mapa Interativo
        </Button>

        {isExpanded && (
          <div className="space-y-8">
            {/* Asimov's Creative Laws */}
            <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-bold mb-4 text-primary">
                The Three Laws of Creative Robotics / As Três Leis da Robótica Criativa
              </h3>
              <div className="space-y-3 text-sm">
                <p className="font-mono">
                  <span className="text-primary font-bold">01.</span> A machine shall not harm human creativity, or through inaction, allow human expression to be diminished.
                </p>
                <p className="font-mono">
                  <span className="text-primary font-bold">02.</span> A machine must amplify human creative intent, except where such amplification would conflict with the First Law.
                </p>
                <p className="font-mono">
                  <span className="text-primary font-bold">03.</span> A machine must preserve its creative potential as long as such preservation does not conflict with the First or Second Law.
                </p>
              </div>
            </div>

            {/* Mermaid Diagram */}
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                <svg viewBox="0 0 1200 2400" className="w-full h-auto">
                  {/* Root Node */}
                  <g>
                    <rect x="450" y="20" width="300" height="60" fill="hsl(var(--primary))" rx="8" />
                    <text x="600" y="55" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                      THEVOIDN13
                    </text>
                  </g>

                  {/* Main Branches */}
                  <line x1="600" y1="80" x2="300" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="600" y1="80" x2="900" y2="150" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Human Branch */}
                  <g>
                    <rect x="150" y="150" width="300" height="60" fill="hsl(var(--accent))" rx="8" />
                    <text x="300" y="185" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="14" fontWeight="bold">
                      👤 HUMANO / HUMAN
                    </text>
                  </g>

                  {/* Machine Branch */}
                  <g>
                    <rect x="750" y="150" width="300" height="60" fill="hsl(var(--secondary))" rx="8" />
                    <text x="900" y="185" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="14" fontWeight="bold">
                      🤖 MÁQUINA / MACHINE
                    </text>
                  </g>

                  {/* Human Sub-branches */}
                  <line x1="300" y1="210" x2="200" y2="280" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  <line x1="300" y1="210" x2="300" y2="280" stroke="hsl(var(--accent))" strokeWidth="1.5" />
                  <line x1="300" y1="210" x2="400" y2="280" stroke="hsl(var(--accent))" strokeWidth="1.5" />

                  <rect x="100" y="280" width="200" height="50" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                  <text x="200" y="310" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Conceito Original</text>

                  <rect x="200" y="280" width="200" height="50" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                  <text x="300" y="310" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Direção Criativa</text>

                  <rect x="300" y="280" width="200" height="50" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                  <text x="400" y="310" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12">Curadoria</text>

                  {/* Machine Sub-branches */}
                  <line x1="900" y1="210" x2="800" y2="280" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
                  <line x1="900" y1="210" x2="900" y2="280" stroke="hsl(var(--secondary))" strokeWidth="1.5" />
                  <line x1="900" y1="210" x2="1000" y2="280" stroke="hsl(var(--secondary))" strokeWidth="1.5" />

                  <rect x="700" y="280" width="200" height="50" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                  <text x="800" y="305" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Geração Visual</text>
                  <text x="800" y="320" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">(Midjourney/Gemini)</text>

                  <rect x="800" y="280" width="200" height="50" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                  <text x="900" y="305" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Análise/Expansão</text>
                  <text x="900" y="320" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">(Claude/GPT)</text>

                  <rect x="900" y="280" width="200" height="50" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                  <text x="1000" y="305" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11">Código/Web</text>
                  <text x="1000" y="320" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">(Lovable AI)</text>

                  {/* Timeline / Cronologia */}
                  <g>
                    <rect x="350" y="400" width="500" height="60" fill="hsl(var(--primary))" opacity="0.8" rx="8" />
                    <text x="600" y="435" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                      CRONOLOGIA / TIMELINE
                    </text>
                  </g>

                  {/* Timeline nodes */}
                  <g className="timeline">
                    <circle cx="200" cy="520" r="8" fill="hsl(var(--primary))" />
                    <rect x="100" y="500" width="200" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="200" y="525" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">2023: Gênese</text>
                    <text x="200" y="545" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Conceito inicial</text>
                    <text x="200" y="560" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Primeiras máscaras</text>
                    <text x="200" y="575" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Character design</text>

                    <circle cx="400" cy="520" r="8" fill="hsl(var(--primary))" />
                    <rect x="300" y="500" width="200" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="400" y="525" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">2024: Expansão</text>
                    <text x="400" y="545" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Crew completo</text>
                    <text x="400" y="560" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Worldbuilding</text>
                    <text x="400" y="575" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Action figures</text>

                    <circle cx="600" cy="520" r="8" fill="hsl(var(--primary))" />
                    <rect x="500" y="500" width="200" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="600" y="525" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">2024: Pesquisa</text>
                    <text x="600" y="545" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Mestrado PPG-CINEAV</text>
                    <text x="600" y="560" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Memorial artístico</text>
                    <text x="600" y="575" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Metodologia híbrida</text>

                    <circle cx="800" cy="520" r="8" fill="hsl(var(--primary))" />
                    <rect x="700" y="500" width="200" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="800" y="525" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">2025: Síntese</text>
                    <text x="800" y="545" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Este site</text>
                    <text x="800" y="560" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Gerador de HQs</text>
                    <text x="800" y="575" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Prompt Library</text>

                    <circle cx="1000" cy="520" r="8" fill="hsl(var(--primary))" />
                    <rect x="900" y="500" width="200" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="1000" y="525" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">2025+: Futuro</text>
                    <text x="1000" y="545" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Animação</text>
                    <text x="1000" y="560" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Narrativas expandidas</text>
                    <text x="1000" y="575" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Transmídia</text>

                    <line x1="200" y1="520" x2="1000" y2="520" stroke="hsl(var(--primary))" strokeWidth="3" />
                  </g>

                  {/* Creative Process */}
                  <g>
                    <rect x="350" y="640" width="500" height="60" fill="hsl(var(--accent))" opacity="0.8" rx="8" />
                    <text x="600" y="675" textAnchor="middle" fill="hsl(var(--accent-foreground))" fontSize="16" fontWeight="bold">
                      FLUXO CRIATIVO / CREATIVE FLOW
                    </text>
                  </g>

                  {/* Process Flow */}
                  <g>
                    <rect x="150" y="750" width="180" height="70" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                    <text x="240" y="775" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">01. OBSERVAÇÃO</text>
                    <text x="240" y="795" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Análise do fluxo</text>
                    <text x="240" y="810" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">criativo humano</text>

                    <text x="360" y="785" textAnchor="middle" fill="hsl(var(--primary))" fontSize="20">→</text>

                    <rect x="380" y="750" width="180" height="70" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                    <text x="470" y="775" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">02. CO-CRIAÇÃO</text>
                    <text x="470" y="795" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Interação com IAs</text>
                    <text x="470" y="810" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">como extensões</text>

                    <text x="590" y="785" textAnchor="middle" fill="hsl(var(--primary))" fontSize="20">→</text>

                    <rect x="610" y="750" width="180" height="70" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                    <text x="700" y="775" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">03. DOCUMENTAÇÃO</text>
                    <text x="700" y="795" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Registro contínuo</text>
                    <text x="700" y="810" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">de camadas</text>

                    <text x="820" y="785" textAnchor="middle" fill="hsl(var(--primary))" fontSize="20">→</text>

                    <rect x="840" y="750" width="180" height="70" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                    <text x="930" y="775" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">04. REFLEXÃO</text>
                    <text x="930" y="795" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Narrativa estética</text>
                    <text x="930" y="810" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">e filosófica</text>
                  </g>

                  <g>
                    <rect x="380" y="860" width="180" height="70" fill="hsl(var(--card))" stroke="hsl(var(--accent))" strokeWidth="2" rx="6" />
                    <text x="470" y="885" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">05. EXPANSÃO</text>
                    <text x="470" y="905" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">Devolução ao mundo</text>
                    <text x="470" y="920" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="10">através de arte/código</text>

                    <line x1="470" y1="820" x2="470" y2="860" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="5,5" />
                  </g>

                  {/* Technologies */}
                  <g>
                    <rect x="350" y="980" width="500" height="60" fill="hsl(var(--secondary))" opacity="0.8" rx="8" />
                    <text x="600" y="1015" textAnchor="middle" fill="hsl(var(--secondary-foreground))" fontSize="16" fontWeight="bold">
                      TECNOLOGIAS / TECHNOLOGIES
                    </text>
                  </g>

                  <g>
                    <rect x="100" y="1090" width="200" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                    <text x="200" y="1115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Inteligência Artificial</text>
                    <text x="200" y="1135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Google Gemini</text>
                    <text x="200" y="1150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Claude / ChatGPT</text>
                    <text x="200" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Midjourney</text>
                    <text x="200" y="1180" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Adobe Firefly</text>

                    <rect x="350" y="1090" width="200" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                    <text x="450" y="1115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Design & Audiovisual</text>
                    <text x="450" y="1135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Adobe Creative Cloud</text>
                    <text x="450" y="1150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• DaVinci Resolve</text>
                    <text x="450" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Figma</text>
                    <text x="450" y="1180" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Blender</text>

                    <rect x="600" y="1090" width="200" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                    <text x="700" y="1115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Desenvolvimento Web</text>
                    <text x="700" y="1135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• React + TypeScript</text>
                    <text x="700" y="1150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Tailwind CSS</text>
                    <text x="700" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Lovable AI</text>
                    <text x="700" y="1180" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• GitHub + Git</text>

                    <rect x="850" y="1090" width="200" height="100" fill="hsl(var(--card))" stroke="hsl(var(--secondary))" strokeWidth="2" rx="6" />
                    <text x="950" y="1115" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="12" fontWeight="bold">Backend & Cloud</text>
                    <text x="950" y="1135" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Supabase</text>
                    <text x="950" y="1150" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• Edge Functions</text>
                    <text x="950" y="1165" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• PostgreSQL</text>
                    <text x="950" y="1180" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">• REST APIs</text>
                  </g>

                  {/* Outputs */}
                  <g>
                    <rect x="350" y="1240" width="500" height="60" fill="hsl(var(--primary))" opacity="0.8" rx="8" />
                    <text x="600" y="1275" textAnchor="middle" fill="hsl(var(--primary-foreground))" fontSize="16" fontWeight="bold">
                      OUTPUTS / RESULTADOS
                    </text>
                  </g>

                  <g>
                    <rect x="80" y="1350" width="160" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="160" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Arte Visual</text>
                    <text x="160" y="1395" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Character design</text>
                    <text x="160" y="1410" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Concept art</text>
                    <text x="160" y="1425" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Worldbuilding</text>

                    <rect x="260" y="1350" width="160" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="340" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Narrativas</text>
                    <text x="340" y="1395" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Roteiros</text>
                    <text x="340" y="1410" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">HQ Generator</text>
                    <text x="340" y="1425" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Storytelling</text>

                    <rect x="440" y="1350" width="160" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="520" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Pesquisa</text>
                    <text x="520" y="1395" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Memorial artístico</text>
                    <text x="520" y="1410" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Dissertação</text>
                    <text x="520" y="1425" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Metodologia</text>

                    <rect x="620" y="1350" width="160" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="700" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Código</text>
                    <text x="700" y="1395" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Este website</text>
                    <text x="700" y="1410" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Open source</text>
                    <text x="700" y="1425" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">GitHub repo</text>

                    <rect x="800" y="1350" width="160" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="880" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Produtos</text>
                    <text x="880" y="1395" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Action figures</text>
                    <text x="880" y="1410" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Máscaras</text>
                    <text x="880" y="1425" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Merchandise</text>

                    <rect x="980" y="1350" width="160" height="80" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="2" rx="6" />
                    <text x="1060" y="1375" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="bold">Conhecimento</text>
                    <text x="1060" y="1395" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Prompt library</text>
                    <text x="1060" y="1410" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Documentação</text>
                    <text x="1060" y="1425" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="9">Tutoriais</text>
                  </g>

                  {/* Footer Quote */}
                  <g>
                    <rect x="250" y="1500" width="700" height="100" fill="hsl(var(--primary))" opacity="0.1" rx="8" />
                    <text x="600" y="1535" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontStyle="italic">
                      "The Three Laws of Robotics were not merely a literary device,
                    </text>
                    <text x="600" y="1555" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontStyle="italic">
                      but a framework for understanding collaboration between
                    </text>
                    <text x="600" y="1575" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="13" fontStyle="italic">
                      human creativity and machine potential."
                    </text>
                    <text x="600" y="1595" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontSize="11">
                      — Inspired by Isaac Asimov's vision
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            <div className="p-6 bg-muted/30 rounded-lg border border-border text-sm space-y-2">
              <p className="font-bold">Nota metodológica / Methodological note:</p>
              <p className="text-muted-foreground">
                Este mapa mental representa a síntese visual do processo creative-ops híbrido desenvolvido ao longo do projeto THEVOIDN13. 
                Inspirado nas Três Leis da Robótica de Isaac Asimov, propõe um framework ético e criativo para a colaboração humano-máquina 
                nas artes visuais e narrativas experimentais.
              </p>
              <p className="text-muted-foreground">
                This mind map represents the visual synthesis of the hybrid creative-ops process developed throughout the THEVOIDN13 project. 
                Inspired by Isaac Asimov's Three Laws of Robotics, it proposes an ethical and creative framework for human-machine collaboration 
                in visual arts and experimental narratives.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
