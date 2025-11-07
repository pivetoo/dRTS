import { useState } from 'react'
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  Button,
  ConfirmModal,
  Input,
  useToast,
} from '../components/ui'
import { Trash2, AlertTriangle, CheckCircle, Info, Mail } from 'lucide-react'

export function ModalExample() {
  const { toast } = useToast()
  const [isConfirmOpen, setIsConfirmOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false)
  const [isWarningOpen, setIsWarningOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleDelete = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsDeleteOpen(false)
      toast({
        title: 'Item excluído',
        description: 'O item foi excluído com sucesso.',
        variant: 'success',
      })
    }, 1500)
  }

  const handleFormSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Formulário enviado',
        description: `Bem-vindo, ${formData.name}!`,
        variant: 'success',
      })
      setFormData({ name: '', email: '' })
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Modais</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Componentes de modal para exibir conteúdo sobreposto, incluindo modais de confirmação e formulários.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-md font-semibold mb-4">Modal Básico</h4>
          <div className="flex flex-wrap gap-4">
            <Modal>
              <ModalTrigger asChild>
                <Button variant="primary">Abrir Modal Padrão</Button>
              </ModalTrigger>
              <ModalContent>
                <ModalHeader>
                  <ModalTitle>Título do Modal</ModalTitle>
                  <ModalDescription>
                    Este é um exemplo de modal básico. Você pode adicionar qualquer conteúdo aqui.
                  </ModalDescription>
                </ModalHeader>
                <div className="py-4">
                  <p className="text-sm">
                    Os modais são úteis para exibir informações importantes ou solicitar ações do usuário
                    sem sair da página atual.
                  </p>
                </div>
                <ModalFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button variant="primary">Confirmar</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal>
              <ModalTrigger asChild>
                <Button variant="secondary">Modal com Form</Button>
              </ModalTrigger>
              <ModalContent size="md">
                <ModalHeader>
                  <ModalTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Inscreva-se
                  </ModalTitle>
                  <ModalDescription>
                    Preencha os campos abaixo para se inscrever em nossa newsletter.
                  </ModalDescription>
                </ModalHeader>
                <div className="space-y-4 py-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome completo</label>
                    <Input
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">E-mail</label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <ModalFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleFormSubmit()
                    }}
                    loading={isLoading}
                  >
                    Inscrever-se
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <Modal>
              <ModalTrigger asChild>
                <Button variant="info">
                  <Info className="h-4 w-4 mr-2" />
                  Modal Grande
                </Button>
              </ModalTrigger>
              <ModalContent size="2xl">
                <ModalHeader>
                  <ModalTitle>Modal com Tamanho Grande</ModalTitle>
                  <ModalDescription>
                    Exemplo de modal com mais espaço para conteúdo extenso.
                  </ModalDescription>
                </ModalHeader>
                <div className="py-4 space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Tamanhos Disponíveis</h5>
                    <p className="text-sm text-muted-foreground">
                      Os modais suportam diferentes tamanhos: sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl e full.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Responsividade</h5>
                    <p className="text-sm text-muted-foreground">
                      Todos os modais são totalmente responsivos e se adaptam a diferentes tamanhos de tela.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Acessibilidade</h5>
                    <p className="text-sm text-muted-foreground">
                      Construído com Radix UI, os modais seguem as melhores práticas de acessibilidade (ARIA).
                    </p>
                  </div>
                </div>
                <ModalFooter>
                  <Button variant="primary">Entendi</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="text-md font-semibold mb-4">Modais de Confirmação</h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={() => setIsConfirmOpen(true)}>
              Confirmação Padrão
            </Button>

            <Button variant="danger" onClick={() => setIsDeleteOpen(true)}>
              <Trash2 className="h-4 w-4 mr-2" />
              Excluir Item
            </Button>

            <Button variant="success" onClick={() => setIsSuccessOpen(true)}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Ação de Sucesso
            </Button>

            <Button variant="warning" onClick={() => setIsWarningOpen(true)}>
              <AlertTriangle className="h-4 w-4 mr-2" />
              Ação de Aviso
            </Button>
          </div>
        </div>

        <ConfirmModal
          open={isConfirmOpen}
          onOpenChange={setIsConfirmOpen}
          title="Confirmar ação"
          description="Você tem certeza que deseja realizar esta ação? Esta operação não pode ser desfeita."
          confirmText="Sim, confirmar"
          cancelText="Cancelar"
          variant="primary"
          onConfirm={() => {
            setIsConfirmOpen(false)
            toast({
              title: 'Ação confirmada',
              description: 'A operação foi realizada com sucesso.',
            })
          }}
        />

        <ConfirmModal
          open={isDeleteOpen}
          onOpenChange={setIsDeleteOpen}
          title="Excluir item"
          description="Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita."
          confirmText="Sim, excluir"
          cancelText="Cancelar"
          variant="danger"
          loading={isLoading}
          onConfirm={handleDelete}
        />

        <ConfirmModal
          open={isSuccessOpen}
          onOpenChange={setIsSuccessOpen}
          title="Operação bem-sucedida"
          description="A operação foi concluída com sucesso. Deseja continuar?"
          confirmText="Continuar"
          cancelText="Fechar"
          variant="success"
          onConfirm={() => {
            setIsSuccessOpen(false)
            toast({
              title: 'Continuando...',
              variant: 'success',
            })
          }}
        />

        <ConfirmModal
          open={isWarningOpen}
          onOpenChange={setIsWarningOpen}
          title="Atenção!"
          description="Esta ação requer atenção especial. Você tem certeza que deseja prosseguir?"
          confirmText="Sim, prosseguir"
          cancelText="Cancelar"
          variant="warning"
          onConfirm={() => {
            setIsWarningOpen(false)
            toast({
              title: 'Ação realizada',
              description: 'A operação foi concluída.',
              variant: 'warning',
            })
          }}
        />

        <div className="border-t pt-6">
          <h4 className="text-md font-semibold mb-3">Uso do Modal</h4>
          <div className="bg-muted/50 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalTrigger,
  Button,
} from '@/components/ui'

<Modal>
  <ModalTrigger asChild>
    <Button>Abrir Modal</Button>
  </ModalTrigger>
  <ModalContent size="lg">
    <ModalHeader>
      <ModalTitle>Título</ModalTitle>
      <ModalDescription>Descrição</ModalDescription>
    </ModalHeader>
    <div>Conteúdo do modal</div>
    <ModalFooter>
      <Button variant="outline">Cancelar</Button>
      <Button>Confirmar</Button>
    </ModalFooter>
  </ModalContent>
</Modal>`}</code>
            </pre>
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="text-md font-semibold mb-3">Uso do ConfirmModal</h4>
          <div className="bg-muted/50 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { ConfirmModal, useState } from '@/components/ui'

const [open, setOpen] = useState(false)

<ConfirmModal
  open={open}
  onOpenChange={setOpen}
  title="Confirmar ação"
  description="Tem certeza?"
  confirmText="Confirmar"
  cancelText="Cancelar"
  variant="danger"
  onConfirm={() => {
    // Sua lógica aqui
    setOpen(false)
  }}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
