import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Trash2, Plus, Save } from "lucide-react";

interface Prompt {
  id: string;
  category: string;
  title: string;
  description: string;
  prompt_text: string;
  parameters: any;
  tags: string[];
  display_order: number;
  is_active: boolean;
}

export const PromptManager = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPrompt, setEditingPrompt] = useState<Partial<Prompt> | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    try {
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .order('category')
        .order('display_order');

      if (error) throw error;
      setPrompts(data || []);
    } catch (error) {
      toast.error('Erro ao carregar prompts');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editingPrompt?.title || !editingPrompt?.prompt_text || !editingPrompt?.category) {
      toast.error('Preencha os campos obrigatórios');
      return;
    }

    try {
      if (isCreating) {
        const { error } = await supabase.from('prompts').insert([editingPrompt as any]);
        if (error) throw error;
        toast.success('Prompt criado com sucesso!');
      } else {
        const { error } = await supabase
          .from('prompts')
          .update(editingPrompt as any)
          .eq('id', editingPrompt.id);
        if (error) throw error;
        toast.success('Prompt atualizado com sucesso!');
      }

      setEditingPrompt(null);
      setIsCreating(false);
      fetchPrompts();
    } catch (error) {
      toast.error('Erro ao salvar prompt');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este prompt?')) return;

    try {
      const { error } = await supabase.from('prompts').delete().eq('id', id);
      if (error) throw error;
      toast.success('Prompt excluído com sucesso!');
      fetchPrompts();
    } catch (error) {
      toast.error('Erro ao excluir prompt');
    }
  };

  const startCreating = () => {
    setEditingPrompt({
      category: 'character',
      title: '',
      description: '',
      prompt_text: '',
      parameters: { seed: 131313, stylize: 50, chaos: 5 },
      tags: [],
      display_order: 0,
      is_active: true,
    });
    setIsCreating(true);
  };

  const systemPrompts = prompts.filter(p => p.category === 'system');
  const characterPrompts = prompts.filter(p => p.category === 'character');
  const scenePrompts = prompts.filter(p => p.category === 'scene');

  if (loading) {
    return <div className="text-center py-8">Carregando prompts...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gerenciar Prompts</h2>
          <p className="text-muted-foreground">
            Biblioteca de templates para geração de imagens THEVOIDN13
          </p>
        </div>
        <Button onClick={startCreating}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Prompt
        </Button>
      </div>

      {editingPrompt && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>{isCreating ? 'Criar Novo Prompt' : 'Editar Prompt'}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Categoria *</Label>
                <Select
                  value={editingPrompt.category}
                  onValueChange={(value) =>
                    setEditingPrompt({ ...editingPrompt, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">Sistema</SelectItem>
                    <SelectItem value="character">Personagem</SelectItem>
                    <SelectItem value="scene">Cena</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="display_order">Ordem de Exibição</Label>
                <Input
                  id="display_order"
                  type="number"
                  value={editingPrompt.display_order || 0}
                  onChange={(e) =>
                    setEditingPrompt({
                      ...editingPrompt,
                      display_order: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Título *</Label>
              <Input
                id="title"
                value={editingPrompt.title || ''}
                onChange={(e) =>
                  setEditingPrompt({ ...editingPrompt, title: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Input
                id="description"
                value={editingPrompt.description || ''}
                onChange={(e) =>
                  setEditingPrompt({ ...editingPrompt, description: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="prompt_text">Prompt *</Label>
              <Textarea
                id="prompt_text"
                rows={8}
                value={editingPrompt.prompt_text || ''}
                onChange={(e) =>
                  setEditingPrompt({ ...editingPrompt, prompt_text: e.target.value })
                }
                className="font-mono text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
              <Input
                id="tags"
                value={editingPrompt.tags?.join(', ') || ''}
                onChange={(e) =>
                  setEditingPrompt({
                    ...editingPrompt,
                    tags: e.target.value.split(',').map(t => t.trim()),
                  })
                }
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setEditingPrompt(null);
                  setIsCreating(false);
                }}
              >
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="system">
        <TabsList>
          <TabsTrigger value="system">Sistema ({systemPrompts.length})</TabsTrigger>
          <TabsTrigger value="character">Personagens ({characterPrompts.length})</TabsTrigger>
          <TabsTrigger value="scene">Cenas ({scenePrompts.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="system" className="space-y-4 mt-4">
          {systemPrompts.map((prompt) => (
            <Card key={prompt.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{prompt.title}</CardTitle>
                    <CardDescription>{prompt.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingPrompt(prompt);
                        setIsCreating(false);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(prompt.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-muted rounded text-sm font-mono whitespace-pre-wrap mb-2">
                  {prompt.prompt_text}
                </div>
                {prompt.tags && prompt.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {prompt.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="character" className="space-y-4 mt-4">
          {characterPrompts.map((prompt) => (
            <Card key={prompt.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{prompt.title}</CardTitle>
                    <CardDescription>{prompt.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingPrompt(prompt);
                        setIsCreating(false);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(prompt.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-muted rounded text-sm font-mono whitespace-pre-wrap mb-2">
                  {prompt.prompt_text}
                </div>
                {prompt.tags && prompt.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {prompt.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="scene" className="space-y-4 mt-4">
          {scenePrompts.map((prompt) => (
            <Card key={prompt.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{prompt.title}</CardTitle>
                    <CardDescription>{prompt.description}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingPrompt(prompt);
                        setIsCreating(false);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(prompt.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-muted rounded text-sm font-mono whitespace-pre-wrap mb-2">
                  {prompt.prompt_text}
                </div>
                {prompt.tags && prompt.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {prompt.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
