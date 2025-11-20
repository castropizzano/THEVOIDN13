export interface ProcessStage {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  theoreticalRef: string;
  theoreticalRefEn: string;
  historicalExamples: {
    artist: string;
    work: string;
    insight: string;
    insightEn: string;
  }[];
  archetypeConnection: {
    shadow: string;
    shadowEn: string;
    punk: string;
    punkEn: string;
    buddy: string;
    buddyEn: string;
    gi: string;
    giEn: string;
  };
}

export const processStages: ProcessStage[] = [
  {
    id: "observation",
    title: "1. OBSERVAÇÃO",
    titleEn: "1. OBSERVATION",
    description: "Toda criação começa com uma pausa. Lynch observa seus sonhos. Marker observa a história como quem fotografa fantasmas. A observação não é passiva — é um ato de captura do invisível. É o momento onde o criador treina o olhar para ver além da superfície, documentando padrões que outros ignoram. Não se trata de coletar informações, mas de desenvolver sensibilidade para aquilo que pulsa sob o aparente.",
    descriptionEn: "Every creation begins with a pause. Lynch observes his dreams. Marker observes history like someone photographing ghosts. Observation is not passive — it's an act of capturing the invisible. It's the moment where the creator trains their gaze to see beyond the surface, documenting patterns others ignore. It's not about collecting information, but developing sensitivity to what pulses beneath the apparent.",
    theoreticalRef: "Jung: 'Aquilo que não trazemos à consciência aparece em nossas vidas como destino.'",
    theoreticalRefEn: "Jung: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.'",
    historicalExamples: [
      {
        artist: "David Lynch",
        work: "Cadernos de sonhos e desenhos (1968-presente)",
        insight: "Lynch mantém registro diário de sonhos, imagens e sensações. Nunca os publica — existem apenas como matéria-prima do inconsciente.",
        insightEn: "Lynch keeps daily records of dreams, images and sensations. Never publishes them — they exist only as raw material from the unconscious."
      },
      {
        artist: "Chris Marker",
        work: "Sans Soleil (1983)",
        insight: "'Eu filmo o que resta quando não há mais nada.' Marker observa a memória como arqueologia do presente.",
        insightEn: "'I film what remains when there's nothing left.' Marker observes memory as archaeology of the present."
      },
      {
        artist: "Agnès Varda",
        work: "The Gleaners and I (2000)",
        insight: "Varda coleciona fotografias abandonadas e objetos esquecidos. Observa o que a sociedade descarta como quem lê cartas perdidas.",
        insightEn: "Varda collects abandoned photographs and forgotten objects. Observes what society discards like reading lost letters."
      }
    ],
    archetypeConnection: {
      shadow: "Observação introspectiva profunda. O olhar volta-se para dentro, capturando os movimentos do inconsciente. Interior → Exterior.",
      shadowEn: "Deep introspective observation. The gaze turns inward, capturing the movements of the unconscious. Interior → Exterior.",
      punk: "Observação crítica do sistema. O olhar identifica estruturas de poder e pontos de ruptura. Exterior → Crítica.",
      punkEn: "Critical observation of the system. The gaze identifies power structures and breaking points. Exterior → Critique.",
      buddy: "Observação coletiva compartilhada. O olhar se multiplica através do diálogo e da troca. Comunidade → Insight.",
      buddyEn: "Shared collective observation. The gaze multiplies through dialogue and exchange. Community → Insight.",
      gi: "Observação estrutural metodológica. O olhar disseca forma, técnica e padrões objetivos. Forma → Essência.",
      giEn: "Methodological structural observation. The gaze dissects form, technique and objective patterns. Form → Essence."
    }
  },
  {
    id: "cocreation",
    title: "2. CO-CRIAÇÃO",
    titleEn: "2. CO-CREATION",
    description: "Criar não é um ato solitário — mesmo quando o artista trabalha sozinho, há um diálogo invisível com fantasmas, referências, contradições internas. Godard destruía o cinema para recriá-lo em colaboração com seus atores. Cahiers du Cinéma transformou crítica em manifesto coletivo. A co-criação reconhece que toda obra é uma rede de vozes, visíveis e invisíveis. O ego autoral dissolve-se em favor de algo maior.",
    descriptionEn: "Creating is not a solitary act — even when the artist works alone, there's an invisible dialogue with ghosts, references, internal contradictions. Godard destroyed cinema to recreate it in collaboration with his actors. Cahiers du Cinéma transformed criticism into collective manifesto. Co-creation recognizes that every work is a network of voices, visible and invisible. The authorial ego dissolves in favor of something greater.",
    theoreticalRef: "Deleuze: 'Criar é sempre criar coletivamente, mesmo quando se pensa estar sozinho.'",
    theoreticalRefEn: "Deleuze: 'To create is always to create collectively, even when you think you're alone.'",
    historicalExamples: [
      {
        artist: "Jean-Luc Godard",
        work: "À bout de souffle (1960)",
        insight: "Godard improvisava cenas com Jean-Paul Belmondo e Anna Karina. O roteiro era reescrito diariamente. O filme era co-criado no set, não no papel.",
        insightEn: "Godard improvised scenes with Jean-Paul Belmondo and Anna Karina. The script was rewritten daily. The film was co-created on set, not on paper."
      },
      {
        artist: "Cahiers du Cinéma",
        work: "Crítica coletiva (1951-1968)",
        insight: "Truffaut, Chabrol, Rohmer, Rivette e Godard desenvolveram a política dos autores através de debates coletivos semanais. A teoria nasceu da conversa.",
        insightEn: "Truffaut, Chabrol, Rohmer, Rivette and Godard developed auteur theory through weekly collective debates. Theory was born from conversation."
      },
      {
        artist: "Chantal Akerman",
        work: "Jeanne Dielman (1975)",
        insight: "Akerman co-criou com sua equipe técnica feminina, desconstruindo hierarquias de set. Cada decisão era negociada, não imposta.",
        insightEn: "Akerman co-created with her female technical crew, deconstructing set hierarchies. Every decision was negotiated, not imposed."
      }
    ],
    archetypeConnection: {
      shadow: "Co-criação com o inconsciente. Diálogo interno entre ego e sombra, razão e intuição. Self → Other Self.",
      shadowEn: "Co-creation with the unconscious. Internal dialogue between ego and shadow, reason and intuition. Self → Other Self.",
      punk: "Co-criação como manifesto coletivo. Destruição e reconstrução compartilhadas. Urgência → Ação Coletiva.",
      punkEn: "Co-creation as collective manifesto. Shared destruction and reconstruction. Urgency → Collective Action.",
      buddy: "Co-criação natural e horizontal. Troca de ideias sem hierarquia. Diálogo → Obra.",
      buddyEn: "Natural and horizontal co-creation. Exchange of ideas without hierarchy. Dialogue → Work.",
      gi: "Co-criação estruturada e hierárquica. Cada papel tem função definida. Disciplina → Harmonia.",
      giEn: "Structured and hierarchical co-creation. Each role has defined function. Discipline → Harmony."
    }
  },
  {
    id: "documentation",
    title: "3. DOCUMENTAÇÃO",
    titleEn: "3. DOCUMENTATION",
    description: "Documentar é transformar o efêmero em matéria. Marker dizia: 'A memória não é o oposto do esquecimento, é sua forma.' Kiefer manteve 1200 cadernos ao longo de 40 anos — não os relê, mas eles existem. A documentação não serve para lembrar, mas para cristalizar o processo enquanto ele ainda pulsa. É registro arqueológico do próprio fazer. Sem documentação, o processo se perde no vazio. Com ela, o esquecimento torna-se escolha.",
    descriptionEn: "To document is to transform the ephemeral into matter. Marker said: 'Memory is not the opposite of forgetting, it's its form.' Kiefer kept 1200 notebooks over 40 years — he doesn't reread them, but they exist. Documentation doesn't serve to remember, but to crystallize the process while it still pulses. It's archaeological record of the making itself. Without documentation, the process is lost in the void. With it, forgetting becomes a choice.",
    theoreticalRef: "Flusser: 'Quem não escreve é escrito. Quem não documenta é documentado pelo sistema.'",
    theoreticalRefEn: "Flusser: 'Those who don't write are written. Those who don't document are documented by the system.'",
    historicalExamples: [
      {
        artist: "Anselm Kiefer",
        work: "1200+ cadernos de processo (1970-presente)",
        insight: "Kiefer nunca relê seus cadernos. Eles existem como registro material do pensamento em movimento. A documentação não é para o futuro — é para o presente.",
        insightEn: "Kiefer never rereads his notebooks. They exist as material record of thought in motion. Documentation is not for the future — it's for the present."
      },
      {
        artist: "Chris Marker",
        work: "Immemory (1997)",
        insight: "CD-ROM interativo que documenta a memória fragmentada de Marker. 'Eu não guardo memórias, eu as construo.'",
        insightEn: "Interactive CD-ROM that documents Marker's fragmented memory. 'I don't keep memories, I construct them.'"
      },
      {
        artist: "Sophie Calle",
        work: "The Chromatic Diet (1997)",
        insight: "Calle fotografou cada refeição colorida durante 7 dias. Documentação obsessiva do banal como performance existencial.",
        insightEn: "Calle photographed each colored meal for 7 days. Obsessive documentation of the banal as existential performance."
      }
    ],
    archetypeConnection: {
      shadow: "Documentação como exorcismo. Registrar para não ser possuído pelo não-dito. Escuridão → Luz.",
      shadowEn: "Documentation as exorcism. Record to not be possessed by the unsaid. Darkness → Light.",
      punk: "Documentação como evidência da destruição. Registrar antes que o sistema apague. Ação → Arquivo.",
      punkEn: "Documentation as evidence of destruction. Record before the system erases. Action → Archive.",
      buddy: "Documentação como ferramenta de compartilhamento. Registrar para multiplicar o aprendizado. Processo → Comunidade.",
      buddyEn: "Documentation as sharing tool. Record to multiply learning. Process → Community.",
      gi: "Documentação como metodologia sistemática. Registrar cada etapa com precisão arquivística. Método → Legado.",
      giEn: "Documentation as systematic methodology. Record each step with archival precision. Method → Legacy."
    }
  },
  {
    id: "reflection",
    title: "4. REFLEXÃO",
    titleEn: "4. REFLECTION",
    description: "Reflexão não é pausa — é a etapa onde o criador digere o processo e extrai significado. Bresson assistia seus filmes em silêncio absoluto, anotando cada desconforto. Beckett escreveu 'Worstward Ho' aos 77 anos: 'Try again. Fail again. Fail better.' A reflexão exige coragem para olhar o próprio trabalho sem autoindulgência. É o momento de perguntar: o que realmente aconteceu aqui? O que aprendi? O que precisa morrer para que algo novo nasça?",
    descriptionEn: "Reflection is not a pause — it's the stage where the creator digests the process and extracts meaning. Bresson watched his films in absolute silence, noting each discomfort. Beckett wrote 'Worstward Ho' at 77: 'Try again. Fail again. Fail better.' Reflection demands courage to look at one's own work without self-indulgence. It's the moment to ask: what really happened here? What did I learn? What needs to die for something new to be born?",
    theoreticalRef: "Beckett: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.'",
    theoreticalRefEn: "Beckett: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.'",
    historicalExamples: [
      {
        artist: "Robert Bresson",
        work: "Notes on the Cinematograph (1975)",
        insight: "Bresson mantinha cadernos de aforismos sobre seu próprio processo. Cada filme gerava novas reflexões que alimentavam o próximo.",
        insightEn: "Bresson kept notebooks of aphorisms about his own process. Each film generated new reflections that fed the next."
      },
      {
        artist: "Samuel Beckett",
        work: "Worstward Ho (1983)",
        insight: "Escrito aos 77 anos, após 50 anos de 'fracassos'. Reflexão brutal sobre a impossibilidade de dizer e a necessidade de continuar tentando.",
        insightEn: "Written at 77, after 50 years of 'failures'. Brutal reflection on the impossibility of saying and the necessity to keep trying."
      },
      {
        artist: "Agnès Varda",
        work: "The Beaches of Agnès (2008)",
        insight: "Aos 80 anos, Varda reflete sobre sua própria obra recriando cenários de seus filmes nas praias da França. Reflexão como performance.",
        insightEn: "At 80, Varda reflects on her own work recreating scenes from her films on French beaches. Reflection as performance."
      }
    ],
    archetypeConnection: {
      shadow: "Reflexão como mergulho nas profundezas. Confrontar o que foi revelado no processo. Criação → Autoconhecimento.",
      shadowEn: "Reflection as diving into the depths. Confronting what was revealed in the process. Creation → Self-knowledge.",
      punk: "Reflexão como análise crítica do impacto. O que destruí? O que construí? Destruição → Avaliação.",
      punkEn: "Reflection as critical analysis of impact. What did I destroy? What did I build? Destruction → Evaluation.",
      buddy: "Reflexão coletiva e dialógica. Processar a experiência através do compartilhamento. Experiência → Diálogo.",
      buddyEn: "Collective and dialogical reflection. Process the experience through sharing. Experience → Dialogue.",
      gi: "Reflexão sistemática e analítica. Dissecar cada decisão técnica. Execução → Aprendizado.",
      giEn: "Systematic and analytical reflection. Dissect each technical decision. Execution → Learning."
    }
  },
  {
    id: "expansion",
    title: "5. EXPANSÃO",
    titleEn: "5. EXPANSION",
    description: "Expansão é quando o processo transborda os limites iniciais. Lynch expandiu Eraserhead em 5 anos de obsessão. Godard expandiu cinema em teoria política. Varda expandiu documentário em ensaio poético. Não se trata de 'lançar' ou 'divulgar' — trata-se de permitir que a obra encontre seu próprio caminho. A expansão acontece quando o criador solta o controle e deixa a obra respirar no mundo. É o momento de menor controle e maior vulnerabilidade.",
    descriptionEn: "Expansion is when the process overflows initial limits. Lynch expanded Eraserhead over 5 years of obsession. Godard expanded cinema into political theory. Varda expanded documentary into poetic essay. It's not about 'launching' or 'promoting' — it's about allowing the work to find its own path. Expansion happens when the creator releases control and lets the work breathe in the world. It's the moment of least control and greatest vulnerability.",
    theoreticalRef: "Herzog: 'O cinema não é sobre o que você filma, mas sobre como você deixa o mundo entrar na sua obra.'",
    theoreticalRefEn: "Herzog: 'Cinema is not about what you film, but about how you let the world enter your work.'",
    historicalExamples: [
      {
        artist: "David Lynch",
        work: "Eraserhead (1977)",
        insight: "5 anos de produção intermitente. Lynch expandiu o filme através da obsessão, adicionando camadas conforme novas visões surgiam. Nunca 'terminou' — apenas parou.",
        insightEn: "5 years of intermittent production. Lynch expanded the film through obsession, adding layers as new visions emerged. Never 'finished' — just stopped."
      },
      {
        artist: "Jean-Luc Godard",
        work: "Histoire(s) du cinéma (1988-1998)",
        insight: "10 anos expandindo cinema em ensaio videográfico. Godard nunca 'lançou' — foi liberando capítulos conforme estavam prontos.",
        insightEn: "10 years expanding cinema into videographic essay. Godard never 'launched' — released chapters as they were ready."
      },
      {
        artist: "Werner Herzog",
        work: "Fitzcarraldo (1982)",
        insight: "Herzog expandiu o filme além do possível, insistindo em arrastar um barco real sobre uma montanha. A expansão tornou-se a própria obra.",
        insightEn: "Herzog expanded the film beyond the possible, insisting on dragging a real boat over a mountain. Expansion became the work itself."
      }
    ],
    archetypeConnection: {
      shadow: "Expansão como revelação gradual. Deixar a obra encontrar seu público sem pressa. Interior → Mundo.",
      shadowEn: "Expansion as gradual revelation. Let the work find its audience without hurry. Interior → World.",
      punk: "Expansão como ataque cultural. Invadir espaços, provocar reações, forçar confronto. Obra → Rebelião.",
      punkEn: "Expansion as cultural attack. Invade spaces, provoke reactions, force confrontation. Work → Rebellion.",
      buddy: "Expansão como compartilhamento orgânico. A obra cresce através de redes de afinidade. Criação → Comunidade.",
      buddyEn: "Expansion as organic sharing. Work grows through affinity networks. Creation → Community.",
      gi: "Expansão planejada e estratégica. Cada etapa de divulgação é metodicamente executada. Obra → Difusão.",
      giEn: "Planned and strategic expansion. Each dissemination stage is methodically executed. Work → Diffusion."
    }
  }
];
