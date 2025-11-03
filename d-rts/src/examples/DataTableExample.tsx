import { useState } from 'react'
import { DataTable, type DataTableColumn } from '../components/ui/data-table'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { PageLayout } from '../components/ui/page-layout'
import { Sidebar, type SidebarItemData, type SidebarGroup } from '../components/ui/sidebar'
import { Navbar, type BreadcrumbItem } from '../components/ui/navbar'
import { Users, Home, Settings, FileText, BarChart } from 'lucide-react'

interface User {
  id: number
  username: string
  name: string
  email: string
  isActive: boolean
  emailConfirmed: boolean
  createdAt: string
}

const mockUsers: User[] = [
  {
    id: 1,
    username: 'john.doe',
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true,
    emailConfirmed: true,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    username: 'jane.smith',
    name: 'Jane Smith',
    email: 'jane@example.com',
    isActive: true,
    emailConfirmed: false,
    createdAt: '2024-02-20'
  },
  {
    id: 3,
    username: 'bob.wilson',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    isActive: false,
    emailConfirmed: true,
    createdAt: '2024-03-10'
  },
  {
    id: 4,
    username: 'alice.brown',
    name: 'Alice Brown',
    email: 'alice@example.com',
    isActive: true,
    emailConfirmed: true,
    createdAt: '2024-04-05'
  },
  {
    id: 5,
    username: 'charlie.davis',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    isActive: true,
    emailConfirmed: false,
    createdAt: '2024-05-12'
  }
]

export function DataTableExample() {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeNav, setActiveNav] = useState('users')

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const columns: DataTableColumn<User>[] = [
    {
      key: 'username',
      title: 'Nome de Usuário',
      dataIndex: 'username',
      sortable: true,
    },
    {
      key: 'name',
      title: 'Nome Completo',
      dataIndex: 'name',
      render: (value: string) => value || '-'
    },
    {
      key: 'email',
      title: 'E-mail',
      dataIndex: 'email',
      sortable: true,
    },
    {
      key: 'isActive',
      title: 'Status',
      dataIndex: 'isActive'
    },
    {
      key: 'emailConfirmed',
      title: 'E-mail Confirmado',
      dataIndex: 'emailConfirmed',
      render: (value: boolean) => (
        <Badge variant={value ? 'success' : 'warning'}>
          {value ? 'Confirmado' : 'Pendente'}
        </Badge>
      )
    },
    {
      key: 'createdAt',
      title: 'Data Criação',
      dataIndex: 'createdAt',
      render: (value: string) => formatDate(value),
      sortable: true,
    }
  ]

  const handleAdd = () => {
    console.log('Adicionar usuário')
  }

  const handleEdit = () => {
    if (selectedUsers.length === 0) {
      alert('Selecione um usuário para editar')
      return
    }
    if (selectedUsers.length > 1) {
      alert('Selecione apenas um usuário para editar')
      return
    }
    console.log('Editar:', selectedUsers[0])
  }

  const handleDelete = () => {
    if (selectedUsers.length === 0) {
      alert('Selecione um ou mais usuários para excluir')
      return
    }
    console.log('Excluir:', selectedUsers)
  }

  const handleRefresh = () => {
    console.log('Atualizar lista')
    setUsers([...mockUsers])
    setSelectedUsers([])
  }

  const navigationItems: SidebarItemData[] = [
    {
      key: 'home',
      label: 'Dashboard',
      icon: <Home className="h-4 w-4" />,
      active: activeNav === 'home',
      onClick: () => setActiveNav('home'),
    },
  ]

  const navigationGroups: SidebarGroup[] = [
    {
      label: 'Gestão',
      items: [
        {
          key: 'users',
          label: 'Usuários',
          icon: <Users className="h-4 w-4" />,
          active: activeNav === 'users',
          onClick: () => setActiveNav('users'),
        },
        {
          key: 'reports',
          label: 'Relatórios',
          icon: <FileText className="h-4 w-4" />,
          active: activeNav === 'reports',
          onClick: () => setActiveNav('reports'),
        },
      ],
    },
    {
      label: 'Sistema',
      items: [
        {
          key: 'settings',
          label: 'Configurações',
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
    { label: 'Início', onClick: () => setActiveNav('home') },
    { label: 'Usuários' },
  ]

  return (
    <div className="flex min-h-screen">
      <Sidebar
        title="d-rts"
        subtitle="Component Library"
        logo={<div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">D</div>}
        items={navigationItems}
        groups={navigationGroups}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        onLogout={() => console.log('Logout')}
      />

      <Navbar
        isCollapsed={sidebarCollapsed}
        breadcrumbs={breadcrumbs}
        user={{
          name: 'John Doe',
          role: 'Administrator',
        }}
        onNotificationClick={() => console.log('Notifications')}
        hasNotifications={true}
      />

      <div
        className="flex-1 transition-all duration-300 pt-[76px] px-8 pb-8"
        style={{
          marginLeft: sidebarCollapsed ? '80px' : '260px',
        }}
      >
        <PageLayout
          title="Usuários"
          icon={<Users size={20} />}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onRefresh={handleRefresh}
        >
          <DataTable
            columns={columns}
            data={users}
            rowKey="id"
            selectable
            selectedRows={selectedUsers}
            onSelectionChange={setSelectedUsers}
          />

          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-muted-foreground">
              {selectedUsers.length > 0 && (
                <span>{selectedUsers.length} usuário(s) selecionado(s)</span>
              )}
            </div>
            <Button variant="outline">
              Carregar mais
            </Button>
          </div>
        </PageLayout>
      </div>
    </div>
  )
}
