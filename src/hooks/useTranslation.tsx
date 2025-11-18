import { useLanguage } from "@/contexts/LanguageContext";

type TranslationKey = 
  | "home"
  | "lowmovie"
  | "author"
  | "videos"
  | "admin"
  | "search"
  | "searchPlaceholder"
  | "menu"
  | "close"
  | "loading"
  | "loadingVideos"
  | "error"
  | "success"
  | "readMore"
  | "watchNow"
  | "downloadPDF"
  | "viewProject"
  | "contactMe"
  | "sendMessage"
  | "yourName"
  | "yourEmail"
  | "yourMessage"
  | "privacyPolicy"
  | "acceptTerms"
  | "subscribe"
  | "newsletter"
  | "enterEmail"
  | "copyright"
  | "allRightsReserved"
  | "developedBy"
  | "backToTop"
  | "next"
  | "previous"
  | "play"
  | "pause"
  | "viewAll"
  | "featured"
  | "portfolio"
  | "about"
  | "aboutSonic"
  | "sonicSignature"
  | "contact"
  | "biography"
  | "projects"
  | "skills"
  | "experience"
  | "education"
  | "publications"
  | "interviews"
  | "methodology"
  | "references"
  | "download"
  | "share"
  | "print"
  | "cancel"
  | "confirm"
  | "save"
  | "edit"
  | "delete"
  | "viewMore"
  | "showLess"
  | "filter"
  | "sortBy"
  | "newest"
  | "oldest"
  | "popular"
  | "expandFullMap"
  | "creativeOpsMindMap"
  | "completeEcosystem"
  | "fileNotAvailable"
  | "openInNewTab"
  | "openPDF"
  | "previewNotAvailable"
  | "creativeProcessTrack"
  | "gravitationalWeight"
  | "corrosion"
  | "sensorialFriction"
  | "etherealAtmosphere"
  | "controlledAggression"
  | "nocturnalBlues"
  | "experimentalCinema"
  | "urbanChaos"
  | "internalCollapse"
  | "sonicColapso"
  | "fullLength"
  | "mainDoc"
  | "technicalDoc"
  | "readmeDesc"
  | "licenseDesc"
  | "citationDesc"
  | "methodologyDesc"
  | "philosophyDesc"
  | "copyrightDesc"
  | "howToCiteDesc"
  | "referencesDesc"
  | "completeRepository"
  | "accessAllFiles"
  | "accessOracle"
  | "conceptualNarration"
  | "stillGenerator"
  | "stillGeneratorDesc"
  | "experimentalGenerator"
  | "library"
  | "custom"
  | "selectBasePrompt"
  | "selectedPrompt"
  | "editPromptNote"
  | "customPrompt"
  | "customPromptPlaceholder"
  | "customPromptNote"
  | "generateStill"
  | "generating"
  | "downloadStill"
  | "experimentalNote"
  | "libraryMode"
  | "customMode"
  | "allImagesNote"
  | "canonicalParams"
  | "creativeOracle"
  | "creativeOracleDesc"
  | "sixQuestions"
  | "noRightAnswers"
  | "shadows"
  | "rupture"
  | "connection"
  | "method"
  | "shadowDesc"
  | "ruptureDesc"
  | "connectionDesc"
  | "methodDesc"
  | "startOracle"
  | "nextQuestion"
  | "seeResult"
  | "dominantArchetype"
  | "creativeProfile"
  | "restartOracle"
  | "producedMaterials"
  | "theInternalEcho"
  | "conceptualDNA"
  | "conceptualDNAComics"
  | "cinematicTexture"
  | "cinematicTextureFilms"
  | "sonicSignatureMusic"
  | "comicsShowcaseTitle"
  | "comicsShowcaseDesc"
  | "filmGalleryTitle"
  | "filmGalleryDesc"
  | "vibeCodingTitle"
  | "vibeCodingDesc"
  | "promptLibraryTitle"
  | "promptLibraryDesc"
  | "yourVision"
  | "generatedCode"
  | "instantTransformation"
  | "describeWhatYouWant"
  | "codeWillAppearHere"
  | "vibeCodingAction"
  | "vibeCodingActionDesc"
  | "examplesTitle"
  | "fromTheoryToPractice"
  | "fromTheoryDesc"
  | "punkRockPrinciple"
  | "bestCode"
  | "wayOfCode"
  | "wayOfCodeDesc"
  | "vibeCoding"
  | "vibeCodingMethodDesc"
  | "punkRockCoding"
  | "punkRockCodingDesc"
  | "lovableDesc"
  | "lovableContext"
  | "taoTeChingTitle"
  | "taoTeChingDesc"
  | "taoTeChingContext"
  | "processArt"
  | "processArtDesc"
  | "processArtContext"
  | "philosophyAuthor"
  | "philosophyYear"
  | "philosophyMetaRef"
  | "philosophyMethodology"
  | "watchmenTitle"
  | "watchmenDesc"
  | "watchmenContext"
  | "sandmanTitle"
  | "sandmanDesc"
  | "sandmanContext"
  | "blackHoleTitle"
  | "blackHoleDesc"
  | "blackHoleContext"
  | "comicsDNANote"
  | "filmAbout"
  | "bladeRunnerDesc"
  | "kidsDesc"
  | "matrixDesc"
  | "akiraDesc"
  | "fallenAngelsDesc"
  | "thx1138Desc"
  | "brazilDesc"
  | "equilibriumDesc"
  | "warriorsDesc"
  | "orwell1984Desc"
  | "christianeFDesc"
  | "perfectDaysDesc"
  | "backToFutureDesc"
  | "essentialFilms"
  | "promptLibraryPrompts"
  | "promptsAccess"
  | "systemPrompts"
  | "characterPrompts"
  | "scenePrompts"
  | "copyPrompt"
  | "copiedPrompt"
  | "errorCopyPrompt"
  | "errorLoadPrompts"
  | "vibeCodingIntro"
  | "yourVisionLabel"
  | "generatedCodeLabel"
  | "examplesTest"
  | "practiceArea"
  | "instantTransformDesc"
  | "artisticMemorial"
  | "hybridPraxis"
  // New bilingual audit keys
  | "symbolIntro"
  | "linguisticOriginTitle"
  | "linguisticOriginDesc"
  | "mathPhilosophyTitle"
  | "mathPhilosophyDesc"
  | "computationTitle"
  | "computationDesc"
  | "prototypeDesc1"
  | "prototypeDesc2"
  | "prototypeDesc3"
  | "connectionPunkRock"
  | "connectionVibeCoding"
  | "connectionCinemaPunk"
  | "connectionTaoCoding"
  // Comics DNA
  | "comicsDNAButton"
  | "comicsDNATitle"
  | "comicsDNAIntro"
  | "comicsTriadNote"
  // FilmGallery
  | "filmReferencesButton"
  | "filmReferencesTitle"
  | "filmRefPara1"
  | "filmRefPara2"
  | "filmRefPara3"
  | "filmRefPara4"
  // VibeCodingPlayground
  | "writePromptHint"
  | "generated"
  | "vibeCodingInAction"
  // AccessGate translations
  | "loginTab"
  | "signupTab"
  | "emailLabel"
  | "emailPlaceholder"
  | "passwordLabel"
  | "passwordPlaceholder"
  | "fullNameLabel"
  | "fullNamePlaceholder"
  | "loginButton"
  | "loggingIn"
  | "signupButton"
  | "creatingAccount"
  | "invalidEmailPassword"
  | "welcomeBack"
  | "loginError"
  | "invalidSubmission"
  | "emailAlreadyRegistered"
  | "accountCreated"
  | "alreadySubscribed"
  | "newsletterError"
  | "newsletterSubscribed"
  | "signupError"
  | "passwordMinChars"
  // ComicGenerator translations
  | "errorLoadingPrompts"
  | "systemPromptNotLoaded"
  | "stillGenerated"
  | "rateLimitExceeded"
  | "insufficientCredits"
  | "errorGeneratingStill"
  | "promptLoaded"
  // CookieConsent translations
  | "cookiePolicyTitle"
  | "cookiePolicyDescription"
  | "acceptButton"
  | "declineButton"
  | "privacyPolicyButton";


