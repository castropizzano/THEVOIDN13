/**
 * Document Checker Utility
 * Automatically validates that PDF links in the application exist
 */

export interface DocumentCheck {
  path: string;
  exists: boolean;
  error?: string;
}

/**
 * List of all PDF documents that should be available in the application
 */
export const REQUIRED_DOCUMENTS = [
  '/documents/Release_CasaTrezeStudio.pdf',
  '/documents/Memorial_Academico_v3.pdf',
  '/documents/LowPressure_brandbook.pdf',
  '/documents/LowMovie_brandbook.pdf',
  '/documents/THEVOIDN13_ShadowInterfaceBible_v13.pdf',
] as const;

/**
 * Check if a document exists by making a HEAD request
 */
export const checkDocument = async (path: string): Promise<DocumentCheck> => {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return {
      path,
      exists: response.ok,
      error: response.ok ? undefined : `HTTP ${response.status}`,
    };
  } catch (error) {
    return {
      path,
      exists: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Check all required documents
 */
export const checkAllDocuments = async (): Promise<DocumentCheck[]> => {
  const checks = await Promise.all(
    REQUIRED_DOCUMENTS.map(doc => checkDocument(doc))
  );
  return checks;
};

/**
 * Get a summary of missing documents
 */
export const getMissingDocuments = (checks: DocumentCheck[]): DocumentCheck[] => {
  return checks.filter(check => !check.exists);
};

/**
 * Log document check results to console (useful for debugging)
 */
export const logDocumentChecks = async (): Promise<void> => {
  console.group('📄 Document Availability Check');
  const checks = await checkAllDocuments();
  const missing = getMissingDocuments(checks);
  
  checks.forEach(check => {
    const icon = check.exists ? '✅' : '❌';
    const status = check.exists ? 'Available' : `Missing (${check.error})`;
    console.log(`${icon} ${check.path}: ${status}`);
  });
  
  if (missing.length > 0) {
    console.warn(`⚠️ ${missing.length} document(s) missing`);
  } else {
    console.log('✅ All documents available');
  }
  
  console.groupEnd();
};
