import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, TrendingDown, Minus, Calendar, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { OracleScan } from '@/hooks/useOracleHistory';

const archetypeNames: Record<string, { pt: string; en: string }> = {
  'Visionário': { pt: 'Visionário', en: 'Visionary' },
  'Artesão': { pt: 'Artesão', en: 'Craftsman' },
  'Alquimista': { pt: 'Alquimista', en: 'Alchemist' },
  'Contador de Histórias': { pt: 'Contador de Histórias', en: 'Storyteller' },
  'Provocador': { pt: 'Provocador', en: 'Provocateur' },
};

interface EvolutionAnalysisProps {
  scans: OracleScan[];
  onDeleteScan: (id: string) => void;
  onClearHistory: () => void;
}

export const EvolutionAnalysis = ({ scans, onDeleteScan, onClearHistory }: EvolutionAnalysisProps) => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  if (scans.length < 2) {
    return (
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            {isEnglish ? 'Evolution Timeline' : 'Linha do Tempo de Evolução'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center py-8">
            {isEnglish 
              ? 'Complete at least 2 scans to see your creative evolution over time.'
              : 'Complete pelo menos 2 scans para ver sua evolução criativa ao longo do tempo.'}
          </p>
        </CardContent>
      </Card>
    );
  }

  // Preparar dados para o gráfico de evolução temporal
  const timelineData = [...scans].reverse().map((scan, index) => ({
    scan: `#${scans.length - index}`,
    date: scan.date,
    ...scan.archetypeScores,
  }));

  // Comparar primeiro e último scan
  const firstScan = scans[scans.length - 1];
  const latestScan = scans[0];

  const archetypeChanges = Object.keys(latestScan.archetypeScores).map(archetype => {
    const change = latestScan.archetypeScores[archetype] - firstScan.archetypeScores[archetype];
    return {
      archetype,
      change,
      current: latestScan.archetypeScores[archetype],
      previous: firstScan.archetypeScores[archetype],
    };
  }).sort((a, b) => Math.abs(b.change) - Math.abs(a.change));

  const processChanges = Object.keys(latestScan.processScores).map(process => {
    const change = latestScan.processScores[process] - firstScan.processScores[process];
    return {
      process,
      change,
      current: latestScan.processScores[process],
      previous: firstScan.processScores[process],
    };
  }).sort((a, b) => Math.abs(b.change) - Math.abs(a.change));

  // Dados para comparação radar
  const radarData = Object.keys(latestScan.archetypeScores).map(archetype => ({
    archetype: isEnglish ? archetypeNames[archetype]?.en || archetype : archetype,
    [isEnglish ? 'Latest' : 'Atual']: latestScan.archetypeScores[archetype],
    [isEnglish ? 'First' : 'Primeiro']: firstScan.archetypeScores[archetype],
  }));

  const getTrendIcon = (change: number) => {
    if (Math.abs(change) < 3) return <Minus className="w-4 h-4" />;
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    return <TrendingDown className="w-4 h-4 text-red-500" />;
  };

  const getTrendColor = (change: number) => {
    if (Math.abs(change) < 3) return 'text-muted-foreground';
    if (change > 0) return 'text-green-500';
    return 'text-red-500';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header com controles */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">
            {isEnglish ? 'Creative Evolution' : 'Evolução Criativa'}
          </h3>
          <p className="text-muted-foreground">
            {isEnglish 
              ? `Analyzing ${scans.length} scans from ${firstScan.date} to ${latestScan.date}`
              : `Analisando ${scans.length} scans de ${firstScan.date} até ${latestScan.date}`}
          </p>
        </div>
        <Button variant="destructive" size="sm" onClick={onClearHistory}>
          <Trash2 className="w-4 h-4 mr-2" />
          {isEnglish ? 'Clear History' : 'Limpar Histórico'}
        </Button>
      </div>

      {/* Gráfico de Linha - Evolução Temporal */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>
            {isEnglish ? 'Archetype Evolution Timeline' : 'Linha do Tempo de Evolução dos Arquétipos'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/20" />
              <XAxis dataKey="scan" className="text-xs" />
              <YAxis domain={[0, 100]} className="text-xs" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="Visionário" stroke="hsl(var(--primary))" strokeWidth={2} />
              <Line type="monotone" dataKey="Artesão" stroke="hsl(var(--chart-2))" strokeWidth={2} />
              <Line type="monotone" dataKey="Alquimista" stroke="hsl(var(--chart-3))" strokeWidth={2} />
              <Line type="monotone" dataKey="Contador de Histórias" stroke="hsl(var(--chart-4))" strokeWidth={2} />
              <Line type="monotone" dataKey="Provocador" stroke="hsl(var(--chart-5))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Comparação Radar */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>
            {isEnglish ? 'First vs Latest Scan Comparison' : 'Comparação: Primeiro vs Último Scan'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={radarData}>
              <PolarGrid className="stroke-border/20" />
              <PolarAngleAxis dataKey="archetype" className="text-xs" />
              <PolarRadiusAxis domain={[0, 100]} className="text-xs" />
              <Radar 
                name={isEnglish ? 'First' : 'Primeiro'}
                dataKey={isEnglish ? 'First' : 'Primeiro'}
                stroke="hsl(var(--muted-foreground))" 
                fill="hsl(var(--muted))" 
                fillOpacity={0.3}
              />
              <Radar 
                name={isEnglish ? 'Latest' : 'Atual'}
                dataKey={isEnglish ? 'Latest' : 'Atual'}
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))" 
                fillOpacity={0.5}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Análise de Mudanças - Arquétipos */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>
            {isEnglish ? 'Archetype Transformation Analysis' : 'Análise de Transformação dos Arquétipos'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {archetypeChanges.map(({ archetype, change, current, previous }) => (
            <div key={archetype} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">
                    {isEnglish ? archetypeNames[archetype]?.en || archetype : archetype}
                  </span>
                  {getTrendIcon(change)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {previous.toFixed(0)}% → {current.toFixed(0)}%
                </div>
              </div>
              <Badge variant={Math.abs(change) < 3 ? 'secondary' : change > 0 ? 'default' : 'destructive'}>
                <span className={getTrendColor(change)}>
                  {change > 0 ? '+' : ''}{change.toFixed(0)}%
                </span>
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Análise de Mudanças - Processo Criativo */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>
            {isEnglish ? 'Creative Process Evolution' : 'Evolução do Processo Criativo'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {processChanges.map(({ process, change, current, previous }) => (
            <div key={process} className="flex items-center justify-between p-4 rounded-lg bg-background/50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{process}</span>
                  {getTrendIcon(change)}
                </div>
                <div className="text-sm text-muted-foreground">
                  {previous.toFixed(0)}% → {current.toFixed(0)}%
                </div>
              </div>
              <Badge variant={Math.abs(change) < 3 ? 'secondary' : change > 0 ? 'default' : 'destructive'}>
                <span className={getTrendColor(change)}>
                  {change > 0 ? '+' : ''}{change.toFixed(0)}%
                </span>
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Lista de Scans */}
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle>
            {isEnglish ? 'Scan History' : 'Histórico de Scans'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {scans.map((scan, index) => (
            <div 
              key={scan.id}
              className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
            >
              <div>
                <div className="font-semibold">
                  {isEnglish ? 'Scan' : 'Scan'} #{scans.length - index}
                </div>
                <div className="text-sm text-muted-foreground">
                  {scan.date} • {isEnglish ? archetypeNames[scan.dominantArchetype]?.en || scan.dominantArchetype : scan.dominantArchetype}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onDeleteScan(scan.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
