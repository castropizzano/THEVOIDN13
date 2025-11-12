import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  description?: string;
}

export const PDFViewer = ({ pdfUrl, title, description }: PDFViewerProps) => {
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  // Check if PDF exists
  const checkPdfExists = async () => {
    if (pdfExists !== null) return pdfExists;
    
    try {
      const response = await fetch(pdfUrl, { method: 'HEAD' });
      const exists = response.ok;
      setPdfExists(exists);
      return exists;
    } catch {
      setPdfExists(false);
      return false;
    }
  };

  // Trigger check on mount
  useState(() => {
    checkPdfExists();
  });

  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  if (pdfExists === false) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
        <h4 className="bible-body font-bold mb-2 text-destructive">{title}</h4>
        {description && <p className="bible-caption text-muted-foreground mb-4">{description}</p>}
        <p className="bible-caption text-destructive mb-4">
          Arquivo não disponível no momento / File not available at the moment
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleOpenNewTab}
          className="gap-2"
          disabled
        >
          <ExternalLink className="h-4 w-4" />
          Abrir em Nova Aba / Open in New Tab
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-4 border-b border-border">
          <h4 className="bible-body font-bold mb-1">{title}</h4>
          {description && <p className="bible-caption text-muted-foreground">{description}</p>}
        </div>
        
        {/* PDF Embed Preview - Full page height */}
        <div className="relative bg-muted" style={{ height: '1056px' }}>
          <object
            data={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
            aria-label={title}
          >
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div>
                <p className="bible-body mb-4">
                  Preview não disponível neste navegador
                  <br />
                  Preview not available in this browser
                </p>
                <Button 
                  variant="outline" 
                  onClick={handleOpenNewTab}
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Abrir PDF / Open PDF
                </Button>
              </div>
            </div>
          </object>
        </div>

        {/* Actions */}
        <div className="p-4 flex justify-center border-t border-border">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleOpenNewTab}
            className="gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir em Nova Aba / Open in New Tab
          </Button>
        </div>
      </div>
    </>
  );
};
