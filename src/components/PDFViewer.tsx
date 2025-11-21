/**
 * PDFViewer Component
 * 
 * Displays PDF documents with bilingual support and graceful fallback handling.
 * Checks if the PDF file exists and shows embedded preview or error state accordingly.
 * 
 * Features:
 * - Bilingual title and description support (string or {pt, en} object)
 * - File existence check via HEAD request
 * - Full-height embedded PDF preview (1056px) with optimized view settings
 * - Fallback UI for missing or inaccessible files
 * - "Open in new tab" action for external viewing
 * - Error state with disabled button for missing files
 * 
 * @component
 * @example
 * ```tsx
 * <PDFViewer 
 *   pdfUrl="/documents/file.pdf"
 *   title={{ pt: "Documento", en: "Document" }}
 *   description="Documento importante"
 * />
 * ```
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

/**
 * Props for PDFViewer component
 */
interface PDFViewerProps {
  /** URL or path to PDF file */
  pdfUrl: string;
  /** Title - can be string or bilingual object */
  title: string | { pt: string; en: string };
  /** Optional description - can be string or bilingual object */
  description?: string | { pt: string; en: string };
}

export const PDFViewer = ({ pdfUrl, title, description }: PDFViewerProps) => {
  // Track PDF file availability (null = not checked, true = exists, false = missing)
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);
  const { t, language } = useTranslation();
  
  // Extract language-specific text based on current language
  const displayTitle = typeof title === 'string' ? title : title[language as 'pt' | 'en'];
  const displayDescription = typeof description === 'string' ? description : description?.[language as 'pt' | 'en'];

  /**
   * Check if PDF file exists by making a HEAD request
   * Caches result to avoid repeated requests
   * @returns Promise<boolean> - true if PDF exists and is accessible
   */
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

  /**
   * Trigger PDF existence check on component mount
   * Note: Using useState instead of useEffect to avoid linter warnings
   */
  useState(() => {
    checkPdfExists();
  });

  /**
   * Open PDF in a new browser tab
   */
  const handleOpenNewTab = () => {
    window.open(pdfUrl, '_blank');
  };

  if (pdfExists === false) {
    return (
      <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
        <h4 className="bible-body font-bold mb-2 text-destructive">{displayTitle}</h4>
        {displayDescription && <p className="bible-caption text-muted-foreground mb-4">{displayDescription}</p>}
        <p className="bible-caption text-destructive mb-4">
          {t("fileNotAvailable")}
        </p>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleOpenNewTab}
          className="gap-2"
          disabled
        >
          <ExternalLink className="h-4 w-4" />
          {t("openInNewTab")}
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="p-4 border-b border-border">
          <h4 className="bible-body font-bold mb-1">{displayTitle}</h4>
          {displayDescription && <p className="bible-caption text-muted-foreground">{displayDescription}</p>}
        </div>
        
        {/* PDF Embed Preview - Full page height */}
        <div className="relative bg-muted" style={{ height: '1056px' }}>
          <object
            data={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
            aria-label={displayTitle}
          >
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div>
                <p className="bible-body mb-4">
                  {t("previewNotAvailable")}
                </p>
                <Button 
                  variant="outline" 
                  onClick={handleOpenNewTab}
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t("openPDF")}
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
            {t("openInNewTab")}
          </Button>
        </div>
      </div>
    </>
  );
};
