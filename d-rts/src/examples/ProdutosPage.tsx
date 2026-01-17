import * as React from "react"
import { Package, FileText } from "lucide-react"
import { PageLayout, type PageAction } from "../components/ui/page-layout"
import { DataTable, type DataTableColumn } from "../components/ui/data-table"
import { Modal } from "../components/ui/modal"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { ConfirmModal } from "../components/ui/confirm-modal"
import { useToast } from "../components/ui/use-toast"

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
]

export const ProdutosPage: React.FC = () => {
  const { toast } = useToast()
  const [produtos, setProdutos] = React.useState<Produto[]>(dadosMock)
  const [selectedRows, setSelectedRows] = React.useState<Produto[]>([])
  const [modalOpen, setModalOpen] = React.useState(false)
  const [confirmDeleteOpen, setConfirmDeleteOpen] = React.useState(false)
  const [editingProduto, setEditingProduto] = React.useState<Produto | null>(null)
  const [formData, setFormData] = React.useState({ nome: "", codigo: "", preco: "", estoque: "" })

  const columns: DataTableColumn<Produto>[] = [
    { key: "codigo", dataIndex: "codigo", title: "Código", width: 120 },
    { key: "nome", dataIndex: "nome", title: "Nome do Produto" },
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

  const handleAdd = () => {
    setEditingProduto(null)
    setFormData({ nome: "", codigo: "", preco: "", estoque: "" })
    setModalOpen(true)
  }

  const handleEdit = () => {
    const produto = selectedRows[0]
    setEditingProduto(produto)
    setFormData({
      nome: produto.nome,
      codigo: produto.codigo,
      preco: produto.preco.toString(),
      estoque: produto.estoque.toString()
    })
    setModalOpen(true)
  }

  const handleDelete = () => {
    setConfirmDeleteOpen(true)
  }

  const handleRefresh = () => {
    toast({ title: "Atualizado", description: "Lista de produtos atualizada.", variant: "success" })
  }

  const handleSave = () => {
    if (editingProduto) {
      setProdutos(prev => prev.map(p =>
        p.id === editingProduto.id
          ? { ...p, ...formData, preco: parseFloat(formData.preco), estoque: parseInt(formData.estoque) }
          : p
      ))
      toast({ title: "Sucesso", description: "Produto atualizado com sucesso.", variant: "success" })
    } else {
      const novoProduto: Produto = {
        id: Math.max(...produtos.map(p => p.id)) + 1,
        nome: formData.nome,
        codigo: formData.codigo,
        preco: parseFloat(formData.preco),
        estoque: parseInt(formData.estoque),
        ativo: true
      }
      setProdutos(prev => [...prev, novoProduto])
      toast({ title: "Sucesso", description: "Produto cadastrado com sucesso.", variant: "success" })
    }
    setModalOpen(false)
    setSelectedRows([])
  }

  const handleConfirmDelete = () => {
    const idsToDelete = selectedRows.map(p => p.id)
    setProdutos(prev => prev.filter(p => !idsToDelete.includes(p.id)))
    toast({
      title: "Sucesso",
      description: `${selectedRows.length} produto(s) excluído(s).`,
      variant: "success"
    })
    setConfirmDeleteOpen(false)
    setSelectedRows([])
  }

  const customActions: PageAction[] = [
    {
      key: "relatorio",
      label: "Relatório",
      icon: <FileText className="h-4 w-4" />,
      variant: "outline",
      onClick: () => toast({ title: "Relatório", description: "Gerando relatório de produtos..." })
    }
  ]

  return (
    <PageLayout
      title="Produtos"
      icon={<Package className="h-5 w-5" />}
      onAdd={handleAdd}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onRefresh={handleRefresh}
      selectedRowsCount={selectedRows.length}
      actions={customActions}
    >
      <DataTable
        columns={columns}
        data={produtos}
        rowKey="id"
        selectable
        selectedRows={selectedRows}
        onSelectionChange={setSelectedRows}
        onRowDoubleClick={(produto) => {
          setSelectedRows([produto])
          handleEdit()
        }}
      />

      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editingProduto ? "Editar Produto" : "Novo Produto"}
        size="md"
      >
        <div className="flex flex-col gap-4">
          <Input
            label="Nome"
            placeholder="Nome do produto"
            value={formData.nome}
            onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
          />
          <Input
            label="Código"
            placeholder="Código do produto"
            value={formData.codigo}
            onChange={(e) => setFormData(prev => ({ ...prev, codigo: e.target.value }))}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Preço"
              type="number"
              placeholder="0,00"
              value={formData.preco}
              onChange={(e) => setFormData(prev => ({ ...prev, preco: e.target.value }))}
            />
            <Input
              label="Estoque"
              type="number"
              placeholder="0"
              value={formData.estoque}
              onChange={(e) => setFormData(prev => ({ ...prev, estoque: e.target.value }))}
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>
              {editingProduto ? "Salvar" : "Cadastrar"}
            </Button>
          </div>
        </div>
      </Modal>

      <ConfirmModal
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title="Confirmar Exclusão"
        description={`Deseja realmente excluir ${selectedRows.length} produto(s)? Esta ação não pode ser desfeita.`}
        confirmLabel="Excluir"
        cancelLabel="Cancelar"
        variant="danger"
        onConfirm={handleConfirmDelete}
      />
    </PageLayout>
  )
}
