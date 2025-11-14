import { useState, useEffect } from 'react';

export interface TypographySettings {
  // Title settings
  titleFontSize: number;
  titleFontWeight: number;
  titleLineHeight: number;
  titleLetterSpacing: number;
  titleMarginTop: number;
  titleMarginBottom: number;
  
  // Subtitle settings
  subtitleFontSize: number;
  subtitleFontWeight: number;
  subtitleLineHeight: number;
  subtitleLetterSpacing: number;
  subtitleMarginTop: number;
  subtitleMarginBottom: number;
  
  // Body settings
  bodyFontSize: number;
  bodyFontWeight: number;
  bodyLineHeight: number;
  bodyLetterSpacing: number;
  bodyMarginBottom: number;
  
  // Caption/Link settings
  captionFontSize: number;
  captionFontWeight: number;
  captionLineHeight: number;
  captionLetterSpacing: number;
  
  // Global spacing
  sectionSpacing: number;
  blockSpacing: number;
}

const DEFAULT_SETTINGS: TypographySettings = {
  // Title (bible-title)
  titleFontSize: 21.33,
  titleFontWeight: 700,
  titleLineHeight: 1.2,
  titleLetterSpacing: 0,
  titleMarginTop: 48,
  titleMarginBottom: 20,
  
  // Subtitle (bible-subtitle)
  subtitleFontSize: 20,
  subtitleFontWeight: 600,
  subtitleLineHeight: 1.3,
  subtitleLetterSpacing: 0,
  subtitleMarginTop: 32,
  subtitleMarginBottom: 16,
  
  // Body (bible-body)
  bodyFontSize: 17.33,
  bodyFontWeight: 400,
  bodyLineHeight: 1.6,
  bodyLetterSpacing: 0,
  bodyMarginBottom: 20,
  
  // Caption (bible-link, bible-lang-tag)
  captionFontSize: 14.67,
  captionFontWeight: 400,
  captionLineHeight: 1.4,
  captionLetterSpacing: 0,
  
  // Global spacing
  sectionSpacing: 32,
  blockSpacing: 48,
};

export const useTypographyControl = () => {
  const [settings, setSettings] = useState<TypographySettings>(DEFAULT_SETTINGS);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Apply CSS variables to document root
    const root = document.documentElement;
    
    // Title variables
    root.style.setProperty('--tvn-title-font-size', `${settings.titleFontSize}px`);
    root.style.setProperty('--tvn-title-font-weight', `${settings.titleFontWeight}`);
    root.style.setProperty('--tvn-title-line-height', `${settings.titleLineHeight}`);
    root.style.setProperty('--tvn-title-letter-spacing', `${settings.titleLetterSpacing}px`);
    root.style.setProperty('--tvn-title-margin-top', `${settings.titleMarginTop}px`);
    root.style.setProperty('--tvn-title-margin-bottom', `${settings.titleMarginBottom}px`);
    
    // Subtitle variables
    root.style.setProperty('--tvn-subtitle-font-size', `${settings.subtitleFontSize}px`);
    root.style.setProperty('--tvn-subtitle-font-weight', `${settings.subtitleFontWeight}`);
    root.style.setProperty('--tvn-subtitle-line-height', `${settings.subtitleLineHeight}`);
    root.style.setProperty('--tvn-subtitle-letter-spacing', `${settings.subtitleLetterSpacing}px`);
    root.style.setProperty('--tvn-subtitle-margin-top', `${settings.subtitleMarginTop}px`);
    root.style.setProperty('--tvn-subtitle-margin-bottom', `${settings.subtitleMarginBottom}px`);
    
    // Body variables
    root.style.setProperty('--tvn-body-font-size', `${settings.bodyFontSize}px`);
    root.style.setProperty('--tvn-body-font-weight', `${settings.bodyFontWeight}`);
    root.style.setProperty('--tvn-body-line-height', `${settings.bodyLineHeight}`);
    root.style.setProperty('--tvn-body-letter-spacing', `${settings.bodyLetterSpacing}px`);
    root.style.setProperty('--tvn-body-margin-bottom', `${settings.bodyMarginBottom}px`);
    
    // Caption variables
    root.style.setProperty('--tvn-caption-font-size', `${settings.captionFontSize}px`);
    root.style.setProperty('--tvn-caption-font-weight', `${settings.captionFontWeight}`);
    root.style.setProperty('--tvn-caption-line-height', `${settings.captionLineHeight}`);
    root.style.setProperty('--tvn-caption-letter-spacing', `${settings.captionLetterSpacing}px`);
    
    // Spacing variables
    root.style.setProperty('--tvn-section-spacing', `${settings.sectionSpacing}px`);
    root.style.setProperty('--tvn-block-spacing', `${settings.blockSpacing}px`);
  }, [settings]);

  const updateSetting = <K extends keyof TypographySettings>(
    key: K,
    value: TypographySettings[K]
  ) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetToDefaults = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  const exportSettings = () => {
    return JSON.stringify(settings, null, 2);
  };

  const importSettings = (json: string) => {
    try {
      const imported = JSON.parse(json);
      setSettings({ ...DEFAULT_SETTINGS, ...imported });
    } catch (e) {
      console.error('Failed to import settings:', e);
    }
  };

  return {
    settings,
    updateSetting,
    resetToDefaults,
    exportSettings,
    importSettings,
    isVisible,
    setIsVisible,
  };
};
