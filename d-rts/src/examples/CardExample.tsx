import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Users, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react'

export function CardExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Básico</h3>
        <Card className="p-6">
          <p>Este é um card básico com padding padrão.</p>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Card com Header e Footer</h3>
        <Card>
          <CardHeader>
            <CardTitle>Título do Card</CardTitle>
            <CardDescription>Descrição do card aparece aqui</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Conteúdo do card. Aqui você pode adicionar qualquer elemento React.</p>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancelar</Button>
            <Button>Confirmar</Button>
          </CardFooter>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Cards de Estatísticas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">+12% em relação ao mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Receita</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 45.231</div>
              <p className="text-xs text-muted-foreground">+25% em relação ao mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Vendas</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">+8% em relação ao mês anterior</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Crescimento</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+18.5%</div>
              <p className="text-xs text-muted-foreground">+3.2% em relação ao mês anterior</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Card de Produto</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <div className="aspect-video bg-muted rounded-md mb-2" />
              <CardTitle>Produto Premium</CardTitle>
              <CardDescription>Descrição do produto vai aqui</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">R$ 99,90</span>
                <Badge>Novo</Badge>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Recurso 1</li>
                <li>• Recurso 2</li>
                <li>• Recurso 3</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar ao carrinho</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="aspect-video bg-muted rounded-md mb-2" />
              <CardTitle>Produto Standard</CardTitle>
              <CardDescription>Descrição do produto vai aqui</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">R$ 59,90</span>
                <Badge variant="secondary">Popular</Badge>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Recurso 1</li>
                <li>• Recurso 2</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar ao carrinho</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="aspect-video bg-muted rounded-md mb-2" />
              <CardTitle>Produto Básico</CardTitle>
              <CardDescription>Descrição do produto vai aqui</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">R$ 29,90</span>
                <Badge variant="outline">Econômico</Badge>
              </div>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Recurso 1</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar ao carrinho</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
