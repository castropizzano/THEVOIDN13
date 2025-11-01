/**
 * Image Optimization Utilities
 * Handles lazy loading, WebP detection, and image optimization
 */

export const isWebPSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const elem = document.createElement('canvas');
  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
};

export const getOptimizedImagePath = (src: string): string => {
  // If WebP is supported and the image isn't already WebP, try to load WebP version
  if (isWebPSupported() && !src.endsWith('.webp')) {
    const webpPath = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    return webpPath;
  }
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const lazyLoadImage = (
  img: HTMLImageElement,
  src: string,
  options?: IntersectionObserverInit
) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        img.src = src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, options || { rootMargin: '50px' });

  observer.observe(img);
  return observer;
};
