import { useState } from 'react'
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input, Badge, Checkbox, Modal, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter, ModalTrigger, ConfirmModal, Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownSeparator, DropdownLabel, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, RadioGroup, RadioGroupItem, Switch, Tabs, TabsList, TabsTrigger, TabsContent, Toaster, toast, Tooltip, TooltipProvider, TooltipTrigger, TooltipContent, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Sidebar, Breadcrumb, Navbar, GlobalLoader, GlobalLoaderProvider, useGlobalLoader } from './components/ui'
import type { SidebarItemData, SidebarGroup } from './components/ui/sidebar'
import type { BreadcrumbItem } from './components/ui/breadcrumb'
import { Heart, Loader2, Trash2, MoreVertical, User, Settings, LogOut, Home, FileText, BarChart } from 'lucide-react'

function AppContent() {
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState('option1')
  const [radioValue, setRadioValue] = useState('option1')
  const [switchValue, setSwitchValue] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeNav, setActiveNav] = useState('home')
  const [formModalOpen, setFormModalOpen] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const { isLoading, showLoader, hideLoader } = useGlobalLoader()

  const handleLoadingTest = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const handleGlobalLoading = () => {
    showLoader()
    setTimeout(() => hideLoader(), 3000)
  }

  const handleToast = (variant: 'default' | 'success' | 'destructive' | 'warning' | 'info') => {
    toast({
      title: 'Notificação',
      description: `Este é um toast ${variant}`,
      variant,
    })
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormLoading(true)

    // Simula chamada de API
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Form data:', formData)
    toast({
      title: 'Sucesso',
      description: 'Usuário cadastrado com sucesso!',
      variant: 'success',
    })

    setFormLoading(false)
    setFormModalOpen(false)
    setFormData({ name: '', email: '', phone: '' })
  }

  const handleFormCancel = () => {
    setFormModalOpen(false)
    setFormData({ name: '', email: '', phone: '' })
  }

  const navigationItems: SidebarItemData[] = [
    {
      key: 'home',
      label: 'Home',
      icon: <Home className="h-4 w-4" />,
      active: activeNav === 'home',
      onClick: () => setActiveNav('home'),
    },
    {
      key: 'docs',
      label: 'Documentação',
      icon: <FileText className="h-4 w-4" />,
      active: activeNav === 'docs',
      onClick: () => setActiveNav('docs'),
    },
  ]

  const navigationGroups: SidebarGroup[] = [
    {
      label: 'Configurações',
      items: [
        {
          key: 'settings',
          label: 'Settings',
          icon: <Settings className="h-4 w-4" />,
          active: activeNav === 'settings',
          onClick: () => setActiveNav('settings'),
        },
        {
          key: 'analytics',
          label: 'Analytics',
          icon: <BarChart className="h-4 w-4" />,
          active: activeNav === 'analytics',
          onClick: () => setActiveNav('analytics'),
        },
      ],
    },
  ]

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', onClick: () => console.log('Home clicked') },
    { label: 'Components', onClick: () => console.log('Components clicked') },
    { label: 'Overview' },
  ]

  return (
    <TooltipProvider>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar
          title="d-rts"
          subtitle="Component Library"
          items={navigationItems}
          groups={navigationGroups}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onLogout={() => console.log('Logout clicked')}
        />

        <Navbar
          isCollapsed={sidebarCollapsed}
          breadcrumbs={breadcrumbs}
          user={{
            name: 'John Doe',
            role: 'Developer',
          }}
          onNotificationClick={() => console.log('Notifications clicked')}
          hasNotifications={true}
        />

        <div
          className="flex-1 bg-background overflow-y-auto transition-all duration-300"
          style={{
            marginLeft: sidebarCollapsed ? '80px' : '260px',
            marginTop: '60px',
            padding: '32px',
          }}
        >
          <div className="max-w-6xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">d-rts Component Library</h1>
              <p className="text-muted-foreground">React + Tailwind + shadcn + Radix UI</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>Todas as variantes disponíveis do botão</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="text">Text</Button>
                  <Button variant="dark">Dark</Button>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold mb-2">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"><Heart /></Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold mb-2">Button States</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button loading={loading} onClick={handleLoadingTest}>
                      {loading ? 'Loading...' : 'Click to Load'}
                    </Button>
                    <Button disabled>Disabled</Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold mb-2">Button with Icons</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button icon={<Heart />} iconPosition="left">Like</Button>
                    <Button variant="error" icon={<Trash2 />} iconPosition="right">Delete</Button>
                    <Button variant="outline" icon={<Loader2 className="animate-spin" />}>Processing</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Breadcrumb Component</CardTitle>
                <CardDescription>Navegação hierárquica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Breadcrumb Padrão</label>
                  <Breadcrumb
                    items={[
                      { label: 'Home', onClick: () => console.log('Home') },
                      { label: 'Library', onClick: () => console.log('Library') },
                      { label: 'Data' },
                    ]}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Breadcrumb com Separador Customizado</label>
                  <Breadcrumb
                    items={[
                      { label: 'Components' },
                      { label: 'UI' },
                      { label: 'Breadcrumb' },
                    ]}
                    separator={<span className="text-muted-foreground mx-1">/</span>}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badge Component</CardTitle>
                <CardDescription>Badges com diferentes variantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Checkbox & Switch</CardTitle>
                <CardDescription>Componentes de seleção</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" checked={checked} onCheckedChange={(checked) => setChecked(checked as boolean)} />
                  <label htmlFor="terms" className="text-sm font-medium">
                    Aceito os termos e condições
                  </label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="notifications" checked={switchValue} onCheckedChange={setSwitchValue} />
                  <label htmlFor="notifications" className="text-sm font-medium">
                    Receber notificações
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modal & ConfirmModal</CardTitle>
                <CardDescription>Diálogos e modais com diferentes tamanhos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2">Tamanhos de Modal</h3>
                  <div className="flex flex-wrap gap-2">
                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">Small</Button>
                      </ModalTrigger>
                      <ModalContent size="sm">
                        <ModalHeader>
                          <ModalTitle>Modal Small</ModalTitle>
                          <ModalDescription>Modal com tamanho small (384px)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal small.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">Medium</Button>
                      </ModalTrigger>
                      <ModalContent size="md">
                        <ModalHeader>
                          <ModalTitle>Modal Medium</ModalTitle>
                          <ModalDescription>Modal com tamanho medium (448px)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal medium.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">Large (Padrão)</Button>
                      </ModalTrigger>
                      <ModalContent>
                        <ModalHeader>
                          <ModalTitle>Modal Large</ModalTitle>
                          <ModalDescription>Modal com tamanho large - padrão (512px)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal large.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">XL</Button>
                      </ModalTrigger>
                      <ModalContent size="xl">
                        <ModalHeader>
                          <ModalTitle>Modal XL</ModalTitle>
                          <ModalDescription>Modal com tamanho xl (576px)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal xl.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">2XL</Button>
                      </ModalTrigger>
                      <ModalContent size="2xl">
                        <ModalHeader>
                          <ModalTitle>Modal 2XL</ModalTitle>
                          <ModalDescription>Modal com tamanho 2xl (672px)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal 2xl.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">3XL</Button>
                      </ModalTrigger>
                      <ModalContent size="3xl">
                        <ModalHeader>
                          <ModalTitle>Modal 3XL</ModalTitle>
                          <ModalDescription>Modal com tamanho 3xl (768px)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal 3xl.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    <Modal>
                      <ModalTrigger asChild>
                        <Button variant="outline" size="sm">Full</Button>
                      </ModalTrigger>
                      <ModalContent size="full">
                        <ModalHeader>
                          <ModalTitle>Modal Full</ModalTitle>
                          <ModalDescription>Modal com tamanho full (95% da viewport)</ModalDescription>
                        </ModalHeader>
                        <div className="py-4">
                          <p className="text-sm text-muted-foreground">Conteúdo do modal full.</p>
                        </div>
                        <ModalFooter>
                          <Button>OK</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-sm font-semibold mb-2">Confirm Modal</h3>
                  <Button variant="error" onClick={() => setConfirmOpen(true)}>
                    Abrir Confirm Modal
                  </Button>
                  <ConfirmModal
                    open={confirmOpen}
                    onOpenChange={setConfirmOpen}
                    title="Confirmar ação"
                    description="Tem certeza que deseja executar esta ação?"
                    variant="error"
                    onConfirm={() => {
                      console.log('Confirmado!')
                      setConfirmOpen(false)
                    }}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modal com Formulário</CardTitle>
                <CardDescription>Modal com formulário de cadastro</CardDescription>
              </CardHeader>
              <CardContent>
                <Modal open={formModalOpen} onOpenChange={setFormModalOpen}>
                  <ModalTrigger asChild>
                    <Button>Novo Cadastro</Button>
                  </ModalTrigger>
                  <ModalContent>
                    <form onSubmit={handleFormSubmit}>
                      <ModalHeader>
                        <ModalTitle>Cadastrar Usuário</ModalTitle>
                        <ModalDescription>
                          Preencha os dados abaixo para cadastrar um novo usuário no sistema.
                        </ModalDescription>
                      </ModalHeader>

                      <div className="space-y-4 py-4">
                        <div>
                          <label htmlFor="name" className="text-sm font-medium mb-2 block">
                            Nome completo
                          </label>
                          <Input
                            id="name"
                            placeholder="Digite o nome completo"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="text-sm font-medium mb-2 block">
                            E-mail
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="email@exemplo.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            helperText="Será usado para login no sistema"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                            Telefone
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <ModalFooter>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleFormCancel}
                          disabled={formLoading}
                        >
                          Cancelar
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                          loading={formLoading}
                        >
                          Salvar
                        </Button>
                      </ModalFooter>
                    </form>
                  </ModalContent>
                </Modal>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dropdown & Select</CardTitle>
                <CardDescription>Menus e seletores</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Dropdown>
                    <DropdownTrigger asChild>
                      <Button variant="outline" icon={<MoreVertical className="h-4 w-4" />}>
                        Menu
                      </Button>
                    </DropdownTrigger>
                    <DropdownContent>
                      <DropdownLabel>Minha Conta</DropdownLabel>
                      <DropdownSeparator />
                      <DropdownItem>
                        <User className="mr-2 h-4 w-4" />
                        Perfil
                      </DropdownItem>
                      <DropdownItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Configurações
                      </DropdownItem>
                      <DropdownSeparator />
                      <DropdownItem>
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </DropdownItem>
                    </DropdownContent>
                  </Dropdown>

                  <Select value={selectedValue} onValueChange={setSelectedValue}>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="option1">Opção 1</SelectItem>
                      <SelectItem value="option2">Opção 2</SelectItem>
                      <SelectItem value="option3">Opção 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>RadioGroup</CardTitle>
                <CardDescription>Seleção de opções únicas</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="r1" />
                    <label htmlFor="r1" className="text-sm font-medium">Opção 1</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="r2" />
                    <label htmlFor="r2" className="text-sm font-medium">Opção 2</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="r3" />
                    <label htmlFor="r3" className="text-sm font-medium">Opção 3</label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
                <CardDescription>Navegação por abas</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="tab1">
                  <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1">
                    <p className="text-sm text-muted-foreground">Conteúdo da Tab 1</p>
                  </TabsContent>
                  <TabsContent value="tab2">
                    <p className="text-sm text-muted-foreground">Conteúdo da Tab 2</p>
                  </TabsContent>
                  <TabsContent value="tab3">
                    <p className="text-sm text-muted-foreground">Conteúdo da Tab 3</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Toast Notifications</CardTitle>
                <CardDescription>Notificações toast</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => handleToast('default')}>Toast Default</Button>
                  <Button variant="success" onClick={() => handleToast('success')}>Toast Success</Button>
                  <Button variant="error" onClick={() => handleToast('destructive')}>Toast Error</Button>
                  <Button variant="warning" onClick={() => handleToast('warning')}>Toast Warning</Button>
                  <Button variant="info" onClick={() => handleToast('info')}>Toast Info</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
                <CardDescription>Dicas de contexto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Este é um tooltip</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Favoritar</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>Tabelas de dados</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nome</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">João Silva</TableCell>
                      <TableCell>joao@example.com</TableCell>
                      <TableCell><Badge variant="success">Ativo</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Maria Santos</TableCell>
                      <TableCell>maria@example.com</TableCell>
                      <TableCell><Badge variant="warning">Pendente</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pedro Costa</TableCell>
                      <TableCell>pedro@example.com</TableCell>
                      <TableCell><Badge variant="destructive">Inativo</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Global Loader</CardTitle>
                <CardDescription>Indicador de carregamento global</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleGlobalLoading}>Mostrar Global Loader</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input Component</CardTitle>
                <CardDescription>Inputs com diferentes estados</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Input Normal</label>
                  <Input
                    placeholder="Digite algo..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Input com Helper Text</label>
                  <Input
                    placeholder="email@example.com"
                    helperText="Digite seu melhor e-mail"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Input com Erro</label>
                  <Input
                    placeholder="Senha..."
                    type="password"
                    error
                    helperText="A senha deve ter no mínimo 8 caracteres"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Input Disabled</label>
                  <Input
                    placeholder="Campo desabilitado"
                    disabled
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <GlobalLoader isVisible={isLoading} />
      <Toaster />
    </TooltipProvider>
  )
}

function App() {
  return (
    <GlobalLoaderProvider>
      <AppContent />
    </GlobalLoaderProvider>
  )
}

export default App
