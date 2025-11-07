import { Badge } from '../components/ui/badge'
import { Card } from '../components/ui/card'

export function BadgeExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Variantes de Badge</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Status de Pedidos</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="warning">Pendente</Badge>
          <Badge>Em Processamento</Badge>
          <Badge variant="success">Enviado</Badge>
          <Badge variant="success">Entregue</Badge>
          <Badge variant="destructive">Cancelado</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Níveis de Acesso</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline">Visitante</Badge>
          <Badge variant="secondary">Usuário</Badge>
          <Badge>Moderador</Badge>
          <Badge variant="success">Administrador</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Em Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Tarefa 1</h4>
              <Badge variant="warning">Em Progresso</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Descrição da tarefa</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Tarefa 2</h4>
              <Badge variant="success">Concluída</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Descrição da tarefa</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold">Tarefa 3</h4>
              <Badge variant="destructive">Atrasada</Badge>
            </div>
            <p className="text-sm text-muted-foreground">Descrição da tarefa</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Com Contadores</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>
            Mensagens <span className="ml-2 bg-primary-foreground text-primary rounded-full px-1.5 py-0.5 text-xs">3</span>
          </Badge>
          <Badge variant="destructive">
            Erros <span className="ml-2 bg-destructive-foreground text-destructive rounded-full px-1.5 py-0.5 text-xs">12</span>
          </Badge>
          <Badge variant="success">
            Sucesso <span className="ml-2 bg-success-foreground text-success rounded-full px-1.5 py-0.5 text-xs">24</span>
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Exemplo de Lista</h3>
        <Card className="p-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>João Silva</span>
              <Badge variant="success">Ativo</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Maria Santos</span>
              <Badge variant="warning">Pendente</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Pedro Oliveira</span>
              <Badge>Ativo</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Ana Costa</span>
              <Badge variant="outline">Inativo</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