const translations: Record<TranslationKey, { pt: string; en: string }> = {
  home: { pt: "INÍCIO", en: "HOME" },
  lowmovie: { pt: "LOWMOVIE™", en: "LOWMOVIE™" },
  author: { pt: "AUTOR", en: "AUTHOR" },
  videos: { pt: "PORTFÓLIO DE VÍDEOS", en: "VIDEO PORTFOLIO" },
  admin: { pt: "ADMIN", en: "ADMIN" },
  search: { pt: "Buscar", en: "Search" },
  searchPlaceholder: { pt: "Buscar no site...", en: "Search site..." },
  menu: { pt: "Menu", en: "Menu" },
  close: { pt: "Fechar", en: "Close" },
  loading: { pt: "Carregando...", en: "Loading..." },
  loadingVideos: { pt: "Carregando vídeos...", en: "Loading videos..." },
  error: { pt: "Erro", en: "Error" },
  success: { pt: "Sucesso", en: "Success" },
  readMore: { pt: "Leia Mais", en: "Read More" },
  watchNow: { pt: "Assistir Agora", en: "Watch Now" },
  downloadPDF: { pt: "Baixar PDF", en: "Download PDF" },
  viewProject: { pt: "Ver Projeto", en: "View Project" },
  contactMe: { pt: "Entre em Contato", en: "Contact Me" },
  sendMessage: { pt: "Enviar Mensagem", en: "Send Message" },
  yourName: { pt: "Seu Nome", en: "Your Name" },
  yourEmail: { pt: "Seu E-mail", en: "Your Email" },
  yourMessage: { pt: "Sua Mensagem", en: "Your Message" },
  privacyPolicy: { pt: "Política de Privacidade", en: "Privacy Policy" },
  acceptTerms: { pt: "Aceito os termos", en: "I accept the terms" },
  subscribe: { pt: "Inscrever-se", en: "Subscribe" },
  newsletter: { pt: "Newsletter", en: "Newsletter" },
  enterEmail: { pt: "Digite seu e-mail", en: "Enter your email" },
  copyright: { pt: "Copyright", en: "Copyright" },
  allRightsReserved: { pt: "Todos os direitos reservados", en: "All rights reserved" },
  developedBy: { pt: "Desenvolvido por", en: "Developed by" },
  backToTop: { pt: "Voltar ao Topo", en: "Back to Top" },
  next: { pt: "Próximo", en: "Next" },
  previous: { pt: "Anterior", en: "Previous" },
  play: { pt: "Reproduzir", en: "Play" },
  pause: { pt: "Pausar", en: "Pause" },
  viewAll: { pt: "Ver Tudo", en: "View All" },
  featured: { pt: "Destaque", en: "Featured" },
  portfolio: { pt: "Portfólio", en: "Portfolio" },
  about: { pt: "Sobre", en: "About" },
  aboutSonic: { pt: "Sobre a Assinatura Sonora", en: "About the Sonic Signature" },
  sonicSignature: { pt: "Trilha do Processo Criativo", en: "Creative Process Soundtrack" },
  contact: { pt: "Contato", en: "Contact" },
  biography: { pt: "Biografia", en: "Biography" },
  projects: { pt: "Projetos", en: "Projects" },
  skills: { pt: "Habilidades", en: "Skills" },
  experience: { pt: "Experiência", en: "Experience" },
  education: { pt: "Formação", en: "Education" },
  publications: { pt: "Publicações", en: "Publications" },
  interviews: { pt: "Entrevistas", en: "Interviews" },
  methodology: { pt: "Metodologia", en: "Methodology" },
  references: { pt: "Referências", en: "References" },
  download: { pt: "Baixar", en: "Download" },
  share: { pt: "Compartilhar", en: "Share" },
  print: { pt: "Imprimir", en: "Print" },
  cancel: { pt: "Cancelar", en: "Cancel" },
  confirm: { pt: "Confirmar", en: "Confirm" },
  save: { pt: "Salvar", en: "Save" },
  edit: { pt: "Editar", en: "Edit" },
  delete: { pt: "Excluir", en: "Delete" },
  viewMore: { pt: "Ver Mais", en: "View More" },
  showLess: { pt: "Ver Menos", en: "Show Less" },
  filter: { pt: "Filtrar", en: "Filter" },
  sortBy: { pt: "Ordenar por", en: "Sort by" },
  newest: { pt: "Mais Recente", en: "Newest" },
  oldest: { pt: "Mais Antigo", en: "Oldest" },
  popular: { pt: "Popular", en: "Popular" },
  expandFullMap: { pt: "EXPANDIR MAPA COMPLETO", en: "EXPAND FULL MAP" },
  creativeOpsMindMap: { pt: "[CREATIVE-OPS MIND MAP]", en: "[CREATIVE-OPS MIND MAP]" },
  completeEcosystem: { pt: "Ecossistema completo das operações criativas do THEVØIDN13.", en: "Complete ecosystem of THEVØIDN13 creative operations." },
  fileNotAvailable: { pt: "Arquivo não disponível no momento", en: "File not available at the moment" },
  openInNewTab: { pt: "Abrir em Nova Aba", en: "Open in New Tab" },
  openPDF: { pt: "Abrir PDF", en: "Open PDF" },
  previewNotAvailable: { pt: "Preview não disponível neste navegador", en: "Preview not available in this browser" },
  creativeProcessTrack: { pt: "Trilha do Processo Criativo", en: "Creative Process Soundtrack" },
  gravitationalWeight: { pt: "Peso Gravitacional", en: "Gravitational Weight" },
  corrosion: { pt: "Corrosão", en: "Corrosion" },
  sensorialFriction: { pt: "Fricção Sensorial", en: "Sensorial Friction" },
  etherealAtmosphere: { pt: "Atmosfera Etérea", en: "Ethereal Atmosphere" },
  controlledAggression: { pt: "Agressão Controlada", en: "Controlled Aggression" },
  nocturnalBlues: { pt: "Blues Noturno", en: "Nocturnal Blues" },
  experimentalCinema: { pt: "Cinema Experimental", en: "Experimental Cinema" },
  urbanChaos: { pt: "Caos Urbano", en: "Urban Chaos" },
  internalCollapse: { pt: "Colapso Interno", en: "Internal Collapse" },
  sonicColapso: { pt: "Colapso Sônico", en: "Sonic Collapse" },
  fullLength: { pt: "Duração Completa", en: "Full Length" },
  mainDoc: { pt: "[Doc. Principais]", en: "[Main Doc.]" },
  technicalDoc: { pt: "[Doc. Técnica]", en: "[Technical Doc.]" },
  readmeDesc: { pt: "Manifesto e estrutura do projeto", en: "Manifesto and project structure" },
  licenseDesc: { pt: "Licença CC BY-NC-SA 4.0", en: "CC BY-NC-SA 4.0 License" },
  citationDesc: { pt: "Citação automatizada GitHub", en: "GitHub automated citation" },
  methodologyDesc: { pt: "Métodos e procedimentos de pesquisa", en: "Research methods and procedures" },
  philosophyDesc: { pt: "Justificativa das escolhas conceituais", en: "Rationale for conceptual choices" },
  copyrightDesc: { pt: "Ética e transparência da co-criação", en: "Ethics and transparency of co-creation" },
  howToCiteDesc: { pt: "Guia completo de citação acadêmica", en: "Complete academic citation guide" },
  referencesDesc: { pt: "Bibliografia completa do projeto", en: "Complete project bibliography" },
  completeRepository: { pt: "[REPOSITÓRIO COMPLETO]", en: "[COMPLETE REPOSITORY]" },
  accessAllFiles: { pt: "Acesso a todos os arquivos no GitHub", en: "Access all files on GitHub" },
  accessOracle: { pt: "[ACESSAR ORÁCULO]", en: "[ACCESS ORACLE]" },
  conceptualNarration: { pt: "Narração conceitual do projeto", en: "Conceptual project narration" },
  stillGenerator: { pt: "GERADOR DE STILL", en: "STILL GENERATOR" },
  stillGeneratorDesc: { pt: "Powered by Nano Banana (Gemini 2.5 Flash Image) o gerador experimental traduz ruído em imagem e silêncio em cor. Uma extensão sintética da visão: a máquina sonha o que o criador apenas intui.", en: "Powered by Nano Banana (Gemini 2.5 Flash Image) the experimental generator translates noise into image and silence into color. A synthetic extension of vision: the machine dreams what the creator only intuits." },
  experimentalGenerator: { pt: "GERADOR EXPERIMENTAL DE STILL", en: "EXPERIMENTAL STILL GENERATOR" },
  library: { pt: "Biblioteca", en: "Library" },
  custom: { pt: "Personalizado", en: "Custom" },
  selectBasePrompt: { pt: "Selecionar Prompt Base", en: "Select Base Prompt" },
  selectedPrompt: { pt: "Prompt Selecionado", en: "Selected Prompt" },
  editPromptNote: { pt: "Você pode editar o prompt selecionado ou usá-lo como está", en: "You can edit the selected prompt or use it as is" },
  customPrompt: { pt: "Prompt Personalizado", en: "Custom Prompt" },
  customPromptPlaceholder: { pt: "Descreva a cena que deseja gerar em detalhes...", en: "Describe the scene you want to generate in detail..." },
  customPromptNote: { pt: "Crie suas próprias cenas mantendo as diretrizes canônicas do universo.", en: "Create your own scenes while maintaining the canonical guidelines of the universe." },
  generateStill: { pt: "Gerar Still", en: "Generate Still" },
  generating: { pt: "Gerando...", en: "Generating..." },
  downloadStill: { pt: "Baixar Still", en: "Download Still" },
  experimentalNote: { pt: "Nota Experimental: Este gerador usa a Shadow Interface Bible v13 como system prompt base, aplicada automaticamente a todos os prompts da biblioteca.", en: "Experimental Note: This generator uses the Shadow Interface Bible v13 as base system prompt, automatically applied to all library prompts." },
  libraryMode: { pt: "Use prompts oficiais pré-configurados para máxima fidelidade visual.", en: "Use official pre-configured prompts for maximum visual fidelity." },
  customMode: { pt: "Crie suas próprias cenas mantendo as diretrizes canônicas do universo.", en: "Create your own scenes while maintaining the canonical guidelines of the universe." },
  allImagesNote: { pt: "Todas as imagens são geradas em aspect ratio 16:9 horizontal, preservando todo o conteúdo sem cortes e recebem automaticamente a marca d'água oficial THEVØIDN13 em 50% de transparência no canto inferior direito.", en: "All images are generated in 16:9 horizontal aspect ratio, preserving all content without crops and automatically receive the official THEVØIDN13 watermark at 50% transparency in the bottom right corner." },
  canonicalParams: { pt: "Parâmetros canônicos: Temperature 0.2, Top P 0.5, estilo dirty comic book art com heavy inks e analog print grain.", en: "Canonical parameters: Temperature 0.2, Top P 0.5, dirty comic book art style with heavy inks and analog print grain." },
  creativeOracle: { pt: "ORÁCULO CRIATIVO", en: "CREATIVE ORACLE" },
  creativeOracleDesc: { pt: "Uma jornada interativa de autoconhecimento guiada por THEVØIDN13. Seis perguntas filosóficas sobre criação e ruído revelam o arquétipo que habita seu processo. O oráculo não responde — reflete.", en: "An interactive journey of self-discovery guided by THEVØIDN13. Six philosophical questions on creation and noise reveal the archetype dwelling within your process. The oracle does not answer — it reflects." },
  sixQuestions: { pt: "Seis perguntas sobre seu processo criativo. Não existe resposta certa. Apenas verdades que você ainda não disse em voz alta. O que você encontra quando para de fugir?", en: "Six questions about your creative process. There are no right answers. Only truths you haven't spoken aloud yet. What do you find when you stop running away?" },
  noRightAnswers: { pt: "Não existe resposta certa. Apenas verdades que você ainda não disse em voz alta.", en: "There are no right answers. Only truths you haven't spoken aloud yet." },
  shadows: { pt: "Sombras", en: "Shadow" },
  rupture: { pt: "Ruptura", en: "Rupture" },
  connection: { pt: "Conexão", en: "Connection" },
  method: { pt: "Método", en: "Method" },
  shadowDesc: { pt: "O inconsciente como matéria-prima criativa. Aquilo que ainda não tem nome, mas já existe no escuro.", en: "The unconscious as creative raw material. That which has no name yet, but already exists in the dark." },
  ruptureDesc: { pt: "Destruição como gesto criativo. Quebrar o que foi feito para encontrar o que ainda pode ser.", en: "Destruction as creative gesture. Breaking what was made to find what can still become." },
  connectionDesc: { pt: "A criação como diálogo e escuta. Nada existe sozinho, tudo ressoa no outro para existir.", en: "Creation as dialogue and listening. Nothing exists alone, everything resonates in another to exist." },
  methodDesc: { pt: "Disciplina e rigor como estrutura. A repetição consciente que transforma prática em forma refinada.", en: "Discipline and rigor as structure. Conscious repetition that transforms practice into refined form." },
  startOracle: { pt: "INICIAR ORÁCULO", en: "START ORACLE" },
  nextQuestion: { pt: "PRÓXIMA PERGUNTA", en: "NEXT QUESTION" },
  seeResult: { pt: "VER RESULTADO", en: "SEE RESULT" },
  dominantArchetype: { pt: "SEU ARQUÉTIPO DOMINANTE", en: "YOUR DOMINANT ARCHETYPE" },
  creativeProfile: { pt: "Seu Perfil Criativo", en: "Your Creative Profile" },
  restartOracle: { pt: "REFAZER ORÁCULO", en: "RESTART ORACLE" },
  producedMaterials: { pt: "MATERIAIS PRODUZIDOS", en: "PRODUCED MATERIALS" },
  theInternalEcho: { pt: "O ECO INTERNO", en: "THE INTERNAL ECHO" },
  conceptualDNA: { pt: "DNA CONCEITUAL", en: "CONCEPTUAL DNA" },
  conceptualDNAComics: { pt: "DNA CONCEITUAL (QUADRINHOS)", en: "CONCEPTUAL DNA (COMICS)" },
  cinematicTexture: { pt: "TEXTURA CINEMATOGRÁFICA", en: "CINEMATIC TEXTURE" },
  cinematicTextureFilms: { pt: "TEXTURA CINEMATOGRÁFICA (FILMES)", en: "CINEMATIC TEXTURE (FILMS)" },
  sonicSignatureMusic: { pt: "ASSINATURA SONORA (MÚSICA)", en: "SONIC SIGNATURE (MUSIC)" },
  comicsShowcaseTitle: { pt: "DNA Conceitual dos Quadrinhos", en: "Conceptual DNA of Comics" },
  comicsShowcaseDesc: { pt: "Três obras que estruturam a arquitetura narrativa e visual do projeto", en: "Three works that structure the narrative and visual architecture of the project" },
  filmGalleryTitle: { pt: "Sobre as Referências Cinematográficas", en: "About the Cinematic References" },
  filmGalleryDesc: { pt: "Quinze filmes essenciais", en: "Fifteen essential films" },
  vibeCodingTitle: { pt: "VIBE CODING PLAYGROUND", en: "VIBE CODING PLAYGROUND" },
  vibeCodingDesc: { pt: "Experimente o desenvolvimento intuitivo mediado por IA", en: "Experience intuitive AI-mediated development" },
  promptLibraryTitle: { pt: "[BIBLIOTECA DE PROMPTS]", en: "[PROMPT LIBRARY]" },
  promptLibraryDesc: { pt: "Um repositório vivo de comandos e instruções", en: "A living repository of commands and instructions" },
  yourVision: { pt: "SUA VISÃO", en: "YOUR VISION" },
  generatedCode: { pt: "CÓDIGO GERADO", en: "GENERATED CODE" },
  instantTransformation: { pt: "Transformação instantânea", en: "Instant transformation" },
  describeWhatYouWant: { pt: "Descreva o que você quer criar", en: "Describe what you want to create" },
  codeWillAppearHere: { pt: "Seu código aparecerá aqui", en: "Your code will appear here" },
  vibeCodingAction: { pt: "Vibe Coding em ação", en: "Vibe Coding in action" },
  vibeCodingActionDesc: { pt: "Você descreve a intenção, a IA traduz em código", en: "You describe the intention, AI translates to code" },
  examplesTitle: { pt: "Exemplos para testar", en: "Examples to test" },
  fromTheoryToPractice: { pt: "FROM THEORY TO PRACTICE", en: "FROM THEORY TO PRACTICE" },
  fromTheoryDesc: { pt: "Este playground materializa os princípios do Way of Code", en: "This playground materializes the Way of Code principles" },
  punkRockPrinciple: { pt: "O punk rock do código", en: "The punk rock of coding" },
  bestCode: { pt: "O melhor código é o que você não precisa escrever", en: "The best code is the code you don't have to write" },
  wayOfCode: { pt: "THE WAY OF CODE", en: "THE WAY OF CODE" },
  wayOfCodeDesc: { pt: "Filosofia criativa que conecta o Tao Te Ching com desenvolvimento de software, propondo que código seja tratado como arte contemplativa.", en: "Creative philosophy connecting Tao Te Ching with software development, proposing code as contemplative art." },
  vibeCoding: { pt: "VIBE CODING", en: "VIBE CODING" },
  vibeCodingMethodDesc: { pt: "Abordagem intuitiva de programação mediada por IA, onde o desenvolvedor atua como diretor criativo ao invés de executor técnico.", en: "Intuitive AI-mediated programming approach, where the developer acts as creative director rather than technical executor." },
  punkRockCoding: { pt: "PUNK ROCK OF CODING", en: "PUNK ROCK OF CODING" },
  punkRockCodingDesc: { pt: "IA como movimento revolucionário no desenvolvimento: acessível, rebelde, democratizante. Paralelo com o punk rock dos anos 70.", en: "AI as revolutionary movement in development: accessible, rebellious, democratizing. Parallel with 70s punk rock." },
  lovableDesc: { pt: "Ferramenta de co-criação humano-IA que materializa os princípios de vibe coding e resistência criativa. Este site foi construído com ela.", en: "Human-AI co-creation tool that materializes vibe coding principles and creative resistance. This site was built with it." },
  lovableContext: { pt: "Praxis concreta da filosofia punk rock do código", en: "Concrete praxis of punk rock coding philosophy" },
  taoTeChingTitle: { pt: "TAO TE CHING", en: "TAO TE CHING" },
  taoTeChingDesc: { pt: "Texto fundacional do Taoísmo sobre fluxo, não-ação criativa (Wu Wei) e harmonia com processos naturais. Base filosófica de The Way of Code.", en: "Foundational Taoist text on flow, creative non-action (Wu Wei) and harmony with natural processes. Philosophical basis of The Way of Code." },
  taoTeChingContext: { pt: "Sabedoria ancestral sobre criatividade sem esforço forçado", en: "Ancestral wisdom on creativity without forced effort" },
  processArt: { pt: "PROCESS ART", en: "PROCESS ART" },
  processArtDesc: { pt: "Arte como processo performativo documentado, não apenas produto final. O caminho criativo é a obra—cada decisão, iteração e transformação tem valor artístico.", en: "Art as documented performative process, not just final product. The creative path is the work—every decision, iteration and transformation has artistic value." },
  processArtContext: { pt: "Documentação performática do desenvolvimento como arte conceitual", en: "Performative documentation of development as conceptual art" },
  philosophyAuthor: { pt: "Autor", en: "Author" },
  philosophyYear: { pt: "Ano", en: "Year" },
  philosophyMetaRef: { pt: "Meta-Referência", en: "Meta-Reference" },
  philosophyMethodology: { pt: "Metodologia", en: "Methodology" },
  watchmenTitle: { pt: "Watchmen", en: "Watchmen" },
  watchmenDesc: { pt: "Ética ambígua e o mecanismo de cidade", en: "Ambiguous ethics and city mechanics" },
  watchmenContext: { pt: "A arquitetura ética e o questionamento do heroísmo", en: "Ethical architecture and questioning of heroism" },
  sandmanTitle: { pt: "The Sandman", en: "The Sandman" },
  sandmanDesc: { pt: "Mitologia pessoal e arquitetura do sonho", en: "Personal mythology and dream architecture" },
  sandmanContext: { pt: "A construção de universos oníricos e simbólicos", en: "Construction of dreamlike and symbolic universes" },
  blackHoleTitle: { pt: "Black Hole", en: "Black Hole" },
  blackHoleDesc: { pt: "Alienação e metamorfose corporal", en: "Alienation and bodily metamorphosis" },
  blackHoleContext: { pt: "O corpo como texto de transformação e isolamento", en: "The body as text of transformation and isolation" },
  comicsDNANote: { pt: "Esta abordagem ecoa a filosofia punk rock do código: resistência contra convenções estabelecidas, acesso democratizado à expressão criativa, priorização da autenticidade sobre perfeição técnica. Assim como Watchmen desconstruiu o gênero de super-heróis, THEVØIDN13 desconstrói as fronteiras entre desenvolvimento técnico e performance artística.", en: "This approach echoes the punk rock philosophy of code: resistance against established conventions, democratized access to creative expression, prioritization of authenticity over technical perfection. Just as Watchmen deconstructed the superhero genre, THEVØIDN13 deconstructs the boundaries between technical development and artistic performance." },
  filmAbout: { pt: "Sobre as Referências Cinematográficas", en: "About the Cinematic References" },
  bladeRunnerDesc: { pt: "Neo noir e solidão coreografada", en: "Neo noir and choreographed solitude" },
  kidsDesc: { pt: "Realismo sujo", en: "Dirty realism" },
  matrixDesc: { pt: "Controle e realidade sintética", en: "Control and synthetic reality" },
  akiraDesc: { pt: "Energia reprimida", en: "Repressed energy" },
  fallenAngelsDesc: { pt: "Atmosfera bebê-da-desesperança", en: "Baby-of-despair atmosphere" },
  thx1138Desc: { pt: "Despersonalização e controle", en: "Depersonalization and control" },
  brazilDesc: { pt: "Burocracia como pesadelo", en: "Bureaucracy as nightmare" },
  equilibriumDesc: { pt: "Supressão emocional", en: "Emotional suppression" },
  warriorsDesc: { pt: "Deriva urbana", en: "Urban drift" },
  orwell1984Desc: { pt: "Vigilância total", en: "Total surveillance" },
  christianeFDesc: { pt: "Queda adolescente", en: "Adolescent fall" },
  perfectDaysDesc: { pt: "Contemplação e rotina", en: "Contemplation and routine" },
  backToFutureDesc: { pt: "Nostalgia e tempo", en: "Nostalgia and time" },
  essentialFilms: { pt: "Quinze filmes essenciais", en: "Fifteen essential films" },
  promptLibraryPrompts: { pt: "prompts", en: "prompts" },
  promptsAccess: { pt: "Acesse os prompts desenvolvidos para o projeto THEVØIDN13, criados de forma experimental e em constante atualização. Cada entrada reflete o processo de construção visual e narrativa do universo.", en: "Access the prompts developed for THEVØIDN13, built experimentally and in continuous evolution. Each entry reflects the visual and narrative construction process of the universe." },
  systemPrompts: { pt: "System", en: "System" },
  characterPrompts: { pt: "Personagens", en: "Characters" },
  scenePrompts: { pt: "Cenas", en: "Scenes" },
  copyPrompt: { pt: "Copiar prompt", en: "Copy prompt" },
  copiedPrompt: { pt: "copiado!", en: "copied!" },
  errorCopyPrompt: { pt: "Erro ao copiar prompt", en: "Error copying prompt" },
  errorLoadPrompts: { pt: "Erro ao carregar prompts", en: "Error loading prompts" },
  vibeCodingIntro: { pt: "Experimente o desenvolvimento intuitivo mediado por IA. Escreva o que você imagina, veja como a intenção criativa se transforma em código. Teoria encontra prática.", en: "Experience intuitive AI-mediated development. Write what you imagine, watch creative intention transform into code. Theory meets practice." },
  yourVisionLabel: { pt: "SUA VISÃO", en: "YOUR VISION" },
  generatedCodeLabel: { pt: "CÓDIGO GERADO", en: "GENERATED CODE" },
  examplesTest: { pt: "Exemplos para testar", en: "Examples to test" },
  practiceArea: { pt: "Área de Prática", en: "Practice Area" },
  symbolIntro: { pt: "A letra Ø não é apenas uma escolha estética, é uma declaração simbólica, esta vogal cortada carrega múltiplas camadas de significado que se entrelaçam na construção conceitual do projeto.", en: "The letter Ø is not just an aesthetic choice, it is a symbolic declaration, this slashed vowel carries multiple layers of meaning that intertwine in the project's conceptual construction." },
  linguisticOriginTitle: { pt: "ORIGEM LINGUÍSTICA", en: "LINGUISTIC ORIGIN" },
  linguisticOriginDesc: { pt: "A letra Ø maiúscula e ø minúscula é uma vogal usada no dinamarquês, norueguês e feroês, derivada do alfabeto rúnico nórdico antigo, representa passagem, interseção, ruptura, perfeita para a ideia de vazio consciente ou identidade negada.", en: "The letter Ø uppercase and ø lowercase is a vowel used in Danish, Norwegian and Faroese, derived from the Old Norse runic alphabet, it represents passage, intersection, rupture, perfect for the idea of conscious void or negated identity." },
  mathPhilosophyTitle: { pt: "MATEMÁTICA & FILOSOFIA", en: "MATHEMATICS & PHILOSOPHY" },
  mathPhilosophyDesc: { pt: "O símbolo ∅ representa o conjunto vazio na matemática, ausência de elementos, o nada estruturado, simbolicamente tornou-se sinônimo de negação do conteúdo, o espaço potencial onde tudo pode emergir, a base do zero existencial.", en: "The ∅ symbol represents the empty set in mathematics, absence of elements, structured nothingness, symbolically it became synonymous with the negation of content, the potential space where everything can emerge, the basis of the existential zero." },
  computationTitle: { pt: "COMPUTAÇÃO", en: "COMPUTATION" },
  computationDesc: { pt: "Na era dos mainframes o zero cortado diferenciava a letra O do número zero, tornou-se símbolo de precisão, linguagem de máquina e leitura binária, muito usado em design hacker e cultura digital, representa a leitura correta da ausência, o vazio interpretado pela máquina tornando o vazio compreensível ao sistema digital.", en: "In the mainframe era the slashed zero differentiated the letter O from the number zero, it became a symbol of precision, machine language and binary reading, widely used in hacker design and digital culture, it represents the correct reading of absence, the void interpreted by the machine making emptiness comprehensible to the digital system." },
  prototypeDesc1: { pt: "Esta visualização representa o modelo imaginado para o action figure do personagem e define o mood visual das filmagens que serão realizadas pelo autor do projeto. A estética, iluminação e atmosfera foram desenvolvidas para traduzir o universo conceitual de THEVØIDN13.", en: "This visualization represents the envisioned model for the character's action figure and defines the visual mood for filming to be carried out by the project's author. The aesthetics, lighting, and atmosphere were developed to translate the conceptual universe of THEVØIDN13." },
  prototypeDesc2: { pt: "O protótipo funciona como materialização física da persona THEVØIDN13 — uma presença que habita o limiar entre o visível e o invisível, entre a carne e o código. A máscara branca, o capuz negro e a jaqueta de couro não são apenas elementos estéticos, mas símbolos de uma identidade que recusa a exposição total.", en: "The prototype functions as a physical materialization of the THEVØIDN13 persona — a presence that inhabits the threshold between visible and invisible, between flesh and code. The white mask, black hood, and leather jacket are not merely aesthetic elements, but symbols of an identity that refuses total exposure." },
  prototypeDesc3: { pt: "Esta figura será utilizada em futuras produções audiovisuais como referência de iluminação, composição e atmosfera. O protótipo é tanto documento quanto performance — um objeto que existe simultaneamente como conceito artístico e ferramenta técnica de produção.", en: "This figure will be used in future audiovisual productions as a reference for lighting, composition, and atmosphere. The prototype is both document and performance — an object that exists simultaneously as artistic concept and technical production tool." },
  connectionPunkRock: { pt: "Democratização da música: três acordes e a verdade. Resistência ao virtuosismo elitista, acesso radical à expressão.", en: "Music democratization: three chords and the truth. Resistance to elitist virtuosity, radical access to expression." },
  connectionVibeCoding: { pt: "Democratização do código: prompts e intuição. Resistência ao elitismo técnico, acesso radical ao desenvolvimento.", en: "Code democratization: prompts and intuition. Resistance to technical elitism, radical access to development." },
  connectionCinemaPunk: { pt: "Estética da precariedade: Kids, Fallen Angels, The Warriors. Beleza no imperfeito, verdade no marginal.", en: "Aesthetics of precariousness: Kids, Fallen Angels, The Warriors. Beauty in imperfection, truth in the marginal." },
  connectionTaoCoding: { pt: "Wu Wei criativo: fluxo natural, não-ação proposital. Da filosofia ancestral ao desenvolvimento contemporâneo.", en: "Creative Wu Wei: natural flow, purposeful non-action. From ancestral philosophy to contemporary development." },
  instantTransformDesc: { pt: "Você descreve a intenção, a IA traduz em código", en: "You describe the intention, AI translates to code" },
  artisticMemorial: { pt: "Memorial Artístico e Práxis Híbrida", en: "Artistic Memorial and Hybrid Praxis" },
  hybridPraxis: { pt: "Práxis Híbrida", en: "Hybrid Praxis" },
  comicsDNAButton: { pt: "DNA Conceitual dos Quadrinhos", en: "Conceptual DNA (Comics)" },
  comicsDNATitle: { pt: "DNA Conceitual dos Quadrinhos", en: "Conceptual DNA (Comics)" },
  comicsDNAIntro: { pt: "Três obras que estruturam a arquitetura narrativa e visual do projeto:", en: "Three works that structure the narrative and visual architecture of the project:" },
  comicsTriadNote: { pt: "Estes três quadrinhos formam a tríade conceitual que estrutura o universo narrativo do THEVØIDN13. Cada um contribui com camadas distintas: Watchmen com a ética, The Sandman com a mitologia, e Black Hole com a metamorfose corporal e o isolamento.", en: "These three comics form the conceptual triad that structures the narrative universe of THEVØIDN13. Each contributes distinct layers: Watchmen with ethics, The Sandman with mythology, and Black Hole with bodily metamorphosis and isolation." },
  // FilmGallery
  filmReferencesButton: { pt: "Sobre as Referências Cinematográficas", en: "About Cinematographic References" },
  filmReferencesTitle: { pt: "Sobre as Referências Cinematográficas", en: "About Cinematographic References" },
  filmRefPara1: { pt: "O visual do THEVØIDN13 é uma fusão do realismo sujo e da deriva poética encontrados em filmes como Kids e Christiane F., com o neo noir e a solidão coreografada de Blade Runner e Fallen Angels.", en: "The visual of THEVØIDN13 is a fusion of the dirty realism and poetic drift found in films like Kids and Christiane F., with the neo noir and choreographed solitude of Blade Runner and Fallen Angels." },
  filmRefPara2: { pt: "A atmosfera bebe da despersonalização de THX 1138, do controle sintético de The Matrix, da energia reprimida de Akira, e da temporalidade de Back to the Future.", en: "The atmosphere draws from the depersonalization of THX 1138, the synthetic control of The Matrix, the repressed energy of Akira, and the temporality of Back to the Future." },
  filmRefPara3: { pt: "Esta curadoria conecta-se diretamente com os princípios de Vibe Coding: a seleção intuitiva de referências que informam visão criativa, não execução técnica. Como Rick Rubin articula em The Way of Code, o desenvolvedor atua como curador de influências—assim como um diretor de cinema compõe atmosfera através de referências visuais.", en: "This curation connects directly with the principles of Vibe Coding: the intuitive selection of references that inform creative vision, not technical execution. As Rick Rubin articulates in The Way of Code, the developer acts as a curator of influences—just as a film director composes atmosphere through visual references." },
  filmRefPara4: { pt: "Cada filme contribuiu com uma camada visual, estética ou conceitual que moldou a linguagem do projeto — desde a textura granulada até os movimentos de câmera e a paleta de cores. Três acordes e a verdade.", en: "Each film contributed a visual, aesthetic, or conceptual layer that shaped the language of the project—from the grainy texture to the camera movements and color palette. Three chords and the truth." },
  // VibeCodingPlayground
  writePromptHint: { pt: "// Escreva um prompt e clique em 'Gerar Código'", en: "// Write a prompt and click 'Generate Code'" },
  generated: { pt: "✓ Gerado", en: "✓ Generated" },
  vibeCodingInAction: { pt: "Vibe Coding em ação: Você descreve a intenção, a IA traduz em código. Não é sobre saber sintaxe—é sobre ter visão criativa. Três prompts e a verdade.", en: "Vibe Coding in action: You describe the intention, AI translates into code. It's not about knowing syntax—it's about having creative vision. Three prompts and the truth." },
  
  // AccessGate translations
  loginTab: { pt: "Entrar", en: "Login" },
  signupTab: { pt: "Cadastrar", en: "Sign Up" },
  emailLabel: { pt: "Email", en: "Email" },
  emailPlaceholder: { pt: "seu@email.com", en: "your@email.com" },
  passwordLabel: { pt: "Senha", en: "Password" },
  passwordPlaceholder: { pt: "mínimo 6 caracteres", en: "min 6 chars" },
  fullNameLabel: { pt: "Nome Completo", en: "Full Name" },
  fullNamePlaceholder: { pt: "seu nome", en: "your name" },
  loginButton: { pt: "ENTRAR", en: "LOGIN" },
  loggingIn: { pt: "Entrando...", en: "Logging in..." },
  signupButton: { pt: "CADASTRAR", en: "SIGN UP" },
  creatingAccount: { pt: "Criando conta...", en: "Creating account..." },
  invalidEmailPassword: { pt: "Email ou senha incorretos", en: "Incorrect email or password" },
  welcomeBack: { pt: "Bem-vindo de volta ao vazio", en: "Welcome back to the void" },
  loginError: { pt: "Erro ao fazer login", en: "Login error" },
  invalidSubmission: { pt: "Submissão inválida", en: "Invalid submission" },
  emailAlreadyRegistered: { pt: "Email já cadastrado. Use a aba 'Entrar'", en: "Email already registered. Use 'Login' tab" },
  accountCreated: { pt: "Conta criada! Bem-vindo ao vazio", en: "Account created! Welcome to the void" },
  alreadySubscribed: { pt: "Você já estava inscrito na newsletter", en: "You were already subscribed to the newsletter" },
  newsletterError: { pt: "Erro ao inscrever na newsletter, mas sua conta foi criada", en: "Newsletter subscription failed, but your account was created" },
  newsletterSubscribed: { pt: "Você foi inscrito na newsletter", en: "You've been subscribed to the newsletter" },
  signupError: { pt: "Erro ao criar conta", en: "Signup error" },
  passwordMinChars: { pt: "mínimo 6 caracteres", en: "min 6 chars" },
  
  // ComicGenerator translations
  errorLoadingPrompts: { pt: "Erro ao carregar prompts", en: "Error loading prompts" },
  systemPromptNotLoaded: { pt: "System prompt não carregado", en: "System prompt not loaded" },
  stillGenerated: { pt: "Still gerado!", en: "Still generated!" },
  rateLimitExceeded: { pt: "Limite de requisições excedido. Tente novamente em alguns segundos.", en: "Rate limit exceeded. Try again in a few seconds." },
  insufficientCredits: { pt: "Créditos insuficientes. Adicione créditos ao workspace.", en: "Insufficient credits. Add credits to workspace." },
  errorGeneratingStill: { pt: "Erro ao gerar still", en: "Error generating still" },
  promptLoaded: { pt: "Prompt carregado", en: "Prompt loaded" },
  
  // CookieConsent translations
  cookiePolicyTitle: { pt: "POLÍTICA DE COOKIES", en: "COOKIE POLICY" },
  cookiePolicyDescription: { pt: "Este site utiliza cookies essenciais para garantir funcionalidade básica e armazenamento local para melhorar sua experiência de navegação. Não coletamos dados pessoais além do necessário para o cadastro, respeitando sua privacidade e segurança em cada etapa do processo.", en: "This site uses essential cookies to ensure basic functionality and local storage to improve your browsing experience. We do not collect personal data beyond what is necessary for registration, respecting your privacy and security at every step of the process." },
  acceptButton: { pt: "Aceitar", en: "Accept" },
  declineButton: { pt: "Recusar", en: "Decline" },
  privacyPolicyButton: { pt: "Política de Privacidade", en: "Privacy Policy" }
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  return { t, language };
};
