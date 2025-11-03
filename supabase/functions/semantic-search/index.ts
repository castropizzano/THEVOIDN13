import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { query } = await req.json();

    if (!query || query.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Query is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'AI service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Semantic search request:', query);

    // Content context from THEVØIDN13 memorial
    const memorialContext = `
THEVØIDN13 Memorial Content Index:

1. MANIFESTO INTEGRADO
- O vazio não é falta, é incubação de forma
- Silêncio como respiração
- THEVØIDN13 como presença que respira onde o corpo falha

2. ORIGEM E PROPÓSITO
- Lugar seguro para desaparecer
- Inconsciente ganhando corpo
- Décimo terceiro andar do inconsciente

3. FILOSOFIA CENTRAL
- Espaço entre mundos
- Travessia e ritmo
- Ética do silêncio

4. ENTIDADE THEVØIDN13
- Nome da sombra
- Número treze como assinatura do retorno
- Absorção e não reação

5. LOWMOVIE (Dissertação)
- Processo matricial CasaTrezeStudio®
- LowPressure™ crew de skate
- Filme-processo e pesquisa

6. AUTOR: Castro Pizzano (цастро™)
- Práxis híbrida
- Anti-branding
- Co-criação humano-máquina

7. FERRAMENTAS CRIATIVAS
- Oráculo Criativo (AI guidance)
- Gerador de Stills (visual narratives)
- Biblioteca de Prompts
- Mapa Mental

8. STACK TÉCNICO
- React + TypeScript + Vite
- Tailwind CSS design system
- Shadow Interface Bible v13
- Lovable Cloud backend
- Security: 95/100 score
`;

    // Use Lovable AI for semantic understanding
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a semantic search assistant for the THEVØIDN13 artistic memorial. Your task is to find the most relevant sections based on user queries.

Context about the memorial:
${memorialContext}

When a user searches, return a JSON array of relevant results with:
- section: section name
- relevance: number 0-100
- excerpt: brief relevant excerpt
- path: URL path (e.g., "/", "/dissertacao", "/autor")

Focus on conceptual and thematic matches, not just keywords. Understand Portuguese and English queries.`
          },
          {
            role: 'user',
            content: `Search query: "${query}"\n\nReturn the top 5 most relevant sections as JSON array.`
          }
        ],
        temperature: 0.3,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      
      // Fallback to simple keyword matching
      return new Response(
        JSON.stringify({
          results: getSimpleFallbackResults(query),
          fallback: true
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices?.[0]?.message?.content;
    
    if (!content) {
      return new Response(
        JSON.stringify({
          results: getSimpleFallbackResults(query),
          fallback: true
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract JSON from response (might be wrapped in markdown code blocks)
    let results;
    try {
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      results = jsonMatch ? JSON.parse(jsonMatch[0]) : JSON.parse(content);
    } catch {
      results = getSimpleFallbackResults(query);
    }

    console.log('Search results:', results.length);

    return new Response(
      JSON.stringify({ results }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Semantic search error:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        results: []
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

// Simple fallback when AI is unavailable
function getSimpleFallbackResults(query: string): Array<any> {
  const lowerQuery = query.toLowerCase();
  const allSections = [
    {
      section: 'Manifesto Integrado',
      excerpt: 'Não há começo. Há apenas o instante em que o silêncio decide respirar.',
      path: '/',
      relevance: 0
    },
    {
      section: 'LowMovie (Dissertação)',
      excerpt: 'Processo matricial de criação: CasaTrezeStudio®, LowPressure™, LowMovie™',
      path: '/dissertacao',
      relevance: 0
    },
    {
      section: 'Autor: Castro Pizzano',
      excerpt: 'Práxis híbrida explorando co-criação humano-máquina',
      path: '/autor',
      relevance: 0
    },
    {
      section: 'Portfolio de Vídeos',
      excerpt: 'Catálogo completo de trabalhos audiovisuais',
      path: '/videos',
      relevance: 0
    },
  ];

  // Simple keyword matching
  return allSections
    .map(section => ({
      ...section,
      relevance: (
        (section.section.toLowerCase().includes(lowerQuery) ? 40 : 0) +
        (section.excerpt.toLowerCase().includes(lowerQuery) ? 30 : 0)
      )
    }))
    .filter(s => s.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 5);
}
