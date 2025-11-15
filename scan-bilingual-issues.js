#!/usr/bin/env node

/**
 * BILINGUAL CONTENT SCANNER
 * ========================
 * Script de varredura automática que detecta textos hardcoded PT/EN em todo o projeto
 * e gera um relatório detalhado com as ocorrências encontradas.
 * 
 * Uso: node scan-bilingual-issues.js
 */

const fs = require('fs');
const path = require('path');

// Padrões suspeitos que indicam conteúdo bilíngue misturado
const PATTERNS = {
  // Separadores PT/EN explícitos
  slashSeparator: /\s\/\s/g,
  pipeSeparator: /\s\|\s/g,
  
  // Marcadores de idioma
  languageMarkers: /(PT>|EN>|pt:|en:|\(PT\)|\(EN\))/gi,
  
  // Strings hardcoded comuns em português
  portugueseStrings: /(Carregando|Erro|Sucesso|Criar|Editar|Excluir|Salvar|Cancelar|Confirmar|Buscar|Filtrar|Voltar|Próximo|Anterior|Ver Mais|Ver Menos)/g,
  
  // Strings hardcoded comuns em inglês
  englishStrings: /(Loading|Error|Success|Create|Edit|Delete|Save|Cancel|Confirm|Search|Filter|Back|Next|Previous|View More|View Less)/g,
  
  // Texto seguido de tradução inline
  inlineTranslation: /[A-Za-zÀ-ÿ]+\s+\/\s+[A-Za-zÀ-ÿ]+/g,
};

// Extensões de arquivo para escanear
const FILE_EXTENSIONS = ['.tsx', '.ts', '.jsx', '.js'];

// Diretórios para ignorar
const IGNORE_DIRS = ['node_modules', 'dist', 'build', '.git', 'public'];

// Resultados da varredura
const results = {
  totalFiles: 0,
  filesWithIssues: 0,
  issues: [],
};

/**
 * Verifica se um diretório deve ser ignorado
 */
function shouldIgnoreDir(dir) {
  return IGNORE_DIRS.some(ignored => dir.includes(ignored));
}

/**
 * Verifica se um arquivo deve ser escaneado
 */
function shouldScanFile(file) {
  return FILE_EXTENSIONS.some(ext => file.endsWith(ext));
}

/**
 * Escaneia um arquivo em busca de problemas bilíngues
 */
function scanFile(filePath) {
  results.totalFiles++;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const fileIssues = [];

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    
    // Verifica cada padrão
    Object.entries(PATTERNS).forEach(([patternName, pattern]) => {
      const matches = line.match(pattern);
      
      if (matches && matches.length > 0) {
        // Filtra falsos positivos comuns
        const isFalsePositive = 
          line.includes('import') ||
          line.includes('export') ||
          line.includes('console.') ||
          line.includes('//') ||
          line.includes('/*') ||
          line.includes('*/') ||
          line.trim().startsWith('*');
        
        if (!isFalsePositive) {
          fileIssues.push({
            line: lineNumber,
            pattern: patternName,
            content: line.trim(),
            matches: matches,
          });
        }
      }
    });
  });

  if (fileIssues.length > 0) {
    results.filesWithIssues++;
    results.issues.push({
      file: filePath,
      issues: fileIssues,
    });
  }
}

/**
 * Escaneia recursivamente um diretório
 */
function scanDirectory(dir) {
  if (shouldIgnoreDir(dir)) return;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanDirectory(fullPath);
    } else if (entry.isFile() && shouldScanFile(entry.name)) {
      scanFile(fullPath);
    }
  });
}

/**
 * Gera relatório em formato Markdown
 */
function generateReport() {
  const timestamp = new Date().toISOString();
  let report = `# 🔍 BILINGUAL CONTENT SCAN REPORT
  
**Data:** ${timestamp}
**Arquivos Escaneados:** ${results.totalFiles}
**Arquivos com Problemas:** ${results.filesWithIssues}
**Total de Ocorrências:** ${results.issues.reduce((sum, file) => sum + file.issues.length, 0)}

---

`;

  if (results.filesWithIssues === 0) {
    report += `## ✅ Nenhum problema encontrado!

Todos os arquivos estão usando o sistema de tradução corretamente.
`;
  } else {
    report += `## ⚠️ Problemas Encontrados

`;

    results.issues.forEach(({ file, issues }) => {
      report += `### \`${file}\`\n\n`;
      report += `**${issues.length} ocorrência(s) encontrada(s)**\n\n`;

      issues.forEach(issue => {
        report += `- **Linha ${issue.line}** (${issue.pattern}):\n`;
        report += `  \`\`\`\n  ${issue.content}\n  \`\`\`\n`;
        report += `  Matches: ${JSON.stringify(issue.matches)}\n\n`;
      });

      report += `---\n\n`;
    });
  }

  report += `## 📋 Recomendações

### Para corrigir os problemas encontrados:

1. **Textos hardcoded PT/EN lado a lado** (ex: "Texto / Text"):
   - ❌ \`<h1>Título / Title</h1>\`
   - ✅ Use \`<BilingualContent>\` ou \`useTranslation()\`

2. **Strings hardcoded em código**:
   - ❌ \`<Button>Salvar</Button>\`
   - ✅ \`<Button>{t("save")}</Button>\`

3. **Marcadores de idioma** (PT>, EN>, etc.):
   - ❌ \`PT> Texto em português EN> English text\`
   - ✅ Use sistema de tradução com chaves separadas

### Próximos passos:

1. Revisar cada arquivo listado acima
2. Substituir textos hardcoded por chamadas a \`t()\`
3. Adicionar novas chaves em \`src/hooks/useTranslation.tsx\` se necessário
4. Testar ambos os idiomas (PT/EN) após as correções
5. Rodar este script novamente para verificar

---

**Script:** \`scan-bilingual-issues.js\`
`;

  return report;
}

/**
 * Main
 */
function main() {
  console.log('🔍 Iniciando varredura bilíngue...\n');

  const srcDir = path.join(__dirname, 'src');
  
  if (!fs.existsSync(srcDir)) {
    console.error('❌ Diretório src/ não encontrado!');
    process.exit(1);
  }

  scanDirectory(srcDir);

  const report = generateReport();
  const reportPath = path.join(__dirname, 'BILINGUAL_SCAN_REPORT.md');
  
  fs.writeFileSync(reportPath, report, 'utf8');

  console.log(`✅ Varredura completa!`);
  console.log(`📊 Arquivos escaneados: ${results.totalFiles}`);
  console.log(`⚠️  Arquivos com problemas: ${results.filesWithIssues}`);
  console.log(`📄 Relatório salvo em: ${reportPath}\n`);

  if (results.filesWithIssues > 0) {
    console.log('⚠️  Problemas encontrados! Revise o relatório para detalhes.');
    process.exit(1);
  } else {
    console.log('🎉 Nenhum problema encontrado!');
    process.exit(0);
  }
}

main();
