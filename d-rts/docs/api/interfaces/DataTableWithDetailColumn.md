[**d-rts**](../README.md)

***

[d-rts](../README.md) / DataTableWithDetailColumn

# Interface: DataTableWithDetailColumn\<T\>

Defined in: [index.d.ts:314](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L314)

## Type Parameters

### T

`T` = `any`

## Properties

### key

> **key**: `string`

Defined in: [index.d.ts:315](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L315)

***

### title

> **title**: `string`

Defined in: [index.d.ts:316](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L316)

***

### dataIndex?

> `optional` **dataIndex**: keyof `T`

Defined in: [index.d.ts:317](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L317)

***

### render()?

> `optional` **render**: (`value`, `record`) => `ReactNode`

Defined in: [index.d.ts:318](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L318)

#### Parameters

##### value

`any`

##### record

`T`

#### Returns

`ReactNode`

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [index.d.ts:319](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L319)
