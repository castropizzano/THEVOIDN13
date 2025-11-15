/**
 * UTILITÁRIO DE MIGRAÇÃO TIPOGRÁFICA
 * 
 * Funções helper para facilitar a migração gradual do sistema antigo
 * para o novo sistema tipográfico
 */

/**
 * Mapeia classes antigas para as novas
 */
export const typographyClassMap: Record<string, string> = {
  'bible-title': 'tvn-h1',
  'bible-subtitle': 'tvn-h2',
  'bible-body': 'tvn-body',
  'bible-body-large': 'tvn-body-large',
  'bible-body-small': 'tvn-body-small',
  'bible-link': 'tvn-link',
  'bible-section-spacing': '', // Removido - espaçamento automático
  'bible-block-spacing': '', // Removido - espaçamento automático
  'bible-bilingual-grid': 'bilingual-grid', // Mantido
};

/**
 * Converte classes antigas para novas
 * Útil para migração gradual
 */
export function migrateClassName(className: string): string {
  return className
    .split(' ')
    .map(cls => typographyClassMap[cls] || cls)
    .filter(cls => cls !== '')
    .join(' ');
}

/**
 * Remove espaçamentos manuais que agora são automáticos
 */
export function removeManualSpacing(className: string): string {
  return className
    .split(' ')
    .filter(cls => 
      !cls.match(/^(py|px|my|mx|mt|mb|space-y|space-x)-/) &&
      cls !== 'bible-section-spacing' &&
      cls !== 'bible-block-spacing'
    )
    .join(' ');
}

/**
 * Aplica migração completa de classe
 */
export function fullMigration(className: string): string {
  return removeManualSpacing(migrateClassName(className));
}
