import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PDFViewer } from "@/components/PDFViewer";
import { FileText, ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import zine02 from "@/assets/zine/zine_02.png";
import zine03 from "@/assets/zine/zine_03.png";
import zine04 from "@/assets/zine/zine_04.png";
import zine05 from "@/assets/zine/zine_05.png";
import zine06 from "@/assets/zine/zine_06.png";
import zine07 from "@/assets/zine/zine_07.png";
import zine08 from "@/assets/zine/zine_08.png";
import zine09 from "@/assets/zine/zine_09.png";
import zine10 from "@/assets/zine/zine_10.png";
import zine11 from "@/assets/zine/zine_11.png";
import zine12 from "@/assets/zine/zine_12.png";
import zine13 from "@/assets/zine/zine_13.png";
import zine14 from "@/assets/zine/zine_14.png";
import zine15 from "@/assets/zine/zine_15.png";
import zine16 from "@/assets/zine/zine_16.png";

interface InterviewCardProps {
  titlePt: string;
  titleEn: string;
  subtitlePt: string;
  subtitleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  youtubeId: string;
  pdfPath: string;
  pdfTitlePt: string;
  pdfTitleEn: string;
}

const InterviewCard = ({
  titlePt,
  titleEn,
  subtitlePt,
  subtitleEn,
  descriptionPt,
  descriptionEn,
  youtubeId,
  pdfPath,
  pdfTitlePt,
  pdfTitleEn,
}: InterviewCardProps) => {
  const [showPDF, setShowPDF] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      <Card className="overflow-hidden border-border/50 shadow-lg shadow-primary/5 animate-fade-in">
        <CardHeader className="space-y-4">
          <div className="bible-bilingual-grid">
            <div>
              <CardTitle className="bible-title">{titlePt}</CardTitle>
              <CardDescription className="bible-subtitle text-primary mt-2">
                {subtitlePt}
              </CardDescription>
            </div>
            <div>
              <CardTitle className="bible-title">{titleEn}</CardTitle>
              <CardDescription className="bible-subtitle text-primary mt-2">
                {subtitleEn}
              </CardDescription>
            </div>
          </div>

          <div className="bible-bilingual-grid bible-section-spacing">
            <p className="bible-body">{descriptionPt}</p>
            <p className="bible-body">{descriptionEn}</p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Video - only show if youtubeId is provided */}
          {youtubeId && (
            <div 
              onClick={() => !videoLoaded && setVideoLoaded(true)}
              className={`relative aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-lg shadow-primary/10 transition-all duration-300 ${!videoLoaded ? 'cursor-pointer hover:border-primary' : ''}`}
            >
              {!videoLoaded ? (
                <>
                  <img 
                    src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                    alt={titleEn}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center hover:scale-110 hover:bg-primary/30 transition-all duration-300">
                      <svg className="w-10 h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title={titleEn}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          )}

          {/* PDF Button */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowPDF(true)}
              variant="outline"
              size="lg"
              className="gap-2 hover:bg-primary/10 hover:border-primary transition-all hover-scale"
            >
              <FileText className="h-5 w-5" />
              <span className="bible-body font-semibold">
                <span className="lang-pt">Transcrição Completa</span>
                <span className="lang-en">Full Transcription</span>
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* PDF Dialog */}
      <Dialog open={showPDF} onOpenChange={setShowPDF}>
        <DialogContent className="max-w-6xl h-[90vh] animate-scale-in">
          <DialogHeader>
            <DialogTitle className="bible-subtitle">
              <span className="lang-pt">{pdfTitlePt}</span>
              <span className="lang-en">{pdfTitleEn}</span>
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-auto flex-1">
            <PDFViewer
              pdfUrl={pdfPath}
              title=""
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const InterviewsTabs = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const zineImages = [
    zine02, zine03, zine04, zine05, 
    zine06, zine07, zine08, zine09, zine10,
    zine11, zine12, zine13, zine14, zine15, zine16
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setZoomLevel(1);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % zineImages.length);
    setZoomLevel(1);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + zineImages.length) % zineImages.length);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  return (
    <section className="w-full bible-section">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm p-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-start bible-media">
                <span className="text-sm">
                  <span className="lang-pt">Sobre as Entrevistas</span>
                  <span className="lang-en">About the Interviews</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Documentação Etnográfica</DialogTitle>
              </DialogHeader>
              <div className="bible-block text-sm leading-relaxed space-y-4">
                <p>Este conjunto de entrevistas documenta a pesquisa de campo realizada entre 2017-2024, capturando vozes da cena underground brasileira.</p>
                <p><strong>Metodologia:</strong> Conversas abertas gravadas em vídeo, transcritas e analisadas segundo princípios etnográficos, preservando a oralidade e contexto cultural dos entrevistados.</p>
                <p><strong>Temas:</strong> Skate, punk, mídia independente, produção cultural marginal, resistência criativa e construção de identidades subculturais.</p>
                <p className="text-xs text-muted-foreground">Pesquisa acadêmica vinculada ao Memorial "Ecos Criativos" (PUC-SP, 2024)</p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="bible-bilingual-grid bible-block mb-12">
            <div>
              <h2 className="bible-title">ENTREVISTAS & REGISTROS</h2>
              <p className="bible-subtitle text-primary mt-2">Processos e Conversas</p>
            </div>
            <div>
              <h2 className="bible-title">INTERVIEWS & RECORDS</h2>
              <p className="bible-subtitle text-primary mt-2">Processes and Conversations</p>
            </div>
          </div>

          <Tabs defaultValue="skate-punk" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto">
          <TabsTrigger value="skate-punk" className="bible-caption font-semibold">
            Skate Punk
          </TabsTrigger>
          <TabsTrigger value="black-media" className="bible-caption font-semibold">
            Black Media
          </TabsTrigger>
          <TabsTrigger value="gabriel-peralta" className="bible-caption font-semibold">
            G. Peralta
          </TabsTrigger>
          <TabsTrigger value="rafao-vm" className="bible-caption font-semibold">
            Rafão VM
          </TabsTrigger>
          <TabsTrigger value="werner-herzog" className="bible-caption font-semibold">
            W. Herzog
          </TabsTrigger>
          <TabsTrigger value="lowzine" className="bible-caption font-semibold">
            LowZine
          </TabsTrigger>
        </TabsList>

        {/* Skate Punk */}
        <TabsContent value="skate-punk">
          <InterviewCard
            titlePt="SKATE PUNK — PROCESSOS CRIATIVOS"
            titleEn="SKATE PUNK — CREATIVE PROCESSES"
            subtitlePt="Entrevista Chiclé Vídeos"
            subtitleEn="Chiclé Vídeos Interview"
            descriptionPt="Podcast Chiclé Vídeos — Conversa sobre a trajetória criativa, os bastidores do LowMovie™, a relação entre skate e audiovisual, e os processos colaborativos do coletivo LowPressure™."
            descriptionEn="Podcast Chiclé Vídeos — Conversation about the creative trajectory, the backstage of LowMovie™, the relationship between skateboarding and audiovisual, and the collaborative processes of the LowPressure™ collective."
            youtubeId="rOoUJyzGkDY"
            pdfPath="/documents/Skate_Punk_Interview_Transcript.pdf"
            pdfTitlePt="Transcrição: Skate Punk — Castro Pizzano"
            pdfTitleEn="Transcription: Skate Punk — Castro Pizzano"
          />
        </TabsContent>

        {/* Black Media */}
        <TabsContent value="black-media">
          <InterviewCard
            titlePt="BLACK MEDIA SKATE — BLACK VIEW"
            titleEn="BLACK MEDIA SKATE — BLACK VIEW"
            subtitlePt="Entrevista sobre LowMovie™"
            subtitleEn="Interview about LowMovie™"
            descriptionPt="Conversa profunda sobre a construção do LowMovie™, a visão Black sobre o skate brasileiro, e os processos de produção audiovisual na cultura underground."
            descriptionEn="Deep conversation about the making of LowMovie™, the Black perspective on Brazilian skateboarding, and audiovisual production processes in underground culture."
            youtubeId="YJEW5YB59Ws"
            pdfPath="/documents/Black_Media_Skate_LowMovie_Interview.pdf"
            pdfTitlePt="Transcrição: Black Media Skate"
            pdfTitleEn="Transcription: Black Media Skate"
          />
        </TabsContent>

        {/* Gabriel Peralta */}
        <TabsContent value="gabriel-peralta">
          <InterviewCard
            titlePt="FOTOS DE SKATE — GABRIEL PERALTA"
            titleEn="SKATEBOARDING PHOTOGRAPHY — GABRIEL PERALTA"
            subtitlePt="Entrevista Chiclé Vídeos"
            subtitleEn="Chiclé Vídeos Interview"
            descriptionPt="Fotógrafo Gabriel Peralta fala sobre sua trajetória na fotografia de skate, os processos criativos por trás das imagens, e a importância do registro visual na cultura do skate."
            descriptionEn="Photographer Gabriel Peralta talks about his journey in skateboarding photography, the creative processes behind the images, and the importance of visual documentation in skate culture."
            youtubeId="n7Vu89PzMLE"
            pdfPath="/documents/Gabriel_Peralta_Photos_Interview.pdf"
            pdfTitlePt="Transcrição: Gabriel Peralta — Fotografia"
            pdfTitleEn="Transcription: Gabriel Peralta — Photography"
          />
        </TabsContent>

        {/* Rafão VM */}
        <TabsContent value="rafao-vm">
          <InterviewCard
            titlePt="SKATE MARGINAL — RAFÃO VM"
            titleEn="MARGINAL SKATEBOARDING — RAFÃO VM"
            subtitlePt="Entrevista Chiclé Vídeos"
            subtitleEn="Chiclé Vídeos Interview"
            descriptionPt="Rafão VM compartilha sua visão sobre o skate marginal brasileiro, os processos de filmagem underground, e a construção de uma estética própria nas ruas."
            descriptionEn="Rafão VM shares his vision on Brazilian marginal skateboarding, underground filming processes, and the construction of a unique aesthetic on the streets."
            youtubeId="t89iwhuAOjU"
            pdfPath="/documents/Rafao_VM_Skate_Marginal_Interview.pdf"
            pdfTitlePt="Transcrição: Rafão VM — Skate Marginal"
            pdfTitleEn="Transcription: Rafão VM — Marginal Skateboarding"
          />
        </TabsContent>

        {/* Werner Herzog */}
        <TabsContent value="werner-herzog">
          <InterviewCard
            titlePt="WERNER HERZOG — SOBRE SKATEBOARDING"
            titleEn="WERNER HERZOG — ON SKATEBOARDING"
            subtitlePt="Conversa com o Cineasta"
            subtitleEn="Conversation with the Filmmaker"
            descriptionPt="O renomado cineasta Werner Herzog discute sua perspectiva única sobre skateboarding, cultura urbana e a natureza do movimento nas ruas."
            descriptionEn="Renowned filmmaker Werner Herzog discusses his unique perspective on skateboarding, urban culture and the nature of movement in the streets."
            youtubeId="EQLInlnfWUc"
            pdfPath="/documents/Werner_Herzog_Skateboarding_Interview.pdf"
            pdfTitlePt="Transcrição: Werner Herzog — Skateboarding"
            pdfTitleEn="Transcription: Werner Herzog — Skateboarding"
          />
        </TabsContent>

        {/* LowZine */}
        <TabsContent value="lowzine" className="space-y-8">
          <InterviewCard
            titlePt="LOWZINE — FANZINE COLETIVO"
            titleEn="LOWZINE — COLLECTIVE FANZINE"
            subtitlePt="Entrevista LowMovie™ × LowPressure™"
            subtitleEn="Interview LowMovie™ × LowPressure™"
            descriptionPt="Fanzine colaborativo com entrevista sobre o processo criativo do LowMovie™ e a filosofia do coletivo LowPressure™. Publicação independente que documenta os bastidores da produção. Galeria de páginas do fanzine abaixo."
            descriptionEn="Collaborative fanzine featuring an interview about the creative process of LowMovie™ and the philosophy of the LowPressure™ collective. Independent publication documenting the production backstage. Fanzine pages gallery below."
            youtubeId=""
            pdfPath="/documents/Entrevista-Transcrita_PIZZANO_Castro_LEITE_Rafael_Auto_Rafao_VM_METRI_Caio_LowZine_LowMovie_LowPressure.pdf"
            pdfTitlePt="Transcrição: LowZine"
            pdfTitleEn="Transcription: LowZine"
          />

          {/* Zine Gallery - Mosaico */}
          <Card className="overflow-hidden border-border/50 shadow-lg shadow-primary/5 animate-fade-in">
            <CardHeader>
              <div className="bible-bilingual-grid">
                <CardTitle className="bible-subtitle">Galeria LowZine</CardTitle>
                <CardTitle className="bible-subtitle">LowZine Gallery</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 [direction:rtl]">
                {zineImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="aspect-[3/4] rounded-lg overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all cursor-pointer group relative [direction:ltr]"
                >
                  <img
                    src={image}
                    alt={`LowZine página ${index + 2}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lightbox */}
          <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
            <DialogContent className="max-w-7xl h-[95vh] p-0 bg-black/95 border-border/20">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  onClick={() => setLightboxOpen(false)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Page Counter */}
                <div className="absolute top-4 left-4 z-50 text-white bible-body font-semibold bg-black/50 px-4 py-2 rounded-lg">
                  <span className="lang-pt">Página {currentImageIndex + 2} de 16</span>
                  <span className="lang-en">Page {currentImageIndex + 2} of 16</span>
                </div>

                {/* Zoom Controls */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2">
                  <Button
                    onClick={zoomOut}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="h-5 w-5" />
                  </Button>
                  <div className="text-white bible-caption font-semibold bg-black/50 px-3 py-2 rounded-lg">
                    {Math.round(zoomLevel * 100)}%
                  </div>
                  <Button
                    onClick={zoomIn}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10"
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="h-5 w-5" />
                  </Button>
                </div>

                {/* Previous Button */}
                <Button
                  onClick={prevImage}
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10 h-12 w-12"
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>

                {/* Image */}
                <div className="overflow-auto max-h-full max-w-full p-16">
                  <img
                    src={zineImages[currentImageIndex]}
                    alt={`LowZine página ${currentImageIndex + 2}`}
                    className="transition-transform duration-200"
                    style={{ transform: `scale(${zoomLevel})` }}
                  />
                </div>

                {/* Next Button */}
                <Button
                  onClick={nextImage}
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/10 h-12 w-12"
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
