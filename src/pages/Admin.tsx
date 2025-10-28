import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Image, Video, Type, Mail } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import ContentManager from "@/components/admin/ContentManager";
import MediaManager from "@/components/admin/MediaManager";
import VideoManager from "@/components/admin/VideoManager";
import { PromptManager } from "@/components/admin/PromptManager";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="xl" text="Carregando painel..." />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="site-title mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie o conteúdo do site THEVOIDN13</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sair
          </Button>
        </div>

        {/* Quick Access Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Newsletter Dashboard
            </CardTitle>
            <CardDescription>
              Gerencie os inscritos da newsletter e visualize estatísticas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/admin/dashboard")} className="w-full md:w-auto">
              Abrir Dashboard de Inscritos
            </Button>
          </CardContent>
        </Card>

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="content" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              Textos
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              Mídias
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="prompts" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Prompts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <ContentManager />
          </TabsContent>

          <TabsContent value="media">
            <MediaManager />
          </TabsContent>

          <TabsContent value="videos">
            <VideoManager />
          </TabsContent>

          <TabsContent value="prompts">
            <PromptManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
