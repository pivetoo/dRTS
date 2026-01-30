import { useState } from 'react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { DataTableWithDetail, type DataTableWithDetailColumn } from '../components/ui/data-table-with-detail'
import { User, Mail, Calendar, Shield } from 'lucide-react'

interface User {
  id: number
  username: string
  name: string
  email: string
  isActive: boolean
  createdAt: string
  role?: string
  lastLogin?: string
  phone?: string
}

const mockUsers: User[] = [
  {
    id: 1,
    username: 'john.doe',
    name: 'John Doe',
    email: 'john@example.com',
    isActive: true,
    createdAt: '2024-01-15',
    role: 'Administrador',
    lastLogin: '2024-11-06 14:30',
    phone: '(11) 98765-4321'
  },
  {
    id: 2,
    username: 'jane.smith',
    name: 'Jane Smith',
    email: 'jane@example.com',
    isActive: true,
    createdAt: '2024-02-20',
    role: 'Editor',
    lastLogin: '2024-11-05 09:15',
    phone: '(11) 98765-1234'
  },
  {
    id: 3,
    username: 'bob.wilson',
    name: 'Bob Wilson',
    email: 'bob@example.com',
    isActive: false,
    createdAt: '2024-03-10',
    role: 'Visualizador',
    lastLogin: '2024-10-30 16:45',
    phone: '(11) 98765-5678'
  },
  {
    id: 4,
    username: 'alice.brown',
    name: 'Alice Brown',
    email: 'alice@example.com',
    isActive: true,
    createdAt: '2024-04-05',
    role: 'Editor',
    lastLogin: '2024-11-06 11:20',
    phone: '(11) 98765-9876'
  },
  {
    id: 5,
    username: 'charlie.davis',
    name: 'Charlie Davis',
    email: 'charlie@example.com',
    isActive: true,
    createdAt: '2024-05-12',
    role: 'Visualizador',
    lastLogin: '2024-11-04 13:00',
    phone: '(11) 98765-4567'
  }
]

export function DataTableDetailExample() {
  const [users] = useState<User[]>(mockUsers)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR')
  }

  const totalPages = Math.ceil(users.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentUsers = users.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (selectedUser && !currentUsers.find(u => u.id === selectedUser.id)) {
      setSelectedUser(null)
    }
  }

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
    setCurrentPage(1)
    setSelectedUser(null)
  }

  const columns: DataTableWithDetailColumn<User>[] = [
    {
      key: 'username',
      title: 'Usuário',
      dataIndex: 'username',
    },
    {
      key: 'email',
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
      key: 'status',
      title: 'Status',
      render: (_value, record) => (
        <Badge variant={record.isActive ? 'success' : 'destructive'} className="text-xs">
          {record.isActive ? 'Ativo' : 'Inativo'}
        </Badge>
      ),
    },
  ]

  const renderPagination = () => (
    <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <p className="text-sm text-muted-foreground">
          {users.length} usuário(s) total
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Mostrar:</span>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="text-sm border rounded px-2 py-1 bg-background"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>

        <p className="text-sm text-muted-foreground">
          Página {currentPage} de {totalPages}
        </p>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </Button>
      </div>
    </div>
  )

  const renderDetail = (user: User) => (
    <>
      <div className="p-6 border-b">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              {user.name}
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              @{user.username}
            </p>
          </div>
          {user.role && (
            <Badge variant="secondary">
              <Shield className="h-3 w-3 mr-1" />
              {user.role}
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6 max-h-[calc(100vh-300px)] overflow-y-auto">
        <div>
          <h5 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <User className="h-4 w-4" />
            Informações Básicas
          </h5>
          <div className="space-y-3 bg-muted/30 rounded-lg p-4">
            <div>
              <label className="text-xs text-muted-foreground">ID do Usuário</label>
              <p className="text-sm font-medium">#{user.id}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Nome de Usuário</label>
              <p className="text-sm font-medium">{user.username}</p>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Nome Completo</label>
              <p className="text-sm font-medium">{user.name}</p>
            </div>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contato
          </h5>
          <div className="space-y-3 bg-muted/30 rounded-lg p-4">
            <div>
              <label className="text-xs text-muted-foreground">E-mail</label>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
            {user.phone && (
              <div>
                <label className="text-xs text-muted-foreground">Telefone</label>
                <p className="text-sm font-medium">{user.phone}</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Status e Atividade
          </h5>
          <div className="space-y-3 bg-muted/30 rounded-lg p-4">
            <div>
              <label className="text-xs text-muted-foreground">Status da Conta</label>
              <div className="mt-1">
                <Badge variant={user.isActive ? 'success' : 'destructive'}>
                  {user.isActive ? 'Ativa' : 'Inativa'}
                </Badge>
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Data de Criação</label>
              <p className="text-sm font-medium">{formatDate(user.createdAt)}</p>
            </div>
            {user.lastLogin && (
              <div>
                <label className="text-xs text-muted-foreground">Último Acesso</label>
                <p className="text-sm font-medium">{formatDateTime(user.lastLogin)}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Data Table com Painel de Detalhes</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Layout master-detail: clique em uma linha da tabela para visualizar os detalhes completos no painel lateral.
        </p>
      </div>

      <DataTableWithDetail
        columns={columns}
        data={currentUsers}
        rowKey="id"
        selectedRow={selectedUser}
        onRowSelect={setSelectedUser}
        renderDetail={renderDetail}
        renderPagination={renderPagination}
      />
    </div>
  )
}
