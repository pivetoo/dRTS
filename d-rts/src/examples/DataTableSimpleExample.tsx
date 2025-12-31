import { useState } from 'react'
import { DataTable, type DataTableColumn } from '../components/ui/data-table'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

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
  },
  {
    id: 6,
    username: 'emma.johnson',
    name: 'Emma Johnson',
    email: 'emma@example.com',
    isActive: true,
    createdAt: '2024-06-20',
    role: 'Editor',
    lastLogin: '2024-11-06 10:00',
    phone: '(11) 98765-1111'
  },
  {
    id: 7,
    username: 'michael.lee',
    name: 'Michael Lee',
    email: 'michael@example.com',
    isActive: false,
    createdAt: '2024-07-15',
    role: 'Visualizador',
    lastLogin: '2024-10-15 08:30',
    phone: '(11) 98765-2222'
  },
  {
    id: 8,
    username: 'sophia.martin',
    name: 'Sophia Martin',
    email: 'sophia@example.com',
    isActive: true,
    createdAt: '2024-08-10',
    role: 'Administrador',
    lastLogin: '2024-11-06 15:45',
    phone: '(11) 98765-3333'
  }
]

export function DataTableSimpleExample() {
  const [users] = useState<User[]>(mockUsers)
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  // Cálculos de paginação
  const totalPages = Math.ceil(users.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentUsers = users.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Limpa seleção ao mudar de página
    setSelectedUsers([])
  }

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
    setCurrentPage(1)
    setSelectedUsers([])
  }

  const columns: DataTableColumn<User>[] = [
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
      key: 'role',
      title: 'Função',
      dataIndex: 'role',
    },
    {
      key: 'createdAt',
      title: 'Data de Criação',
      dataIndex: 'createdAt',
      render: (value) => formatDate(value),
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

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Data Table Simples</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Tabela de dados padrão com paginação, sem painel de detalhes.
        </p>
      </div>

      <Card className="overflow-hidden">
        <DataTable
          columns={columns}
          data={currentUsers}
          rowKey="id"
          selectedRows={selectedUsers}
          onSelectionChange={setSelectedUsers}
        />

        {/* Paginação */}
        <div className="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
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
      </Card>

      {/* Informações */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Recursos do Data Table Simples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Tabela Completa</h4>
            <p className="text-sm text-muted-foreground">
              Exibe todos os dados em formato tabular com colunas personalizáveis.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Paginação</h4>
            <p className="text-sm text-muted-foreground">
              Navegue entre páginas e escolha quantos itens exibir por página.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Seleção Simples</h4>
            <p className="text-sm text-muted-foreground">
              Clique em uma linha para selecioná-la.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Seleção Múltipla</h4>
            <p className="text-sm text-muted-foreground">
              Ctrl+Click para adicionar/remover. Shift+Click para selecionar intervalos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
