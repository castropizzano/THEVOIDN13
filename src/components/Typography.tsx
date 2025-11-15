import { cn } from "@/lib/utils";

/* ============================================
   COMPONENTES TIPOGRÁFICOS THEVOIDN13
   Sistema de componentes wrapper para tipografia consistente
   ============================================ */

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * H1 - Título Principal de Seção
 * 32px desktop / 24px mobile
 * Uso: Títulos principais de seções
 */
export const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={cn("tvn-h1", className)}>{children}</h1>
);

/**
 * H2 - Subtítulo Importante
 * 24px desktop / 20px mobile
 * Uso: Subtítulos de destaque dentro de seções
 */
export const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={cn("tvn-h2", className)}>{children}</h2>
);

/**
 * H3 - Subtítulo Secundário
 * 20px desktop / 18px mobile
 * Uso: Subtítulos secundários, divisões menores
 */
export const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={cn("tvn-h3", className)}>{children}</h3>
);

/**
 * H4 - Label / Tag / Categoria
 * 16px desktop / 14px mobile (Cor: Vermelho)
 * Uso: Labels, tags, categorias, marcadores
 */
export const H4 = ({ children, className }: TypographyProps) => (
  <h4 className={cn("tvn-h4", className)}>{children}</h4>
);

/**
 * BodyLarge - Parágrafo Introdutório
 * 18px desktop / 16px mobile
 * Uso: Parágrafos de abertura, introduções destacadas
 */
export const BodyLarge = ({ children, className }: TypographyProps) => (
  <p className={cn("tvn-body-large", className)}>{children}</p>
);

/**
 * Body - Texto Padrão
 * 16px desktop / 14px mobile
 * Uso: Texto corrido, parágrafos padrão
 */
export const Body = ({ children, className }: TypographyProps) => (
  <p className={cn("tvn-body", className)}>{children}</p>
);

/**
 * BodySmall - Texto Pequeno
 * 14px desktop / 13px mobile
 * Uso: Legendas, notas de rodapé, detalhes secundários
 */
export const BodySmall = ({ children, className }: TypographyProps) => (
  <p className={cn("tvn-body-small", className)}>{children}</p>
);

/**
 * Link - Links com estilo padrão
 * Cor: Vermelho, Hover: Underline
 */
interface LinkProps extends TypographyProps {
  href: string;
  target?: string;
  rel?: string;
}

export const Link = ({ href, children, className, target, rel }: LinkProps) => (
  <a 
    href={href} 
    className={cn("tvn-link", className)}
    target={target}
    rel={rel}
  >
    {children}
  </a>
);

/**
 * Quote - Citação / Blockquote
 * Com borda vermelha lateral
 */
export const Quote = ({ children, className }: TypographyProps) => (
  <blockquote className={cn("tvn-quote", className)}>{children}</blockquote>
);

/**
 * Content - Container com espaçamento automático
 * Aplica espaçamento vertical entre elementos filhos
 */
export const Content = ({ children, className }: TypographyProps) => (
  <div className={cn("tvn-content", className)}>{children}</div>
);
