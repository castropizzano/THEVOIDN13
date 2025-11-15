import { useLanguage } from "@/contexts/LanguageContext";

// Bilingual validation messages for Zod schemas
export const validationMessages = {
  emailInvalid: {
    pt: "Email inválido",
    en: "Invalid email"
  },
  emailTooLong: {
    pt: "Email muito longo",
    en: "Email too long"
  },
  passwordMinLength: {
    pt: "Senha deve ter no mínimo 6 caracteres",
    en: "Password must be at least 6 characters"
  },
  nameMinLength: {
    pt: "Nome muito curto (mín. 2 caracteres)",
    en: "Name too short (min 2 chars)"
  },
  nameMaxLength: {
    pt: "Nome muito longo (máx. 100 caracteres)",
    en: "Name too long (max 100 chars)"
  },
  descriptionMinLength: {
    pt: "Descrição muito curta (mín. 50 caracteres)",
    en: "Description too short (min 50 chars)"
  },
  descriptionMaxLength: {
    pt: "Descrição muito longa (máx. 1500 caracteres)",
    en: "Description too long (max 1500 chars)"
  }
} as const;

type ValidationMessageKey = keyof typeof validationMessages;

// Hook to get validation message based on current language
export const useValidationMessage = () => {
  const { language } = useLanguage();
  
  return (key: ValidationMessageKey): string => {
    return validationMessages[key][language];
  };
};

// Helper function to get validation message (for use outside components)
export const getValidationMessage = (key: ValidationMessageKey, language: "pt" | "en"): string => {
  return validationMessages[key][language];
};
