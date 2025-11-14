import React from "react";

/**
 * SISTEMA GLOBAL DE ESPAÇAMENTO THEVØIDN13
 * 
 * Componentes que aplicam automaticamente o sistema de ritmo cinematográfico
 * com grid bilíngue simétrico PT/EN
 */

interface TVNTitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export const TVNTitle = ({ children, level = 2, className = "" }: TVNTitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`tvn-h${level} ${className}`}>{children}</Tag>;
};

interface TVNSubtitleProps {
  children: React.ReactNode;
  level?: 4 | 5;
  className?: string;
}

export const TVNSubtitle = ({ children, level = 4, className = "" }: TVNSubtitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`tvn-subtitle ${className}`}>{children}</Tag>;
};

interface TVNParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const TVNParagraph = ({ children, className = "" }: TVNParagraphProps) => {
  return <p className={`tvn-paragraph ${className}`}>{children}</p>;
};

interface TVNImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const TVNImage = ({ src, alt, className = "" }: TVNImageProps) => {
  return <img src={src} alt={alt} className={`tvn-image ${className}`} loading="lazy" />;
};

interface TVNBlockProps {
  children: React.ReactNode;
  className?: string;
}

export const TVNBlock = ({ children, className = "" }: TVNBlockProps) => {
  return <div className={`tvn-block ${className}`}>{children}</div>;
};

interface TVNQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export const TVNQuote = ({ children, className = "" }: TVNQuoteProps) => {
  return <blockquote className={`tvn-quote ${className}`}>{children}</blockquote>;
};

/**
 * Wrapper que aplica automaticamente espaçamento TVN em elementos filhos
 */
interface TVNContentProps {
  children: React.ReactNode;
  className?: string;
}

export const TVNContent = ({ children, className = "" }: TVNContentProps) => {
  return <div className={`tvn-card-spacing ${className}`}>{children}</div>;
};
