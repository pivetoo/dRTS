import { useState, useEffect } from 'react'
import { GlobalLoaderProvider, Toaster, ThemeProvider } from './components/ui'
import { AppLayout } from './components/ui/app-layout'
import type { SidebarGroup } from './components/ui/sidebar'
import type { BreadcrumbItem, NotificationItem } from './components/ui/navbar'
import { PageLayout } from './components/ui/page-layout'
import {
  Home,
  Square,
  Type,
  CreditCard,
  Tag,
  FormInput,
  MessageSquare,
  BarChart3,
  PanelTop,
  Table,
  AppWindow,
  Palette,
  Package,
} from 'lucide-react'

import { ButtonExample } from './examples/ButtonExample'
import { InputExample } from './examples/InputExample'
import { CardExample } from './examples/CardExample'
import { BadgeExample } from './examples/BadgeExample'
import { FormExample } from './examples/FormExample'
import { FeedbackExample } from './examples/FeedbackExample'
import { ChartsExample } from './examples/ChartsExample'
import { TabsExample } from './examples/TabsExample'
import { DataTableSimpleExample } from './examples/DataTableSimpleExample'
import { DataTableDetailExample } from './examples/DataTableDetailExample'
import { ModalExample } from './examples/ModalExample'
import { ERPExample } from './examples/ERPExample'
import { ColorPaletteExample } from './examples/ColorPaletteExample'
import { ProdutosPage } from './examples/ProdutosPage'

type PageType =
  | 'home'
  | 'button'
  | 'input'
  | 'card'
  | 'badge'
  | 'form'
  | 'feedback'
  | 'modal'
  | 'charts'
  | 'tabs'
  | 'datatable-simple'
  | 'datatable-detail'
  | 'erp'
  | 'colors'
  | 'produtos'

