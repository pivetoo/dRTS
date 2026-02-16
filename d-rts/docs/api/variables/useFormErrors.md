[**d-rts**](../README.md)

***

[d-rts](../README.md) / useFormErrors

# Variable: useFormErrors()

> `const` **useFormErrors**: () => `object`

Defined in: [index.d.ts:965](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L965)

## Returns

`object`

### fieldErrors

> **fieldErrors**: `Record`\<`string`, `string`\>

### setErrors()

> **setErrors**: (`error`) => `void`

#### Parameters

##### error

[`ApiError`](../interfaces/ApiError.md)

#### Returns

`void`

### clearErrors()

> **clearErrors**: () => `void`

#### Returns

`void`

### getError()

> **getError**: (`field`) => `string`

#### Parameters

##### field

`string`

#### Returns

`string`
