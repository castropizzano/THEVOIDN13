import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface MediaDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  type: "video" | "audio" | "pdf";
  url: string;
}

export default function MediaDialog({ open, onOpenChange, title, type, url }: MediaDialogProps) {
  const getEmbedUrl = () => {
    if (type === "video" && url.includes("youtube.com")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (type === "audio" && url.includes("spotify.com")) {
      const episodeId = url.split("episode/")[1]?.split("?")[0];
      return `https://open.spotify.com/embed/episode/${episodeId}`;
    }
    return url;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="w-full">
          {type === "video" && (
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={getEmbedUrl()}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {type === "audio" && (
            <iframe
              className="w-full h-[232px] rounded-lg"
              src={getEmbedUrl()}
              title={title}
              allow="encrypted-media"
            />
          )}
          {type === "pdf" && (
            <div className="w-full h-[70vh]">
              <object
                data={url}
                type="application/pdf"
                className="w-full h-full rounded-lg"
              >
                <p className="text-center p-8">
                  Não foi possível carregar o PDF.{" "}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Clique aqui para abrir em nova aba
                  </a>
                </p>
              </object>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
