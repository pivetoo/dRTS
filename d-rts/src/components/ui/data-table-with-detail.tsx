import * as React from "react"
import { cn } from "../../lib/utils"
import { Card } from "./card"
import { AlertCircle } from "lucide-react"

export interface DataTableWithDetailColumn<T = any> {
  key: string
  title: string
  dataIndex?: keyof T
  render?: (value: any, record: T) => React.ReactNode
  width?: string | number
}

export interface DataTableWithDetailProps<T = any> {
  columns: DataTableWithDetailColumn<T>[]
  data: T[]
  rowKey: keyof T | ((record: T) => string | number)
  selectedRow?: T | null
  onRowSelect?: (record: T | null) => void
  renderDetail?: (record: T) => React.ReactNode
  renderPagination?: () => React.ReactNode
  emptyDetailMessage?: string
  emptyDetailDescription?: string
  className?: string
  tableClassName?: string
  detailClassName?: string
  gridRatio?: [number, number]
}

export function DataTableWithDetail<T = any>({
  columns,
  data,
  rowKey,
  selectedRow,
  onRowSelect,
  renderDetail,
  renderPagination,
  emptyDetailMessage = "Nenhum item selecionado",
  emptyDetailDescription = "Clique em uma linha da tabela para visualizar os detalhes.",
  className,
  tableClassName,
  detailClassName,
  gridRatio = [7, 5],
}: DataTableWithDetailProps<T>) {
  const getRowKey = (record: T): string | number => {
    if (typeof rowKey === "function") {
      return rowKey(record)
    }
    return record[rowKey] as string | number
  }

  const handleRowClick = (record: T) => {
    if (onRowSelect) {
      const isSameRow = selectedRow && getRowKey(selectedRow) === getRowKey(record)
      onRowSelect(isSameRow ? null : record)
    }
  }

  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-6", className)}>
      <div
        className={cn("lg:col-span-7", tableClassName)}
        style={{ gridColumn: `span ${gridRatio[0]} / span ${gridRatio[0]}` }}
      >
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  {columns.map((column) => (
                    <th
                      key={column.key}
                      className="h-12 px-4 text-left align-middle font-medium text-muted-foreground text-sm"
                      style={column.width ? { width: column.width } : undefined}
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="text-center py-8 text-muted-foreground text-sm"
                    >
                      Nenhum registro encontrado
                    </td>
                  </tr>
                ) : (
                  data.map((record) => {
                    const key = getRowKey(record)
                    const isSelected = selectedRow && getRowKey(selectedRow) === key

                    return (
                      <tr
                        key={key}
                        onClick={() => handleRowClick(record)}
                        className={cn(
                          "border-b transition-colors cursor-pointer",
                          isSelected ? "bg-secondary/20" : "hover:bg-muted/50"
                        )}
                      >
                        {columns.map((column) => {
                          const value = column.dataIndex
                            ? record[column.dataIndex]
                            : undefined

                          return (
                            <td key={column.key} className="px-4 py-2 align-middle">
                              {column.render
                                ? column.render(value, record)
                                : (value as React.ReactNode) || "-"}
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>

          {renderPagination && (
            <div className="border-t">
              {renderPagination()}
            </div>
          )}
        </Card>
      </div>

      <div
        className={cn("lg:col-span-5", detailClassName)}
        style={{ gridColumn: `span ${gridRatio[1]} / span ${gridRatio[1]}` }}
      >
        {selectedRow && renderDetail ? (
          <Card className="sticky top-6">{renderDetail(selectedRow)}</Card>
        ) : (
          <Card className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h4 className="text-lg font-semibold mb-2">{emptyDetailMessage}</h4>
            <p className="text-sm text-muted-foreground max-w-sm">
              {emptyDetailDescription}
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
