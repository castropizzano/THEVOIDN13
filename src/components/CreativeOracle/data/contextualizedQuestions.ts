export interface ContextualizedQuestion {
  text: string;
  textEn: string;
  pedagogicalContext: {
    concept: string;
    conceptEn: string;
    explanation: string;
    explanationEn: string;
    theoreticalRef: string;
    theoreticalRefEn: string;
    processStage: "observation" | "cocreation" | "documentation" | "reflection" | "expansion";
  };
  options: Array<{
    text: string;
    textEn: string;
    archetype: string;
    value: number;
    processWeight?: {
      observation?: number;
      cocreation?: number;
      documentation?: number;
      reflection?: number;
      expansion?: number;
    };
  }>;
}

export const contextualizedQuestions: ContextualizedQuestion[] = [
  {
    text: "Quando você cria, de onde vem o impulso inicial?",
    textEn: "When you create, where does the initial impulse come from?",
    pedagogicalContext: {
      concept: "ORIGEM DO IMPULSO CRIATIVO",
      conceptEn: "ORIGIN OF CREATIVE IMPULSE",
      explanation: "Toda criação começa com uma fagulha. Alguns artistas buscam essa fagulha no silêncio interior (introspecção), outros na urgência de transformar o mundo (ação), outros na conexão com comunidade (diálogo), outros na estrutura metodológica (forma). Lynch observa seus sonhos. Godard reage ao establishment. Varda conversa com pescadores. Bresson estuda a forma. Não há certo ou errado — há caminhos. Cada impulso inicial revela não apenas o que você cria, mas quem você é enquanto cria.",
      explanationEn: "Every creation begins with a spark. Some artists seek this spark in inner silence (introspection), others in the urgency to transform the world (action), others in community connection (dialogue), others in methodological structure (form). Lynch observes his dreams. Godard reacts to the establishment. Varda converses with fishermen. Bresson studies form. There's no right or wrong — there are paths. Each initial impulse reveals not only what you create, but who you are while creating.",
      theoreticalRef: "Jung: 'A obra de arte é uma planta que cresce sobre a alma do artista.'",
      theoreticalRefEn: "Jung: 'The work of art is a plant that grows upon the soul of the artist.'",
      processStage: "observation"
    },
    options: [
      { 
        text: "Do vazio interior, da sombra", 
        textEn: "From the inner void, the shadow", 
        archetype: "shadow", 
        value: 3,
        processWeight: { observation: 3, reflection: 2 }
      },
      { 
        text: "Da necessidade urgente de quebrar o sistema", 
        textEn: "From urgent need to break the system", 
        archetype: "punk", 
        value: 2,
        processWeight: { observation: 2, expansion: 3 }
      },
      { 
        text: "Do desejo de conectar com outros", 
        textEn: "From desire to connect with others", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, expansion: 2 }
      },
      { 
        text: "De um método técnico estabelecido", 
        textEn: "From an established technical method", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, reflection: 2 }
      },
    ],
  },
  {
    text: "Como você encara o erro no processo criativo?",
    textEn: "How do you face mistakes in the creative process?",
    pedagogicalContext: {
      concept: "ERRO COMO MATÉRIA CRIATIVA",
      conceptEn: "ERROR AS CREATIVE MATTER",
      explanation: "O erro pode ser destruidor ou revelador. Beckett escreveu 'Worstward Ho' aos 77 anos: 'Try again. Fail again. Fail better.' Herzog vê no fracasso a única chance de tocar o sublime. Marker documenta o erro como arqueologia do presente. Bresson corta takes perfeitos em busca da imperfeição autêntica. O erro expõe sua relação com controle, vulnerabilidade e acaso. Não há resposta certa — há posicionamento ético diante do inevitável colapso do planejado.",
      explanationEn: "Error can be destructive or revealing. Beckett wrote 'Worstward Ho' at 77: 'Try again. Fail again. Fail better.' Herzog sees in failure the only chance to touch the sublime. Marker documents error as archaeology of the present. Bresson cuts perfect takes searching for authentic imperfection. Error exposes your relationship with control, vulnerability and chance. There's no right answer — there's ethical positioning before the inevitable collapse of what was planned.",
      theoreticalRef: "Beckett: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.'",
      theoreticalRefEn: "Beckett: 'Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.'",
      processStage: "reflection"
    },
    options: [
      { 
        text: "Como parte da exploração do desconhecido", 
        textEn: "As part of exploring the unknown", 
        archetype: "shadow", 
        value: 3,
        processWeight: { reflection: 3, observation: 2 }
      },
      { 
        text: "Como combustível para algo novo", 
        textEn: "As fuel for something new", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, cocreation: 2 }
      },
      { 
        text: "Como oportunidade de aprender junto", 
        textEn: "As opportunity to learn together", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, reflection: 2 }
      },
      { 
        text: "Como algo a ser evitado com planejamento", 
        textEn: "As something to avoid with planning", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, observation: 2 }
      },
    ],
  },
  {
    text: "Como você documenta seu processo criativo?",
    textEn: "How do you document your creative process?",
    pedagogicalContext: {
      concept: "DOCUMENTAÇÃO COMO CRISTALIZAÇÃO",
      conceptEn: "DOCUMENTATION AS CRYSTALLIZATION",
      explanation: "Documentar é transformar o efêmero em matéria. Kiefer manteve 1200 cadernos ao longo de 40 anos — não os relê, mas eles existem. Marker dizia: 'A memória não é o oposto do esquecimento, é sua forma.' A documentação não serve para lembrar, mas para cristalizar o processo enquanto ele ainda pulsa. Sophie Calle fotografa cada refeição por 7 dias. Godard rabisca roteiros em guardanapos. A forma como você documenta revela o que você considera digno de registro — e o que você está disposto a esquecer.",
      explanationEn: "To document is to transform the ephemeral into matter. Kiefer kept 1200 notebooks over 40 years — he doesn't reread them, but they exist. Marker said: 'Memory is not the opposite of forgetting, it's its form.' Documentation doesn't serve to remember, but to crystallize the process while it still pulses. Sophie Calle photographs each meal for 7 days. Godard scribbles scripts on napkins. How you document reveals what you consider worthy of record — and what you're willing to forget.",
      theoreticalRef: "Chris Marker: 'A memória não é o oposto do esquecimento, é sua forma.'",
      theoreticalRefEn: "Chris Marker: 'Memory is not the opposite of forgetting, it's its form.'",
      processStage: "documentation"
    },
    options: [
      { 
        text: "Registro fragmentado e intuitivo", 
        textEn: "Fragmented and intuitive recording", 
        archetype: "shadow", 
        value: 3,
        processWeight: { documentation: 2, observation: 3 }
      },
      { 
        text: "Apenas o essencial, sem filtros", 
        textEn: "Only the essential, no filters", 
        archetype: "punk", 
        value: 2,
        processWeight: { documentation: 2, expansion: 2 }
      },
      { 
        text: "Compartilho em tempo real", 
        textEn: "I share in real time", 
        archetype: "buddy", 
        value: 1,
        processWeight: { documentation: 2, cocreation: 3 }
      },
      { 
        text: "Sistema detalhado e organizado", 
        textEn: "Detailed and organized system", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, reflection: 2 }
      },
    ],
  },
  {
    text: "Qual sua relação com o tempo no processo criativo?",
    textEn: "What's your relationship with time in the creative process?",
    pedagogicalContext: {
      concept: "TEMPORALIDADE CRIATIVA",
      conceptEn: "CREATIVE TEMPORALITY",
      explanation: "Stravinsky dizia: 'Não tenho tempo para ter pressa.' Lynch levou 5 anos para fazer Eraserhead. Godard filmava e editava simultaneamente. O tempo no processo criativo não é cronológico — é existencial. Alguns artistas precisam de imersão lenta (Shadow). Outros precisam de urgência combustível (Punk). Outros sincronizam com ritmos coletivos (Buddy). Outros estruturam cada hora (GI). Sua relação com tempo revela se você vê o processo como mergulho, explosão, conversa ou construção.",
      explanationEn: "Stravinsky said: 'I don't have time to be in a hurry.' Lynch took 5 years to make Eraserhead. Godard filmed and edited simultaneously. Time in the creative process is not chronological — it's existential. Some artists need slow immersion (Shadow). Others need fuel urgency (Punk). Others synchronize with collective rhythms (Buddy). Others structure each hour (GI). Your relationship with time reveals if you see the process as diving, explosion, conversation or construction.",
      theoreticalRef: "Stravinsky: 'Não tenho tempo para ter pressa.'",
      theoreticalRefEn: "Stravinsky: 'I don't have time to be in a hurry.'",
      processStage: "reflection"
    },
    options: [
      { 
        text: "Flui quando estou imerso", 
        textEn: "It flows when I'm immersed", 
        archetype: "shadow", 
        value: 3,
        processWeight: { observation: 3, reflection: 3 }
      },
      { 
        text: "É sempre urgente, sempre agora", 
        textEn: "It's always urgent, always now", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, cocreation: 2 }
      },
      { 
        text: "É compartilhado e negociado", 
        textEn: "It's shared and negotiated", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, reflection: 2 }
      },
      { 
        text: "É estruturado e otimizado", 
        textEn: "It's structured and optimized", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, observation: 2 }
      },
    ],
  },
  {
    text: "Como você lida com bloqueios criativos?",
    textEn: "How do you deal with creative blocks?",
    pedagogicalContext: {
      concept: "BLOQUEIO COMO MENSAGEM",
      conceptEn: "BLOCKAGE AS MESSAGE",
      explanation: "O bloqueio criativo não é ausência — é mensagem. Bresson dizia que o bloqueio é o momento onde a obra revela o que realmente quer ser. Lynch mergulha em meditação transcendental. Godard destrói o projeto e começa outro. Varda conversa com estranhos até encontrar uma nova entrada. O bloqueio expõe sua estratégia diante da resistência: você vai mais fundo (Shadow), quebra tudo (Punk), busca diálogo (Buddy), ou volta à técnica (GI)?",
      explanationEn: "Creative block is not absence — it's a message. Bresson said the block is the moment where the work reveals what it really wants to be. Lynch dives into transcendental meditation. Godard destroys the project and starts another. Varda talks to strangers until finding a new entrance. The block exposes your strategy facing resistance: do you go deeper (Shadow), break everything (Punk), seek dialogue (Buddy), or return to technique (GI)?",
      theoreticalRef: "Bresson: 'O bloqueio é o momento onde a obra revela seu verdadeiro desejo.'",
      theoreticalRefEn: "Bresson: 'The block is the moment where the work reveals its true desire.'",
      processStage: "reflection"
    },
    options: [
      { 
        text: "Mergulho mais fundo no silêncio", 
        textEn: "I dive deeper into silence", 
        archetype: "shadow", 
        value: 3,
        processWeight: { observation: 3, reflection: 3 }
      },
      { 
        text: "Quebro a rotina radicalmente", 
        textEn: "I break the routine radically", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 2, cocreation: 2 }
      },
      { 
        text: "Busco conversas e novas perspectivas", 
        textEn: "I seek conversations and new perspectives", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, reflection: 2 }
      },
      { 
        text: "Retorno aos fundamentos e técnicas", 
        textEn: "I return to fundamentals and techniques", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 2, observation: 3 }
      },
    ],
  },
  {
    text: "O que significa 'finalizar' uma obra para você?",
    textEn: "What does 'finishing' a work mean to you?",
    pedagogicalContext: {
      concept: "O MITO DA FINALIZAÇÃO",
      conceptEn: "THE MYTH OF COMPLETION",
      explanation: "Lynch disse sobre Eraserhead: 'Eu não terminei — apenas parei.' Da Vinci nunca finalizou a Mona Lisa. Kafka pediu que queimassem tudo. A ideia de 'obra finalizada' é uma convenção burguesa. O que significa 'finalizar'? É quando a obra alcança uma forma vendável? Quando você se cansa? Quando ela começa a viver sem você? Marker trabalhava em projetos por décadas. Godard nunca considerava nada terminado. Sua resposta revela se você vê arte como produto, processo, diálogo ou busca.",
      explanationEn: "Lynch said about Eraserhead: 'I didn't finish — I just stopped.' Da Vinci never finished the Mona Lisa. Kafka asked them to burn everything. The idea of 'finished work' is a bourgeois convention. What does 'finishing' mean? Is it when the work reaches a sellable form? When you get tired? When it starts living without you? Marker worked on projects for decades. Godard never considered anything finished. Your answer reveals if you see art as product, process, dialogue or search.",
      theoreticalRef: "Lynch: 'Eu não terminei Eraserhead — apenas parei.'",
      theoreticalRefEn: "Lynch: 'I didn't finish Eraserhead — I just stopped.'",
      processStage: "expansion"
    },
    options: [
      { 
        text: "Quando sinto que alcancei a verdade que buscava", 
        textEn: "When I feel I reached the truth I sought", 
        archetype: "shadow", 
        value: 3,
        processWeight: { reflection: 3, expansion: 2 }
      },
      { 
        text: "Quando a urgência se esgota", 
        textEn: "When urgency runs out", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, reflection: 1 }
      },
      { 
        text: "Quando o grupo decide que está pronto", 
        textEn: "When the group decides it's ready", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, expansion: 2 }
      },
      { 
        text: "Quando todos os parâmetros técnicos estão satisfeitos", 
        textEn: "When all technical parameters are satisfied", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, reflection: 2 }
      },
    ],
  },
  {
    text: "Como você escolhe em que trabalhar?",
    textEn: "How do you choose what to work on?",
    pedagogicalContext: {
      concept: "CRITÉRIO DE ESCOLHA",
      conceptEn: "CHOICE CRITERIA",
      explanation: "Herzog arrasta barcos sobre montanhas. Varda filma catadores de lixo. Marker documenta gatos em Tóquio. A escolha do que criar revela seus critérios invisíveis. Você escolhe o que te assombra? O que precisa ser dito? O que conecta pessoas? O que desafia tecnicamente? Não existe escolha neutra — cada projeto escolhido é um projeto rejeitado. Sua seleção é seu manifesto inconsciente.",
      explanationEn: "Herzog drags boats over mountains. Varda films garbage collectors. Marker documents cats in Tokyo. The choice of what to create reveals your invisible criteria. Do you choose what haunts you? What needs to be said? What connects people? What challenges technically? There's no neutral choice — each chosen project is a rejected project. Your selection is your unconscious manifesto.",
      theoreticalRef: "Herzog: 'Você deve trabalhar no que te assombra, não no que te agrada.'",
      theoreticalRefEn: "Herzog: 'You must work on what haunts you, not what pleases you.'",
      processStage: "observation"
    },
    options: [
      { 
        text: "O que me assombra e não consigo ignorar", 
        textEn: "What haunts me and I can't ignore", 
        archetype: "shadow", 
        value: 3,
        processWeight: { observation: 3, reflection: 2 }
      },
      { 
        text: "O que precisa urgentemente existir", 
        textEn: "What urgently needs to exist", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, observation: 2 }
      },
      { 
        text: "O que pode conectar e impactar pessoas", 
        textEn: "What can connect and impact people", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, expansion: 2 }
      },
      { 
        text: "O que representa desafio técnico interessante", 
        textEn: "What represents interesting technical challenge", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, observation: 2 }
      },
    ],
  },
  {
    text: "Como você se relaciona com críticas ao seu trabalho?",
    textEn: "How do you relate to criticism of your work?",
    pedagogicalContext: {
      concept: "CRÍTICA COMO ESPELHO",
      conceptEn: "CRITICISM AS MIRROR",
      explanation: "Godard respondia críticas fazendo outro filme. Lynch ignora completamente. Varda conversava horas com cada crítico. A crítica expõe sua relação com validação externa. Alguns artistas usam crítica como combustível para radicalizar (Punk). Outros ignoram para manter pureza (Shadow). Outros integram através de diálogo (Buddy). Outros analisam tecnicamente (GI). Sua resposta à crítica revela se você cria para você, contra o sistema, com outros, ou para dominar técnica.",
      explanationEn: "Godard responded to criticism by making another film. Lynch ignores completely. Varda talked hours with each critic. Criticism exposes your relationship with external validation. Some artists use criticism as fuel to radicalize (Punk). Others ignore to maintain purity (Shadow). Others integrate through dialogue (Buddy). Others analyze technically (GI). Your response to criticism reveals if you create for yourself, against the system, with others, or to master technique.",
      theoreticalRef: "Godard: 'A melhor resposta a uma crítica é outro filme.'",
      theoreticalRefEn: "Godard: 'The best response to criticism is another film.'",
      processStage: "reflection"
    },
    options: [
      { 
        text: "Absorvo e transformo em reflexão interna", 
        textEn: "I absorb and transform into internal reflection", 
        archetype: "shadow", 
        value: 3,
        processWeight: { reflection: 3, observation: 2 }
      },
      { 
        text: "Uso como combustível para radicalizar", 
        textEn: "I use as fuel to radicalize", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, cocreation: 2 }
      },
      { 
        text: "Converso e busco entender a perspectiva", 
        textEn: "I talk and seek to understand the perspective", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, reflection: 2 }
      },
      { 
        text: "Analiso tecnicamente e ajusto método", 
        textEn: "I analyze technically and adjust method", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 2, reflection: 3 }
      },
    ],
  },
  {
    text: "O que você faz quando sente que sua obra está se tornando previsível?",
    textEn: "What do you do when you feel your work is becoming predictable?",
    pedagogicalContext: {
      concept: "RUPTURA COM O CONHECIDO",
      conceptEn: "RUPTURE WITH THE KNOWN",
      explanation: "Godard abandonou o cinema narrativo após Week End (1967). Picasso trocava de estilo a cada década. Bowie matava personas publicamente. A previsibilidade é morte criativa — mas a ruptura tem custos. Você destrói sua identidade (Shadow)? Destrói o sistema (Punk)? Busca novas colaborações (Buddy)? Estuda novas técnicas (GI)? Sua resposta revela se você prioriza autenticidade, impacto, conexão ou maestria.",
      explanationEn: "Godard abandoned narrative cinema after Week End (1967). Picasso changed styles every decade. Bowie killed personas publicly. Predictability is creative death — but rupture has costs. Do you destroy your identity (Shadow)? Destroy the system (Punk)? Seek new collaborations (Buddy)? Study new techniques (GI)? Your answer reveals if you prioritize authenticity, impact, connection or mastery.",
      theoreticalRef: "Bowie: 'Sempre que você se sentir confortável, está na hora de mudar.'",
      theoreticalRefEn: "Bowie: 'Whenever you feel comfortable, it's time to change.'",
      processStage: "expansion"
    },
    options: [
      { 
        text: "Mergulho em território desconhecido interno", 
        textEn: "I dive into unknown internal territory", 
        archetype: "shadow", 
        value: 3,
        processWeight: { observation: 3, reflection: 3 }
      },
      { 
        text: "Destruo e recomeço do zero", 
        textEn: "I destroy and start from scratch", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, cocreation: 2 }
      },
      { 
        text: "Busco novas colaborações e perspectivas", 
        textEn: "I seek new collaborations and perspectives", 
        archetype: "buddy", 
        value: 1,
        processWeight: { cocreation: 3, expansion: 2 }
      },
      { 
        text: "Estudo novas técnicas e métodos", 
        textEn: "I study new techniques and methods", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, observation: 2 }
      },
    ],
  },
  {
    text: "Como você sabe quando um projeto realmente terminou?",
    textEn: "How do you know when a project has truly ended?",
    pedagogicalContext: {
      concept: "O FIM COMO TRANSFORMAÇÃO",
      conceptEn: "THE END AS TRANSFORMATION",
      explanation: "Bresson dizia: 'Um filme termina quando começa a viver sem mim.' Lynch: 'Nunca termina — apenas muda de estado.' O fim não é abandono — é metamorfose. Você sente o fim quando alcança verdade interna (Shadow)? Quando a urgência se esgota (Punk)? Quando a obra encontra sua comunidade (Buddy)? Quando atinge perfeição técnica (GI)? O fim revela se você vê arte como confissão, manifesto, diálogo ou técnica.",
      explanationEn: "Bresson said: 'A film ends when it starts living without me.' Lynch: 'It never ends — it just changes state.' The end is not abandonment — it's metamorphosis. Do you feel the end when you reach internal truth (Shadow)? When urgency runs out (Punk)? When the work finds its community (Buddy)? When it reaches technical perfection (GI)? The end reveals if you see art as confession, manifesto, dialogue or technique.",
      theoreticalRef: "Bresson: 'Um filme termina quando começa a viver sem mim.'",
      theoreticalRefEn: "Bresson: 'A film ends when it starts living without me.'",
      processStage: "expansion"
    },
    options: [
      { 
        text: "Quando sinto que alcancei a verdade que buscava", 
        textEn: "When I feel I reached the truth I sought", 
        archetype: "shadow", 
        value: 3,
        processWeight: { reflection: 3, expansion: 2 }
      },
      { 
        text: "Quando a energia se esgota completamente", 
        textEn: "When the energy completely runs out", 
        archetype: "punk", 
        value: 2,
        processWeight: { expansion: 3, reflection: 1 }
      },
      { 
        text: "Quando a obra encontra ressonância", 
        textEn: "When the work finds resonance", 
        archetype: "buddy", 
        value: 1,
        processWeight: { expansion: 3, cocreation: 2 }
      },
      { 
        text: "Quando todos os objetivos foram alcançados", 
        textEn: "When all objectives have been achieved", 
        archetype: "gi", 
        value: 0,
        processWeight: { documentation: 3, reflection: 2 }
      },
    ],
  },
];
