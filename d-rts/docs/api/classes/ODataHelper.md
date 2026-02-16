[**d-rts**](../README.md)

***

[d-rts](../README.md) / ODataHelper

# Class: ODataHelper

Defined in: [index.d.ts:545](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L545)

## Constructors

### Constructor

> **new ODataHelper**(): `ODataHelper`

#### Returns

`ODataHelper`

## Methods

### buildQuery()

> `static` **buildQuery**(`params`): `string`

Defined in: [index.d.ts:546](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L546)

#### Parameters

##### params

[`ODataParams`](../interfaces/ODataParams.md)

#### Returns

`string`

***

### fromPaginationParams()

> `static` **fromPaginationParams**(`params`): [`ODataParams`](../interfaces/ODataParams.md)

Defined in: [index.d.ts:547](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L547)

#### Parameters

##### params

[`PaginationParams`](../interfaces/PaginationParams.md)

#### Returns

[`ODataParams`](../interfaces/ODataParams.md)

***

### createSearchFilter()

> `static` **createSearchFilter**(`searchTerm`, `fields`): `string`

Defined in: [index.d.ts:548](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L548)

#### Parameters

##### searchTerm

`string`

##### fields

`string`[]

#### Returns

`string`

***

### createBooleanFilter()

> `static` **createBooleanFilter**(`field`, `value`): `string`

Defined in: [index.d.ts:549](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L549)

#### Parameters

##### field

`string`

##### value

`boolean`

#### Returns

`string`

***

### createDateFilter()

> `static` **createDateFilter**(`field`, `operator`, `date`): `string`

Defined in: [index.d.ts:550](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L550)

#### Parameters

##### field

`string`

##### operator

`"eq"` | `"gt"` | `"lt"` | `"ge"` | `"le"`

##### date

`Date`

#### Returns

`string`

***

### combineFilters()

> `static` **combineFilters**(`filters`, `operator?`): `string`

Defined in: [index.d.ts:551](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L551)

#### Parameters

##### filters

`string`[]

##### operator?

`"and"` | `"or"`

#### Returns

`string`

***

### extractData()

> `static` **extractData**\<`T`\>(`response`): `T`[]

Defined in: [index.d.ts:552](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L552)

#### Type Parameters

##### T

`T`

#### Parameters

##### response

`any`

#### Returns

`T`[]

***

### extractCount()

> `static` **extractCount**(`response`): `number`

Defined in: [index.d.ts:553](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L553)

#### Parameters

##### response

`any`

#### Returns

`number`

***

### processResponse()

> `static` **processResponse**\<`T`\>(`response`, `params?`, `mapFn?`): `object`

Defined in: [index.d.ts:554](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L554)

#### Type Parameters

##### T

`T`

#### Parameters

##### response

`any`

##### params?

###### page?

`number`

###### pageSize?

`number`

##### mapFn?

(`item`) => `T`

#### Returns

`object`

##### data

> **data**: `T`[]

##### total

> **total**: `number`

##### page?

> `optional` **page**: `number`

##### pageSize?

> `optional` **pageSize**: `number`
