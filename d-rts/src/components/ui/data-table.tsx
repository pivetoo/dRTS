import * as React from "react"
import { cn } from "../../lib/utils"
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "./table"

export interface DataTableColumn<T = any> {
  key: string
  title: string
  dataIndex?: keyof T
  render?: (value: any, record: T, index: number) => React.ReactNode
  sortable?: boolean
  width?: string | number
}

export interface DataTableProps<T = any> {
  columns: DataTableColumn<T>[]
  data: T[]
  loading?: boolean
  rowKey: keyof T | ((record: T) => string | number)
  selectable?: boolean
  selectedRows?: T[]
  onSelectionChange?: (selected: T[]) => void
  onRowClick?: (record: T) => void
  className?: string
  emptyText?: string
}

export function DataTable<T = any>({
  columns,
  data,
  loading = false,
  rowKey,
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  onRowClick,
  className,
  emptyText = "Nenhum registro encontrado"
}: DataTableProps<T>) {
  const getRowKey = (record: T): string | number => {
    if (typeof rowKey === "function") {
      return rowKey(record)
    }
    return record[rowKey] as string | number
  }

  const isRowSelected = (record: T): boolean => {
    const key = getRowKey(record)
    return selectedRows.some((row) => getRowKey(row) === key)
  }

  const handleSelectRow = (record: T, e: React.MouseEvent) => {
    if (!selectable || !onSelectionChange) return

    const key = getRowKey(record)
    const isSelected = isRowSelected(record)

    if (e.ctrlKey || e.metaKey) {
      // Ctrl/Cmd + Click: adiciona/remove da seleção
      if (isSelected) {
        onSelectionChange(selectedRows.filter((row) => getRowKey(row) !== key))
      } else {
        onSelectionChange([...selectedRows, record])
      }
    } else if (e.shiftKey && selectedRows.length > 0) {
      // Shift + Click: seleciona range
      const lastSelectedKey = getRowKey(selectedRows[selectedRows.length - 1])
      const currentIndex = data.findIndex((row) => getRowKey(row) === key)
      const lastIndex = data.findIndex((row) => getRowKey(row) === lastSelectedKey)

      const start = Math.min(currentIndex, lastIndex)
      const end = Math.max(currentIndex, lastIndex)
      const range = data.slice(start, end + 1)

      // Mantém seleções anteriores e adiciona o range
      const newSelection = [...selectedRows]
      range.forEach((row) => {
        const rowKey = getRowKey(row)
        if (!newSelection.some((selected) => getRowKey(selected) === rowKey)) {
          newSelection.push(row)
        }
      })
      onSelectionChange(newSelection)
    } else {
      // Click normal: seleciona apenas este item
      if (isSelected && selectedRows.length === 1) {
        onSelectionChange([])
      } else {
        onSelectionChange([record])
      }
    }
  }

  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="text-center py-8 text-muted-foreground"
              >
                Carregando...
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="text-center py-8 text-muted-foreground"
              >
                {emptyText}
              </TableCell>
            </TableRow>
          ) : (
            data.map((record, index) => {
              const key = getRowKey(record)
              const selected = isRowSelected(record)

              return (
                <TableRow
                  key={key}
                  data-state={selected ? "selected" : ""}
                  onClick={(e) => {
                    if (selectable) {
                      handleSelectRow(record, e)
                    } else {
                      onRowClick?.(record)
                    }
                  }}
                  className={cn(
                    selectable || onRowClick ? "cursor-pointer" : "",
                    selectable && "select-none",
                    selected && "!bg-secondary/20 hover:!bg-secondary/30"
                  )}
                >
                  {columns.map((column) => {
                    const value = column.dataIndex
                      ? record[column.dataIndex]
                      : undefined

                    return (
                      <TableCell key={column.key}>
                        {column.render
                          ? column.render(value, record, index)
                          : (value as React.ReactNode) || "-"}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}
