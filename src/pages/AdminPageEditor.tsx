import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Home, Film, User, Video, Globe, ArrowLeft } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { HomeEditor } from "@/components/admin/PageEditor/HomeEditor";
import { LowMovieEditor } from "@/components/admin/PageEditor/LowMovieEditor";
import { AuthorEditor } from "@/components/admin/PageEditor/AuthorEditor";
import { VideosEditor } from "@/components/admin/PageEditor/VideosEditor";
import { GlobalContentEditor } from "@/components/admin/PageEditor/GlobalContentEditor";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AdminPageEditor = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, isAdmin, loading, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState(searchParams.get("page") || "home");

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

  useEffect(() => {
    setSearchParams({ page: activeTab });
  }, [activeTab, setSearchParams]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="xl" text="Carregando editor..." />
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <Button 
              onClick={() => navigate("/admin")} 
              variant="ghost" 
              size="sm"
              className="mb-2 -ml-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Admin
            </Button>
            <h1 className="bible-title mb-2">Editor de Páginas</h1>
            <p className="text-muted-foreground">
              Admin como Espelho de Conteúdo — Edite seguindo a ordem visual do site
            </p>
          </div>
          <Button variant="outline" onClick={signOut}>
            Sair
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </TabsTrigger>
            <TabsTrigger value="lowmovie" className="flex items-center gap-2">
              <Film className="w-4 h-4" />
              LowMovie™
            </TabsTrigger>
            <TabsTrigger value="author" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Author
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Vídeos
            </TabsTrigger>
            <TabsTrigger value="global" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Global
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomeEditor />
          </TabsContent>

          <TabsContent value="lowmovie">
            <LowMovieEditor />
          </TabsContent>

          <TabsContent value="author">
            <AuthorEditor />
          </TabsContent>

          <TabsContent value="videos">
            <VideosEditor />
          </TabsContent>

          <TabsContent value="global">
            <GlobalContentEditor />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPageEditor;
