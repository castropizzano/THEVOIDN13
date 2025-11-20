export interface ContextualQuote {
  text: string;
  textEn: string;
  author: string;
  work?: string;
  workEn?: string;
  context?: string;
  contextEn?: string;
}

export const contextualQuotesByQuestion: Record<number, ContextualQuote> = {
  0: { // Impulso inicial
    text: "A obra de arte é uma planta que cresce sobre a alma do artista.",
    textEn: "The work of art is a plant that grows upon the soul of the artist.",
    author: "Carl Jung",
    context: "Jung via a criação como processo orgânico nascido do inconsciente, não da vontade consciente.",
    contextEn: "Jung saw creation as an organic process born from the unconscious, not from conscious will."
  },
  1: { // Erro
    text: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    textEn: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
    author: "Samuel Beckett",
    work: "Worstward Ho (1983)",
    workEn: "Worstward Ho (1983)",
    context: "Escrito aos 77 anos, após 50 anos de 'fracassos'. Beckett via o erro como matéria criativa essencial.",
    contextEn: "Written at 77, after 50 years of 'failures'. Beckett saw error as essential creative matter."
  },
  2: { // Documentação
    text: "A memória não é o oposto do esquecimento, é sua forma.",
    textEn: "Memory is not the opposite of forgetting, it is its form.",
    author: "Chris Marker",
    work: "Sans Soleil (1983)",
    workEn: "Sans Soleil (1983)",
    context: "Marker passou 40 anos filmando o mundo enquanto escondia seu rosto. Documentava obsessivamente porque sabia: sem registro, só resta o vazio.",
    contextEn: "Marker spent 40 years filming the world while hiding his face. He documented obsessively because he knew: without record, only void remains."
  },
  3: { // Tempo
    text: "Não tenho tempo para ter pressa.",
    textEn: "I don't have time to be in a hurry.",
    author: "Igor Stravinsky",
    context: "Respondendo a um jornalista que criticou seu ritmo lento de trabalho. Stravinsky entendia que pressa mata profundidade.",
    contextEn: "Responding to a journalist who criticized his slow working pace. Stravinsky understood that haste kills depth."
  },
  4: { // Bloqueio criativo
    text: "O bloqueio é o momento onde a obra revela seu verdadeiro desejo.",
    textEn: "The block is the moment where the work reveals its true desire.",
    author: "Robert Bresson",
    work: "Notes on the Cinematograph (1975)",
    workEn: "Notes on the Cinematograph (1975)",
    context: "Bresson via o bloqueio não como ausência, mas como mensagem da obra sobre o que ela realmente quer ser.",
    contextEn: "Bresson saw the block not as absence, but as the work's message about what it really wants to be."
  },
  5: { // Finalização
    text: "Eu não terminei Eraserhead — apenas parei.",
    textEn: "I didn't finish Eraserhead — I just stopped.",
    author: "David Lynch",
    work: "Eraserhead (1977)",
    workEn: "Eraserhead (1977)",
    context: "Após 5 anos de produção, Lynch percebeu que 'finalizar' é uma convenção burguesa. Obras não terminam — mudam de estado.",
    contextEn: "After 5 years of production, Lynch realized that 'finishing' is a bourgeois convention. Works don't end — they change state."
  },
  6: { // Escolha de projeto
    text: "Você deve trabalhar no que te assombra, não no que te agrada.",
    textEn: "You must work on what haunts you, not what pleases you.",
    author: "Werner Herzog",
    context: "Herzog arrasta barcos sobre montanhas porque é assombrado, não porque é lógico. A escolha do projeto é confissão inconsciente.",
    contextEn: "Herzog drags boats over mountains because he's haunted, not because it's logical. Project choice is unconscious confession."
  },
  7: { // Crítica
    text: "A melhor resposta a uma crítica é outro filme.",
    textEn: "The best response to criticism is another film.",
    author: "Jean-Luc Godard",
    context: "Godard nunca defendeu seus filmes verbalmente. Respondia fazendo o próximo filme, mais radical que o anterior.",
    contextEn: "Godard never defended his films verbally. He responded by making the next film, more radical than the previous."
  },
  8: { // Previsibilidade
    text: "Sempre que você se sentir confortável, está na hora de mudar.",
    textEn: "Whenever you feel comfortable, it's time to change.",
    author: "David Bowie",
    context: "Bowie matava personas publicamente a cada 3 anos. Via o conforto como morte criativa e a ruptura como necessidade vital.",
    contextEn: "Bowie killed personas publicly every 3 years. He saw comfort as creative death and rupture as vital necessity."
  },
  9: { // Fim do projeto
    text: "Um filme termina quando começa a viver sem mim.",
    textEn: "A film ends when it starts living without me.",
    author: "Robert Bresson",
    context: "Bresson via o 'fim' não como abandono, mas como metamorfose. A obra termina quando se torna autônoma, não quando atinge perfeição.",
    contextEn: "Bresson saw the 'end' not as abandonment, but as metamorphosis. The work ends when it becomes autonomous, not when it reaches perfection."
  }
};
