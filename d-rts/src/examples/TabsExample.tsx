import { Card } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { User, Settings, Bell, Lock } from 'lucide-react'

export function TabsExample() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Tabs Básicas</h3>
        <Card className="p-6">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-4">
              <p>Conteúdo da Tab 1</p>
            </TabsContent>
            <TabsContent value="tab2" className="mt-4">
              <p>Conteúdo da Tab 2</p>
            </TabsContent>
            <TabsContent value="tab3" className="mt-4">
              <p>Conteúdo da Tab 3</p>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tabs com Ícones</h3>
        <Card className="p-6">
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">
                <User className="h-4 w-4 mr-2" />
                Perfil
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-4">
              <div className="space-y-4">
                <h4 className="font-semibold">Informações do Perfil</h4>
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input defaultValue="João Silva" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input defaultValue="joao@exemplo.com" />
                </div>
                <Button>Salvar alterações</Button>
              </div>
            </TabsContent>
            <TabsContent value="settings" className="mt-4">
              <div className="space-y-4">
                <h4 className="font-semibold">Configurações da Conta</h4>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium">Modo Escuro</p>
                    <p className="text-sm text-muted-foreground">Ativar tema escuro</p>
                  </div>
                  <Badge>Em breve</Badge>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-medium">Notificações por Email</p>
                    <p className="text-sm text-muted-foreground">Receber atualizações</p>
                  </div>
                  <Badge variant="success">Ativo</Badge>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notifications" className="mt-4">
              <div className="space-y-3">
                <h4 className="font-semibold mb-4">Notificações Recentes</h4>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">Novo comentário no seu post</p>
                  <p className="text-xs text-muted-foreground">Há 2 horas</p>
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">Seu perfil foi visualizado 10 vezes</p>
                  <p className="text-xs text-muted-foreground">Há 5 horas</p>
                </div>
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-medium">Nova mensagem de suporte</p>
                  <p className="text-xs text-muted-foreground">Há 1 dia</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tabs de Configuração Completa</h3>
        <Card className="p-6">
          <Tabs defaultValue="account">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="account">Conta</TabsTrigger>
              <TabsTrigger value="security">Segurança</TabsTrigger>
              <TabsTrigger value="privacy">Privacidade</TabsTrigger>
              <TabsTrigger value="billing">Cobrança</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="mt-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-4">Informações da Conta</h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome completo</label>
                    <Input defaultValue="João Silva" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" defaultValue="joao@exemplo.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Telefone</label>
                    <Input defaultValue="(11) 98765-4321" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Bio</label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                      defaultValue="Desenvolvedor full-stack apaixonado por tecnologia."
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Salvar alterações</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-4">Segurança da Conta</h4>
                <div className="space-y-4">
                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div className="flex-1">
                        <h5 className="font-medium mb-1">Alterar senha</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          Última alteração há 90 dias
                        </p>
                        <Button variant="outline" size="sm">Alterar senha</Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h5 className="font-medium">Autenticação de dois fatores</h5>
                          <Badge variant="warning">Inativo</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Adicione uma camada extra de segurança
                        </p>
                        <Button variant="outline" size="sm">Ativar 2FA</Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div className="flex-1">
                        <h5 className="font-medium mb-1">Sessões ativas</h5>
                        <p className="text-sm text-muted-foreground mb-3">
                          3 dispositivos conectados
                        </p>
                        <Button variant="outline" size="sm">Gerenciar sessões</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="mt-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-4">Configurações de Privacidade</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-medium">Perfil público</p>
                      <p className="text-sm text-muted-foreground">
                        Permitir que outros usuários vejam seu perfil
                      </p>
                    </div>
                    <Badge variant="success">Ativo</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-medium">Mostrar email</p>
                      <p className="text-sm text-muted-foreground">
                        Exibir seu email no perfil público
                      </p>
                    </div>
                    <Badge variant="outline">Inativo</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div>
                      <p className="font-medium">Indexação por mecanismos de busca</p>
                      <p className="text-sm text-muted-foreground">
                        Permitir que mecanismos de busca encontrem seu perfil
                      </p>
                    </div>
                    <Badge variant="success">Ativo</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="billing" className="mt-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold mb-4">Plano e Cobrança</h4>
                <Card className="p-6 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h5 className="text-lg font-semibold">Plano Pro</h5>
                      <p className="text-sm text-muted-foreground">R$ 29,90/mês</p>
                    </div>
                    <Badge variant="success">Ativo</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Próxima cobrança em 15 de dezembro de 2024
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline">Alterar plano</Button>
                    <Button variant="danger">Cancelar assinatura</Button>
                  </div>
                </Card>

                <div>
                  <h5 className="font-semibold mb-3">Histórico de pagamentos</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="text-sm font-medium">Plano Pro - Novembro 2024</p>
                        <p className="text-xs text-muted-foreground">15/11/2024</p>
                      </div>
                      <Badge variant="success">Pago</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="text-sm font-medium">Plano Pro - Outubro 2024</p>
                        <p className="text-xs text-muted-foreground">15/10/2024</p>
                      </div>
                      <Badge variant="success">Pago</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
