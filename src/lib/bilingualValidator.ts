/**
 * Bilingual System Validator
 * 
 * Validates that the bilingual system is working correctly:
 * - No bible-bilingual-grid or bilingual-grid usage (deprecated)
 * - Only lang-pt or lang-en should be visible at a time
 * - Ensures proper CSS-based language switching
 */

export const validateBilingualSystem = () => {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check for deprecated grid classes
  const deprecatedGrids = document.querySelectorAll('.bible-bilingual-grid, .bilingual-grid');
  if (deprecatedGrids.length > 0) {
    warnings.push(
      `Found ${deprecatedGrids.length} deprecated bilingual grid(s). ` +
      `Use lang-pt/lang-en spans instead.`
    );
    deprecatedGrids.forEach((el, idx) => {
      const path = getElementPath(el);
      warnings.push(`  ${idx + 1}. ${path}`);
    });
  }

  // Check that only one language is visible
  const currentLang = document.body.getAttribute('data-language') || 'pt';
  const visibleLangPt = Array.from(document.querySelectorAll('.lang-pt')).filter(
    el => isVisible(el as HTMLElement)
  );
  const visibleLangEn = Array.from(document.querySelectorAll('.lang-en')).filter(
    el => isVisible(el as HTMLElement)
  );

  if (currentLang === 'pt' && visibleLangEn.length > 0) {
    errors.push(
      `Language set to PT but ${visibleLangEn.length} EN element(s) are visible`
    );
  }

  if (currentLang === 'en' && visibleLangPt.length > 0) {
    errors.push(
      `Language set to EN but ${visibleLangPt.length} PT element(s) are visible`
    );
  }

  // Check for text duplication (both languages showing)
  const suspiciousElements = findDuplicateContent();
  if (suspiciousElements.length > 0) {
    warnings.push(
      `Found ${suspiciousElements.length} element(s) that might show both languages:`
    );
    suspiciousElements.forEach((el, idx) => {
      warnings.push(`  ${idx + 1}. ${getElementPath(el)}`);
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    summary: {
      deprecatedGrids: deprecatedGrids.length,
      visiblePt: visibleLangPt.length,
      visibleEn: visibleLangEn.length,
      currentLanguage: currentLang,
    }
  };
};

function isVisible(el: HTMLElement): boolean {
  const style = window.getComputedStyle(el);
  return (
    style.display !== 'none' &&
    style.visibility !== 'hidden' &&
    style.opacity !== '0' &&
    el.offsetParent !== null
  );
}

function getElementPath(el: Element): string {
  const parts: string[] = [];
  let current: Element | null = el;
  
  while (current && current !== document.body) {
    let selector = current.tagName.toLowerCase();
    if (current.id) {
      selector += `#${current.id}`;
    } else if (current.className) {
      const classes = Array.from(current.classList).slice(0, 2).join('.');
      if (classes) selector += `.${classes}`;
    }
    parts.unshift(selector);
    current = current.parentElement;
  }
  
  return parts.join(' > ');
}

function findDuplicateContent(): Element[] {
  const suspicious: Element[] = [];
  const textNodes = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
  
  textNodes.forEach(node => {
    const text = node.textContent?.trim() || '';
    // Check if element contains both "/" separator or repeated content patterns
    if (text.includes(' / ') && text.split(' / ').length === 2) {
      const [part1, part2] = text.split(' / ');
      // If parts are similar length and both substantial, might be PT/EN duplicate
      if (Math.abs(part1.length - part2.length) < part1.length * 0.5 && part1.length > 10) {
        suspicious.push(node);
      }
    }
  });
  
  return suspicious;
}

// Auto-run validation in development
if (import.meta.env.DEV) {
  if (typeof window !== 'undefined') {
    // Wait for DOM to be fully loaded
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const result = validateBilingualSystem();
        
        if (result.warnings.length > 0 || result.errors.length > 0) {
          console.group('🌐 Bilingual System Validation');
          console.log('Summary:', result.summary);
          
          if (result.errors.length > 0) {
            console.error('❌ Errors:', result.errors);
          }
          
          if (result.warnings.length > 0) {
            console.warn('⚠️ Warnings:', result.warnings);
          }
          
          console.groupEnd();
        } else {
          console.log('✅ Bilingual system validation passed');
        }
      }, 1000);
    });

    // Re-validate when language changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'data-language'
        ) {
          setTimeout(() => {
            const result = validateBilingualSystem();
            if (result.errors.length > 0) {
              console.error('❌ Bilingual validation failed after language change:', result.errors);
            }
          }, 300);
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-language'],
    });
  }
}
