[**d-rts**](../README.md)

***

[d-rts](../README.md) / DataTableWithDetailProps

# Interface: DataTableWithDetailProps\<T\>

Defined in: [index.d.ts:322](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L322)

## Type Parameters

### T

`T` = `any`

## Properties

### columns

> **columns**: [`DataTableWithDetailColumn`](DataTableWithDetailColumn.md)\<`T`\>[]

Defined in: [index.d.ts:323](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L323)

***

### data

> **data**: `T`[]

Defined in: [index.d.ts:324](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L324)

***

### rowKey

> **rowKey**: keyof `T` \| (`record`) => `string` \| `number`

Defined in: [index.d.ts:325](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L325)

***

### selectedRow?

> `optional` **selectedRow**: `T`

Defined in: [index.d.ts:326](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L326)

***

### onRowSelect()?

> `optional` **onRowSelect**: (`record`) => `void`

Defined in: [index.d.ts:327](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L327)

#### Parameters

##### record

`T`

#### Returns

`void`

***

### renderDetail()?

> `optional` **renderDetail**: (`record`) => `ReactNode`

Defined in: [index.d.ts:328](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L328)

#### Parameters

##### record

`T`

#### Returns

`ReactNode`

***

### renderPagination()?

> `optional` **renderPagination**: () => `ReactNode`

Defined in: [index.d.ts:329](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L329)

#### Returns

`ReactNode`

***

### className?

> `optional` **className**: `string`

Defined in: [index.d.ts:330](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L330)

***

### tableClassName?

> `optional` **tableClassName**: `string`

Defined in: [index.d.ts:331](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L331)

***

### detailClassName?

> `optional` **detailClassName**: `string`

Defined in: [index.d.ts:332](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L332)

***

### gridRatio?

> `optional` **gridRatio**: \[`number`, `number`\]

Defined in: [index.d.ts:333](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L333)
