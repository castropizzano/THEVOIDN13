export interface HybridArchetype {
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  artists: string[];
  superpower: string;
  superpowerEn: string;
  risk: string;
  riskEn: string;
  advice: string;
  adviceEn: string;
}

export interface HybridArchetypes {
  [key: string]: HybridArchetype;
}

export const hybridArchetypes: HybridArchetypes = {
  "shadow-punk": {
    name: "O MÍSTICO RADICAL",
    nameEn: "THE RADICAL MYSTIC",
    description: "Você mergulha nas profundezas E destrói o que encontra lá. Sua obra nasce da sombra mas explode no mundo como manifesto. É a combinação mais intensa — introspecção que se transforma em ação radical.",
    descriptionEn: "You dive into the depths AND destroy what you find there. Your work is born from shadow but explodes into the world as manifesto. It's the most intense combination — introspection that transforms into radical action.",
    artists: ["Werner Herzog", "Alejandro Jodorowsky", "Gaspar Noé", "Lars von Trier"],
    superpower: "Transformar trauma pessoal em manifesto cultural. Cada ferida interna torna-se arma externa.",
    superpowerEn: "Transform personal trauma into cultural manifesto. Each internal wound becomes external weapon.",
    risk: "Autodestruição como método criativo. O mergulho pode ser tão profundo que não há retorno.",
    riskEn: "Self-destruction as creative method. The dive can be so deep there's no return.",
    advice: "Herzog dizia: 'Você deve aprender a ler entre as ruínas.' Documente sua descida — o abismo precisa de testemunha, mesmo que seja você mesmo.",
    adviceEn: "Herzog said: 'You must learn to read between the ruins.' Document your descent — the abyss needs a witness, even if it's yourself."
  },
  "shadow-buddy": {
    name: "O VAZIO COMPASSIVO",
    nameEn: "THE COMPASSIONATE VOID",
    description: "Você transforma solidão em ponte. Sua introspecção profunda não te isola — te conecta com a dor coletiva. É a artista que mergulha sozinha mas emerge trazendo algo que ressoa universalmente.",
    descriptionEn: "You transform solitude into bridge. Your deep introspection doesn't isolate you — it connects you with collective pain. You're the artist who dives alone but emerges bringing something that resonates universally.",
    artists: ["Agnès Varda", "Chantal Akerman", "Andrei Tarkovsky", "Apichatpong Weerasethakul"],
    superpower: "Fazer do silêncio uma linguagem compartilhável. Sua vulnerabilidade gera comunidade.",
    superpowerEn: "Make silence a shareable language. Your vulnerability generates community.",
    risk: "Diluir profundidade em busca de conexão. Perder-se tentando ser compreendida.",
    riskEn: "Dilute depth seeking connection. Lose yourself trying to be understood.",
    advice: "Varda aos 80 anos: 'Eu filmo para entender, não para explicar.' Mantenha o mistério — as pessoas se conectam com o não-dito, não com o explicado.",
    adviceEn: "Varda at 80: 'I film to understand, not to explain.' Keep the mystery — people connect with the unsaid, not with the explained."
  },
  "shadow-gi": {
    name: "A FORMA DO SILÊNCIO",
    nameEn: "THE FORM OF SILENCE",
    description: "Você encontra liberdade na estrutura e verdade na disciplina. Sua introspecção não é caótica — é metodológica. É Bresson observando 50 takes até encontrar 'o' momento. É Ozu repetindo o mesmo enquadramento por 40 anos.",
    descriptionEn: "You find freedom in structure and truth in discipline. Your introspection is not chaotic — it's methodological. It's Bresson observing 50 takes until finding 'the' moment. It's Ozu repeating the same framing for 40 years.",
    artists: ["Robert Bresson", "Yasujirō Ozu", "Carl Theodor Dreyer", "Béla Tarr"],
    superpower: "Extrair essência através de repetição obsessiva. Cada restrição revela nova profundidade.",
    superpowerEn: "Extract essence through obsessive repetition. Each restriction reveals new depth.",
    risk: "Rigidez que mata espontaneidade. Método que se torna prisão em vez de libertação.",
    riskEn: "Rigidity that kills spontaneity. Method that becomes prison instead of liberation.",
    advice: "Bresson: 'A forma liberta.' Mas lembre-se: ele quebrava as próprias regras quando necessário. A disciplina serve o mistério, não o contrário.",
    adviceEn: "Bresson: 'Form liberates.' But remember: he broke his own rules when necessary. Discipline serves mystery, not the opposite."
  },
  "punk-buddy": {
    name: "A REBELIÃO COLETIVA",
    nameEn: "THE COLLECTIVE REBELLION",
    description: "Você transforma urgência individual em movimento. Sua destruição não é solitária — é manifesto compartilhado. É o punk que percebe que a revolução precisa de irmãos, não de heróis.",
    descriptionEn: "You transform individual urgency into movement. Your destruction is not solitary — it's shared manifesto. It's the punk who realizes revolution needs siblings, not heroes.",
    artists: ["Godard (Grupo Dziga Vertov)", "Situacionistas", "Guerrilla Girls", "Pussy Riot"],
    superpower: "Multiplicar impacto através de rede. Cada ação individual torna-se gesto coletivo.",
    superpowerEn: "Multiply impact through network. Each individual action becomes collective gesture.",
    risk: "Diluir radicalidade em busca de consenso. Movimento que perde fio da navalha.",
    riskEn: "Dilute radicality seeking consensus. Movement that loses the razor's edge.",
    advice: "Godard abandonou assinatura individual no Grupo Dziga Vertov mas nunca abandonou radicalidade. Coletivo sem compromisso vira comitê.",
    adviceEn: "Godard abandoned individual signature in Dziga Vertov Group but never abandoned radicality. Collective without commitment becomes committee."
  },
  "punk-gi": {
    name: "O REBELDE DISCIPLINADO",
    nameEn: "THE DISCIPLINED REBEL",
    description: "Você destrói com precisão cirúrgica. Sua rebelião não é caos — é estrutura contra estrutura. É Godard nos anos 60: destruindo cinema através do domínio técnico absoluto. É punk que estudou o sistema para demoli-lo melhor.",
    descriptionEn: "You destroy with surgical precision. Your rebellion is not chaos — it's structure against structure. It's Godard in the 60s: destroying cinema through absolute technical mastery. It's punk who studied the system to demolish it better.",
    artists: ["Godard (1959-1968)", "Dogma 95", "Haneke", "Harmony Korine"],
    superpower: "Subverter através de maestria técnica. Cada regra quebrada é intencional, não acidental.",
    superpowerEn: "Subvert through technical mastery. Each broken rule is intentional, not accidental.",
    risk: "Técnica que sufoca urgência. Rebelião que se torna apenas estética.",
    riskEn: "Technique that suffocates urgency. Rebellion that becomes only aesthetic.",
    advice: "Godard dominava continuidade clássica antes de destruí-la em 'À bout de souffle'. Conheça as regras profundamente — só assim sua quebra terá impacto real.",
    adviceEn: "Godard mastered classic continuity before destroying it in 'Breathless'. Know the rules deeply — only then will your breaking have real impact."
  },
  "buddy-gi": {
    name: "A HARMONIA ESTRUTURADA",
    nameEn: "THE STRUCTURED HARMONY",
    description: "Você transforma colaboração em método. Sua comunidade não é caótica — é orquestrada. É o coletivo que entende que liberdade vem de papéis claros, não de hierarquia ausente.",
    descriptionEn: "You transform collaboration into method. Your community is not chaotic — it's orchestrated. It's the collective that understands freedom comes from clear roles, not absent hierarchy.",
    artists: ["Jacques Demy + Agnès Varda", "Pixar (brain trust)", "Studio Ghibli", "Bauhaus"],
    superpower: "Criar sistemas colaborativos eficientes que amplificam talentos individuais.",
    superpowerEn: "Create efficient collaborative systems that amplify individual talents.",
    risk: "Burocracia que mata espontaneidade. Processo que se torna mais importante que obra.",
    riskEn: "Bureaucracy that kills spontaneity. Process that becomes more important than work.",
    advice: "Pixar desenvolveu o 'brain trust' — crítica coletiva brutal mas não-hierárquica. Estrutura a serviço da obra, nunca o contrário.",
    adviceEn: "Pixar developed the 'brain trust' — brutal but non-hierarchical collective criticism. Structure serving the work, never the opposite."
  }
};
