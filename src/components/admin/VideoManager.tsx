import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Star, ArrowUp, ArrowDown } from "lucide-react";

interface Video {
  id: string;
  name: string;
  description: string;
  duration: number;
  link: string;
  embedUrl: string;
  thumbnail: string;
  createdTime: string;
}

interface VideoSetting {
  id: string;
  vimeo_id: string;
  is_visible: boolean;
  is_featured: boolean;
  display_order: number;
}

const VideoManager = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [settings, setSettings] = useState<VideoSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch videos from Vimeo
      const { data: vimeoData, error: vimeoError } = await supabase.functions.invoke('vimeo-videos');
      if (vimeoError) throw vimeoError;

      // Fetch settings
      const { data: settingsData, error: settingsError } = await supabase
        .from('video_settings')
        .select('*')
        .order('display_order', { ascending: true });

      if (settingsError) throw settingsError;

      setVideos(vimeoData.videos || []);
      setSettings(settingsData || []);

      // Create settings for new videos
      const existingIds = new Set(settingsData?.map((s: VideoSetting) => s.vimeo_id) || []);
      const newVideos = (vimeoData.videos || []).filter((v: Video) => !existingIds.has(v.id));

      if (newVideos.length > 0) {
        const newSettings = newVideos.map((v: Video, index: number) => ({
          vimeo_id: v.id,
          is_visible: true,
          is_featured: false,
          display_order: (settingsData?.length || 0) + index,
        }));

        const { error: insertError } = await supabase
          .from('video_settings')
          .insert(newSettings);

        if (!insertError) {
          fetchData(); // Refresh
        }
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao carregar vídeos",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (vimeoId: string, updates: Partial<VideoSetting>) => {
    try {
      const { error } = await supabase
        .from('video_settings')
        .update(updates)
        .eq('vimeo_id', vimeoId);

      if (error) throw error;

      setSettings((prev) =>
        prev.map((s) => (s.vimeo_id === vimeoId ? { ...s, ...updates } : s))
      );

      toast({
        title: "Configuração atualizada",
        description: "As alterações foram salvas.",
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro ao atualizar",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const moveVideo = async (vimeoId: string, direction: 'up' | 'down') => {
    const currentIndex = settings.findIndex((s) => s.vimeo_id === vimeoId);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= settings.length) return;

    const newSettings = [...settings];
    [newSettings[currentIndex], newSettings[newIndex]] = [newSettings[newIndex], newSettings[currentIndex]];

    // Update display_order for both
    await updateSetting(newSettings[currentIndex].vimeo_id, { display_order: currentIndex });
    await updateSetting(newSettings[newIndex].vimeo_id, { display_order: newIndex });

    setSettings(newSettings);
  };

  const setFeatured = async (vimeoId: string) => {
    try {
      // Unset all featured
      await supabase
        .from('video_settings')
        .update({ is_featured: false })
        .neq('vimeo_id', vimeoId);

      // Set new featured
      await updateSetting(vimeoId, { is_featured: true });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      toast({
        title: "Erro",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const mergedData = videos.map((video) => ({
    video,
    setting: settings.find((s) => s.vimeo_id === video.id),
  }));

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Carregando vídeos...</p>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Vídeos do Vimeo</CardTitle>
          <CardDescription>
            Controle visibilidade, destaque e ordem dos vídeos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">
              Nenhum vídeo encontrado no Vimeo.
            </p>
            <p className="text-sm text-muted-foreground">
              Verifique se o token do Vimeo está configurado corretamente e se há vídeos na sua conta.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Vídeos do Vimeo</CardTitle>
          <CardDescription>
            Controle visibilidade, destaque e ordem dos vídeos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {mergedData.map(({ video, setting }, index) => (
            <Card key={video.id}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-32 h-20 object-cover rounded"
                  />
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{video.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                      
                      {setting?.is_featured && (
                        <Badge variant="default" className="ml-2">
                          <Star className="w-3 h-3 mr-1" />
                          Destaque
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Visível:</span>
                        <Switch
                          checked={setting?.is_visible ?? true}
                          onCheckedChange={(checked) =>
                            updateSetting(video.id, { is_visible: checked })
                          }
                        />
                        {setting?.is_visible ? (
                          <Eye className="w-4 h-4 text-green-500" />
                        ) : (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        )}
                      </div>

                      <Button
                        size="sm"
                        variant={setting?.is_featured ? "default" : "outline"}
                        onClick={() => setFeatured(video.id)}
                      >
                        <Star className="w-4 h-4 mr-1" />
                        Destacar
                      </Button>

                      <div className="flex gap-1 ml-auto">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => moveVideo(video.id, 'up')}
                          disabled={index === 0}
                        >
                          <ArrowUp className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => moveVideo(video.id, 'down')}
                          disabled={index === mergedData.length - 1}
                        >
                          <ArrowDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoManager;
