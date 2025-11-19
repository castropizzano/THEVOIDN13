import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language");
      return (saved === "en" ? "en" : "pt") as Language;
    }
    return "pt";
  });

  // Sincronizar atributo data-language no body quando monta e quando muda
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.setAttribute("data-language", language);
    }
  }, []); // Executa na montagem

  useEffect(() => {
    localStorage.setItem("preferred-language", language);
    
    // Atualizar atributo data-language ao body para CSS
    if (typeof document !== "undefined") {
      document.body.setAttribute("data-language", language);
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
