# MINDMAP - Documentação Técnica

## Visão Geral

O **MindMap** (também chamado **Creative Ops Process Map**) é uma visualização interativa do processo completo de criação do Memorial Artístico THEVØIDN13. Mostra as **7 etapas** da transformação de memórias brutas em interface digital viva.

**Arquivo principal:** `src/components/MindMap.tsx` (664 linhas)

**Tech stack:**
- React + TypeScript
- Radix UI (dialog, tooltip)
- Bilingual (PT/EN)

---

## Arquitetura do Sistema

### 1. Estrutura de Dados

#### ProcessStep Type

```typescript
type ProcessStep = {
  id: string;              // Identificador único (ex: "01_input")
  titlePt: string;         // Título em português
  titleEn: string;         // Título em inglês
  contentPt: string[];     // Array de parágrafos descritivos (PT)
  contentEn: string[];     // Array de parágrafos descritivos (EN)
  codePt: string;          // Bloco de código ASCII-art (PT)
  codeEn: string;          // Bloco de código ASCII-art (EN)
  connections: number[];   // Índices de steps conectados
  connectionType: string;  // Tipo de conexão (feeds_into, transforms_into, etc.)
};
```

#### 7 Etapas do Processo

```
00: INTRODUÇÃO AO PROCESSO
    ↓ feeds_into
01: INPUT::MEMORIAL_ARTÍSTICO (coleta de material bruto)
    ↓ transforms_into
02: PROCESS::SHADOW_INTERFACE (organização e tradução)
    ↓ enables
03: MAP::CREATIVE_OPS (mapeamento de operações)
    ↓ structures
04: LINK::TOOLS (desenvolvimento de ferramentas)
    ↓ implements
05: OUTPUT::SHADOW_INTERFACE (construção da interface)
    ↓ outputs_to
06: DEPLOY::PRODUCTION (publicação)
    ↓ enables
07: STATUS::CONTINUOUS_EVOLUTION (evolução contínua)
    ↓ loops_back → 01-06
```

---

### 2. Conexões Entre Etapas

Cada step tem um array `connections` que aponta para outros steps:

```typescript
{
  id: "02_process",
  connections: [3, 4],  // Conecta aos steps 3 e 4
  connectionType: "enables"
}
```

**Tipos de conexão:**

| Tipo | PT | EN | Significado |
|---|---|---|---|
| `feeds_into` | alimenta | feeds into | Fornece material para |
| `transforms_into` | transforma em | transforms into | Converte-se em |
| `enables` | habilita | enables | Torna possível |
| `structures` | estrutura | structures | Organiza e define |
| `implements` | implementa | implements | Executa concretamente |
| `outputs_to` | produz | outputs to | Gera como resultado |
| `loops_back` | retorna para | loops back to | Ciclo contínuo |

---

### 3. Fluxo de Funcionamento

```
[FEATURE CARD] → Click
  ↓
[DIALOG ABRE]
  ↓
[STEP VIEW] (padrão)
  - Exibe step atual
  - Navegação: Previous / Next
  - Toggle connections
  - Progress bar
  ↓
[TIMELINE VIEW] (alternativo)
  - Exibe todos steps horizontalmente
  - Scroll para step clicado
  - Seleção direta de qualquer step
```

---

### 4. State Management

```typescript
// UI State
const [isOpen, setIsOpen] = useState(false);                  // Dialog aberto/fechado
const [currentStep, setCurrentStep] = useState(0);             // Step atual (0-7)
const [showConnections, setShowConnections] = useState(false); // Mostra conexões
const [viewMode, setViewMode] = useState<'step' | 'timeline'>('step');
const timelineRef = useRef<HTMLDivElement>(null);             // Ref para scroll
```

---

### 5. Funções Principais

#### `handleNext()` / `handlePrevious()`

Navegação linear pelos steps:

```typescript
const handleNext = () => {
  if (currentStep < processSteps.length - 1) {
    setCurrentStep(prev => prev + 1);
  }
};
```

#### `handleReset()`

Volta para o início (step 0).

#### `scrollToStep(stepIndex)`

No modo timeline, rola horizontalmente até o step selecionado:

