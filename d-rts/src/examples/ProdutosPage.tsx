import * as React from "react"
import { Package } from "lucide-react"
import { PageLayout } from "../components/ui/page-layout"
import { DataTable, type DataTableColumn } from "../components/ui/data-table"
import { Badge } from "../components/ui/badge"

interface Produto {
  id: number
  nome: string
  codigo: string
  preco: number
  estoque: number
  ativo: boolean
}

const dadosMock: Produto[] = [
  { id: 1, nome: "Notebook Dell Inspiron", codigo: "DELL-001", preco: 3499.90, estoque: 15, ativo: true },
  { id: 2, nome: "Mouse Logitech MX Master", codigo: "LOG-002", preco: 499.90, estoque: 42, ativo: true },
  { id: 3, nome: "Teclado Mecânico Redragon", codigo: "RED-003", preco: 299.90, estoque: 8, ativo: true },
  { id: 4, nome: "Monitor LG 27'' 4K", codigo: "LG-004", preco: 2199.90, estoque: 0, ativo: false },
  { id: 5, nome: "Headset HyperX Cloud", codigo: "HYP-005", preco: 599.90, estoque: 23, ativo: true },
  { id: 6, nome: "Webcam Logitech C920", codigo: "LOG-006", preco: 449.90, estoque: 12, ativo: true },
  { id: 7, nome: "SSD Samsung 1TB", codigo: "SAM-007", preco: 699.90, estoque: 31, ativo: true },
  { id: 8, nome: "Cadeira Gamer ThunderX", codigo: "THX-008", preco: 1299.90, estoque: 5, ativo: true },
  { id: 9, nome: "Placa de Vídeo RTX 4070", codigo: "NVD-009", preco: 4299.90, estoque: 7, ativo: true },
  { id: 10, nome: "Memória RAM Corsair 32GB", codigo: "COR-010", preco: 899.90, estoque: 18, ativo: true },
  { id: 11, nome: "Fonte Corsair 750W", codigo: "COR-011", preco: 649.90, estoque: 22, ativo: true },
  { id: 12, nome: "Gabinete NZXT H510", codigo: "NZX-012", preco: 549.90, estoque: 9, ativo: true },
  { id: 13, nome: "Processador AMD Ryzen 7", codigo: "AMD-013", preco: 2199.90, estoque: 11, ativo: true },
  { id: 14, nome: "Placa Mãe ASUS ROG", codigo: "ASU-014", preco: 1899.90, estoque: 6, ativo: true },
  { id: 15, nome: "Cooler Noctua NH-D15", codigo: "NOC-015", preco: 499.90, estoque: 14, ativo: true },
  { id: 16, nome: "HD Externo Seagate 2TB", codigo: "SEA-016", preco: 399.90, estoque: 28, ativo: true },
  { id: 17, nome: "Mousepad Gamer XL", codigo: "GEN-017", preco: 89.90, estoque: 55, ativo: true },
  { id: 18, nome: "Cabo HDMI 2.1 3m", codigo: "GEN-018", preco: 79.90, estoque: 0, ativo: false },
  { id: 19, nome: "Hub USB-C 7 portas", codigo: "GEN-019", preco: 189.90, estoque: 33, ativo: true },
  { id: 20, nome: "Suporte Monitor Articulado", codigo: "GEN-020", preco: 249.90, estoque: 17, ativo: true },
]

export const ProdutosPage: React.FC = () => {
  const [produtos, setProdutos] = React.useState<Produto[]>(dadosMock)
  const [selectedRows, setSelectedRows] = React.useState<Produto[]>([])

  const columns: DataTableColumn<Produto>[] = [
    { key: "codigo", dataIndex: "codigo", title: "Código", width: 120 },
    { key: "nome", dataIndex: "nome", title: "Nome" },
    {
      key: "preco",
      dataIndex: "preco",
      title: "Preço",
      width: 120,
      render: (value: number) => `R$ ${value.toFixed(2).replace('.', ',')}`
    },
    {
      key: "estoque",
      dataIndex: "estoque",
      title: "Estoque",
      width: 100,
      render: (value: number) => (
        <span className={value === 0 ? "text-red-500 font-medium" : ""}>
          {value} un.
        </span>
      )
    },
    {
      key: "ativo",
      dataIndex: "ativo",
      title: "Status",
      width: 100,
      render: (value: boolean) => (
        <Badge variant={value ? "success" : "secondary"}>
          {value ? "Ativo" : "Inativo"}
        </Badge>
      )
    },
  ]

  const handleAdd = () => {}
  const handleEdit = () => {}
  const handleDelete = () => {
    const idsToDelete = selectedRows.map(p => p.id)
    setProdutos(prev => prev.filter(p => !idsToDelete.includes(p.id)))
    setSelectedRows([])
  }
  const handleRefresh = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    setProdutos(dadosMock)
    setSelectedRows([])
  }

  return (
    <PageLayout
      title="Produtos"
      subtitle="Gerencie o catálogo de produtos da sua loja"
      icon={<Package className="h-5 w-5" />}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onRefresh={handleRefresh}
      selectedRowsCount={selectedRows.length}
    >
      <DataTable
        columns={columns}
        data={produtos}
        rowKey="id"
        selectable
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
      />
    </PageLayout>
  )
}
