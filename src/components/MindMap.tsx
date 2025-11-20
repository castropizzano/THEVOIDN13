import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/FeatureCard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslation } from "@/hooks/useTranslation";
import { ChevronRight, ChevronLeft, Network, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";

type ProcessStep = {
  id: string;
  titlePt: string;
  titleEn: string;
  contentPt: string[];
  contentEn: string[];
  codePt: string;
  codeEn: string;
  connections: number[];  // indices of connected steps
  connectionType: string; // type of connection
};

const processSteps: ProcessStep[] = [
  {
    id: "00_intro",
    titlePt: "INTRODUÇÃO AO PROCESSO",
    titleEn: "PROCESS INTRODUCTION",
    contentPt: [
      "Este é o processo completo de criação do Memorial Artístico THEVØIDN13.",
      "Um sistema de operações criativas que transforma memórias brutas em interfaces digitais interativas.",
      "Cada etapa representa uma camada de transformação do material coletado ao longo de 2 anos de trabalho criativo."
    ],
    contentEn: [
      "This is the complete creative process of the THEVØIDN13 Artistic Memorial.",
      "A creative operations system that transforms raw memories into interactive digital interfaces.",
      "Each step represents a layer of transformation of material collected over 2 years of creative work."
    ],
    codePt: "├─ ETAPAS: 7 fases\n├─ TEMPO: 2 anos de coleta\n└─ OUTPUT: Memorial digital interativo",
    codeEn: "├─ STEPS: 7 phases\n├─ TIME: 2 years of collection\n└─ OUTPUT: Interactive digital memorial",
    connections: [1, 2, 3, 4, 5, 6],
    connectionType: "feeds_into"
  },
  {
    id: "01_input",
    titlePt: "[01] INPUT::MEMORIAL_ARTÍSTICO",
    titleEn: "[01] INPUT::ARTISTIC_MEMORIAL",
    contentPt: [
      "A primeira fase é a coleta de todo material bruto:",
      "• Diários pessoais e cadernos de anotações de set",
      "• Storyboards e concept art de projetos cinematográficos",
      "• Dissertação acadêmica sobre cinema marginal",
      "• Arquivos RAW de filmagens e fotografias",
      "• Gravações de áudio de bastidores",
      "• Entrevistas com colaboradores (Black Media, Gabriel Peralta, Rafão VM)",
      "• Material de projetos LowMovie, LowPressure, Casa Treze Studio"
    ],
    contentEn: [
      "The first phase is collecting all raw material:",
      "• Personal journals and on-set notebooks",
      "• Storyboards and concept art from film projects",
      "• Academic thesis on marginal cinema",
      "• RAW files from filming and photography",
      "• Behind-the-scenes audio recordings",
      "• Interviews with collaborators (Black Media, Gabriel Peralta, Rafão VM)",
      "• Material from LowMovie, LowPressure, Casa Treze Studio projects"
    ],
    codePt: "INPUT::SOURCES {\n  diarios: 'memórias brutas',\n  projetos: 'LowMovie | LowPressure | C13',\n  entrevistas: 'colaboradores',\n  arquivos: 'RAW visual/audio',\n  dissertacao: 'teoria acadêmica'\n}",
    codeEn: "INPUT::SOURCES {\n  journals: 'raw memories',\n  projects: 'LowMovie | LowPressure | C13',\n  interviews: 'collaborators',\n  files: 'RAW visual/audio',\n  thesis: 'academic theory'\n}",
    connections: [2],
    connectionType: "transforms_into"
  },
  {
    id: "02_process",
    titlePt: "[02] PROCESS::SHADOW_INTERFACE",
    titleEn: "[02] PROCESS::SHADOW_INTERFACE",
    contentPt: [
      "THEVØIDN13 atua como interface de processamento:",
      "• Organização cronológica e temática do material",
      "• Cruzamento de referências entre projetos",
      "• Tradução PT/EN de todo conteúdo textual",
      "• Conversão de formatos analógicos para digitais",
      "• Criação de metadados e sistemas de indexação",
      "• Desenvolvimento de taxonomia visual/conceitual",
      "• Estabelecimento de conexões não-lineares entre elementos"
    ],
    contentEn: [
      "THEVØIDN13 acts as processing interface:",
      "• Chronological and thematic organization of material",
      "• Cross-referencing between projects",
      "• PT/EN translation of all textual content",
      "• Conversion from analog to digital formats",
      "• Creation of metadata and indexing systems",
      "• Development of visual/conceptual taxonomy",
      "• Establishment of non-linear connections between elements"
    ],
    codePt: "PROCESS::PIPELINE {\n  organize() → cronologia + tema,\n  crossReference() → projetos interligados,\n  translate() → bilinguismo total,\n  digitize() → conversão de formatos,\n  index() → sistema de busca,\n  connect() → relações não-lineares\n}",
    codeEn: "PROCESS::PIPELINE {\n  organize() → chronology + theme,\n  crossReference() → interconnected projects,\n  translate() → total bilingualism,\n  digitize() → format conversion,\n  index() → search system,\n  connect() → non-linear relations\n}",
    connections: [3, 4],
    connectionType: "enables"
  },
  {
    id: "03_map",
    titlePt: "[03] MAP::CREATIVE_OPS",
    titleEn: "[03] MAP::CREATIVE_OPS",
    contentPt: [
      "Criação do mapa de operações criativas:",
      "• Cada projeto vira um nó na rede (filmes, HQs, sites, zines)",
      "• Definição de arquétipos criativos (Shadow, Punk, Buddy, GI)",
      "• Mapeamento de influências (cinema, quadrinhos, filosofia)",
      "• Documentação de processos técnicos e estéticos",
      "• Registro de colaborações e trocas criativas",
      "• Identificação de padrões recorrentes",
      "• Estruturação de narrativas transversais"
    ],
    contentEn: [
      "Creation of creative operations map:",
      "• Each project becomes a node in the network (films, comics, sites, zines)",
      "• Definition of creative archetypes (Shadow, Punk, Buddy, GI)",
      "• Mapping of influences (cinema, comics, philosophy)",
      "• Documentation of technical and aesthetic processes",
      "• Recording of collaborations and creative exchanges",
      "• Identification of recurring patterns",
      "• Structuring of transversal narratives"
    ],
    codePt: "MAP::STRUCTURE {\n  nodes: ['filmes', 'HQs', 'sites', 'zines'],\n  archetypes: ['shadow', 'punk', 'buddy', 'gi'],\n  influences: ['cinema', 'comics', 'philosophy'],\n  patterns: 'identificação de recorrências',\n  network: 'conexões transversais'\n}",
    codeEn: "MAP::STRUCTURE {\n  nodes: ['films', 'comics', 'sites', 'zines'],\n  archetypes: ['shadow', 'punk', 'buddy', 'gi'],\n  influences: ['cinema', 'comics', 'philosophy'],\n  patterns: 'recurring identification',\n  network: 'transversal connections'\n}",
    connections: [4, 5],
    connectionType: "structures"
  },
  {
    id: "04_tools",
    titlePt: "[04] LINK::TOOLS",
    titleEn: "[04] LINK::TOOLS",
    contentPt: [
      "Desenvolvimento das ferramentas interativas:",
      "• Creative Oracle: sistema de identificação de arquétipos",
      "• Prompt Library: biblioteca de prompts para IA generativa",
      "• Still Generator: gerador experimental de stills cinematográficos",
      "• Global Search: busca unificada em todo memorial",
      "• PDF Viewers: visualizadores de documentos acadêmicos",
      "• Audio Players: reprodutores de manifestos e podcasts",
      "• Interactive Timelines: linhas do tempo de projetos"
    ],
    contentEn: [
      "Development of interactive tools:",
      "• Creative Oracle: archetype identification system",
      "• Prompt Library: library of prompts for generative AI",
      "• Still Generator: experimental cinematic still generator",
      "• Global Search: unified search across memorial",
      "• PDF Viewers: academic document viewers",
      "• Audio Players: manifesto and podcast players",
      "• Interactive Timelines: project timelines"
    ],
    codePt: "TOOLS::INTERACTIVE {\n  oracle: 'arquétipos criativos',\n  library: 'prompts IA',\n  generator: 'stills cinematográficos',\n  search: 'busca global',\n  viewers: 'documentos + áudio',\n  timeline: 'cronologia visual'\n}",
    codeEn: "TOOLS::INTERACTIVE {\n  oracle: 'creative archetypes',\n  library: 'AI prompts',\n  generator: 'cinematic stills',\n  search: 'global search',\n  viewers: 'documents + audio',\n  timeline: 'visual chronology'\n}",
    connections: [5],
    connectionType: "implements"
  },
  {
    id: "05_interface",
    titlePt: "[05] OUTPUT::SHADOW_INTERFACE",
    titleEn: "[05] OUTPUT::SHADOW_INTERFACE",
    contentPt: [
      "Construção da interface web do memorial:",
      "• Design system code-like inspirado em terminal",
      "• Tipografia Bible v13 customizada",
      "• Sistema de cores dark com acentos em vermelho/verde",
      "• Componentes reutilizáveis em React + TypeScript",
      "• Responsividade mobile-first",
      "• Animações suaves e micro-interações",
      "• Acessibilidade WCAG 2.1 AA"
    ],
    contentEn: [
      "Construction of memorial web interface:",
      "• Terminal-inspired code-like design system",
      "• Custom Bible v13 typography",
      "• Dark color system with red/green accents",
      "• Reusable components in React + TypeScript",
      "• Mobile-first responsiveness",
      "• Smooth animations and micro-interactions",
      "• WCAG 2.1 AA accessibility"
    ],
    codePt: "INTERFACE::DESIGN {\n  style: 'code-like terminal',\n  typography: 'Bible v13',\n  colors: 'dark + red/green accents',\n  tech: 'React + TypeScript',\n  responsive: 'mobile-first',\n  a11y: 'WCAG 2.1 AA'\n}",
    codeEn: "INTERFACE::DESIGN {\n  style: 'code-like terminal',\n  typography: 'Bible v13',\n  colors: 'dark + red/green accents',\n  tech: 'React + TypeScript',\n  responsive: 'mobile-first',\n  a11y: 'WCAG 2.1 AA'\n}",
    connections: [6],
    connectionType: "outputs_to"
  },
  {
    id: "06_deploy",
    titlePt: "[06] DEPLOY::PRODUCTION",
    titleEn: "[06] DEPLOY::PRODUCTION",
    contentPt: [
      "Publicação e distribuição do memorial:",
      "• Deploy em Lovable Cloud com CI/CD automatizado",
      "• Integração com Supabase para backend",
      "• Otimização de performance (Lighthouse 100)",
      "• SEO completo com structured data",
      "• PWA para instalação offline",
      "• Analytics de engajamento",
      "• Sistema de backup e versionamento"
    ],
    contentEn: [
      "Memorial publication and distribution:",
      "• Deploy on Lovable Cloud with automated CI/CD",
      "• Supabase integration for backend",
      "• Performance optimization (Lighthouse 100)",
      "• Complete SEO with structured data",
      "• PWA for offline installation",
      "• Engagement analytics",
      "• Backup and versioning system"
    ],
    codePt: "DEPLOY::PRODUCTION {\n  host: 'Lovable Cloud',\n  backend: 'Supabase',\n  performance: 'Lighthouse 100',\n  seo: 'structured data',\n  pwa: 'offline ready',\n  analytics: 'engagement tracking'\n}",
    codeEn: "DEPLOY::PRODUCTION {\n  host: 'Lovable Cloud',\n  backend: 'Supabase',\n  performance: 'Lighthouse 100',\n  seo: 'structured data',\n  pwa: 'offline ready',\n  analytics: 'engagement tracking'\n}",
    connections: [7],
    connectionType: "enables"
  },
  {
    id: "07_evolution",
    titlePt: "[07] STATUS::CONTINUOUS_EVOLUTION",
    titleEn: "[07] STATUS::CONTINUOUS_EVOLUTION",
    contentPt: [
      "O memorial é um organismo vivo em constante evolução:",
      "• Novas funcionalidades são adicionadas continuamente",
      "• Conteúdo é atualizado com novos projetos",
      "• Ferramentas de IA são refinadas e expandidas",
      "• Comunidade pode interagir e contribuir",
      "• Experimentos são documentados em tempo real",
      "• O processo criativo continua público e transparente",
      "• THEVØIDN13 permanece como interface entre criador e obra"
    ],
    contentEn: [
      "The memorial is a living organism in constant evolution:",
      "• New features are continuously added",
      "• Content is updated with new projects",
      "• AI tools are refined and expanded",
      "• Community can interact and contribute",
      "• Experiments are documented in real-time",
      "• Creative process remains public and transparent",
      "• THEVØIDN13 remains as interface between creator and work"
    ],
    codePt: "STATUS::LIVE {\n  state: 'em evolução contínua',\n  updates: 'novos projetos',\n  community: 'interação aberta',\n  experiments: 'documentação real-time',\n  transparency: 'processo público',\n  interface: 'THEVØIDN13 ativo'\n}",
    codeEn: "STATUS::LIVE {\n  state: 'in continuous evolution',\n  updates: 'new projects',\n  community: 'open interaction',\n  experiments: 'real-time documentation',\n  transparency: 'public process',\n  interface: 'THEVØIDN13 active'\n}",
    connections: [1, 2, 3, 4, 5, 6],
    connectionType: "loops_back"
  }
];

export const MindMap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showConnections, setShowConnections] = useState(false);
  const [viewMode, setViewMode] = useState<'step' | 'timeline'>('step');
  const timelineRef = useRef<HTMLDivElement>(null);
  const { t, language } = useTranslation();

  const handleNext = () => {
    if (currentStep < processSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const scrollToStep = (stepIndex: number) => {
    if (timelineRef.current) {
      const stepElement = timelineRef.current.children[stepIndex] as HTMLElement;
      if (stepElement) {
        stepElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  useEffect(() => {
    if (viewMode === 'timeline' && currentStep !== undefined) {
      scrollToStep(currentStep);
    }
  }, [currentStep, viewMode]);

  const getProgressBar = () => {
    const filled = currentStep + 1;
    const total = processSteps.length;
    const percentage = Math.round((filled / total) * 100);
    const barLength = 16;
    const filledLength = Math.round((filled / total) * barLength);
    return {
      bar: '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength),
      percentage
    };
  };

  const currentStepData = processSteps[currentStep];
  const progress = getProgressBar();

  const getConnectionLabel = (type: string) => {
    const labels: Record<string, { pt: string; en: string }> = {
      feeds_into: { pt: "alimenta", en: "feeds into" },
      transforms_into: { pt: "transforma em", en: "transforms into" },
      enables: { pt: "habilita", en: "enables" },
      structures: { pt: "estrutura", en: "structures" },
      implements: { pt: "implementa", en: "implements" },
      outputs_to: { pt: "produz", en: "outputs to" },
      loops_back: { pt: "retorna para", en: "loops back to" },
    };
    return language === 'pt' ? labels[type]?.pt : labels[type]?.en;
  };

  return (
    <>
      <div className="max-w-6xl mx-auto" data-mindmap>
        <FeatureCard
          title={t("creativeOpsMindMap")}
          description={t("completeEcosystem")}
          buttonText={t("expandFullMap")}
          onClick={() => setIsOpen(true)}
        />
      </div>

      <Dialog open={isOpen} onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          handleReset();
          setViewMode('step');
        }
      }}>
        <DialogContent className="max-w-7xl mx-auto max-h-[90vh] overflow-hidden bg-background/95 backdrop-blur-sm p-6 sm:p-8 flex flex-col">
          <DialogHeader className="border-b border-primary/30 pb-4 mb-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-primary text-xl font-mono font-bold">
                  CREATIVE_OPS::PROCESS_MAP <span className="text-muted-foreground text-sm">// PT / EN</span>
                </DialogTitle>
                <DialogDescription className="text-muted-foreground font-mono text-sm">
                  {language === 'pt' 
                    ? '// Processo completo de criação do Memorial Artístico THEVØIDN13' 
                    : '// Complete creation process of THEVØIDN13 Artistic Memorial'}
                </DialogDescription>
              </div>
              <Button
                onClick={() => setViewMode(viewMode === 'step' ? 'timeline' : 'step')}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <LayoutList className="h-4 w-4" />
                {viewMode === 'step' ? 'TIMELINE' : 'STEP'} VIEW
              </Button>
            </div>
          </DialogHeader>

          {viewMode === 'step' ? (
            <div className="bg-black/90 border border-primary/30 rounded-lg p-6 sm:p-8 font-mono space-y-6 overflow-y-auto flex-1">
            {/* Progress */}
            <div className="space-y-2 pb-4 border-b border-primary/20">
              <div className="flex items-center justify-between">
                <div className="text-accent font-bold text-lg">
                  {language === 'pt' ? currentStepData.titlePt : currentStepData.titleEn}
                </div>
                <div className="text-muted-foreground text-sm">
                  STEP {currentStep + 1}/{processSteps.length}
              </div>
            </div>

            {/* Connections Visualization */}
            {showConnections && currentStepData.connections.length > 0 && (
              <div className="space-y-3 pb-4 border-b border-primary/20 animate-fade-in">
                <div className="flex items-center gap-2 text-accent text-sm font-bold">
                  <Network className="h-4 w-4" />
                  [CONNECTIONS] {getConnectionLabel(currentStepData.connectionType)}
                </div>
                <div className="pl-4 space-y-2">
                  {currentStepData.connections.map((connIdx) => (
                    <div 
                      key={connIdx}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"
                      onClick={() => setCurrentStep(connIdx)}
                    >
                      <span className="text-primary group-hover:animate-pulse">→</span>
                      <span className="group-hover:underline">
                        {language === 'pt' 
                          ? processSteps[connIdx].titlePt 
                          : processSteps[connIdx].titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
              <div className="text-muted-foreground text-sm">
                [PROGRESS] {progress.bar} {progress.percentage}%
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div className="space-y-3 text-foreground text-sm">
                {(language === 'pt' ? currentStepData.contentPt : currentStepData.contentEn).map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Code Block */}
              <div className="bg-black border border-primary/20 rounded p-4 mt-4">
                <pre className="text-primary text-xs sm:text-sm overflow-x-auto">
                  {language === 'pt' ? currentStepData.codePt : currentStepData.codeEn}
                </pre>
              </div>
            </div>

            {/* Connections Visualization */}
            {showConnections && currentStepData.connections.length > 0 && (
              <div className="space-y-3 pb-4 border-b border-primary/20 animate-fade-in">
                <div className="flex items-center gap-2 text-accent text-sm font-bold">
                  <Network className="h-4 w-4" />
                  [CONNECTIONS] {getConnectionLabel(currentStepData.connectionType)}
                </div>
                <div className="pl-4 space-y-2">
                  {currentStepData.connections.map((connIdx) => (
                    <div 
                      key={connIdx}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"
                      onClick={() => setCurrentStep(connIdx)}
                    >
                      <span className="text-primary group-hover:animate-pulse">→</span>
                      <span className="group-hover:underline">
                        {language === 'pt' 
                          ? processSteps[connIdx].titlePt 
                          : processSteps[connIdx].titleEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex flex-col gap-3 pt-4 border-t border-primary/20">
              <div className="flex items-center justify-between">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={() => setShowConnections(!showConnections)}
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "gap-2 transition-all",
                          showConnections && "bg-primary/10 text-primary border border-primary/30"
                        )}
                      >
                        <Network className={cn("h-4 w-4", showConnections && "animate-pulse")} />
                        {language === 'pt' ? 'CONEXÕES' : 'CONNECTIONS'} [{showConnections ? 'ON' : 'OFF'}]
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs font-mono text-xs bg-background/95 border-primary/30">
                      <p className="font-bold text-primary mb-1">
                        {language === 'pt' ? '// VISUALIZAR CONEXÕES' : '// VIEW CONNECTIONS'}
                      </p>
                      <p className="text-muted-foreground">
                        {language === 'pt' 
                          ? 'Mostra como esta etapa se relaciona e alimenta outras etapas do processo criativo'
                          : 'Shows how this step relates to and feeds other steps of the creative process'}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline"
                className="gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                {language === 'pt' ? '< ANTERIOR' : '< PREVIOUS'}
              </Button>

              {currentStep === processSteps.length - 1 ? (
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="outline"
                  className="flex-1"
                >
                  {language === 'pt' ? '> CONCLUIR' : '> FINISH'}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  variant="outline"
                  className="gap-2 flex-1"
                >
                  {language === 'pt' ? 'PRÓXIMO >' : 'NEXT >'}
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}

              <Button
                onClick={handleReset}
                variant="ghost"
                size="sm"
              >
                {language === 'pt' ? 'REINICIAR' : 'RESTART'}
              </Button>
              </div>
            </div>
          </div>
          ) : (
            /* Timeline View */
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="text-muted-foreground text-xs mb-3 px-2">
                [TIMELINE_MODE] {language === 'pt' ? 'Role horizontalmente ou clique nas etapas' : 'Scroll horizontally or click on steps'}
              </div>
              
              <div 
                ref={timelineRef}
                className="flex gap-4 overflow-x-auto pb-4 px-2 scroll-smooth"
                style={{ scrollbarWidth: 'thin' }}
              >
                {processSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    onClick={() => setCurrentStep(idx)}
                    className={cn(
                      "flex-shrink-0 w-[400px] bg-black/90 border rounded-lg p-6 font-mono cursor-pointer transition-all hover:scale-105",
                      currentStep === idx 
                        ? "border-primary shadow-lg shadow-primary/20" 
                        : "border-primary/30 hover:border-primary/50"
                    )}
                  >
                    {/* Step Header */}
                    <div className="space-y-2 mb-4 pb-3 border-b border-primary/20">
                      <div className="text-accent font-bold text-sm">
                        {language === 'pt' ? step.titlePt : step.titleEn}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        STEP {idx + 1}/{processSteps.length}
                      </div>
                    </div>

                    {/* Step Content Preview */}
                    <div className="space-y-3">
                      <div className="text-foreground text-xs line-clamp-4">
                        {(language === 'pt' ? step.contentPt : step.contentEn)[0]}
                      </div>

                      {/* Code Block Preview */}
                      <div className="bg-black border border-primary/20 rounded p-3">
                        <pre className="text-primary text-[10px] overflow-hidden line-clamp-4">
                          {language === 'pt' ? step.codePt : step.codeEn}
                        </pre>
                      </div>

                      {/* Connections Preview */}
                      {step.connections.length > 0 && (
                        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <Network className="h-3 w-3" />
                          {step.connections.length} {language === 'pt' ? 'conexões' : 'connections'}
                        </div>
                      )}
                    </div>

                    {/* Visual Connection Indicator */}
                    {idx < processSteps.length - 1 && (
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-primary">
                        <ChevronRight className="h-6 w-6" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Selected Step Details */}
              {currentStep !== null && (
                <div className="bg-black/90 border border-primary/30 rounded-lg p-6 mt-4 font-mono space-y-4 overflow-y-auto max-h-[300px]">
                  <div className="text-accent font-bold">
                    [DETAILS] {language === 'pt' ? processSteps[currentStep].titlePt : processSteps[currentStep].titleEn}
                  </div>
                  
                  <div className="space-y-3 text-foreground text-sm">
                    {(language === 'pt' 
                      ? processSteps[currentStep].contentPt 
                      : processSteps[currentStep].contentEn
                    ).map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Connections in Timeline Mode */}
                  {showConnections && processSteps[currentStep].connections.length > 0 && (
                    <div className="space-y-2 pt-3 border-t border-primary/20">
                      <div className="flex items-center gap-2 text-accent text-xs font-bold">
                        <Network className="h-3 w-3" />
                        [CONNECTIONS] {getConnectionLabel(processSteps[currentStep].connectionType)}
                      </div>
                      <div className="pl-4 space-y-1">
                        {processSteps[currentStep].connections.map((connIdx) => (
                          <div 
                            key={connIdx}
                            className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group"
                            onClick={() => setCurrentStep(connIdx)}
                          >
                            <span className="text-primary group-hover:animate-pulse">→</span>
                            <span className="group-hover:underline">
                              {language === 'pt' 
                                ? processSteps[connIdx].titlePt 
                                : processSteps[connIdx].titleEn}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2 pt-3 border-t border-primary/20">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            onClick={() => setShowConnections(!showConnections)}
                            variant="ghost"
                            size="sm"
                            className={cn(
                              "gap-2 text-xs transition-all",
                              showConnections && "bg-primary/10 text-primary border border-primary/30"
                            )}
                          >
                            <Network className={cn("h-3 w-3", showConnections && "animate-pulse")} />
                            {language === 'pt' ? 'CONEXÕES' : 'CONNECTIONS'} [{showConnections ? 'ON' : 'OFF'}]
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs font-mono text-xs bg-background/95 border-primary/30">
                          <p className="font-bold text-primary mb-1">
                            {language === 'pt' ? '// VISUALIZAR CONEXÕES' : '// VIEW CONNECTIONS'}
                          </p>
                          <p className="text-muted-foreground">
                            {language === 'pt' 
                              ? 'Mostra como esta etapa se relaciona e alimenta outras etapas do processo criativo'
                              : 'Shows how this step relates to and feeds other steps of the creative process'}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
