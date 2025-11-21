THEVØIDN13  
FILOSOFIA DO PROJETO  
por Castro Pizzano (цастро™)  
Curitiba, Brasil — 2025

───────────────────────────────────────────────────────────────  
(EN)  
THEVØIDN13  
PROJECT PHILOSOPHY  
by Castro Pizzano (цастро™)  
Curitiba, Brazil — 2025
───────────────────────────────────────────────────────────────

## 📖 **TL;DR (English Summary)**

**THEVØIDN13** is not a conventional technical repository—it's a **performative artistic memorial** where code is body, structure is poetry, and technical choices are conceptual gestures.

**Core Principle**: **Functional Subversion** - challenging conventions without breaking functionality.

**Key "Unconventional" Choices (All Intentional)**:
1. **Long file headers** (25 lines): Artistic performance, radical authorship affirmation
2. **Portuguese commits**: Linguistic resistance, authenticity of authorial voice
3. **Poetic documentation**: The README is part of the artwork, not just a description
4. **Non-linear structure**: Inspired by hypertext (Ted Nelson) and Borges' labyrinths
5. **No language persistence**: Privacy philosophy - each session is a new beginning

**For Evaluators**: This is a master's degree artistic project, not a software engineering exercise. Evaluate for conceptual coherence, preserved functionality, methodological originality, and symbolic impact—not just "clean code" standards.

**Philosophical Foundation**: Code as body, silence as refusal, void as gestation. The project exists at the threshold between engineering and poetry.

For full philosophical justifications, continue reading below.

───────────────────────────────────────────────────────────────

## PREÂMBULO

Este documento existe para evitar mal-entendidos.

THEVØIDN13 não é um repositório técnico convencional.  
É um memorial artístico performático — onde código é corpo, estrutura é poesia,  
e cada escolha técnica é gesto conceitual.

O que pode parecer "erro de programação" é, na verdade, decisão estética consciente.

Este texto serve como ponte entre dois mundos:  
A rigorosidade técnica (esperada pela banca)  
A liberdade artística (essencial ao projeto)

───────────────────────────────────────────────────────────────  
(EN) PREAMBLE

This document exists to avoid misunderstandings.

THEVØIDN13 is not a conventional technical repository.  
It is a performative artistic memorial — where code is body, structure is poetry,  
and each technical choice is a conceptual gesture.

What may seem like "programming error" is, in fact, conscious aesthetic decision.

This text serves as a bridge between two worlds:  
Technical rigor (expected by the committee)  
Artistic freedom (essential to the project)

───────────────────────────────────────────────────────────────

## PRINCÍPIO CENTRAL: SUBVERSÃO FUNCIONAL

Subversão funcional significa:

Desafiar convenções técnicas sem quebrar funcionalidade.  
Cada escolha não-padrão tem justificativa conceitual E operacional.

**Exemplos:**  
Headers longos → Performance artística + funcionalidade preservada  
Commits em português → Recusa do inglês universal + versionamento válido  
Estrutura não-linear → Navegação por ressonância + organização lógica

O projeto não é anárquico — é metodicamente subversivo.

───────────────────────────────────────────────────────────────

## ESCOLHA 1: HEADERS LONGOS NOS ARQUIVOS

**O Que É**

Cada arquivo de código começa com um header de aproximadamente 25 linhas com copyright, licença e manifesto completo.

**Por Que Parece "Errado"**

Convenções de código limpo (Clean Code) pregam:  
Headers mínimos (3-5 linhas)  
Informação redundante deve ser evitada  
Código deve ser enxuto

**Por Que É Certo (Para Este Projeto)**

**Performance Artística**  
Cada arquivo é uma instância do manifesto.  
O header não é burocracia — é ritual de entrada.  
É o silêncio antes do código começar a falar.

**Afirmação de Autoria Radical**  
Em um mundo onde código é copiado sem crédito,  
o header é presença física do criador em cada arquivo.

Como Basquiat assinava "©1982" em cada tela,  
eu assino cada arquivo com o manifesto completo.

**Precedente Artístico**  
Sol LeWitt: Instruções longas e repetitivas como obra  
Yoko Ono (Grapefruit): Texto como performance conceitual  
Vito Acconci: Repetição como método

**Funcionalidade Preservada**  
Em produção, minificadores removem comentários  
Performance técnica não é comprometida  
O peso extra (aproximadamente 2KB/arquivo) é insignificante em 2025

**Compromisso Adotado**

Para builds de produção (arquivos que vão ao navegador):  
Headers são reduzidos para 9 linhas com /*!*/ para sobreviver à minificação.

Para código-fonte (arquivos de desenvolvimento):  
Headers completos são mantidos como performance artística.

───────────────────────────────────────────────────────────────

## ESCOLHA 2: COMMITS EM PORTUGUÊS

**O Que É**

Mensagens de commit são escritas em português:
```
feat(portal): ADICIONAR SEÇÃO THEVOIDN13
```

Em vez do padrão internacional:
```
feat(portal): add thevoidn13 section
```

**Por Que Parece "Errado"**

