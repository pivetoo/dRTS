import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Download, Mail, Trash2, Plus, RefreshCw } from 'lucide-react'

export function ButtonExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Variantes de Botões</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="text">Text</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tamanhos</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Com Ícones</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Login com Email
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="danger">
            <Trash2 className="mr-2 h-4 w-4" />
            Deletar
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Estados</h3>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Desabilitado</Button>
          <Button>
            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            Carregando
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Exemplo Prático</h3>
        <Card className="p-6">
          <h4 className="text-xl font-bold mb-2">Confirmar ação</h4>
          <p className="text-muted-foreground mb-6">
            Esta ação não pode ser desfeita. Tem certeza que deseja continuar?
          </p>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Cancelar
            </Button>
            <Button variant="danger" className="flex-1">
              Confirmar
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
