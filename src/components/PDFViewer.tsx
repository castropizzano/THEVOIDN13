import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  description?: string;
}

export const PDFViewer = ({ pdfUrl, title, description }: PDFViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
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

  const handleDownload = () => {
    window.open(pdfUrl, '_blank');
  };

  const handleFullscreen = () => {
    setIsFullscreen(true);
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
          onClick={handleDownload}
          className="gap-2"
          disabled
        >
          <Download className="h-4 w-4" />
          Download PDF
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
        
        {/* PDF Embed Preview */}
        <div className="relative bg-muted" style={{ height: '400px' }}>
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
                  onClick={handleDownload}
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
        <div className="p-4 flex flex-wrap gap-2 border-t border-border">
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Download
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleFullscreen}
            className="gap-2"
          >
            <Maximize2 className="h-4 w-4" />
            Tela Cheia / Fullscreen
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Abrir em Nova Aba / Open in New Tab
          </Button>
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] h-[95vh] p-0">
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center justify-between">
              <DialogTitle>{title}</DialogTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsFullscreen(false)}
                className="gap-2"
              >
                <Minimize2 className="h-4 w-4" />
                Fechar / Close
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            <object
              data={`${pdfUrl}#view=FitH`}
              type="application/pdf"
              className="w-full h-full"
              aria-label={title}
            >
              <iframe
                src={`${pdfUrl}#view=FitH`}
                className="w-full h-full"
                title={title}
              />
            </object>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
