import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BilingualSection } from "@/components/BilingualSection";
import { PDFViewer } from "@/components/PDFViewer";
import { FileText } from "lucide-react";
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
          {/* Video */}
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border/50 shadow-lg shadow-primary/10 hover-scale transition-all duration-300">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={titleEn}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

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
                <span className="lang-en"> / Full Transcription</span>
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
  const zineImages = [
    zine02, zine03, zine04, zine05, 
    zine06, zine07, zine08, zine09, zine10,
    zine11, zine12, zine13, zine14, zine15, zine16
  ];

  return (
    <BilingualSection className="py-16">
      <div className="bible-bilingual-grid bible-block-spacing mb-12">
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
            youtubeId="HkOB_rYGzMU"
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
            youtubeId="aXKJI1sZVhM"
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
            youtubeId="0m7SqCyeuj0"
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
            youtubeId="z4Ezruu1oeQ"
            pdfPath="/documents/Werner_Herzog_Skateboarding_Interview.pdf"
            pdfTitlePt="Transcrição: Werner Herzog — Skateboarding"
            pdfTitleEn="Transcription: Werner Herzog — Skateboarding"
          />
        </TabsContent>

        {/* LowZine */}
        <TabsContent value="lowzine" className="space-y-8">
          <Card className="overflow-hidden border-border/50 shadow-lg shadow-primary/5 animate-fade-in">
            <CardHeader>
              <div className="bible-bilingual-grid">
                <div>
                  <CardTitle className="bible-title">LOWZINE — FANZINE COLETIVO</CardTitle>
                  <CardDescription className="bible-subtitle text-primary mt-2">
                    Entrevista LowMovie™ × LowPressure™
                  </CardDescription>
                </div>
                <div>
                  <CardTitle className="bible-title">LOWZINE — COLLECTIVE FANZINE</CardTitle>
                  <CardDescription className="bible-subtitle text-primary mt-2">
                    Interview LowMovie™ × LowPressure™
                  </CardDescription>
                </div>
              </div>

              <div className="bible-bilingual-grid bible-section-spacing">
                <p className="bible-body">
                  Fanzine colaborativo com entrevista sobre o processo criativo do LowMovie™ e a filosofia do coletivo LowPressure™. Publicação independente que documenta os bastidores da produção.
                </p>
                <p className="bible-body">
                  Collaborative fanzine featuring an interview about the creative process of LowMovie™ and the philosophy of the LowPressure™ collective. Independent publication documenting the production backstage.
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Zine Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {zineImages.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-[3/4] rounded-lg overflow-hidden border border-border/50 shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all hover-scale cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`LowZine página ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* PDF Download */}
              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => window.open("/documents/LowZine_LowMovie_Interview.pdf", "_blank")}
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-primary/10 hover:border-primary transition-all hover-scale"
                >
                  <FileText className="h-5 w-5" />
                  <span className="bible-body font-semibold">
                    <span className="lang-pt">Transcrição Completa</span>
                    <span className="lang-en"> / Full Transcription</span>
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </BilingualSection>
  );
};
