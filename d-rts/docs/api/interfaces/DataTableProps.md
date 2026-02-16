[**d-rts**](../README.md)

***

[d-rts](../README.md) / DataTableProps

# Interface: DataTableProps\<T\>

Defined in: [index.d.ts:295](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L295)

## Type Parameters

### T

`T` = `any`

## Properties

### columns

> **columns**: [`DataTableColumn`](DataTableColumn.md)\<`T`\>[]

Defined in: [index.d.ts:296](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L296)

***

### data

> **data**: `T`[]

Defined in: [index.d.ts:297](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L297)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [index.d.ts:298](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L298)

***

### rowKey

> **rowKey**: keyof `T` \| (`record`) => `string` \| `number`

Defined in: [index.d.ts:299](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L299)

***

### selectable?

> `optional` **selectable**: `boolean`

Defined in: [index.d.ts:300](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L300)

***

### selectedRows?

> `optional` **selectedRows**: `T`[]

Defined in: [index.d.ts:301](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L301)

***

### onSelectionChange()?

> `optional` **onSelectionChange**: (`selected`) => `void`

Defined in: [index.d.ts:302](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L302)

#### Parameters

##### selected

`T`[]

#### Returns

`void`

***

### onRowClick()?

> `optional` **onRowClick**: (`record`) => `void`

Defined in: [index.d.ts:303](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L303)

#### Parameters

##### record

`T`

#### Returns

`void`

***

### onRowDoubleClick()?

> `optional` **onRowDoubleClick**: (`record`) => `void`

Defined in: [index.d.ts:304](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L304)

#### Parameters

##### record

`T`

#### Returns

`void`

***

### className?

> `optional` **className**: `string`

Defined in: [index.d.ts:305](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L305)

***

### emptyText?

> `optional` **emptyText**: `string`

Defined in: [index.d.ts:306](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L306)

***

### dragSelect?

> `optional` **dragSelect**: `boolean`

Defined in: [index.d.ts:307](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L307)

***

### pageSize?

> `optional` **pageSize**: `number`

Defined in: [index.d.ts:308](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L308)

***

### pageSizeOptions?

> `optional` **pageSizeOptions**: `number`[]

Defined in: [index.d.ts:309](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L309)
