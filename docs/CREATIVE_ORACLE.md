# CREATIVE ORACLE - Documentação Técnica

## Visão Geral

O **Creative Oracle** é um sistema interativo de identificação de arquétipos criativos baseado na metodologia THEVØIDN13. Implementado como um componente React dialog, permite que usuários descubram seu perfil criativo através de um questionário contextualizado de 6 perguntas.

**Arquivo principal:** `src/components/CreativeOracle.tsx` (713 linhas)

**Tech stack:**
- React + TypeScript
- Recharts (radar visualization)
- Radix UI (dialog, tabs, tooltip)
- Bilingual (PT/EN)

---

## Arquitetura do Sistema

### 1. Estrutura de Dados

#### Arquétipos (4 tipos)

```typescript
const archetypes = {
  shadow: { name, description, message, strengths, challenges, recommendations },
  punk: { ... },
  buddy: { ... },
  gi: { ... }
}
```

Cada arquétipo representa um perfil criativo:
- **SHADOW**: Criador introspectivo, trabalha sozinho, autenticidade profunda
- **PUNK**: Revolucionário impulsivo, quebra para reconstruir, energia bruta
- **BUDDY**: Colaborador conectado, força na comunidade
- **GI**: Executor disciplinado, maestria técnica através da repetição

#### Perguntas Contextualizadas

Armazenadas em `src/components/CreativeOracle/data/contextualizedQuestions.ts`:

```typescript
type Question = {
  text: string;      // Português
  textEn: string;    // English
  options: Array<{
    text: string;
    textEn: string;
    archetype: string;  // shadow | punk | buddy | gi
    value: number;      // 1-3 (peso da escolha)
  }>;
}
```

Total de **6 perguntas**, cada uma com **4 opções** (uma para cada arquétipo).

#### Pesos de Processo

Cada pergunta também mapeia para estágios do processo criativo:

```typescript
processWeight: {
  observation: number,
  cocreation: number,
  documentation: number,
  reflection: number,
  expansion: number
}
```

---

### 2. Fluxo de Funcionamento

```
INÍCIO
  ↓
[JOURNEY ou KNOWLEDGE MODE]
  ↓
Journey → QUIZ (6 perguntas)
  ↓
Para cada resposta:
  - Incrementa score do arquétipo escolhido
  - Incrementa scores de processo
  - Avança para próxima pergunta
  ↓
RESULTADOS:
  - Arquétipo dominante (maior score)
  - Arquétipo secundário (segundo maior)
  - Radar chart
  - Hybrid archetype (se scores próximos)
  - Process timeline
  - Compatibility matrix
  - Personalized advice
  ↓
[EXPORTAR TXT]
```

---

### 3. Componentes e Subcomponentes

| Componente | Função | Localização |
|---|---|---|
| `CreativeOracle` | Componente principal | `src/components/CreativeOracle.tsx` |
| `LearnMode` | Modo de estudo (sem quiz) | `src/components/CreativeOracle/LearnMode.tsx` |
| `ProcessAnalysis` | Análise de estágios | `src/components/CreativeOracle/ProcessAnalysis.tsx` |
| `ProcessTimeline` | Timeline visual | `src/components/CreativeOracle/ProcessTimeline.tsx` |
| `CompatibilityMatrix` | Matriz de compatibilidade | `src/components/CreativeOracle/CompatibilityMatrix.tsx` |
| `HybridArchetypeReveal` | Detecção de híbridos | `src/components/CreativeOracle/HybridArchetypeReveal.tsx` |
| `ContextualQuote` | Citações contextuais | `src/components/CreativeOracle/ContextualQuote.tsx` |
| `PersonalizedAdvice` | Recomendações personalizadas | `src/components/CreativeOracle/PersonalizedAdvice.tsx` |

---

### 4. State Management

```typescript
// UI State
const [mode, setMode] = useState<"journey" | "knowledge">("journey");
const [started, setStarted] = useState(false);
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showResults, setShowResults] = useState(false);

// Quiz Data
const [answers, setAnswers] = useState<number[]>([]);
const [scores, setScores] = useState({ shadow: 0, punk: 0, buddy: 0, gi: 0 });
const [processScores, setProcessScores] = useState({
  observation: 0,
  cocreation: 0,
  documentation: 0,
  reflection: 0,
  expansion: 0
});

// Audio Control
const [isMuted, setIsMuted] = useState(false);
const [audio] = useState(() => new Audio("/audio/Shadow_In_The_Dark.mp3"));
```

