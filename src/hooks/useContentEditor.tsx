import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export interface EditableField {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'heading';
  value: string;
  page: string;
  section?: string;
}

interface ContentEditorContextType {
  fields: Record<string, EditableField>;
  isEditorOpen: boolean;
  setEditorOpen: (open: boolean) => void;
  updateField: (id: string, value: string) => void;
  registerField: (field: EditableField) => void;
  getFieldValue: (id: string, defaultValue: string) => string;
  resetAllFields: () => void;
  exportContent: () => string;
  importContent: (json: string) => void;
}

const ContentEditorContext = createContext<ContentEditorContextType | undefined>(undefined);

export const ContentEditorProvider = ({ children }: { children: ReactNode }) => {
  const [fields, setFields] = useState<Record<string, EditableField>>({});
  const [isEditorOpen, setEditorOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('tvn-content-editor');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFields(parsed);
      } catch (e) {
        console.error('Failed to load saved content:', e);
      }
    }
  }, []);

  // Save to localStorage when fields change
  useEffect(() => {
    if (Object.keys(fields).length > 0) {
      localStorage.setItem('tvn-content-editor', JSON.stringify(fields));
    }
  }, [fields]);

  const registerField = (field: EditableField) => {
    setFields(prev => {
      // Only register if not already present
      if (prev[field.id]) {
        return prev;
      }
      return { ...prev, [field.id]: field };
    });
  };

  const updateField = (id: string, value: string) => {
    setFields(prev => ({
      ...prev,
      [id]: { ...prev[id], value }
    }));
  };

  const getFieldValue = (id: string, defaultValue: string): string => {
    return fields[id]?.value ?? defaultValue;
  };

  const resetAllFields = () => {
    setFields({});
    localStorage.removeItem('tvn-content-editor');
  };

  const exportContent = () => {
    return JSON.stringify(fields, null, 2);
  };

  const importContent = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      setFields(parsed);
    } catch (e) {
      console.error('Failed to import content:', e);
    }
  };

  return (
    <ContentEditorContext.Provider
      value={{
        fields,
        isEditorOpen,
        setEditorOpen,
        updateField,
        registerField,
        getFieldValue,
        resetAllFields,
        exportContent,
        importContent,
      }}
    >
      {children}
    </ContentEditorContext.Provider>
  );
};

export const useContentEditor = () => {
  const context = useContext(ContentEditorContext);
  if (!context) {
    throw new Error('useContentEditor must be used within ContentEditorProvider');
  }
  return context;
};

// Hook for editable content with auto-registration
export const useEditableContent = (
  id: string,
  defaultValue: string,
  config: {
    label: string;
    type: 'text' | 'textarea' | 'heading';
    page: string;
    section?: string;
  }
) => {
  const { registerField, getFieldValue } = useContentEditor();

  useEffect(() => {
    registerField({
      id,
      label: config.label,
      type: config.type,
      value: defaultValue,
      page: config.page,
      section: config.section,
    });
  }, [id, defaultValue, config.label, config.type, config.page, config.section]);

  return getFieldValue(id, defaultValue);
};
