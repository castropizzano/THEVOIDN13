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
  | "conceptualNarration";

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
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  return { t, language };
};
