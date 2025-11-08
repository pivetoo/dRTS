import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card'
import { BarChart } from '../components/ui/bar-chart'
import { LineChart } from '../components/ui/line-chart'
import { AreaChart } from '../components/ui/area-chart'
import { PieChart } from '../components/ui/pie-chart'

export function ChartsExample() {
  // Dados para Bar Chart
  const barChartData = [
    { name: 'Jan', vendas: 4000, lucro: 2400 },
    { name: 'Fev', vendas: 3000, lucro: 1398 },
    { name: 'Mar', vendas: 2000, lucro: 9800 },
    { name: 'Abr', vendas: 2780, lucro: 3908 },
    { name: 'Mai', vendas: 1890, lucro: 4800 },
    { name: 'Jun', vendas: 2390, lucro: 3800 },
    { name: 'Jul', vendas: 3490, lucro: 4300 },
  ]

  // Dados para Line Chart
  const lineChartData = [
    { name: 'Seg', usuarios: 120, sessoes: 180 },
    { name: 'Ter', usuarios: 132, sessoes: 198 },
    { name: 'Qua', usuarios: 101, sessoes: 150 },
    { name: 'Qui', usuarios: 134, sessoes: 210 },
    { name: 'Sex', usuarios: 190, sessoes: 280 },
    { name: 'Sab', usuarios: 230, sessoes: 320 },
    { name: 'Dom', usuarios: 210, sessoes: 290 },
  ]

  // Dados para Area Chart
  const areaChartData = [
    { name: 'Jan', receita: 12000 },
    { name: 'Fev', receita: 19000 },
    { name: 'Mar', receita: 15000 },
    { name: 'Abr', receita: 25000 },
    { name: 'Mai', receita: 22000 },
    { name: 'Jun', receita: 30000 },
  ]

  // Dados para Pie Chart
  const pieChartData = [
    { name: 'Desktop', value: 400, fill: '#3b82f6' },
    { name: 'Mobile', value: 300, fill: '#10b981' },
    { name: 'Tablet', value: 200, fill: '#f59e0b' },
    { name: 'Outros', value: 100, fill: '#ef4444' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Bar Chart - Gráfico de Barras</h3>
        <Card>
          <CardHeader>
            <CardTitle>Vendas e Lucro Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={barChartData}
              dataKeys={['vendas', 'lucro']}
              xAxisKey="name"
              height={300}
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Line Chart - Gráfico de Linhas</h3>
        <Card>
          <CardHeader>
            <CardTitle>Usuários e Sessões por Dia</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={lineChartData}
              dataKeys={['usuarios', 'sessoes']}
              xAxisKey="name"
              height={300}
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Area Chart - Gráfico de Área</h3>
        <Card>
          <CardHeader>
            <CardTitle>Receita ao Longo do Tempo</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaChart
              data={areaChartData}
              dataKeys={['receita']}
              xAxisKey="name"
              height={300}
            />
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Pie Chart - Gráfico de Pizza</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Dispositivos de Acesso</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={pieChartData}
                height={300}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Legenda</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pieChartData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: item.fill }}
                      />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {item.value} ({Math.round((item.value / 1000) * 100)}%)
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Dashboard Exemplo</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendas Trimestrais</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart
                data={[
                  { name: 'Q1', valor: 45000 },
                  { name: 'Q2', valor: 52000 },
                  { name: 'Q3', valor: 48000 },
                  { name: 'Q4', valor: 61000 },
                ]}
                dataKeys={['valor']}
                xAxisKey="name"
                height={250}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crescimento Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart
                data={[
                  { name: 'Jan', crescimento: 5 },
                  { name: 'Fev', crescimento: 8 },
                  { name: 'Mar', crescimento: 12 },
                  { name: 'Abr', crescimento: 15 },
                  { name: 'Mai', crescimento: 11 },
                  { name: 'Jun', crescimento: 18 },
                ]}
                dataKeys={['crescimento']}
                xAxisKey="name"
                height={250}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tráfego do Site</CardTitle>
            </CardHeader>
            <CardContent>
              <AreaChart
                data={[
                  { name: '00h', visitas: 20 },
                  { name: '04h', visitas: 15 },
                  { name: '08h', visitas: 45 },
                  { name: '12h', visitas: 80 },
                  { name: '16h', visitas: 95 },
                  { name: '20h', visitas: 60 },
                ]}
                dataKeys={['visitas']}
                xAxisKey="name"
                height={250}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribuição de Vendas</CardTitle>
            </CardHeader>
            <CardContent>
              <PieChart
                data={[
                  { name: 'Produto A', value: 350, fill: '#3b82f6' },
                  { name: 'Produto B', value: 280, fill: '#10b981' },
                  { name: 'Produto C', value: 200, fill: '#f59e0b' },
                  { name: 'Produto D', value: 170, fill: '#8b5cf6' },
                ]}
                height={250}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
