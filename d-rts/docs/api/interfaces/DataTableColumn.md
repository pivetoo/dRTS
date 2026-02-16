[**d-rts**](../README.md)

***

[d-rts](../README.md) / DataTableColumn

# Interface: DataTableColumn\<T\>

Defined in: [index.d.ts:286](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L286)

## Type Parameters

### T

`T` = `any`

## Properties

### key

> **key**: `string`

Defined in: [index.d.ts:287](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L287)

***

### title

> **title**: `string`

Defined in: [index.d.ts:288](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L288)

***

### dataIndex?

> `optional` **dataIndex**: keyof `T`

Defined in: [index.d.ts:289](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L289)

***

### render()?

> `optional` **render**: (`value`, `record`, `index`) => `ReactNode`

Defined in: [index.d.ts:290](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L290)

#### Parameters

##### value

`any`

##### record

`T`

##### index

`number`

#### Returns

`ReactNode`

***

### sortable?

> `optional` **sortable**: `boolean`

Defined in: [index.d.ts:291](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L291)

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [index.d.ts:292](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L292)
