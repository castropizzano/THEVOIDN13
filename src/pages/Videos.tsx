import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import { BilingualSection, BilingualContent } from "@/components/BilingualSection";
import { BackToTop } from "@/components/BackToTop";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const Videos = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://thevoidn13.com/" },
    { name: "Portfolio de Vídeos", url: "https://thevoidn13.com/videos" }
  ]);

  const videoCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGallery",
    "name": "Portfolio Audiovisual — Castro Pizzano",
    "description": "Catálogo completo de trabalhos audiovisuais: curtas-metragens, videoperformance, documentários e comerciais",
    "author": {
      "@type": "Person",
      "name": "Castro Pizzano"
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [videoCollectionSchema, breadcrumbs]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Portfolio de Vídeos — Castro Pizzano | THEVØIDN13"
        description="Catálogo completo de trabalhos audiovisuais: curtas-metragens, videoperformance, documentários e comerciais"
        schemaData={schemaData}
      />
      <Header />
      <BackToTop />

      <main className="container mx-auto px-4 py-20">
        <BilingualSection>
          <BilingualContent
            portugueseContent={
              <div className="space-y-6">
                <h1 className="section-title text-center">PORTFOLIO DE VÍDEOS</h1>
                <div className="max-w-3xl mx-auto">
                  <Alert variant="default" className="border-primary/30">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="bible-body">
                      <strong>Recurso Desabilitado:</strong> A galeria de vídeos foi desabilitada nesta versão estática do memorial. 
                      Esta seção anteriormente carregava dinamicamente o portfolio audiovisual completo do Vimeo, mas requer backend para funcionar.
                      <br /><br />
                      Para visualizar os trabalhos audiovisuais, visite:
                      <br />
                      <a 
                        href="https://vimeo.com/castropizzano" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        vimeo.com/castropizzano
                      </a>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            }
            englishContent={
              <div className="space-y-6">
                <h1 className="section-title text-center">VIDEO PORTFOLIO</h1>
                <div className="max-w-3xl mx-auto">
                  <Alert variant="default" className="border-primary/30">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="bible-body">
                      <strong>Feature Disabled:</strong> The video gallery has been disabled in this static version of the memorial. 
                      This section previously dynamically loaded the complete audiovisual portfolio from Vimeo, but requires a backend to function.
                      <br /><br />
                      To view the audiovisual works, visit:
                      <br />
                      <a 
                        href="https://vimeo.com/castropizzano" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-semibold"
                      >
                        vimeo.com/castropizzano
                      </a>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            }
          />
        </BilingualSection>
      </main>

      <Footer />
    </div>
  );
};

export default Videos;
