[**d-rts**](../README.md)

***

[d-rts](../README.md) / useApi

# Function: useApi()

> **useApi**\<`T`\>(`options?`): `object`

Defined in: [index.d.ts:918](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L918)

## Type Parameters

### T

`T` = `any`

## Parameters

### options?

[`UseApiOptions`](../interfaces/UseApiOptions.md)

## Returns

`object`

### execute()

> **execute**: (`apiCall`) => `Promise`\<`any`\>

#### Parameters

##### apiCall

() => `Promise`\<`any`\>

#### Returns

`Promise`\<`any`\>

### reset()

> **reset**: () => `void`

#### Returns

`void`

### isLoading

> **isLoading**: `boolean`

### hasError

> **hasError**: `boolean`

### hasData

> **hasData**: `boolean`

### data

> **data**: `T`

### loading

> **loading**: `boolean`

### error

> **error**: [`ApiError`](../interfaces/ApiError.md)
