export interface Exercise {
  title: string;
  titleEn: string;
  duration: string;
  durationEn: string;
  description: string;
  descriptionEn: string;
  materials: string[];
  materialsEn: string[];
  expectedOutcome: string;
  expectedOutcomeEn: string;
  artistReference: string;
  artistReferenceEn: string;
}

export interface ExerciseLibrary {
  [key: string]: Exercise[];
}

export const exerciseLibrary: ExerciseLibrary = {
  shadow_observation: [
    {
      title: "Caderno da Sombra",
      titleEn: "Shadow Notebook",
      duration: "7 dias consecutivos",
      durationEn: "7 consecutive days",
      description: "Ao acordar, antes de qualquer estímulo externo, escreva 3 páginas de fluxo de consciência sem edição, censura ou julgamento. Não releia durante o período.",
      descriptionEn: "Upon waking, before any external stimulus, write 3 pages of stream of consciousness without editing, censorship or judgment. Don't reread during the period.",
      materials: ["Caderno físico", "Caneta"],
      materialsEn: ["Physical notebook", "Pen"],
      expectedOutcome: "Consciência dos padrões internos de pensamento e autocensura invisível.",
      expectedOutcomeEn: "Awareness of internal thought patterns and invisible self-censorship.",
      artistReference: "Julia Cameron - 'The Artist's Way' (1992). Técnica usada por Lynch para acessar material onírico.",
      artistReferenceEn: "Julia Cameron - 'The Artist's Way' (1992). Technique used by Lynch to access dream material."
    },
    {
      title: "Inventário do Invisível",
      titleEn: "Inventory of the Invisible",
      duration: "14 dias",
      durationEn: "14 days",
      description: "Fotografe 1 objeto/cena por dia que ninguém mais notaria. Sem edição. Sem filtros. Apenas registro do que te captura.",
      descriptionEn: "Photograph 1 object/scene per day that no one else would notice. No editing. No filters. Just recording what captures you.",
      materials: ["Smartphone", "Pasta local"],
      materialsEn: ["Smartphone", "Local folder"],
      expectedOutcome: "Treinar o olhar para o que a sociedade ignora.",
      expectedOutcomeEn: "Train the eye for what society ignores.",
      artistReference: "Sophie Calle - 'The Chromatic Diet' (1997). Varda - 'The Gleaners and I' (2000).",
      artistReferenceEn: "Sophie Calle - 'The Chromatic Diet' (1997). Varda - 'The Gleaners and I' (2000)."
    }
  ],
  shadow_documentation: [
    {
      title: "Arquivo do Não-Dito",
      titleEn: "Archive of the Unsaid",
      duration: "30 dias",
      durationEn: "30 days",
      description: "Crie um arquivo de tudo que você pensou mas não disse. Registre em áudio de 30 segundos a 1 minuto. Não compartilhe. Apenas registre.",
      descriptionEn: "Create an archive of everything you thought but didn't say. Record in 30 second to 1 minute audio. Don't share. Just record.",
      materials: ["Gravador de voz", "Fones de ouvido"],
      materialsEn: ["Voice recorder", "Headphones"],
      expectedOutcome: "Consciência do gap entre pensamento e expressão.",
      expectedOutcomeEn: "Awareness of the gap between thought and expression.",
      artistReference: "Chris Marker - 'Sans Soleil' (1983). Narração como confissão fragmentada.",
      artistReferenceEn: "Chris Marker - 'Sans Soleil' (1983). Narration as fragmented confession."
    }
  ],
  shadow_reflection: [
    {
      title: "Autópsia Criativa",
      titleEn: "Creative Autopsy",
      duration: "Após cada projeto",
      durationEn: "After each project",
      description: "Escreva 3 páginas respondendo: O que realmente aconteceu? O que eu evitei ver? O que precisa morrer para que algo novo nasça?",
      descriptionEn: "Write 3 pages answering: What really happened? What did I avoid seeing? What needs to die for something new to be born?",
      materials: ["Caderno", "Solidão"],
      materialsEn: ["Notebook", "Solitude"],
      expectedOutcome: "Integração profunda do processo vivido.",
      expectedOutcomeEn: "Deep integration of the lived process.",
      artistReference: "Bresson - 'Notes on the Cinematograph' (1975). Reflexão como ritual.",
      artistReferenceEn: "Bresson - 'Notes on the Cinematograph' (1975). Reflection as ritual."
    }
  ],
  punk_cocreation: [
    {
      title: "Manifesto em 24h",
      titleEn: "Manifesto in 24h",
      duration: "24 horas",
      durationEn: "24 hours",
      description: "Crie um manifesto sobre algo que te incomoda. Escreva, ilustre, filme ou grave. Não edite. Apenas expulse a urgência.",
      descriptionEn: "Create a manifesto about something that bothers you. Write, illustrate, film or record. Don't edit. Just expel the urgency.",
      materials: ["O que estiver à mão"],
      materialsEn: ["Whatever is at hand"],
      expectedOutcome: "Canalizar urgência em forma antes que ela se torne paralisia.",
      expectedOutcomeEn: "Channel urgency into form before it becomes paralysis.",
      artistReference: "Godard - 'Weekend' (1967). Filme-manifesto feito em 6 semanas.",
      artistReferenceEn: "Godard - 'Weekend' (1967). Manifesto-film made in 6 weeks."
    },
    {
      title: "Destruição Semanal",
      titleEn: "Weekly Destruction",
      duration: "1x por semana",
      durationEn: "1x per week",
      description: "Pegue algo que você criou recentemente. Destrua fisicamente ou digitalmente. Reconstrua usando apenas fragmentos.",
      descriptionEn: "Take something you recently created. Destroy physically or digitally. Rebuild using only fragments.",
      materials: ["Projeto recente", "Coragem"],
      materialsEn: ["Recent project", "Courage"],
      expectedOutcome: "Liberdade em relação ao apego e descoberta através da destruição.",
      expectedOutcomeEn: "Freedom from attachment and discovery through destruction.",
      artistReference: "William S. Burroughs - Técnica do cut-up. Punk - ethos DIY de destruição criativa.",
      artistReferenceEn: "William S. Burroughs - Cut-up technique. Punk - DIY ethos of creative destruction."
    }
  ],
  punk_expansion: [
    {
      title: "Invasão Cultural",
      titleEn: "Cultural Invasion",
      duration: "Pontual",
      durationEn: "One-time",
      description: "Coloque sua obra em um espaço onde ela não deveria estar. Documente reações. Não peça permissão.",
      descriptionEn: "Place your work in a space where it shouldn't be. Document reactions. Don't ask permission.",
      materials: ["Obra física/digital", "Ousadia"],
      materialsEn: ["Physical/digital work", "Audacity"],
      expectedOutcome: "Confronto com sistema estabelecido e medição de impacto real.",
      expectedOutcomeEn: "Confrontation with established system and measurement of real impact.",
      artistReference: "Banksy - Intervenções urbanas. Guerrilla Girls - Ativismo cultural anônimo.",
      artistReferenceEn: "Banksy - Urban interventions. Guerrilla Girls - Anonymous cultural activism."
    }
  ],
  buddy_cocreation: [
    {
      title: "Círculo de Processo",
      titleEn: "Process Circle",
      duration: "Semanal, 2h",
      durationEn: "Weekly, 2h",
      description: "Reúna 3-5 pessoas. Cada um apresenta 10min de processo (não obra final). Discutam apenas processo, nunca resultado.",
      descriptionEn: "Gather 3-5 people. Each presents 10min of process (not final work). Discuss only process, never result.",
      materials: ["Grupo de confiança", "Espaço silencioso"],
      materialsEn: ["Trust group", "Quiet space"],
      expectedOutcome: "Aprender através da observação de processos alheios.",
      expectedOutcomeEn: "Learning through observation of others' processes.",
      artistReference: "Cahiers du Cinéma - Debates coletivos semanais que geraram teoria.",
      artistReferenceEn: "Cahiers du Cinéma - Weekly collective debates that generated theory."
    },
    {
      title: "Co-criação Cega",
      titleEn: "Blind Co-creation",
      duration: "3 dias",
      durationEn: "3 days",
      description: "Inicie algo. Passe para outra pessoa continuar sem explicações. Receba de volta transformado. Aceite.",
      descriptionEn: "Start something. Pass to another person to continue without explanations. Receive back transformed. Accept.",
      materials: ["Parceiro de confiança", "Desapego"],
      materialsEn: ["Trust partner", "Detachment"],
      expectedOutcome: "Dissolução do ego autoral e descoberta do inesperado.",
      expectedOutcomeEn: "Dissolution of authorial ego and discovery of the unexpected.",
      artistReference: "Cadavre Exquis - Surrealistas. Godard + Gorin - Grupo Dziga Vertov.",
      artistReferenceEn: "Cadavre Exquis - Surrealists. Godard + Gorin - Dziga Vertov Group."
    }
  ],
  buddy_expansion: [
    {
      title: "Compartilhamento Gradual",
      titleEn: "Gradual Sharing",
      duration: "30 dias",
      durationEn: "30 days",
      description: "Compartilhe 1 fragmento do processo por dia em espaços íntimos (não redes sociais). Registre conversas geradas.",
      descriptionEn: "Share 1 process fragment per day in intimate spaces (not social media). Record generated conversations.",
      materials: ["Fragmentos de processo", "Comunidade próxima"],
      materialsEn: ["Process fragments", "Close community"],
      expectedOutcome: "Construir audiência através de vulnerabilidade e diálogo genuíno.",
      expectedOutcomeEn: "Build audience through vulnerability and genuine dialogue.",
      artistReference: "Varda - 'The Beaches of Agnès' (2008). Obra como conversa pública.",
      artistReferenceEn: "Varda - 'The Beaches of Agnès' (2008). Work as public conversation."
    }
  ],
  gi_documentation: [
    {
      title: "Sistema de Registro Total",
      titleEn: "Total Recording System",
      duration: "Implementação permanente",
      durationEn: "Permanent implementation",
      description: "Crie taxonomia pessoal para documentar cada etapa: ideação, execução, revisão. Use sistema consistente (Notion, Obsidian, Miro).",
      descriptionEn: "Create personal taxonomy to document each stage: ideation, execution, review. Use consistent system (Notion, Obsidian, Miro).",
      materials: ["Ferramenta digital", "Disciplina"],
      materialsEn: ["Digital tool", "Discipline"],
      expectedOutcome: "Construir banco de dados do próprio processo ao longo do tempo.",
      expectedOutcomeEn: "Build database of own process over time.",
      artistReference: "Kiefer - 1200 cadernos. Zettelkasten - Sistema de notas interconectadas.",
      artistReferenceEn: "Kiefer - 1200 notebooks. Zettelkasten - Interconnected notes system."
    }
  ],
  gi_observation: [
    {
      title: "Análise Estrutural Reversa",
      titleEn: "Reverse Structural Analysis",
      duration: "1h por obra estudada",
      durationEn: "1h per studied work",
      description: "Escolha obra que admira. Dissec­te estrutura: timing, composição, técnica. Recrie apenas a estrutura com seu conteúdo.",
      descriptionEn: "Choose work you admire. Dissect structure: timing, composition, technique. Recreate only the structure with your content.",
      materials: ["Obra de referência", "Ferramentas de análise"],
      materialsEn: ["Reference work", "Analysis tools"],
      expectedOutcome: "Domínio técnico através de engenharia reversa.",
      expectedOutcomeEn: "Technical mastery through reverse engineering.",
      artistReference: "Bresson - Estudo obsessivo de mestres. Ozu - Repetição de estruturas até perfeição.",
      artistReferenceEn: "Bresson - Obsessive study of masters. Ozu - Repetition of structures until perfection."
    }
  ],
  gi_reflection: [
    {
      title: "Métricas de Maestria",
      titleEn: "Mastery Metrics",
      duration: "Mensal",
      durationEn: "Monthly",
      description: "Defina 5 parâmetros técnicos. Avalie seu trabalho do mês de 0-10 em cada. Identifique gap. Estude especificamente.",
      descriptionEn: "Define 5 technical parameters. Rate your month's work 0-10 on each. Identify gap. Study specifically.",
      materials: ["Planilha", "Honestidade técnica"],
      materialsEn: ["Spreadsheet", "Technical honesty"],
      expectedOutcome: "Progresso mensurável e eliminação de pontos cegos técnicos.",
      expectedOutcomeEn: "Measurable progress and elimination of technical blind spots.",
      artistReference: "Jerry Seinfeld - 'Don't break the chain'. Miyamoto Musashi - 'Dokkōdō' (21 preceitos).",
      artistReferenceEn: "Jerry Seinfeld - 'Don't break the chain'. Miyamoto Musashi - 'Dokkōdō' (21 precepts)."
    }
  ]
};
