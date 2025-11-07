import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { useToast } from '../components/ui/use-toast'
import { ConfirmModal } from '../components/ui/confirm-modal'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../components/ui/tooltip'
import { useGlobalLoader } from '../components/ui/use-global-loader'
import { Info, AlertCircle, CheckCircle2, XCircle } from 'lucide-react'

export function FeedbackExample() {
  const { toast } = useToast()
  const { showLoader, hideLoader } = useGlobalLoader()
  const [confirmModalOpen, setConfirmModalOpen] = useState(false)

  const showSuccessToast = () => {
    toast({
      title: 'Sucesso!',
      description: 'Operação realizada com sucesso.',
      variant: 'success',
    })
  }

  const showErrorToast = () => {
    toast({
      title: 'Erro!',
      description: 'Ocorreu um erro ao processar sua solicitação.',
      variant: 'destructive',
    })
  }

  const showInfoToast = () => {
    toast({
      title: 'Informação',
      description: 'Esta é uma mensagem informativa.',
    })
  }

  const showWarningToast = () => {
    toast({
      title: 'Atenção',
      description: 'Esta ação requer sua atenção.',
      variant: 'warning',
    })
  }

  const handleGlobalLoader = async () => {
    showLoader()
    // Simula uma operação assíncrona
    await new Promise(resolve => setTimeout(resolve, 3000))
    hideLoader()
    toast({
      title: 'Concluído!',
      description: 'O carregamento foi finalizado.',
      variant: 'success',
    })
  }

  const handleConfirm = () => {
    setConfirmModalOpen(false)
    toast({
      title: 'Confirmado!',
      description: 'Ação confirmada com sucesso.',
      variant: 'success',
    })
  }

  return (
    <TooltipProvider>
      <div className="space-y-8">
        {/* Toast Notifications */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Toast Notifications</h3>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Clique nos botões para ver diferentes tipos de notificações toast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={showSuccessToast} variant="outline">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Sucesso
              </Button>
              <Button onClick={showErrorToast} variant="outline">
                <XCircle className="mr-2 h-4 w-4" />
                Erro
              </Button>
              <Button onClick={showInfoToast} variant="outline">
                <Info className="mr-2 h-4 w-4" />
                Info
              </Button>
              <Button onClick={showWarningToast} variant="outline">
                <AlertCircle className="mr-2 h-4 w-4" />
                Aviso
              </Button>
            </div>
          </Card>
        </div>

        {/* Confirm Modal */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Confirm Modal</h3>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Modal de confirmação para ações importantes.
            </p>
            <Button variant="danger" onClick={() => setConfirmModalOpen(true)}>
              Excluir Item
            </Button>

            <ConfirmModal
              open={confirmModalOpen}
              onOpenChange={setConfirmModalOpen}
              onConfirm={handleConfirm}
              title="Confirmar exclusão"
              description="Tem certeza que deseja excluir este item? Esta ação não pode ser desfeita."
              confirmText="Excluir"
              cancelText="Cancelar"
              variant="danger"
            />
          </Card>
        </div>

        {/* Tooltip */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Tooltips</h3>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Passe o mouse sobre os botões para ver os tooltips.
            </p>
            <div className="flex flex-wrap gap-3">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Este é um tooltip simples</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mais informações disponíveis aqui</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">Ajuda</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="space-y-1">
                    <p className="font-semibold">Precisa de ajuda?</p>
                    <p className="text-xs">Clique para ver a documentação</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </Card>
        </div>

        {/* Global Loader */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Global Loader</h3>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-4">
              Loader global para indicar processamento de operações assíncronas.
            </p>
            <Button onClick={handleGlobalLoader}>
              Simular Carregamento (3s)
            </Button>
          </Card>
        </div>

        {/* Exemplo Prático */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Exemplo Prático - Cadastro</h3>
          <Card className="p-6">
            <h4 className="text-xl font-bold mb-4">Novo Usuário</h4>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Nome
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="inline h-3 w-3 ml-1 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Digite seu nome completo</p>
                    </TooltipContent>
                  </Tooltip>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="João Silva"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => showInfoToast()}
                >
                  Cancelar
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => {
                    showLoader()
                    setTimeout(() => {
                      hideLoader()
                      showSuccessToast()
                    }, 2000)
                  }}
                >
                  Salvar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}
