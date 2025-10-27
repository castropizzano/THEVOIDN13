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
REGRA DE LINGUAGEM
───────────────────────────────────────────────────────────────

Títulos (Commit message) e descrições (Extended description)
DEVEM ser escritos em PORTUGUÊS.

A linguagem deve ser direta, cirúrgica e em conformidade com o
estilo autoral do projeto.

(EN)
LANGUAGE RULE

Titles (Commit message) and descriptions (Extended description)
MUST be written in PORTUGUESE.

The language must be direct, surgical, and consistent with the
project’s authorial style.

───────────────────────────────────────────────────────────────
FORMATO DO TÍTULO (COMMIT MESSAGE)
───────────────────────────────────────────────────────────────

O título segue o padrão Conventional Commits, adaptado ao
estilo deste projeto:

TIPO(ESCOPO OPCIONAL): MENSAGEM EM CAIXA ALTA

(EN)
TITLE FORMAT (COMMIT MESSAGE)

The title follows the Conventional Commits pattern, adapted
to this project’s style:

TYPE(OPTIONAL SCOPE): MESSAGE IN ALL CAPS

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
Mantenha o texto em português, limpo e direto.

(EN)
DESCRIPTION (EXTENDED DESCRIPTION)

Optional, but recommended for complex commits.

Use the description to detail WHAT and WHY of the change.
Keep the text in Portuguese, clean, and direct.

───────────────────────────────────────────────────────────────
EXEMPLO DE COMMIT
───────────────────────────────────────────────────────────────

TÍTULO:
docs(lowmovie): ADICIONAR ATA DE QUALIFICAÇÃO (PT/EN)

DESCRIÇÃO:
Inclui o documento oficial da banca de qualificação do mestrado.
Define o status “pós-qualificação” do projeto.
Adiciona resumo em inglês para contexto universal.

(EN)
COMMIT EXAMPLE

TITLE:
docs(lowmovie): ADICIONAR ATA DE QUALIFICAÇÃO (PT/EN)

DESCRIPTION:
Includes the official document from the master's qualification board.
Defines the project’s “post-qualification” status.
Adds an English summary for universal context.
