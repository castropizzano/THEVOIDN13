import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Save, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface FieldGroupProps {
  page: string;
  section: string;
  fields: {
    key: string;
    label: string;
    type: "text" | "textarea" | "url" | "file";
    bilingual?: boolean;
  }[];
}

export const FieldGroup = ({ page, section, fields }: FieldGroupProps) => {
  const [values, setValues] = useState<Record<string, { pt?: string; en?: string } | string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page, section]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("content_settings")
        .select("*")
        .eq("page", page)
        .eq("section", section);

      if (error) throw error;

      const valuesMap: Record<string, any> = {};
      data?.forEach((item) => {
        if (fields.find(f => f.key === item.content_key)?.bilingual) {
          valuesMap[item.content_key] = {
            pt: item.content_pt || "",
            en: item.content_en || "",
          };
        } else {
          valuesMap[item.content_key] = item.content_pt || "";
        }
      });

      setValues(valuesMap);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const updates = fields.map((field) => {
        const value = values[field.key];
        if (field.bilingual && typeof value === "object") {
          return {
            page,
            section,
            content_key: field.key,
            content_pt: value.pt || "",
            content_en: value.en || "",
            content_type: field.type,
          };
        } else {
          return {
            page,
            section,
            content_key: field.key,
            content_pt: typeof value === "string" ? value : "",
            content_en: "",
            content_type: field.type,
          };
        }
      });

      for (const update of updates) {
        const { error } = await supabase
          .from("content_settings")
          .upsert(update, {
            onConflict: "page,section,content_key",
          });

        if (error) throw error;
      }

      toast.success("Conteúdo salvo com sucesso!");
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Erro ao salvar conteúdo");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-4 text-muted-foreground">Carregando...</div>;
  }

  const renderField = (field: typeof fields[0]) => {
    const value = values[field.key];
    const InputComponent = field.type === "textarea" ? Textarea : Input;

    if (field.bilingual && typeof value === "object") {
      return (
        <div key={field.key} className="space-y-3">
          <Label className="text-base font-medium">{field.label}</Label>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="font-mono">🇧🇷</span> Português
              </Label>
              <InputComponent
                value={value.pt || ""}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [field.key]: { ...value, pt: e.target.value },
                  })
                }
                placeholder={`${field.label} (PT)`}
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground flex items-center gap-2">
                <span className="font-mono">🇺🇸</span> English
              </Label>
              <InputComponent
                value={value.en || ""}
                onChange={(e) =>
                  setValues({
                    ...values,
                    [field.key]: { ...value, en: e.target.value },
                  })
                }
                placeholder={`${field.label} (EN)`}
                className="min-h-[100px]"
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={field.key} className="space-y-2">
        <Label className="text-base font-medium">{field.label}</Label>
        <InputComponent
          value={typeof value === "string" ? value : ""}
          onChange={(e) =>
            setValues({
              ...values,
              [field.key]: e.target.value,
            })
          }
          placeholder={field.label}
          className={field.type === "textarea" ? "min-h-[100px]" : ""}
        />
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {fields.map(renderField)}
      <Button onClick={handleSave} disabled={saving} className="w-full md:w-auto">
        {saving ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Salvando...
          </>
        ) : (
          <>
            <Save className="w-4 h-4 mr-2" />
            Salvar Seção
          </>
        )}
      </Button>
    </div>
  );
};