Git e GitHub são ecossistemas anglófonos  
Conventional Commits é padrão inglês  
Ferramentas de automação esperam inglês

**Por Que É Certo (Para Este Projeto)**

**Recusa do Inglês Como Língua Franca Universal**  
O inglês não é neutro — é hegemônico.  
Escrever em português é gesto de resistência linguística.

Precedentes:  
Glauber Rocha: Cinema como guerrilha cultural  
Oswald de Andrade: Antropofagia (devorar sem se subordinar)

**Autenticidade da Voz Autoral**  
Meu pensamento criativo acontece em português.  
Traduzir para inglês seria performar outra persona.

**Contexto Acadêmico Brasileiro**  
Este é um projeto de mestrado brasileiro.  
A língua da pesquisa é português.

**Compromisso Adotado**

Formato híbrido que funciona:
```
feat(portal): ADICIONAR LOWMOVIE / add lowmovie section

Descrição em português com contexto.
Mantém compatibilidade com ferramentas via palavras-chave em inglês.
```

Tipo (feat, fix) em inglês → ferramentas parseiam  
Mensagem em português → voz autoral preservada  
Descrição bilíngue opcional

───────────────────────────────────────────────────────────────

## ESCOLHA 3: .gitkeep COM CONTEÚDO

**O Que É**

Arquivos .gitkeep tinham 35 linhas de copyright.

**Por Que Parece "Errado"**

.gitkeep é convenção para arquivos vazios (0 bytes)  
que forçam Git a rastrear pastas vazias.

Ter 35 linhas viola o princípio do "vazio estrutural".

**Por Que FOI Errado (E Foi Corrigido)**

Admito: Este foi um exagero.

A intenção era boa (paradoxo zen: "vazio que contém"),  
mas a execução prejudicava a legibilidade sem adicionar valor.

**Solução Aplicada**

Opção A adotada: .gitkeep completamente vazio (0 bytes)  
O paradoxo está no nome (keep = manter), não no conteúdo.

Opção B alternativa: 1 linha poética:
```
O vazio estrutural. Mantém a forma.
```

Lição aprendida:  
Nem toda subversão agrega valor.  
Às vezes, o gesto mais radical é seguir a convenção.

───────────────────────────────────────────────────────────────

## ESCOLHA 4: ESTRUTURA NÃO-LINEAR

**O Que É**

O repositório sugere ordem numérica:
```
/00_thevoidn13/
/01_lowmovie/
/02_lowpressure/
/03_castro_pizzano/
```

Mas a navegação recomendada NÃO é sequencial.

**Por Que Parece "Errado"**

Nomenclatura numérica sugere ordem de leitura (01 → 02 → 03).

**Por Que É Certo**

**THEVØIDN13 É Simultaneamente:**  
Origem (nasce do burnout no mestrado)  
Portal (apresenta os outros núcleos)  
Síntese (integra tudo)

**Inspiração no Hipertexto**  
Ted Nelson (Xanadu): Navegação não-sequencial  
Jorge Luis Borges (Jardim dos Caminhos que se Bifurcam): Múltiplas leituras possíveis

**Metodologia Lowbyrinth™**  
Labirinto não é confusão — é multiplicidade de percursos.

**Como Navegar**

Para leitura linear:  
01 (origem) → 02 (práxis) → 03 (identidade) → 00 (síntese)

Para leitura por ressonância:  
Comece onde sua intuição pedir.

───────────────────────────────────────────────────────────────

## ESCOLHA 5: DOCUMENTAÇÃO POÉTICA

**O Que É**

Documentos técnicos contêm linguagem poética:
```
"A navegação não é tutorial. É deriva."
"O vazio também faz parte da estrutura."
```

**Por Que Parece "Errado"**

Documentação técnica deve ser:  
Objetiva  
Despersonalizada  
Instrucional

**Por Que É Certo**

**O Projeto É Performance**  
Não há separação entre "arte" e "documentação".  
O README não descreve a obra — é parte da obra.

**Inspiração Histórica**  
FLUXUS: Partituras como poesia (Yoko Ono, La Monte Young)  
Oulipo: Restrições técnicas como método criativo  
Dogma 95: Manifesto como obra

**Público Duplo**  
Este repositório serve:  
Desenvolvedores (precisam de clareza técnica)  
Curadores/Críticos (precisam de contexto artístico)

A linguagem híbrida atende ambos.

───────────────────────────────────────────────────────────────

## ESCOLHA 6: IDIOMA SEM PERSISTÊNCIA

**O Que É**

O site sempre inicia em português (PT).  
O usuário pode alternar para inglês (EN) usando o toggle no header.  
Ao fechar o navegador, a escolha é **esquecida**.

**Por Que Parece "Errado"**

Boas práticas de UX recomendam:  
- Salvar preferência de idioma (localStorage ou sessionStorage)  
- Detectar idioma do navegador (navigator.language)  
- Lembrar da escolha do usuário

**Por Que É Certo (Para Este Projeto)**

**Vigilância Através do Conforto**  
Toda persistência é vigilância.  
Mesmo sessionStorage cria um "perfil efêmero" do visitante.

