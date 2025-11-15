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
  | "references"
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
  | "bestCode";

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
  creativeOpsMindMap: { pt: "CREATIVE-OPS MIND MAP", en: "CREATIVE-OPS MIND MAP" },
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
  mainDoc: { pt: "Doc. Principais", en: "Main Doc." },
  technicalDoc: { pt: "Doc. Técnica", en: "Technical Doc." },
  readmeDesc: { pt: "Manifesto e estrutura do projeto", en: "Manifesto and project structure" },
  licenseDesc: { pt: "Licença CC BY-NC-SA 4.0", en: "CC BY-NC-SA 4.0 License" },
  citationDesc: { pt: "Citação automatizada GitHub", en: "GitHub automated citation" },
  methodologyDesc: { pt: "Métodos e procedimentos de pesquisa", en: "Research methods and procedures" },
  philosophyDesc: { pt: "Justificativa das escolhas conceituais", en: "Rationale for conceptual choices" },
  copyrightDesc: { pt: "Ética e transparência da co-criação", en: "Ethics and transparency of co-creation" },
  howToCiteDesc: { pt: "Guia completo de citação acadêmica", en: "Complete academic citation guide" },
  referencesDesc: { pt: "Bibliografia completa do projeto", en: "Complete project bibliography" },
  completeRepository: { pt: "REPOSITÓRIO COMPLETO", en: "COMPLETE REPOSITORY" },
  accessAllFiles: { pt: "Acesso a todos os arquivos no GitHub", en: "Access all files on GitHub" },
  accessOracle: { pt: "ACESSAR ORÁCULO", en: "ACCESS ORACLE" },
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
  references: { pt: "REFERÊNCIAS", en: "REFERENCES" },
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
  promptLibraryTitle: { pt: "BIBLIOTECA DE PROMPTS", en: "PROMPT LIBRARY" },
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
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  return { t, language };
};