```typescript
const scrollToStep = (stepIndex: number) => {
  if (timelineRef.current) {
    const stepElement = timelineRef.current.children[stepIndex] as HTMLElement;
    if (stepElement) {
      stepElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      });
    }
  }
};
```

#### `getProgressBar()`

Gera barra de progresso ASCII:

```typescript
const getProgressBar = () => {
  const filled = currentStep + 1;
  const total = processSteps.length;
  const percentage = Math.round((filled / total) * 100);
  const barLength = 16;
  const filledLength = Math.round((filled / total) * barLength);
  return {
    bar: '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength),
    percentage
  };
};
```

Exemplo: `████████████░░░░ 75%`

#### `getConnectionLabel(type)`

Traduz tipo de conexão:

```typescript
const getConnectionLabel = (type: string) => {
  const labels: Record<string, { pt: string; en: string }> = {
    feeds_into: { pt: "alimenta", en: "feeds into" },
    // ...
  };
  return language === 'pt' ? labels[type]?.pt : labels[type]?.en;
};
```

---

### 6. Visualização de Conexões

Quando `showConnections` é `true`, exibe badges das conexões:

```tsx
{showConnections && currentStepData.connections.length > 0 && (
  <div>
    <div className="text-primary text-sm font-bold">
      {language === 'pt' ? 'CONEXÕES:' : 'CONNECTIONS:'}
    </div>
    {currentStepData.connections.map(connIndex => {
      const connectedStep = processSteps[connIndex];
      return (
        <Badge key={connIndex}>
          {language === 'pt' ? connectedStep.titlePt : connectedStep.titleEn}
        </Badge>
      );
    })}
  </div>
)}
```

---

### 7. Modos de Visualização

#### Step View (padrão)

- Mostra **um step por vez**
- Navegação: botões Previous/Next
- Progress bar no topo
- Botão "Show Connections"
- Layout vertical

#### Timeline View

- Mostra **todos steps horizontalmente**
- Scroll horizontal
- Click em qualquer step para ver detalhes
- Layout horizontal (flex-row)

Toggle entre modos:

```tsx
<Button onClick={() => setViewMode(viewMode === 'step' ? 'timeline' : 'step')}>
  {viewMode === 'step' ? 'TIMELINE' : 'STEP'} VIEW
</Button>
```

---

### 8. Bilinguismo

Usa hook `useTranslation()`:

```typescript
const { t, language } = useTranslation();

{language === 'pt' ? currentStepData.titlePt : currentStepData.titleEn}
```

Todos os textos (títulos, conteúdos, códigos) têm versões PT/EN.

---

### 9. Estilo Visual

- **Background:** `bg-black/90` com border `border-primary/30`
- **Typography:** `font-mono` (monospace)
- **Colors:** accent, primary, muted-foreground (design system)
- **Layout:** Responsive (mobile-first)
- **Animations:** `animate-fade-in` para conexões

---

## Dados dos Steps

### Step 00: INTRODUÇÃO

**Conteúdo:**
- Visão geral do processo completo
- Sistema de operações criativas
- 2 anos de coleta de material

**Code:**
```
├─ ETAPAS: 7 fases
├─ TEMPO: 2 anos de coleta
└─ OUTPUT: Memorial digital interativo
```

### Step 01: INPUT

**Conteúdo:**
- Diários pessoais e cadernos
- Storyboards e concept art
- Dissertação acadêmica
- Arquivos RAW (vídeo/áudio)
- Entrevistas com colaboradores
- Material de projetos (LowMovie, LowPressure, Casa Treze)

**Code:**
```
INPUT::SOURCES {
  diarios: 'memórias brutas',
  projetos: 'LowMovie | LowPressure | C13',
  entrevistas: 'colaboradores',
  arquivos: 'RAW visual/audio',
  dissertacao: 'teoria acadêmica'
}
```

### Step 02: PROCESS

**Conteúdo:**
- THEVØIDN13 como interface de processamento
- Organização cronológica e temática
- Tradução PT/EN
- Conversão de formatos
- Indexação
- Conexões não-lineares

**Code:**
```
PROCESS::PIPELINE {
  organize() → cronologia + tema,
  crossReference() → projetos interligados,
  translate() → bilinguismo total,
  digitize() → conversão de formatos,
  index() → sistema de busca,
  connect() → relações não-lineares
}
```

