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
  | "popular";

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
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return translations[key]?.[language] || key;
  };

  return { t, language };
};
