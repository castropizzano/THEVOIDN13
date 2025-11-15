import React from "react";

/**
 * SISTEMA TIPOGRÁFICO OFICIAL THEVØIDN13
 * 
 * Componentes React para aplicar hierarquia tipográfica consistente
 * Use estes componentes para garantir tipagem forte e padrão único
 */

interface TVNTitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

/**
 * Título principal
 * level 1: Hero/H1 (tvn-h1)
 * level 2: Seção/H2 (tvn-h2) - padrão
 * level 3: Subtítulo/H3 (tvn-h3)
 */
export const TVNTitle = ({ children, level = 2, className = "" }: TVNTitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`tvn-h${level} ${className}`}>{children}</Tag>;
};

interface TVNSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Label ou micro-título (tvn-subtitle)
 * Use para categorias, tags, labels pequenos
 */
export const TVNSubtitle = ({ children, className = "" }: TVNSubtitleProps) => {
  return <p className={`tvn-subtitle ${className}`}>{children}</p>;
};

interface TVNParagraphProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Parágrafo de corpo de texto (tvn-paragraph)
 * Já inclui: text-justify, hyphens, leading-relaxed
 */
export const TVNParagraph = ({ children, className = "" }: TVNParagraphProps) => {
  return <p className={`tvn-paragraph ${className}`}>{children}</p>;
};

interface TVNImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Imagem com espaçamento automático (tvn-image)
 */
export const TVNImage = ({ src, alt, className = "" }: TVNImageProps) => {
  return <img src={src} alt={alt} className={`tvn-image ${className}`} loading="lazy" />;
};

interface TVNBlockProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container com espaçamento vertical entre elementos (tvn-block)
 */
export const TVNBlock = ({ children, className = "" }: TVNBlockProps) => {
  return <div className={`tvn-block ${className}`}>{children}</div>;
};

interface TVNQuoteProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Citação ou blockquote (tvn-quote)
 */
export const TVNQuote = ({ children, className = "" }: TVNQuoteProps) => {
  return <blockquote className={`tvn-quote ${className}`}>{children}</blockquote>;
};

interface TVNContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Container de card com padding responsivo (tvn-card-spacing)
 */
export const TVNContent = ({ children, className = "" }: TVNContentProps) => {
  return <div className={`tvn-card-spacing ${className}`}>{children}</div>;
};