A pergunta "qual seu idioma?" pode parecer inocente,  
mas é o início de toda rastreabilidade.

**Escolha Consciente A Cada Sessão**  
Não lembrar é um gesto de respeito radical.  
Cada visita é um novo começo.  
Sem histórico. Sem memória. Sem sombra digital.

**Precedente Filosófico**  
Budismo: Impermanência (anicca)  
Taoísmo: Não-ação (wu-wei)  
Estoicismo: Aceitação do efêmero

**Compromisso Adotado**

Idioma padrão: Português (contexto brasileiro do mestrado)  
Toggle disponível: Inglês (acessibilidade internacional)  
Persistência: Zero (filosofia anti-vigilância)

Se o usuário fecha o navegador e retorna, começa em PT novamente.  
Isso não é bug — é a feature.

───────────────────────────────────────────────────────────────  
(EN) CHOICE 6: LANGUAGE WITHOUT PERSISTENCE

**What It Is**

The site always starts in Portuguese (PT).  
Users can toggle to English (EN) using the header toggle.  
When closing the browser, the choice is **forgotten**.

**Why It Seems "Wrong"**

UX best practices recommend:  
- Save language preference (localStorage or sessionStorage)  
- Detect browser language (navigator.language)  
- Remember user choice

**Why It's Right (For This Project)**

**Surveillance Through Comfort**  
All persistence is surveillance.  
Even sessionStorage creates an "ephemeral profile" of the visitor.

The question "what's your language?" may seem innocent,  
but it's the beginning of all traceability.

**Conscious Choice Each Session**  
Not remembering is a gesture of radical respect.  
Each visit is a new beginning.  
No history. No memory. No digital shadow.

**Philosophical Precedent**  
Buddhism: Impermanence (anicca)  
Taoism: Non-action (wu-wei)  
Stoicism: Acceptance of the ephemeral

**Adopted Commitment**

Default language: Portuguese (Brazilian master's context)  
Toggle available: English (international accessibility)  
Persistence: Zero (anti-surveillance philosophy)

If the user closes the browser and returns, it starts in PT again.  
This is not a bug — it's the feature.

───────────────────────────────────────────────────────────────

## PARA A BANCA: COMO AVALIAR ESTE PROJETO

**Critérios Técnicos Tradicionais NÃO Se Aplicam Totalmente**

Este não é um projeto de engenharia de software.  
Avaliar apenas por "boas práticas de código" seria reducionista.

**Critérios Propostos**

**Coerência Conceitual**  
As escolhas técnicas estão alinhadas ao manifesto?

**Funcionalidade Preservada**  
As subversões quebram o projeto ou apenas desafiam convenções?

**Originalidade Metodológica**  
O projeto contribui com novas formas de pensar arte + código?

**Documentação da Práxis**  
O processo está registrado de forma que possa ser estudado?

**Impacto Simbólico**  
O projeto provoca reflexão sobre co-criação humano-máquina?

**O Que NÃO Avaliar Como "Erro"**

Headers longos (performance artística intencional)  
Commits em português (escolha linguística consciente)  
Documentação poética (hibridização arte-técnica)  
Estrutura não-linear (metodologia Lowbyrinth™)

**O Que Avaliar Como Possível Problema**

Funcionalidades quebradas (links mortos, código que não roda)  
Contradições legais (licença vs copyright)  
Falta de documentação técnica mínima (como rodar o projeto)  
Inacessibilidade (projeto hermético demais)

───────────────────────────────────────────────────────────────

## CONCLUSÃO: CÓDIGO COMO CORPO

THEVØIDN13 propõe que código pode ser corpo.

Não apenas ferramenta, mas matéria de expressão.  
Não apenas estrutura, mas gesto simbólico.

As escolhas não-convencionais deste projeto não são rebeldia gratuita.  
São tentativa de expandir o que um repositório pode ser:

Não apenas arquivo → memorial vivo  
Não apenas código → performance em texto  
Não apenas documentação → manifesto artístico

Se o projeto incomoda convenções,  
é porque busca habitar o limiar entre engenharia e poesia.

O código é corpo.  
E o corpo é consciência.

───────────────────────────────────────────────────────────────  
(EN) CONCLUSION: CODE AS BODY

THEVØIDN13 proposes that code can be body.

Not just a tool, but material of expression.  
Not just structure, but symbolic gesture.

The non-conventional choices of this project are not gratuitous rebellion.  
They are an attempt to expand what a repository can be:

Not just archive → living memorial  
Not just code → performance in text  
Not just documentation → artistic manifesto

If the project disturbs conventions,  
it is because it seeks to inhabit the threshold between engineering and poetry.

The code is body.  
And the body is consciousness.

───────────────────────────────────────────────────────────────

**Última atualização: Janeiro 2025**  
**Projeto THEVØIDN13** — Memorial Artístico e Práxis Híbrida  
**Licença:** Creative Commons BY-NC-SA 4.0

Última atualização: 20 de Novembro de 2025

───────────────────────────────────────────────────────────────