export interface PersonalizedAdvice {
  message: string;
  messageEn: string;
  reference: string;
  referenceEn: string;
}

export const personalizedAdviceMatrix: Record<string, PersonalizedAdvice> = {
  // SHADOW combinations
  "shadow_observation": {
    message: "Sua força está na observação profunda, mas você corre o risco de se perder no vazio se não criar rituais de imersão. Lynch medita transcendentalmente há 50 anos — não para 'melhorar', mas para habitar o silêncio sem se dissolver nele. Documente o que vê no escuro, mesmo que ninguém mais veja. O vazio não é ausência — é o espaço onde a verdade nasce.",
    messageEn: "Your strength is in deep observation, but you risk getting lost in the void if you don't create immersion rituals. Lynch has practiced transcendental meditation for 50 years — not to 'improve', but to inhabit silence without dissolving in it. Document what you see in the dark, even if no one else sees it. The void is not absence — it's the space where truth is born.",
    reference: "Lynch: 'Meditar é como mergulhar no oceano e trazer pérolas.'",
    referenceEn: "Lynch: 'To meditate is like diving into the ocean and bringing up pearls.'"
  },
  "shadow_cocreation": {
    message: "Você mergulha fundo, mas precisa aprender que até o inconsciente tem fantasmas que conversam. Tarkovsky fazia filmes sozinho mas dialogava com Bergman, Bresson, e seus próprios medos. A co-criação para Shadow não é sobre pessoas — é sobre aceitar que sua sombra tem múltiplas vozes. Convide seus fantasmas para a mesa. Eles têm algo a dizer.",
    messageEn: "You dive deep, but you need to learn that even the unconscious has ghosts that converse. Tarkovsky made films alone but dialogued with Bergman, Bresson, and his own fears. Co-creation for Shadow isn't about people — it's about accepting that your shadow has multiple voices. Invite your ghosts to the table. They have something to say.",
    reference: "Tarkovsky: 'Não trabalho sozinho. Trabalho com os mortos.'",
    referenceEn: "Tarkovsky: 'I don't work alone. I work with the dead.'"
  },
  "shadow_documentation": {
    message: "Sua visão é profunda, mas corre o risco de se perder no vazio se não deixar rastros. Chris Marker dizia: 'A memória não é o oposto do esquecimento, é sua forma.' Documente não para lembrar — documente para transformar o esquecimento em matéria. Kiefer manteve 1200 cadernos ao longo de 40 anos. Ele não os relê, mas eles existem. A documentação não é para o futuro — é para o presente.",
    messageEn: "Your vision is deep, but you risk getting lost in the void if you don't leave traces. Chris Marker said: 'Memory is not the opposite of forgetting, it's its form.' Document not to remember — document to transform forgetting into matter. Kiefer kept 1200 notebooks over 40 years. He doesn't reread them, but they exist. Documentation is not for the future — it's for the present.",
    reference: "Marker: 'Eu não guardo memórias, eu as construo.'",
    referenceEn: "Marker: 'I don't keep memories, I construct them.'"
  },
  "shadow_reflection": {
    message: "Você já habita a reflexão profunda — este é seu território natural. Mas cuidado: reflexão sem ação é paralisia disfarçada de sabedoria. Bresson assistia seus filmes em silêncio absoluto, anotando cada desconforto. Depois fazia outro filme. A reflexão serve o próximo mergulho, não substitui a descida. Reflita, mas não more na reflexão.",
    messageEn: "You already inhabit deep reflection — this is your natural territory. But beware: reflection without action is paralysis disguised as wisdom. Bresson watched his films in absolute silence, noting each discomfort. Then he made another film. Reflection serves the next dive, it doesn't replace the descent. Reflect, but don't live in reflection.",
    reference: "Bresson: 'Não olhe para a obra como resultado. Olhe como preparação para a próxima.'",
    referenceEn: "Bresson: 'Don't look at the work as result. Look as preparation for the next.'"
  },
  "shadow_expansion": {
    message: "Você cria nas profundezas, mas precisa aprender a deixar a obra respirar no mundo sem você. Lynch levou 5 anos para fazer Eraserhead e nunca explicou o filme. Deixou que o mundo interpretasse. A expansão para Shadow não é marketing — é soltar o controle. Quando a obra estiver pronta (ou quando você cansar dela), solte. Ela encontrará quem precisa encontrar.",
    messageEn: "You create in the depths, but you need to learn to let the work breathe in the world without you. Lynch took 5 years to make Eraserhead and never explained the film. He let the world interpret. Expansion for Shadow isn't marketing — it's releasing control. When the work is ready (or when you're tired of it), let go. It will find who it needs to find.",
    reference: "Lynch: 'Nunca explico. Se você precisa explicar, falhou.'",
    referenceEn: "Lynch: 'I never explain. If you need to explain, you failed.'"
  },

  // PUNK combinations
  "punk_observation": {
    message: "Sua urgência é seu combustível, mas sem observação crítica você ataca alvos errados. Godard estudou Hitchcock frame por frame antes de destruir o cinema narrativo. Conhecia o sistema profundamente antes de demoli-lo. Observe com raiva, mas observe. A destruição precisa de precisão cirúrgica, não caos aleatório.",
    messageEn: "Your urgency is your fuel, but without critical observation you attack wrong targets. Godard studied Hitchcock frame by frame before destroying narrative cinema. He knew the system deeply before demolishing it. Observe with anger, but observe. Destruction needs surgical precision, not random chaos.",
    reference: "Godard: 'Para destruir o cinema, primeiro precisei amá-lo.'",
    referenceEn: "Godard: 'To destroy cinema, I first had to love it.'"
  },
  "punk_cocreation": {
    message: "Você tem energia transformadora, mas corre o risco de queimar pontes antes de construir coletivo. O punk original era movimento, não indivíduo. Godard abandonou assinatura individual no Grupo Dziga Vertov mas nunca abandonou radicalidade. Coletivo sem compromisso vira comitê. Encontre seus cúmplices, não seguidores.",
    messageEn: "You have transformative energy, but you risk burning bridges before building collective. Original punk was movement, not individual. Godard abandoned individual signature in Dziga Vertov Group but never abandoned radicality. Collective without commitment becomes committee. Find your accomplices, not followers.",
    reference: "Situacionistas: 'A revolução não se lidera, se faz.'",
    referenceEn: "Situationists: 'Revolution is not led, it's made.'"
  },
  "punk_documentation": {
    message: "Você destrói e reconstrói tão rápido que pode perder o processo. Documente suas revoluções — não para nostalgia, mas como evidência. O punk DIY documentava tudo: fanzines, flyers, Xerox. Cada ação efêmera virava arquivo de resistência. Sem registro, sua destruição vira apenas ruído.",
    messageEn: "You destroy and rebuild so fast you might lose the process. Document your revolutions — not for nostalgia, but as evidence. DIY punk documented everything: zines, flyers, Xerox. Each ephemeral action became archive of resistance. Without record, your destruction becomes just noise.",
    reference: "Punk ethos: 'Documente antes que o sistema apague.'",
    referenceEn: "Punk ethos: 'Document before the system erases.'"
  },
  "punk_reflection": {
    message: "Você age antes de pensar — isso é força e fraqueza. Godard fazia e refletia simultaneamente. Cada filme era reflexão sobre o anterior. Não pare para refletir (você odeia isso), mas reflita enquanto destrói. A reflexão punk não é pausa — é análise em movimento.",
    messageEn: "You act before thinking — this is strength and weakness. Godard made and reflected simultaneously. Each film was reflection on the previous. Don't stop to reflect (you hate that), but reflect while destroying. Punk reflection is not pause — it's analysis in motion.",
    reference: "Godard: 'Penso melhor com câmera na mão.'",
    referenceEn: "Godard: 'I think better with camera in hand.'"
  },
  "punk_expansion": {
    message: "Sua urgência já é expansão — você não espera permissão. Mas expansão sem estratégia é grito que se perde. Banksy invade museus, mas escolhe quais. Guerrilla Girls atacam sistemicamente. Punk expansão não é caos — é ataque cultural planejado. Invada espaços, mas escolha quais.",
    messageEn: "Your urgency is already expansion — you don't wait for permission. But expansion without strategy is a scream that gets lost. Banksy invades museums, but chooses which ones. Guerrilla Girls attack systemically. Punk expansion is not chaos — it's planned cultural attack. Invade spaces, but choose which ones.",
    reference: "Banksy: 'Se não te convidaram, invada.'",
    referenceEn: "Banksy: 'If you weren't invited, invade.'"
  },

  // BUDDY combinations
  "buddy_observation": {
    message: "Você vê o mundo através dos outros, mas precisa desenvolver olhar próprio. Varda conversava com catadores de lixo por horas, mas tinha opinião clara sobre o que filmava. Observe com outros, mas filtre através de você. A comunidade amplia visão, não substitui autoria.",
    messageEn: "You see the world through others, but need to develop your own gaze. Varda talked to garbage collectors for hours, but had clear opinion about what she filmed. Observe with others, but filter through yourself. Community amplifies vision, doesn't replace authorship.",
    reference: "Varda: 'Filmo para entender, não para explicar aos outros.'",
    referenceEn: "Varda: 'I film to understand, not to explain to others.'"
  },
  "buddy_cocreation": {
    message: "Co-criação é seu território natural — você respira através do diálogo. Mas cuidado com consenso que dilui visão. Cahiers du Cinéma era debate brutal, não grupo de apoio. Pixar tem 'brain trust' — crítica coletiva sem hierarquia, mas cada diretor assina seu filme. Colabore ferozmente, mas não terceirize sua voz.",
    messageEn: "Co-creation is your natural territory — you breathe through dialogue. But beware of consensus that dilutes vision. Cahiers du Cinéma was brutal debate, not support group. Pixar has 'brain trust' — collective criticism without hierarchy, but each director signs their film. Collaborate fiercely, but don't outsource your voice.",
    reference: "Brad Bird (Pixar): 'Consenso não faz arte, faz comitê.'",
    referenceEn: "Brad Bird (Pixar): 'Consensus doesn't make art, it makes committee.'"
  },
  "buddy_documentation": {
    message: "Você compartilha processo em tempo real, mas pode perder intimidade com a obra. Documente para você primeiro, depois compartilhe. Varda filmava anos antes de mostrar. O compartilhamento vem depois da digestão, não durante. Crie espaço para segredos.",
    messageEn: "You share process in real time, but might lose intimacy with the work. Document for yourself first, then share. Varda filmed for years before showing. Sharing comes after digestion, not during. Create space for secrets.",
    reference: "Varda: 'Alguns filmes precisam de silêncio antes de respirar.'",
    referenceEn: "Varda: 'Some films need silence before breathing.'"
  },
  "buddy_reflection": {
    message: "Você reflete melhor em conversa — isso não é fraqueza. Cahiers du Cinéma desenvolveu teoria através de debates semanais. Mas depois, cada um ia para casa e escrevia sozinho. Reflita coletivamente, mas processe individualmente. A síntese é solitária, mesmo que a matéria-prima seja dialógica.",
    messageEn: "You reflect better in conversation — this is not weakness. Cahiers du Cinéma developed theory through weekly debates. But then, each went home and wrote alone. Reflect collectively, but process individually. Synthesis is solitary, even if raw material is dialogical.",
    reference: "Truffaut: 'Debatemos juntos, mas escrevo sozinho.'",
    referenceEn: "Truffaut: 'We debate together, but I write alone.'"
  },
  "buddy_expansion": {
    message: "Você já expande através de redes — sua obra cresce organicamente. Mas expansão sem curadoria vira diluição. Varda escolhia cuidadosamente onde mostrar filmes. Nem todo espaço merece sua obra. Expanda através de comunidade, mas proteja a obra de espaços hostis.",
    messageEn: "You already expand through networks — your work grows organically. But expansion without curation becomes dilution. Varda carefully chose where to show films. Not every space deserves your work. Expand through community, but protect the work from hostile spaces.",
    reference: "Varda: 'Não mostro em qualquer lugar. A obra merece contexto.'",
    referenceEn: "Varda: 'I don't show anywhere. The work deserves context.'"
  },

  // GI combinations
  "gi_observation": {
    message: "Você domina técnica de observação estrutural, mas pode perder o acaso. Bresson estudava mestres obsessivamente mas deixava espaço para acidente. Ozu repetia enquadramentos por 40 anos mas cada frame tinha vida própria. Mantenha estrutura, mas permita imperfeição intencional.",
    messageEn: "You master structural observation technique, but might lose chance. Bresson studied masters obsessively but left space for accident. Ozu repeated framings for 40 years but each frame had its own life. Keep structure, but allow intentional imperfection.",
    reference: "Bresson: 'A técnica liberta quando você esquece que existe.'",
    referenceEn: "Bresson: 'Technique liberates when you forget it exists.'"
  },
  "gi_cocreation": {
    message: "Você estrutura colaboração hierarquicamente — há espaço para isso. Studio Ghibli tem papéis claros mas não sufoca criatividade. Bresson dava instruções precisas mas escolhia atores não-profissionais para capturar o não-ensaiado. Estrutura sem espaço para erro mata. Deixe 10% para o acaso.",
    messageEn: "You structure collaboration hierarchically — there's space for that. Studio Ghibli has clear roles but doesn't suffocate creativity. Bresson gave precise instructions but chose non-professional actors to capture the unrehearsed. Structure without space for error kills. Leave 10% for chance.",
    reference: "Miyazaki: 'Planejamos tudo, mas o melhor vem do imprevisto.'",
    referenceEn: "Miyazaki: 'We plan everything, but the best comes from the unexpected.'"
  },
  "gi_documentation": {
    message: "Documentação sistemática é sua força — você já faz isso naturalmente. Mas cuidado: documentar demais pode paralisar. Kiefer mantém 1200 cadernos mas nunca os relê. A documentação serve o processo, não se torna o processo. Documente para liberar, não para prender.",
    messageEn: "Systematic documentation is your strength — you already do this naturally. But beware: over-documenting can paralyze. Kiefer keeps 1200 notebooks but never rereads them. Documentation serves the process, doesn't become the process. Document to free, not to imprison.",
    reference: "Kiefer: 'Documento para esquecer, não para lembrar.'",
    referenceEn: "Kiefer: 'I document to forget, not to remember.'"
  },
  "gi_reflection": {
    message: "Você analisa tecnicamente cada decisão — isso é disciplina. Mas reflexão excessiva mata instinto. Bresson dizia: 'Quando começo a pensar demais, sei que preciso filmar.' Reflita sistematicamente, mas não viva na reflexão. A próxima obra precisa de você no fazer, não na análise eterna.",
    messageEn: "You technically analyze each decision — this is discipline. But excessive reflection kills instinct. Bresson said: 'When I start thinking too much, I know I need to film.' Reflect systematically, but don't live in reflection. The next work needs you in the making, not in eternal analysis.",
    reference: "Bresson: 'Pensar muito é pensar mal.'",
    referenceEn: "Bresson: 'Thinking too much is thinking poorly.'"
  },
  "gi_expansion": {
    message: "Você planeja expansão metodicamente, mas pode perder timing. Ozu lançava filmes em ciclos precisos. Bresson esperava anos para contexto certo. Mas Herzog ataca quando sente urgência. Mantenha estratégia, mas não deixe planejamento matar momento. Às vezes, timing > perfeição.",
    messageEn: "You plan expansion methodically, but might lose timing. Ozu released films in precise cycles. Bresson waited years for right context. But Herzog attacks when he feels urgency. Keep strategy, but don't let planning kill moment. Sometimes, timing > perfection.",
    reference: "Ozu: 'Existe hora certa. Mas existe também tarde demais.'",
    referenceEn: "Ozu: 'There is a right time. But there is also too late.'"
  }
};
