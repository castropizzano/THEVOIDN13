import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Save, Eye, EyeOff } from "lucide-react";

interface MediaAsset {
  id: string;
  asset_key: string;
  asset_type: string;
  file_url: string;
  alt_text_pt: string | null;
  alt_text_en: string | null;
  is_visible: boolean;
  display_order: number;
}

const MediaManager = () => {
  const [assets, setAssets] = useState<MediaAsset[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const { data, error } = await supabase
        .from('media_assets')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setAssets(data || []);
    } catch (error: any) {
      toast({
        title: "Erro ao carregar mídias",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateAsset = async (asset: MediaAsset) => {
    try {
      const { error } = await supabase
        .from('media_assets')
        .update({
          file_url: asset.file_url,
          alt_text_pt: asset.alt_text_pt,
          alt_text_en: asset.alt_text_en,
          is_visible: asset.is_visible,
        })
        .eq('id', asset.id);

      if (error) throw error;

      toast({
        title: "Mídia atualizada",
        description: "As alterações foram salvas com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground">Carregando mídias...</p>
        </div>
      </div>
    );
  }

  if (assets.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Mídias</CardTitle>
          <CardDescription>
            Edite URLs de imagens/vídeos e textos alternativos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12 space-y-4">
            <p className="text-muted-foreground">
              Nenhuma mídia cadastrada ainda.
            </p>
            <p className="text-sm text-muted-foreground">
              Para adicionar mídias editáveis, você precisa inserir registros na tabela <code className="bg-muted px-2 py-1 rounded">media_assets</code> do banco de dados.
            </p>
            <Button onClick={() => window.open('https://docs.lovable.dev/features/cloud', '_blank')} variant="outline">
              Ver Documentação do Backend
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Mídias</CardTitle>
          <CardDescription>
            Edite URLs de imagens/vídeos e textos alternativos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {assets.map((asset) => (
            <Card key={asset.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{asset.asset_key}</CardTitle>
                  <div className="flex items-center gap-2">
                    {asset.is_visible ? (
                      <Eye className="w-4 h-4 text-green-500" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    )}
                    <Switch
                      checked={asset.is_visible}
                      onCheckedChange={(checked) => {
                        const updated = assets.map((a) =>
                          a.id === asset.id ? { ...a, is_visible: checked } : a
                        );
                        setAssets(updated);
                      }}
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {asset.asset_type === 'image' && asset.file_url && (
                  <div className="w-full h-48 bg-muted rounded-lg overflow-hidden">
                    <img
                      src={asset.file_url}
                      alt={asset.alt_text_pt || asset.asset_key}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label>URL do Arquivo</Label>
                  <Input
                    value={asset.file_url}
                    onChange={(e) => {
                      const updated = assets.map((a) =>
                        a.id === asset.id ? { ...a, file_url: e.target.value } : a
                      );
                      setAssets(updated);
                    }}
                    placeholder="https://..."
                  />
                </div>

                <div className="space-y-2">
                  <Label>Texto Alternativo (PT)</Label>
                  <Input
                    value={asset.alt_text_pt || ''}
                    onChange={(e) => {
                      const updated = assets.map((a) =>
                        a.id === asset.id ? { ...a, alt_text_pt: e.target.value } : a
                      );
                      setAssets(updated);
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Alt Text (EN)</Label>
                  <Input
                    value={asset.alt_text_en || ''}
                    onChange={(e) => {
                      const updated = assets.map((a) =>
                        a.id === asset.id ? { ...a, alt_text_en: e.target.value } : a
                      );
                      setAssets(updated);
                    }}
                  />
                </div>

                <Button onClick={() => updateAsset(asset)} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Salvar
                </Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MediaManager;
