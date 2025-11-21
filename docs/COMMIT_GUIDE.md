GUIA DE COMMITS (COMMIT GUIDE)

───────────────────────────────────────────────────────────────
FILOSOFIA
───────────────────────────────────────────────────────────────

Cada commit é um registro permanente no diário de bordo deste
memorial. É uma entrada de pesquisa — não uma nota técnica avulsa.

A mensagem deve ser tratada com o mesmo rigor estético e
conceitual do manifesto (README.md). O log de commits é, em si,
uma obra de processo.

(EN)
PHILOSOPHY

Every commit is a permanent record in this memorial's logbook.
It is a research entry — not a random technical note.

The message must be treated with the same aesthetic and
conceptual rigor as the manifesto (README.md). The commit log
is, in itself, a work of process.

───────────────────────────────────────────────────────────────
REGRA DE LINGUAGEM (BILÍNGUE)
───────────────────────────────────────────────────────────────

ATUALIZAÇÃO v2.1.3: Commits agora devem ser BILÍNGUES para
facilitar colaboração global sem perder a identidade local.

FORMATO OBRIGATÓRIO:

Título (Commit message):
TIPO(ESCOPO): MENSAGEM PT // MESSAGE EN

Descrição (Extended description):
Texto em português explicando O QUÊ e PORQUÊ.

(EN)
English text explaining WHAT and WHY.

IMPORTANTE:
- O título DEVE conter ambas as línguas separadas por " // "
- A descrição DEVE ter seção PT seguida de seção EN
- Mantenha clareza e concisão em ambas as versões

(EN)
BILINGUAL LANGUAGE RULE

UPDATE v2.1.3: Commits must now be BILINGUAL to facilitate
global collaboration without losing local identity.

MANDATORY FORMAT:

Title (Commit message):
TYPE(SCOPE): PT MESSAGE // EN MESSAGE

Description (Extended description):
Portuguese text explaining WHAT and WHY.

(EN)
English text explaining WHAT and WHY.

IMPORTANT:
- Title MUST contain both languages separated by " // "
- Description MUST have PT section followed by EN section
- Keep clarity and concision in both versions

───────────────────────────────────────────────────────────────
FORMATO DO TÍTULO (COMMIT MESSAGE)
───────────────────────────────────────────────────────────────

O título segue o padrão Conventional Commits, adaptado ao
estilo deste projeto:

TIPO(ESCOPO OPCIONAL): MENSAGEM PT // MESSAGE EN

(EN)
TITLE FORMAT (COMMIT MESSAGE)

The title follows the Conventional Commits pattern, adapted
to this project's style:

TYPE(OPTIONAL SCOPE): PT MESSAGE // EN MESSAGE

───────────────────────────────────────────────────────────────
TIPOS DE COMMIT (TYPE)
───────────────────────────────────────────────────────────────

Use os seguintes tipos para categorizar a práxis:

docs:
Alterações em arquivos de documentação, teoria ou manifesto.
(Ex: README.md, guias, atas, textos conceituais).

feat:
Adição de um novo recurso, asset, protótipo ou seção.
(Ex: um novo script em /src, uma nova galeria de imagens).

fix:
Correção de erro, bug, link quebrado ou typo.

style:
Alterações puramente estéticas.
(Ex: CSS, diagramação de um .md, formatação).

chore:
Manutenção do repositório ou tarefas técnicas de infraestrutura.
(Ex: atualização do .gitignore).

refactor:
Reestruturação de código ou arquivos sem alterar o resultado.
(Ex: mover arquivos para uma nova pasta).

(EN)
COMMIT TYPES (TYPE)

Use the following types to categorize the praxis:

docs:
Changes to documentation, theory, or manifesto files.
(Ex: README.md, guides, minutes, conceptual texts).

feat:
Addition of a new feature, asset, prototype, or section.
(Ex: a new script in /src, a new image gallery).

fix:
Correction of an error, bug, broken link, or typo.

style:
Purely aesthetic changes.
(Ex: CSS, .md layout, formatting).

chore:
Repository maintenance or technical infrastructure tasks.
(Ex: updating .gitignore).

refactor:
Restructuring code or files without changing the outcome.
(Ex: moving files to a new folder).

───────────────────────────────────────────────────────────────
ESCOPO (SCOPE)
───────────────────────────────────────────────────────────────

Opcional. Indica a seção do memorial afetada pela mudança.
Use nomes curtos e em minúsculas.

Exemplos: (readme), (lowmovie), (lowpressure), (portal)

(EN)
SCOPE

Optional. Indicates the section of the memorial affected
by the change. Use short, lowercase names.

Examples: (readme), (lowmovie), (lowpressure), (portal)

───────────────────────────────────────────────────────────────
DESCRIÇÃO (EXTENDED DESCRIPTION)
───────────────────────────────────────────────────────────────

Opcional, mas recomendada para commits complexos.

Use a descrição para detalhar O QUÊ e o PORQUÊ da mudança.
Sempre inclua versão PT seguida da versão EN.

(EN)
DESCRIPTION (EXTENDED DESCRIPTION)

Optional, but recommended for complex commits.

Use the description to detail WHAT and WHY of the change.
Always include PT version followed by EN version.

───────────────────────────────────────────────────────────────
EXEMPLOS DE COMMITS (FORMATO BILÍNGUE v2.1.3)
───────────────────────────────────────────────────────────────

EXEMPLO 1:

TÍTULO:
docs(oracle): ADICIONAR JSDOC E DOCS TÉCNICAS // ADD JSDOC AND TECHNICAL DOCS

DESCRIÇÃO:
Adiciona JSDoc completo aos componentes CreativeOracle e MindMap
para facilitar compreensão da lógica interna.

Cria docs/CREATIVE_ORACLE.md e docs/MINDMAP.md com:
- Arquitetura do sistema
- Estruturas de dados
- Fluxo de funcionamento
- Funções principais documentadas
- Checklist de testes

Atualiza COMMIT_GUIDE.md para exigir commits bilíngues (PT/EN).

(EN)
Adds complete JSDoc to CreativeOracle and MindMap components
to facilitate understanding of internal logic.

Creates docs/CREATIVE_ORACLE.md and docs/MINDMAP.md with:
- System architecture
- Data structures
- Operating flow
- Main functions documented
- Testing checklist

Updates COMMIT_GUIDE.md to require bilingual commits (PT/EN).

───────────────────────────────────────────────────────────────

EXEMPLO 2:

TÍTULO:
feat(search): IMPLEMENTAR BUSCA GLOBAL // IMPLEMENT GLOBAL SEARCH

DESCRIÇÃO:
Adiciona componente GlobalSearch com indexação de todo conteúdo
do memorial. Usa Fuse.js para busca fuzzy.

Permite buscar em projetos, textos, imagens e documentos PDF.

(EN)
Adds GlobalSearch component with full memorial content indexing.
Uses Fuse.js for fuzzy search.

Allows searching across projects, texts, images and PDF documents.

───────────────────────────────────────────────────────────────

EXEMPLO 3:

TÍTULO:
fix(audio): CORRIGIR AUTOPLAY DO MANIFESTO // FIX MANIFESTO AUTOPLAY

DESCRIÇÃO:
Resolve erro de autoplay bloqueado por política do navegador.
Agora exige interação do usuário antes de tocar áudio.

(EN)
Fixes autoplay error blocked by browser policy.
Now requires user interaction before playing audio.
