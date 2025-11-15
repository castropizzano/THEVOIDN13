import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, Image, Video, Type, Mail, Layout } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import ContentManager from "@/components/admin/ContentManager";
import MediaManager from "@/components/admin/MediaManager";
import VideoManager from "@/components/admin/VideoManager";
import SectionManager from "@/components/admin/SectionManager";
import { PromptManager } from "@/components/admin/PromptManager";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();

  useEffect(() => {
    const verifyAdminAccess = async () => {
      if (!loading && !user) {
        navigate("/auth");
        return;
      }
      
      if (!loading && user && !isAdmin) {
        // Server-side verification as defense-in-depth
        const { data } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .maybeSingle();
        
        if (!data) {
          navigate("/auth");
          toast.error("Acesso negado / Access denied");
        }
      }
    };
    
    verifyAdminAccess();
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
            <h1 className="bible-title mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">Gerencie o conteúdo do site THEVØIDN13</p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sair
          </Button>
        </div>

        {/* Main Admin Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="h-5 w-5 text-primary" />
                Editor de Páginas
              </CardTitle>
              <CardDescription>
                Edite conteúdos organizados por páginas — Filosofia "Admin como Espelho"
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={() => navigate("/admin/pages")} className="w-full">
                Abrir Editor de Páginas
              </Button>
            </CardContent>
          </Card>

          <Card>
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
              <Button onClick={() => navigate("/admin/dashboard")} className="w-full" variant="outline">
                Abrir Dashboard de Inscritos
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Legacy Tools (Deprecated) */}
        <Card className="opacity-60">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Ferramentas Legadas (Deprecated)
            </CardTitle>
            <CardDescription className="text-xs">
              Estas ferramentas serão removidas em breve. Use o Editor de Páginas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-4">
                <TabsTrigger value="content" className="flex items-center gap-2 text-xs">
                  <Type className="w-3 h-3" />
                  Textos
                </TabsTrigger>
                <TabsTrigger value="media" className="flex items-center gap-2 text-xs">
                  <Image className="w-3 h-3" />
                  Mídias
                </TabsTrigger>
                <TabsTrigger value="sections" className="flex items-center gap-2 text-xs">
                  <Layout className="w-3 h-3" />
                  Seções
                </TabsTrigger>
                <TabsTrigger value="prompts" className="flex items-center gap-2 text-xs">
                  <Settings className="w-3 h-3" />
                  Prompts
                </TabsTrigger>
              </TabsList>

              <TabsContent value="content">
                <ContentManager />
              </TabsContent>

              <TabsContent value="media">
                <MediaManager />
              </TabsContent>

              <TabsContent value="sections">
                <SectionManager />
              </TabsContent>

              <TabsContent value="prompts">
                <PromptManager />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Admin;
