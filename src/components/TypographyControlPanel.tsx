import { useState } from 'react';
import { ChevronDown, ChevronUp, Download, Upload, RotateCcw, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useTypographyControl, TypographySettings } from '@/hooks/useTypographyControl';

export const TypographyControlPanel = () => {
  const {
    settings,
    updateSetting,
    resetToDefaults,
    exportSettings,
    importSettings,
    isVisible,
    setIsVisible,
  } = useTypographyControl();

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'title' | 'subtitle' | 'body' | 'caption' | 'spacing'>('title');

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed top-4 right-4 z-[9999] bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-2 rounded-md shadow-lg hover:bg-primary transition-all text-xs font-medium flex items-center gap-2"
        aria-label="Show typography controls"
      >
        <Eye className="w-4 h-4" />
        TYPOGRAPHY
      </button>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-[9999] max-w-sm">
      <Card className="bg-black/95 backdrop-blur-sm border-primary/50 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-primary/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              🎨 Typography Control
            </span>
            <span className="text-[10px] text-muted-foreground">(Editor Only)</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label={isExpanded ? 'Collapse panel' : 'Expand panel'}
            >
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => setIsVisible(false)}
              aria-label="Hide panel"
            >
              <EyeOff className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {isExpanded && (
          <div className="p-3 space-y-3">
            {/* Tab Navigation */}
            <div className="flex gap-1 overflow-x-auto pb-2">
              {(['title', 'subtitle', 'body', 'caption', 'spacing'] as const).map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                  className="text-xs capitalize whitespace-nowrap"
                >
                  {tab}
                </Button>
              ))}
            </div>

            <Separator className="bg-primary/20" />

            {/* Controls */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {activeTab === 'title' && (
                <ControlGroup
                  title="Title Settings"
                  settings={settings}
                  updateSetting={updateSetting}
                  controls={[
                    { key: 'titleFontSize', label: 'Font Size', min: 12, max: 48, step: 0.5, unit: 'px' },
                    { key: 'titleFontWeight', label: 'Font Weight', min: 100, max: 900, step: 100 },
                    { key: 'titleLineHeight', label: 'Line Height', min: 1, max: 2, step: 0.1 },
                    { key: 'titleLetterSpacing', label: 'Letter Spacing', min: -2, max: 4, step: 0.1, unit: 'px' },
                    { key: 'titleMarginTop', label: 'Margin Top', min: 0, max: 80, step: 4, unit: 'px' },
                    { key: 'titleMarginBottom', label: 'Margin Bottom', min: 0, max: 60, step: 4, unit: 'px' },
                  ]}
                />
              )}

              {activeTab === 'subtitle' && (
                <ControlGroup
                  title="Subtitle Settings"
                  settings={settings}
                  updateSetting={updateSetting}
                  controls={[
                    { key: 'subtitleFontSize', label: 'Font Size', min: 12, max: 36, step: 0.5, unit: 'px' },
                    { key: 'subtitleFontWeight', label: 'Font Weight', min: 100, max: 900, step: 100 },
                    { key: 'subtitleLineHeight', label: 'Line Height', min: 1, max: 2, step: 0.1 },
                    { key: 'subtitleLetterSpacing', label: 'Letter Spacing', min: -2, max: 4, step: 0.1, unit: 'px' },
                    { key: 'subtitleMarginTop', label: 'Margin Top', min: 0, max: 60, step: 4, unit: 'px' },
                    { key: 'subtitleMarginBottom', label: 'Margin Bottom', min: 0, max: 40, step: 4, unit: 'px' },
                  ]}
                />
              )}

              {activeTab === 'body' && (
                <ControlGroup
                  title="Body Text Settings"
                  settings={settings}
                  updateSetting={updateSetting}
                  controls={[
                    { key: 'bodyFontSize', label: 'Font Size', min: 12, max: 24, step: 0.5, unit: 'px' },
                    { key: 'bodyFontWeight', label: 'Font Weight', min: 100, max: 900, step: 100 },
                    { key: 'bodyLineHeight', label: 'Line Height', min: 1.2, max: 2.4, step: 0.1 },
                    { key: 'bodyLetterSpacing', label: 'Letter Spacing', min: -1, max: 3, step: 0.1, unit: 'px' },
                    { key: 'bodyMarginBottom', label: 'Margin Bottom', min: 0, max: 40, step: 4, unit: 'px' },
                  ]}
                />
              )}

              {activeTab === 'caption' && (
                <ControlGroup
                  title="Caption/Link Settings"
                  settings={settings}
                  updateSetting={updateSetting}
                  controls={[
                    { key: 'captionFontSize', label: 'Font Size', min: 10, max: 20, step: 0.5, unit: 'px' },
                    { key: 'captionFontWeight', label: 'Font Weight', min: 100, max: 900, step: 100 },
                    { key: 'captionLineHeight', label: 'Line Height', min: 1, max: 2, step: 0.1 },
                    { key: 'captionLetterSpacing', label: 'Letter Spacing', min: -1, max: 3, step: 0.1, unit: 'px' },
                  ]}
                />
              )}

              {activeTab === 'spacing' && (
                <ControlGroup
                  title="Global Spacing"
                  settings={settings}
                  updateSetting={updateSetting}
                  controls={[
                    { key: 'sectionSpacing', label: 'Section Spacing', min: 0, max: 80, step: 4, unit: 'px' },
                    { key: 'blockSpacing', label: 'Block Spacing', min: 0, max: 100, step: 4, unit: 'px' },
                  ]}
                />
              )}
            </div>

            <Separator className="bg-primary/20" />

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={resetToDefaults}
                className="flex-1 text-xs"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const json = exportSettings();
                  navigator.clipboard.writeText(json);
                  alert('Settings copied to clipboard!');
                }}
                className="flex-1 text-xs"
              >
                <Download className="w-3 h-3 mr-1" />
                Export
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const json = prompt('Paste settings JSON:');
                  if (json) importSettings(json);
                }}
                className="flex-1 text-xs"
              >
                <Upload className="w-3 h-3 mr-1" />
                Import
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

interface Control {
  key: keyof TypographySettings;
  label: string;
  min: number;
  max: number;
  step: number;
  unit?: string;
}

interface ControlGroupProps {
  title: string;
  settings: TypographySettings;
  updateSetting: <K extends keyof TypographySettings>(key: K, value: TypographySettings[K]) => void;
  controls: Control[];
}

const ControlGroup = ({ title, settings, updateSetting, controls }: ControlGroupProps) => {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold text-primary uppercase tracking-wider">{title}</h4>
      {controls.map((control) => (
        <div key={control.key} className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs text-muted-foreground">{control.label}</label>
            <span className="text-xs font-mono text-foreground">
              {settings[control.key]}
              {control.unit || ''}
            </span>
          </div>
          <Slider
            value={[settings[control.key] as number]}
            onValueChange={([value]) => updateSetting(control.key, value as any)}
            min={control.min}
            max={control.max}
            step={control.step}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};
