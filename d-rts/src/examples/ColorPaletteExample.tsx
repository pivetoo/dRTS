import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const palettes = [
  {
    name: 'Opção 1 - Vibrante e Moderna',
    primary: '#FF6B35',
    secondary: '#1E88E5',
  },
  {
    name: 'Opção 2 - Corporativa e Confiável ✅ PADRÃO ATIVO',
    primary: '#F26419',
    secondary: '#2E5EAA',
  },
  {
    name: 'Opção 3 - Suave e Profissional',
    primary: '#FF8C42',
    secondary: '#4A90E2',
  },
  {
    name: 'Opção 4 - Ousada e Energética',
    primary: '#FF7043',
    secondary: '#1976D2',
  },
]

export function ColorPaletteExample() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Paletas de Cores</h2>
        <p className="text-muted-foreground">
          Escolha a combinação de laranja e azul que melhor representa sua marca
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {palettes.map((palette, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{palette.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">Primary (Laranja)</p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-24 h-24 rounded-lg shadow-md border-2 border-white"
                      style={{ backgroundColor: palette.primary }}
                    />
                    <div>
                      <p className="font-mono text-sm font-semibold">{palette.primary}</p>
                      <p className="text-xs text-muted-foreground mt-1">Cor principal / Botões / Destaques</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2 text-muted-foreground">Secondary (Azul)</p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-24 h-24 rounded-lg shadow-md border-2 border-white"
                      style={{ backgroundColor: palette.secondary }}
                    />
                    <div>
                      <p className="font-mono text-sm font-semibold">{palette.secondary}</p>
                      <p className="text-xs text-muted-foreground mt-1">Cor secundária / Links / Ícones</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-3">Exemplo de uso:</p>
                <div className="flex gap-2">
                  <Button
                    style={{ backgroundColor: palette.primary, color: '#ffffff' }}
                    className="hover:opacity-90"
                  >
                    Botão Primary
                  </Button>
                  <Button
                    style={{ backgroundColor: palette.secondary, color: '#ffffff' }}
                    className="hover:opacity-90"
                  >
                    Botão Secondary
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm font-medium mb-3">Combinação visual:</p>
                <div className="flex gap-2 h-12 rounded-lg overflow-hidden shadow-md">
                  <div className="flex-1" style={{ backgroundColor: palette.primary }} />
                  <div className="flex-1" style={{ backgroundColor: palette.secondary }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-2">Como usar:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>Escolha a paleta que mais combina com sua marca</li>
            <li>Copie os códigos hexadecimais das cores</li>
            <li>Aplique no arquivo <code className="bg-background px-1 py-0.5 rounded">index.css</code> do dRTS</li>
            <li>Faça o build e atualize no seu projeto</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