### Step 03: MAP

**Conteúdo:**
- Cada projeto = nó na rede
- Definição de arquétipos (Shadow, Punk, Buddy, GI)
- Mapeamento de influências (cinema, quadrinhos, filosofia)
- Documentação de processos
- Identificação de padrões

**Code:**
```
MAP::STRUCTURE {
  nodes: ['filmes', 'HQs', 'sites', 'zines'],
  archetypes: ['shadow', 'punk', 'buddy', 'gi'],
  influences: ['cinema', 'comics', 'philosophy'],
  patterns: 'identificação de recorrências',
  network: 'conexões transversais'
}
```

### Step 04: TOOLS

**Conteúdo:**
- Creative Oracle
- Prompt Library
- Still Generator
- Global Search
- PDF Viewers
- Audio Players
- Interactive Timelines

**Code:**
```
TOOLS::INTERACTIVE {
  oracle: 'arquétipos criativos',
  library: 'prompts IA',
  generator: 'stills cinematográficos',
  search: 'busca global',
  viewers: 'documentos + áudio',
  timeline: 'cronologia visual'
}
```

### Step 05: INTERFACE

**Conteúdo:**
- Design system code-like
- Tipografia Bible v13
- Dark mode com acentos vermelho/verde
- React + TypeScript
- Mobile-first
- WCAG 2.1 AA

**Code:**
```
INTERFACE::DESIGN {
  style: 'code-like terminal',
  typography: 'Bible v13',
  colors: 'dark + red/green accents',
  tech: 'React + TypeScript',
  responsive: 'mobile-first',
  a11y: 'WCAG 2.1 AA'
}
```

### Step 06: DEPLOY

**Conteúdo:**
- Lovable Cloud com CI/CD
- Supabase backend
- Lighthouse 100
- SEO + structured data
- PWA
- Analytics

**Code:**
```
DEPLOY::PRODUCTION {
  host: 'Lovable Cloud',
  backend: 'Supabase',
  performance: 'Lighthouse 100',
  seo: 'structured data',
  pwa: 'offline ready',
  analytics: 'engagement tracking'
}
```

### Step 07: EVOLUTION

**Conteúdo:**
- Organismo vivo em evolução
- Novas funcionalidades continuamente
- Conteúdo atualizado
- Ferramentas de IA refinadas
- Comunidade pode interagir
- Processo público e transparente

**Code:**
```
STATUS::LIVE {
  state: 'em evolução contínua',
  updates: 'novos projetos',
  community: 'interação aberta',
  experiments: 'documentação real-time',
  transparency: 'processo público',
  interface: 'THEVØIDN13 ativo'
}
```

---

## Extensões Possíveis

1. **Zoom nos nós**: Permitir expandir cada step em sub-steps
2. **Visualização de grafo**: Usar D3.js ou Cytoscape para mostrar rede completa
3. **Histórico de navegação**: Salvar caminho do usuário pelo mapa
4. **Anotações**: Permitir usuário adicionar notas em cada step
5. **Exportar mapa**: Gerar PDF ou imagem do processo completo

---

## Testing Checklist

- [ ] Navegação Next/Previous funciona
- [ ] Timeline scroll funciona
- [ ] Click em step no timeline atualiza currentStep
- [ ] Conexões aparecem quando toggle ativado
- [ ] Progress bar atualiza corretamente
- [ ] Reset volta para step 0
- [ ] Bilinguismo funciona em todos textos
- [ ] Dialog fecha e reseta state
- [ ] Responsividade mobile funciona
- [ ] Tooltips aparecem corretamente

---

## Performance Notes

- Componente é **grande (664 linhas)** mas state é leve
- Timeline mode pode ter problema em mobile se muitos steps (considerar virtual scroll)
- Considerar lazy load de step content se adicionar muito mais conteúdo
- Scroll behavior usa `smooth` (pode ser desativado para a11y)

---

## Referências

- Metodologia: `README.md`, `docs/PHILOSOPHY.md`, `docs/ARCHITECTURE.md`
- Design system: `src/index.css`, `tailwind.config.ts`
- Translation hook: `src/hooks/useTranslation.tsx`

---

**Última atualização:** 2025-01-21 (v2.1.3)