---

### 5. Funções Principais

#### `handleAnswer(archetype, value, processWeight)`

Processa a resposta do usuário:
1. Adiciona `value` ao array de respostas
2. Incrementa `scores[archetype]` com `value`
3. Se `processWeight` existe, incrementa `processScores`
4. Avança para próxima pergunta ou mostra resultados

#### `getDominantArchetype()`

```typescript
const getDominantArchetype = () => {
  const entries = Object.entries(scores) as [keyof typeof archetypes, number][];
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  return sorted[0][0];
};
```

Retorna o arquétipo com maior score.

#### `getSecondaryArchetype()`

Retorna o segundo arquétipo com maior score (usado para híbridos).

#### `handleExportPDF()`

Gera arquivo `.txt` com formato ASCII-art contendo:
- Nome do arquétipo dominante/secundário
- Scores breakdown
- Descrição
- Forças, desafios e recomendações

---

### 6. Lógica de Arquétipo Híbrido

Se a diferença entre o score dominante e secundário for **< 6 pontos**, exibe o componente `HybridArchetypeReveal`:

```typescript
// Em HybridArchetypeReveal.tsx
const scoreDifference = dominantScore - secondaryScore;
if (scoreDifference < 6) {
  const hybridData = hybridArchetypes[`${dominant}-${secondary}`];
  // Exibe informações do híbrido
}
```

Dados de híbridos: `src/components/CreativeOracle/data/hybridArchetypes.ts`

---

### 7. Visualizações

#### Radar Chart

Usa `recharts` para plotar os 4 arquétipos:

```tsx
<RadarChart data={[
  { archetype: "SHADOW", value: scores.shadow },
  { archetype: "PUNK", value: scores.punk },
  { archetype: "BUDDY", value: scores.buddy },
  { archetype: "GI", value: scores.gi }
]}>
```

#### Process Timeline

Exibe scores de cada estágio do processo (observation, cocreation, etc.) como círculos coloridos. Scores mais altos = círculos mais fortes (verde), mais baixos = fracos (vermelho).

---

### 8. Bilinguismo

Todo texto usa condicionais baseadas em `language`:

```typescript
const { language } = useLanguage();

{language === 'pt' ? archetype.description : archetype.descriptionEn}
```

Os dados bilíngues estão embutidos nos objetos de arquétipos e perguntas.

---

### 9. Audio System

Toca `Shadow_In_The_Dark.mp3` durante o quiz:

```typescript
useEffect(() => {
  if (started && !isMuted) {
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(console.error);
  } else {
    audio.pause();
  }
}, [started, isMuted, audio]);
```

---

## Extensões Possíveis

1. **Mais perguntas**: Adicionar ao arquivo `contextualizedQuestions.ts`
2. **Novos arquétipos**: Expandir objeto `archetypes` e atualizar lógica de scoring
3. **Análise de tendências**: Salvar resultados no Supabase para análise agregada
4. **Recomendações dinâmicas**: Usar Lovable AI para gerar conselhos personalizados
5. **Modo comparação**: Permitir comparar resultados entre sessões

---

## Testing Checklist

- [ ] Todas as 6 perguntas avançam corretamente
- [ ] Scores de arquétipos são calculados corretamente
- [ ] Arquétipo dominante está correto
- [ ] Híbridos aparecem quando scores estão próximos
- [ ] Export TXT funciona e contém dados corretos
- [ ] Audio toca/pausa conforme esperado
- [ ] Bilinguismo funciona em todos os textos
- [ ] Radar chart renderiza corretamente
- [ ] Timeline de processo exibe valores corretos
- [ ] Reset limpa todo state

---

## Performance Notes

- Componente é **grande (713 linhas)** mas não causa re-renders desnecessários
- Audio é lazy-loaded apenas quando dialog abre
- Recharts pode ser pesado em dispositivos lentos (considerar lazy load)
- Considerar code-splitting se bundle crescer muito

---

## Referências

- Metodologia: `README.md`, `docs/PHILOSOPHY.md`
- Questions data: `src/components/CreativeOracle/data/contextualizedQuestions.ts`
- Hybrid data: `src/components/CreativeOracle/data/hybridArchetypes.ts`
- Exercises: `src/components/CreativeOracle/data/exercises.ts`
- Advice: `src/components/CreativeOracle/data/personalizedAdvice.ts`

---

**Última atualização:** 2025-01-21 (v2.1.3)
