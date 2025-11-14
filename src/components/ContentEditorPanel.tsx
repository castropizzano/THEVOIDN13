import { useState, useMemo } from 'react';
import { X, Search, FileDown, FileUp, RotateCcw, Eye, EyeOff, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useContentEditor } from '@/hooks/useContentEditor';
import { Badge } from '@/components/ui/badge';

export const ContentEditorPanel = () => {
  const {
    fields,
    isEditorOpen,
    setEditorOpen,
    updateField,
    resetAllFields,
    exportContent,
    importContent,
  } = useContentEditor();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  // Group fields by page
  const fieldsByPage = useMemo(() => {
    const grouped: Record<string, typeof fields> = {};
    Object.values(fields).forEach(field => {
      if (!grouped[field.page]) {
        grouped[field.page] = {};
      }
      grouped[field.page][field.id] = field;
    });
    return grouped;
  }, [fields]);

  // Filter fields
  const filteredFields = useMemo(() => {
    const fieldsToShow = selectedPage ? fieldsByPage[selectedPage] : fields;
    if (!searchTerm) return fieldsToShow;

    return Object.values(fieldsToShow).reduce((acc, field) => {
      if (
        field.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
        field.value.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        acc[field.id] = field;
      }
      return acc;
    }, {} as typeof fields);
  }, [fields, fieldsByPage, selectedPage, searchTerm]);

  if (!isEditorOpen) {
    return (
      <button
        onClick={() => setEditorOpen(true)}
        className="fixed top-20 right-4 z-[9998] bg-accent/90 backdrop-blur-sm text-accent-foreground px-3 py-2 rounded-md shadow-lg hover:bg-accent transition-all text-xs font-medium flex items-center gap-2"
        aria-label="Open content editor"
      >
        <Eye className="w-4 h-4" />
        CONTENT
      </button>
    );
  }

  return (
    <div className="fixed top-4 right-4 bottom-4 w-96 z-[9998] flex flex-col">
      <Card className="flex-1 flex flex-col bg-black/95 backdrop-blur-sm border-accent/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-accent/30">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-accent uppercase tracking-wider">
              📝 Content Editor
            </span>
            <Badge variant="secondary" className="text-[10px]">
              {Object.keys(fields).length} fields
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setEditorOpen(false)}
            aria-label="Close panel"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Page Filter */}
        <div className="p-3 border-b border-accent/30">
          <div className="flex gap-1 overflow-x-auto pb-2">
            <Button
              variant={selectedPage === null ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSelectedPage(null)}
              className="text-xs whitespace-nowrap"
            >
              All Pages
            </Button>
            {Object.keys(fieldsByPage).map((page) => (
              <Button
                key={page}
                variant={selectedPage === page ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setSelectedPage(page)}
                className="text-xs whitespace-nowrap"
              >
                {page}
                <Badge variant="secondary" className="ml-1 text-[10px]">
                  {Object.keys(fieldsByPage[page]).length}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-accent/30">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search fields..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 h-8 text-xs"
            />
          </div>
        </div>

        {/* Fields List */}
        <ScrollArea className="flex-1">
          <div className="p-3 space-y-3">
            {Object.keys(filteredFields).length === 0 ? (
              <div className="text-center py-8 text-muted-foreground text-sm">
                {searchTerm ? 'No fields match your search' : 'No fields registered yet'}
              </div>
            ) : (
              Object.values(filteredFields).map((field) => (
                <div key={field.id} className="space-y-2 p-3 bg-card/50 rounded-md border border-border/50">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <label className="text-xs font-medium text-foreground block mb-1">
                        {field.label}
                      </label>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span>{field.page}</span>
                        {field.section && (
                          <>
                            <ChevronRight className="w-3 h-3" />
                            <span>{field.section}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      {field.type}
                    </Badge>
                  </div>

                  {field.type === 'textarea' ? (
                    <Textarea
                      value={field.value}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      className="min-h-[80px] text-xs"
                      placeholder={`Edit ${field.label}...`}
                    />
                  ) : (
                    <Input
                      value={field.value}
                      onChange={(e) => updateField(field.id, e.target.value)}
                      className="h-8 text-xs"
                      placeholder={`Edit ${field.label}...`}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        <Separator className="bg-accent/20" />

        {/* Actions */}
        <div className="p-3 space-y-2">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (confirm('Reset all content to defaults?')) {
                  resetAllFields();
                }
              }}
              className="flex-1 text-xs"
            >
              <RotateCcw className="w-3 h-3 mr-1" />
              Reset All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const json = exportContent();
                navigator.clipboard.writeText(json);
                alert('Content copied to clipboard!');
              }}
              className="flex-1 text-xs"
            >
              <FileDown className="w-3 h-3 mr-1" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const json = prompt('Paste content JSON:');
                if (json) importContent(json);
              }}
              className="flex-1 text-xs"
            >
              <FileUp className="w-3 h-3 mr-1" />
              Import
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
