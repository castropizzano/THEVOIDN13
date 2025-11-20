import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PDFViewer } from "@/components/PDFViewer";
import { FileText, ChevronLeft, ChevronRight } from "lucide-react";
import zine01 from "@/assets/zine/zine_01.png";
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
          <div>
            <CardTitle className="bible-title">
              <span className="lang-pt">{titlePt}</span>
              <span className="lang-en">{titleEn}</span>
            </CardTitle>
            <CardDescription className="bible-subtitle text-primary mt-2">
              <span className="lang-pt">{subtitlePt}</span>
              <span className="lang-en">{subtitleEn}</span>
            </CardDescription>
          </div>

          <p className="bible-body">
            <span className="lang-pt">{descriptionPt}</span>
            <span className="lang-en">{descriptionEn}</span>
          </p>
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const zineImages = [
    zine01, zine02, zine03, zine04, zine05, 
    zine06, zine07, zine08, zine09, zine10,
    zine11, zine12, zine13, zine14, zine15, zine16
  ];

  const nextImage = () => {
    if (currentImageIndex < zineImages.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setDirection('next');
      setTimeout(() => {
        setCurrentImageIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setDirection('prev');
      setTimeout(() => {
        setCurrentImageIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 150);
    }
  };

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex, isTransitioning]);

  // Pré-carregar próxima imagem
  useEffect(() => {
    if (currentImageIndex < zineImages.length - 1) {
      const img = new Image();
      img.src = zineImages[currentImageIndex + 1];
    }
  }, [currentImageIndex]);

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
                <DialogTitle className="text-2xl font-bold">
                  <span className="lang-pt">DOCUMENTAÇÃO ETNOGRÁFICA</span>
                  <span className="lang-en">ETHNOGRAPHIC DOCUMENTATION</span>
                </DialogTitle>
              </DialogHeader>
              <div className="bible-block text-sm leading-relaxed space-y-4">
                <p>
                  <span className="lang-pt">Este conjunto de entrevistas documenta a pesquisa de campo realizada entre 2024-2025, capturando vozes da cena underground brasileira.</span>
                  <span className="lang-en">This set of interviews documents field research conducted between 2024-2025, capturing voices from the Brazilian underground scene.</span>
                </p>
                <p>
                  <span className="lang-pt"><strong>Metodologia:</strong> Conversas abertas gravadas em vídeo, transcritas e analisadas segundo princípios etnográficos, preservando a oralidade e contexto cultural dos entrevistados.</span>
                  <span className="lang-en"><strong>Methodology:</strong> Open conversations recorded on video, transcribed and analyzed according to ethnographic principles, preserving the orality and cultural context of the interviewees.</span>
                </p>
                <p>
                  <span className="lang-pt"><strong>Temas:</strong> Skate, punk, mídia independente, produção cultural marginal, resistência criativa e construção de identidades subculturais.</span>
                  <span className="lang-en"><strong>Themes:</strong> Skateboarding, punk, independent media, marginal cultural production, creative resistance and construction of subcultural identities.</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="lang-pt">Pesquisa acadêmica vinculada à dissertação de mestrado "LowMovie™ e o Labirinto Criativo" (UNESPAR, 2025)</span>
                  <span className="lang-en">Academic research linked to the master's thesis "LowMovie™ and the Creative Labyrinth" (UNESPAR, 2025)</span>
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <div className="bible-bilingual-grid bible-block mb-12">
            <div>
              <h2 className="bible-title">ENTREVISTAS & REGISTROS</h2>
            </div>
            <div>
              <h2 className="bible-title">INTERVIEWS & RECORDS</h2>
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
              <div>
                <CardTitle className="lang-pt bible-subtitle">Galeria LowZine</CardTitle>
                <CardTitle className="lang-en bible-subtitle">LowZine Gallery</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {/* Slider de página única */}
              <div className="relative w-full">
                {/* Botão Anterior - Design melhorado */}
                {currentImageIndex > 0 && (
                  <Button
                    onClick={prevImage}
                    disabled={isTransitioning}
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 
                               h-14 w-14 rounded-full
                               bg-black/70 hover:bg-black/90 
                               border-2 border-white/20 hover:border-white/40
                               shadow-xl hover:shadow-2xl
                               backdrop-blur-sm
                               transition-all duration-300 ease-out
                               hover:scale-110 active:scale-95
                               disabled:opacity-50 disabled:cursor-not-allowed
                               group"
                    aria-label="Página anterior"
                  >
                    <ChevronLeft className="h-8 w-8 text-white group-hover:translate-x-[-2px] transition-transform" />
                  </Button>
                )}

                {/* Imagem com animação de transição */}
                <div className="w-full bg-black/5 rounded-lg overflow-hidden border border-border/50 flex items-center justify-center min-h-[400px]">
                  <img
                    src={zineImages[currentImageIndex]}
                    alt={`LowZine página ${currentImageIndex + 1}`}
                    className={`w-full h-auto object-contain 
                                grayscale hover:grayscale-0 
                                transition-all duration-300
                                ${isTransitioning 
                                  ? direction === 'next' 
                                    ? 'animate-[fadeOut_150ms_ease-out]' 
                                    : 'animate-[fadeOut_150ms_ease-out]'
                                  : 'animate-[fadeIn_300ms_ease-in]'
                                }`}
                  />
                </div>

                {/* Botão Próximo - Design melhorado */}
                {currentImageIndex < zineImages.length - 1 && (
                  <Button
                    onClick={nextImage}
                    disabled={isTransitioning}
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 
                               h-14 w-14 rounded-full
                               bg-black/70 hover:bg-black/90 
                               border-2 border-white/20 hover:border-white/40
                               shadow-xl hover:shadow-2xl
                               backdrop-blur-sm
                               transition-all duration-300 ease-out
                               hover:scale-110 active:scale-95
                               disabled:opacity-50 disabled:cursor-not-allowed
                               group"
                    aria-label="Próxima página"
                  >
                    <ChevronRight className="h-8 w-8 text-white group-hover:translate-x-[2px] transition-transform" />
                  </Button>
                )}

                {/* Indicadores de progresso melhorados */}
                <div className="flex justify-center gap-2 mt-6">
                  {zineImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isTransitioning && index !== currentImageIndex) {
                          setIsTransitioning(true);
                          setDirection(index > currentImageIndex ? 'next' : 'prev');
                          setTimeout(() => {
                            setCurrentImageIndex(index);
                            setIsTransitioning(false);
                          }, 150);
                        }
                      }}
                      disabled={isTransitioning}
                      className={`rounded-full transition-all duration-300 ease-out
                                  ${index === currentImageIndex 
                                    ? 'w-10 h-3 bg-primary shadow-lg' 
                                    : 'w-3 h-3 bg-border/50 hover:bg-primary/50 hover:scale-125'
                                  }
                                  disabled:cursor-not-allowed`}
                      aria-label={`Ir para página ${index + 1}`}
                      aria-current={index === currentImageIndex ? 'true' : 'false'}
                    />
                  ))}
                </div>

                {/* Contador de páginas (pequeno e discreto) */}
                <div className="text-center mt-4">
                  <span className="bible-caption text-muted-foreground">
                    {currentImageIndex + 1} / {zineImages.length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

        </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};
