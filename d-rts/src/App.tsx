import { useState, useEffect } from 'react'
import { GlobalLoaderProvider, Toaster, ThemeProvider } from './components/ui'
import { Sidebar, type SidebarItemData, type SidebarGroup } from './components/ui/sidebar'
import { Navbar, type BreadcrumbItem, type NotificationItem } from './components/ui/navbar'
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
} from 'lucide-react'

// Import examples
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

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activePage, setActivePage] = useState<PageType>('home')
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'Novo recurso disponível',
      message: 'A versão 2.0 do sistema foi lançada com diversas melhorias e novos componentes.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      read: false,
      type: 'info',
    },
    {
      id: '2',
      title: 'Atualização concluída com sucesso',
      message: 'Todos os seus dados foram sincronizados corretamente.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false,
      type: 'success',
    },
    {
      id: '3',
      title: 'Atenção: Manutenção programada',
      message: 'O sistema estará em manutenção no sábado das 2h às 6h da manhã.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: true,
      type: 'warning',
    },
    {
      id: '4',
      title: 'Erro ao processar solicitação',
      message: 'Não foi possível processar sua última solicitação. Por favor, tente novamente.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      read: true,
      type: 'error',
    },
    {
      id: '5',
      title: 'Bem-vindo ao dRTS!',
      message: 'Explore todos os componentes disponíveis no menu lateral.',
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
        info: { title: 'Nova informação', message: 'Há uma nova atualização disponível no sistema.' },
        success: { title: 'Operação concluída', message: 'Sua tarefa foi processada com sucesso.' },
        warning: { title: 'Aviso importante', message: 'Verifique suas configurações de segurança.' },
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

  const handleViewAllNotifications = () => {
    console.log('Navegar para página de notificações')
  }

  const navigationItems: SidebarItemData[] = [
    {
      key: 'home',
      label: 'Início',
      icon: <Home className="h-4 w-4" />,
      active: activePage === 'home',
      onClick: () => setActivePage('home'),
    },
  ]

  const navigationGroups: SidebarGroup[] = [
    {
      label: 'Componentes Básicos',
      items: [
        {
          key: 'button',
          label: 'Button',
          icon: <Square className="h-4 w-4" />,
          active: activePage === 'button',
          onClick: () => setActivePage('button'),
        },
        {
          key: 'input',
          label: 'Input',
          icon: <Type className="h-4 w-4" />,
          active: activePage === 'input',
          onClick: () => setActivePage('input'),
        },
        {
          key: 'card',
          label: 'Card',
          icon: <CreditCard className="h-4 w-4" />,
          active: activePage === 'card',
          onClick: () => setActivePage('card'),
        },
        {
          key: 'badge',
          label: 'Badge',
          icon: <Tag className="h-4 w-4" />,
          active: activePage === 'badge',
          onClick: () => setActivePage('badge'),
        },
      ],
    },
    {
      label: 'Formulários & Dados',
      items: [
        {
          key: 'form',
          label: 'Form Components',
          icon: <FormInput className="h-4 w-4" />,
          active: activePage === 'form',
          onClick: () => setActivePage('form'),
        },
        {
          key: 'datatable-simple',
          label: 'Data Table Simples',
          icon: <Table className="h-4 w-4" />,
          active: activePage === 'datatable-simple',
          onClick: () => setActivePage('datatable-simple'),
        },
        {
          key: 'datatable-detail',
          label: 'Data Table com Detalhes',
          icon: <Table className="h-4 w-4" />,
          active: activePage === 'datatable-detail',
          onClick: () => setActivePage('datatable-detail'),
        },
      ],
    },
    {
      label: 'Feedback & Navegação',
      items: [
        {
          key: 'feedback',
          label: 'Feedback',
          icon: <MessageSquare className="h-4 w-4" />,
          active: activePage === 'feedback',
          onClick: () => setActivePage('feedback'),
        },
        {
          key: 'modal',
          label: 'Modal',
          icon: <AppWindow className="h-4 w-4" />,
          active: activePage === 'modal',
          onClick: () => setActivePage('modal'),
        },
        {
          key: 'tabs',
          label: 'Tabs',
          icon: <PanelTop className="h-4 w-4" />,
          active: activePage === 'tabs',
          onClick: () => setActivePage('tabs'),
        },
      ],
    },
    {
      label: 'Visualização',
      items: [
        {
          key: 'charts',
          label: 'Charts',
          icon: <BarChart3 className="h-4 w-4" />,
          active: activePage === 'charts',
          onClick: () => setActivePage('charts'),
        },
      ],
    },
    {
      label: 'Exemplos Avançados',
      items: [
        {
          key: 'erp',
          label: 'ERP System',
          icon: <AppWindow className="h-4 w-4" />,
          active: activePage === 'erp',
          onClick: () => setActivePage('erp'),
        },
      ],
    },
  ]

  const getPageTitle = (): string => {
    const titles: Record<PageType, string> = {
      home: 'Bem-vindo ao dRTS',
      button: 'Button - Botões',
      input: 'Input - Campos de entrada',
      card: 'Card - Cartões',
      badge: 'Badge - Etiquetas',
      form: 'Form Components - Formulários',
      feedback: 'Feedback - Notificações e Toasts',
      modal: 'Modal - Diálogos e Confirmações',
      charts: 'Charts - Gráficos',
      tabs: 'Tabs - Abas',
      'datatable-simple': 'Data Table - Tabela Simples',
      'datatable-detail': 'Data Table - Tabela com Detalhes',
      erp: 'ERP System - Exemplo Completo',
    }
    return titles[activePage]
  }

  const getPageIcon = () => {
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
    }
    return icons[activePage]
  }

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Início', onClick: () => setActivePage('home') },
    ]

    if (activePage !== 'home') {
      breadcrumbs.push({ label: getPageTitle() })
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
    let content: React.ReactElement

    switch (activePage) {
      case 'home':
        content = (
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-8">
              <h2 className="text-3xl font-bold mb-4">Biblioteca de Componentes dRTS</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Uma coleção completa de componentes React construídos com Tailwind CSS,
                shadcn/ui patterns e Radix UI primitives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">30+ Componentes</h3>
                  <p className="text-sm text-muted-foreground">
                    Componentes prontos para uso em produção
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">TypeScript</h3>
                  <p className="text-sm text-muted-foreground">
                    100% type-safe com suporte completo a TypeScript
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Acessível</h3>
                  <p className="text-sm text-muted-foreground">
                    Construído com Radix UI para máxima acessibilidade
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Categorias de Componentes</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Componentes Básicos:</strong> Button, Input, Card, Badge</li>
                  <li>• <strong>Formulários:</strong> Checkbox, Radio, Select, Switch</li>
                  <li>• <strong>Feedback:</strong> Toast, Modal, Tooltip, Loader</li>
                  <li>• <strong>Visualização:</strong> Bar Chart, Line Chart, Area Chart, Pie Chart</li>
                  <li>• <strong>Navegação:</strong> Tabs, Sidebar, Navbar, Breadcrumb</li>
                  <li>• <strong>Dados:</strong> Data Table com ordenação e paginação</li>
                </ul>
              </div>
            </div>
          </div>
        )
        break
      case 'button':
        content = <ButtonExample />
        break
      case 'input':
        content = <InputExample />
        break
      case 'card':
        content = <CardExample />
        break
      case 'badge':
        content = <BadgeExample />
        break
      case 'form':
        content = <FormExample />
        break
      case 'feedback':
        content = <FeedbackExample />
        break
      case 'modal':
        content = <ModalExample />
        break
      case 'charts':
        content = <ChartsExample />
        break
      case 'tabs':
        content = <TabsExample />
        break
      case 'datatable-simple':
        content = <DataTableSimpleExample />
        break
      case 'datatable-detail':
        content = <DataTableDetailExample />
        break
      default:
        content = <div>Página não encontrada</div>
    }

    return (
      <>
        <Navbar
          isCollapsed={sidebarCollapsed}
          breadcrumbs={getBreadcrumbs()}
          user={{
            name: 'Demo User',
            role: 'Developer',
          }}
          notifications={notifications}
          onNotificationRead={handleNotificationRead}
          onMarkAllAsRead={handleMarkAllAsRead}
          onViewAllNotifications={handleViewAllNotifications}
        />

        <div
          className="flex-1 transition-all duration-300 pt-[76px] px-8 pb-8"
          style={{
            marginLeft: sidebarCollapsed ? '80px' : '260px',
          }}
        >
          <PageLayout
            title={getPageTitle()}
            icon={getPageIcon()}
            showDefaultActions={false}
          >
            {content}
          </PageLayout>
        </div>
      </>
    )
  }

  return (
    <ThemeProvider>
      <GlobalLoaderProvider>
        <div className="flex min-h-screen">
          <Sidebar
            title="dRTS"
            subtitle="Component Library"
            logo={
              <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                D
              </div>
            }
            items={navigationItems}
            groups={navigationGroups}
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          />

          {renderContent()}

          <Toaster />
        </div>
      </GlobalLoaderProvider>
    </ThemeProvider>
  )
}

export default App
