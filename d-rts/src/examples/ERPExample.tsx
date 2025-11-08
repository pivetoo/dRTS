import { useState } from 'react'
import { AppLayout, type Module } from '../components/ui'
import {
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  FileText,
  CreditCard,
  TrendingUp,
  UserCheck,
  Briefcase,
  Archive,
  ShoppingBag,
} from 'lucide-react'

type ModuleId = 'financeiro' | 'rh' | 'estoque' | 'vendas'

interface MenuStructure {
  [key: string]: {
    items: Array<{
      key: string
      label: string
      icon: React.ReactNode
    }>
  }
}

export const ERPExample = () => {
  const [currentModule, setCurrentModule] = useState<ModuleId | null>(null)
  const [activePage, setActivePage] = useState('')

  const modules: Module[] = [
    { id: 'financeiro', name: 'Financeiro', icon: <DollarSign className="h-5 w-5" /> },
    { id: 'rh', name: 'Recursos Humanos', icon: <Users className="h-5 w-5" /> },
    { id: 'estoque', name: 'Estoque', icon: <Package className="h-5 w-5" /> },
    { id: 'vendas', name: 'Vendas', icon: <ShoppingCart className="h-5 w-5" /> },
  ]

  const menuStructure: MenuStructure = {
    financeiro: {
      items: [
        { key: 'contas-pagar', label: 'Contas a Pagar', icon: <CreditCard className="h-4 w-4" /> },
        { key: 'contas-receber', label: 'Contas a Receber', icon: <FileText className="h-4 w-4" /> },
        { key: 'fluxo-caixa', label: 'Fluxo de Caixa', icon: <TrendingUp className="h-4 w-4" /> },
        { key: 'relatorios-fin', label: 'Relatórios', icon: <BarChart3 className="h-4 w-4" /> },
      ],
    },
    rh: {
      items: [
        { key: 'funcionarios', label: 'Funcionários', icon: <UserCheck className="h-4 w-4" /> },
        { key: 'folha-pagamento', label: 'Folha de Pagamento', icon: <DollarSign className="h-4 w-4" /> },
        { key: 'beneficios', label: 'Benefícios', icon: <Briefcase className="h-4 w-4" /> },
        { key: 'ponto', label: 'Ponto Eletrônico', icon: <Users className="h-4 w-4" /> },
      ],
    },
    estoque: {
      items: [
        { key: 'produtos', label: 'Produtos', icon: <Package className="h-4 w-4" /> },
        { key: 'entrada', label: 'Entrada de Mercadorias', icon: <Archive className="h-4 w-4" /> },
        { key: 'saida', label: 'Saída de Mercadorias', icon: <ShoppingBag className="h-4 w-4" /> },
        { key: 'inventario', label: 'Inventário', icon: <BarChart3 className="h-4 w-4" /> },
      ],
    },
    vendas: {
      items: [
        { key: 'pedidos', label: 'Pedidos', icon: <ShoppingCart className="h-4 w-4" /> },
        { key: 'clientes', label: 'Clientes', icon: <Users className="h-4 w-4" /> },
        { key: 'orcamentos', label: 'Orçamentos', icon: <FileText className="h-4 w-4" /> },
        { key: 'relatorios-vendas', label: 'Relatórios', icon: <BarChart3 className="h-4 w-4" /> },
      ],
    },
  }

  const currentMenuItems = currentModule
    ? menuStructure[currentModule].items.map(item => ({
        ...item,
        active: activePage === item.key,
        onClick: () => setActivePage(item.key),
      }))
    : []

  const handleModuleSelect = (moduleId: string) => {
    setCurrentModule(moduleId as ModuleId)
    const firstItem = menuStructure[moduleId].items[0]
    setActivePage(firstItem.key)
  }

  const handleBackToHome = () => {
    setCurrentModule(null)
    setActivePage('')
  }

  const getBreadcrumbs = () => {
    if (!currentModule) {
      return [{ label: 'Início' }]
    }

    const pageName = currentMenuItems.find(item => item.key === activePage)?.label || ''

    return [
      {
        label: 'Início',
        onClick: handleBackToHome
      },
      { label: pageName },
    ]
  }

  const renderModuleHub = () => {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Central de Módulos</h1>
          <p className="text-muted-foreground mt-2">
            Selecione um módulo para começar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => handleModuleSelect(module.id)}
              className="bg-card border rounded-lg p-6 cursor-pointer transition-all hover:shadow-lg hover:border-primary group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {module.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{module.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {menuStructure[module.id].items.length} funcionalidades
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border rounded-lg p-6 mt-8">
          <h3 className="font-semibold mb-4">Bem-vindo ao Sistema ERP</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Total de módulos disponíveis: <strong className="text-foreground">{modules.length}</strong></p>
            <p>• Clique em um módulo acima para acessar suas funcionalidades</p>
            <p>• Você pode alternar entre módulos usando o seletor na navbar</p>
          </div>
        </div>
      </div>
    )
  }

  const renderModuleContent = () => {
    const pageTitle = currentMenuItems.find(item => item.key === activePage)?.label || ''

    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{pageTitle}</h1>
          <p className="text-muted-foreground mt-2">
            Módulo: {modules.find(m => m.id === currentModule)?.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Total</span>
              <TrendingUp className="h-4 w-4 text-success" />
            </div>
            <div className="text-2xl font-bold">R$ 45.231,00</div>
            <div className="text-xs text-success mt-1">+12% vs mês anterior</div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Pendentes</span>
              <FileText className="h-4 w-4 text-warning" />
            </div>
            <div className="text-2xl font-bold">23</div>
            <div className="text-xs text-muted-foreground mt-1">Requer atenção</div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Concluídos</span>
              <BarChart3 className="h-4 w-4 text-info" />
            </div>
            <div className="text-2xl font-bold">156</div>
            <div className="text-xs text-success mt-1">+8% este mês</div>
          </div>
        </div>

        <div className="bg-card border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Informações da Página</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Módulo atual: <strong className="text-foreground">{modules.find(m => m.id === currentModule)?.name}</strong></p>
            <p>• Página: <strong className="text-foreground">{pageTitle}</strong></p>
            <p>• Total de funcionalidades neste módulo: <strong className="text-foreground">{currentMenuItems.length}</strong></p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AppLayout
      title="ERP Demo"
      subtitle="Exemplo"
      logo={
        <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
          E
        </div>
      }
      user={{
        name: 'Admin User',
        email: 'admin@empresa.com',
        role: 'Administrador',
      }}
      menuItems={currentMenuItems}
      breadcrumbs={getBreadcrumbs()}
      modules={currentModule ? modules : undefined}
      currentModule={currentModule || undefined}
      onModuleChange={handleModuleSelect}
      onLogoClick={handleBackToHome}
      onLogout={() => console.log('Logout')}
    >
      {currentModule ? renderModuleContent() : renderModuleHub()}
    </AppLayout>
  )
}