function App() {
  const [activePage, setActivePage] = useState<PageType>('home')
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'Novo recurso disponivel',
      message: 'A versao 2.0 do sistema foi lancada com diversas melhorias e novos componentes.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      read: false,
      type: 'info',
    },
    {
      id: '2',
      title: 'Atualizacao concluida com sucesso',
      message: 'Todos os seus dados foram sincronizados corretamente.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false,
      type: 'success',
    },
    {
      id: '3',
      title: 'Atencao: Manutencao programada',
      message: 'O sistema estara em manutencao no sabado das 2h as 6h da manha.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: true,
      type: 'warning',
    },
    {
      id: '4',
      title: 'Erro ao processar solicitacao',
      message: 'Nao foi possivel processar sua ultima solicitacao. Por favor, tente novamente.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      read: true,
      type: 'error',
    },
    {
      id: '5',
      title: 'Bem-vindo ao dRTS!',
      message: 'Explore todos os componentes disponiveis no menu lateral.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true,
      type: 'info',
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const types: Array<'info' | 'success' | 'warning' | 'error'> = ['info', 'success', 'warning', 'error']
      const randomType = types[Math.floor(Math.random() * types.length)]

      const messages = {
        info: { title: 'Nova informacao', message: 'Ha uma nova atualizacao disponivel no sistema.' },
        success: { title: 'Operacao concluida', message: 'Sua tarefa foi processada com sucesso.' },
        warning: { title: 'Aviso importante', message: 'Verifique suas configuracoes de seguranca.' },
        error: { title: 'Falha detectada', message: 'Ocorreu um erro ao tentar salvar os dados.' },
      }

      const newNotification: NotificationItem = {
        id: Date.now().toString(),
        title: messages[randomType].title,
        message: messages[randomType].message,
        timestamp: new Date(),
        read: false,
        type: randomType,
      }

      setNotifications(prev => [newNotification, ...prev])
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const handleNotificationRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  const handleMarkAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    )
  }

  const navigationGroups: SidebarGroup[] = [
    {
      label: 'Componentes Basicos',
      items: [
        { key: 'button', label: 'Button', icon: <Square className="h-4 w-4" />, active: activePage === 'button', onClick: () => setActivePage('button') },
        { key: 'input', label: 'Input', icon: <Type className="h-4 w-4" />, active: activePage === 'input', onClick: () => setActivePage('input') },
        { key: 'card', label: 'Card', icon: <CreditCard className="h-4 w-4" />, active: activePage === 'card', onClick: () => setActivePage('card') },
        { key: 'badge', label: 'Badge', icon: <Tag className="h-4 w-4" />, active: activePage === 'badge', onClick: () => setActivePage('badge') },
      ],
    },
    {
      label: 'Formularios & Dados',
      items: [
        { key: 'form', label: 'Form Components', icon: <FormInput className="h-4 w-4" />, active: activePage === 'form', onClick: () => setActivePage('form') },
        { key: 'datatable-simple', label: 'Data Table Simples', icon: <Table className="h-4 w-4" />, active: activePage === 'datatable-simple', onClick: () => setActivePage('datatable-simple') },
        { key: 'datatable-detail', label: 'Data Table com Detalhes', icon: <Table className="h-4 w-4" />, active: activePage === 'datatable-detail', onClick: () => setActivePage('datatable-detail') },
      ],
    },
    {
      label: 'Feedback & Navegacao',
      items: [
        { key: 'feedback', label: 'Feedback', icon: <MessageSquare className="h-4 w-4" />, active: activePage === 'feedback', onClick: () => setActivePage('feedback') },
        { key: 'modal', label: 'Modal', icon: <AppWindow className="h-4 w-4" />, active: activePage === 'modal', onClick: () => setActivePage('modal') },
        { key: 'tabs', label: 'Tabs', icon: <PanelTop className="h-4 w-4" />, active: activePage === 'tabs', onClick: () => setActivePage('tabs') },
      ],
    },
    {
      label: 'Visualizacao',
      items: [
        { key: 'charts', label: 'Charts', icon: <BarChart3 className="h-4 w-4" />, active: activePage === 'charts', onClick: () => setActivePage('charts') },
        { key: 'colors', label: 'Paleta de Cores', icon: <Palette className="h-4 w-4" />, active: activePage === 'colors', onClick: () => setActivePage('colors') },
      ],
    },
    {
      label: 'Exemplos Avancados',
      items: [
        { key: 'erp', label: 'ERP System', icon: <AppWindow className="h-4 w-4" />, active: activePage === 'erp', onClick: () => setActivePage('erp') },
        { key: 'produtos', label: 'Produtos (CRUD)', icon: <Package className="h-4 w-4" />, active: activePage === 'produtos', onClick: () => setActivePage('produtos') },
      ],
    },
  ]

  const titles: Record<PageType, string> = {
    home: 'Bem-vindo ao dRTS',
    button: 'Button - Botoes',
    input: 'Input - Campos de entrada',
    card: 'Card - Cartoes',
    badge: 'Badge - Etiquetas',
    form: 'Form Components - Formularios',
    feedback: 'Feedback - Notificacoes e Toasts',
    modal: 'Modal - Dialogos e Confirmacoes',
    charts: 'Charts - Graficos',
    tabs: 'Tabs - Abas',
    'datatable-simple': 'Data Table - Tabela Simples',
    'datatable-detail': 'Data Table - Tabela com Detalhes',
    erp: 'ERP System - Exemplo Completo',
    colors: 'Paleta de Cores',
    produtos: 'Produtos - Exemplo CRUD',
  }

  const icons: Record<PageType, React.ReactElement> = {
    home: <Home size={20} />,
    button: <Square size={20} />,
    input: <Type size={20} />,
    card: <CreditCard size={20} />,
    badge: <Tag size={20} />,
    form: <FormInput size={20} />,
    feedback: <MessageSquare size={20} />,
    modal: <AppWindow size={20} />,
    charts: <BarChart3 size={20} />,
    tabs: <PanelTop size={20} />,
    'datatable-simple': <Table size={20} />,
    'datatable-detail': <Table size={20} />,
    erp: <AppWindow size={20} />,
    colors: <Palette size={20} />,
    produtos: <Package size={20} />,
  }

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', onClick: () => setActivePage('home') },
    ]

    if (activePage !== 'home') {
      breadcrumbs.push({ label: titles[activePage] })
    }

    return breadcrumbs
  }

  if (activePage === 'erp') {
    return (
      <ThemeProvider>
        <GlobalLoaderProvider>
          <ERPExample />
          <Toaster />
        </GlobalLoaderProvider>
      </ThemeProvider>
    )
  }

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-8">
              <h2 className="text-3xl font-bold mb-4">Biblioteca de Componentes dRTS</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Uma colecao completa de componentes React construidos com Tailwind CSS,
                shadcn/ui patterns e Radix UI primitives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">30+ Componentes</h3>
                  <p className="text-sm text-muted-foreground">
                    Componentes prontos para uso em producao
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">TypeScript</h3>
                  <p className="text-sm text-muted-foreground">
                    100% type-safe com suporte completo a TypeScript
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Acessivel</h3>
                  <p className="text-sm text-muted-foreground">
                    Construido com Radix UI para maxima acessibilidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'button': return <ButtonExample />
      case 'input': return <InputExample />
      case 'card': return <CardExample />
      case 'badge': return <BadgeExample />
      case 'form': return <FormExample />
      case 'feedback': return <FeedbackExample />
      case 'modal': return <ModalExample />
      case 'charts': return <ChartsExample />
      case 'tabs': return <TabsExample />
      case 'datatable-simple': return <DataTableSimpleExample />
      case 'datatable-detail': return <DataTableDetailExample />
      case 'colors': return <ColorPaletteExample />
      case 'produtos': return <ProdutosPage />
      default: return <div>Pagina nao encontrada</div>
    }
  }

  return (
    <ThemeProvider>
      <GlobalLoaderProvider>
        <AppLayout
          title="Framework dRTS"
          subtitle="Component Library"
          logo={
            <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              D
            </div>
          }
          user={{
            name: 'Demo User',
            email: 'demo@drts.dev',
            role: 'Developer',
          }}
          menuItems={[
            { key: 'home', label: 'Inicio', icon: <Home className="h-4 w-4" />, active: activePage === 'home', onClick: () => setActivePage('home') },
          ]}
          menuGroups={navigationGroups}
          initialCollapsed={false}
          breadcrumbs={getBreadcrumbs()}
          notifications={notifications}
          onNotificationRead={handleNotificationRead}
          onMarkAllAsRead={handleMarkAllAsRead}
        >
          <PageLayout
            title={titles[activePage]}
            icon={icons[activePage]}
            showDefaultActions={false}
          >
            {renderContent()}
          </PageLayout>
        </AppLayout>
        <Toaster />
      </GlobalLoaderProvider>
    </ThemeProvider>
  )
}

export default App
