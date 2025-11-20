/// <reference types="vite/client" />

interface Puter {
  ai: {
    txt2img(prompt: string, options?: {
      model?: string;
      width?: number;
      height?: number;
    }): Promise<Blob>;
  };
}

declare const puter: Puter;
