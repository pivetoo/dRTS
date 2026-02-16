[**d-rts**](../README.md)

***

[d-rts](../README.md) / AuthContextData

# Interface: AuthContextData

Defined in: [index.d.ts:121](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L121)

## Properties

### user

> **user**: [`User`](User.md)

Defined in: [index.d.ts:122](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L122)

***

### contract

> **contract**: [`ContractType`](ContractType.md)

Defined in: [index.d.ts:123](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L123)

***

### accessToken

> **accessToken**: `string`

Defined in: [index.d.ts:124](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L124)

***

### refreshToken

> **refreshToken**: `string`

Defined in: [index.d.ts:125](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L125)

***

### isAuthenticated

> **isAuthenticated**: `boolean`

Defined in: [index.d.ts:126](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L126)

***

### login()

> **login**: (`data`) => `void`

Defined in: [index.d.ts:127](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L127)

#### Parameters

##### data

[`LoginResult`](LoginResult.md)

#### Returns

`void`

***

### logout()

> **logout**: () => `void`

Defined in: [index.d.ts:128](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L128)

#### Returns

`void`

***

### logoutAllDevices()

> **logoutAllDevices**: () => `void`

Defined in: [index.d.ts:129](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L129)

#### Returns

`void`

***

### refreshAccessToken()

> **refreshAccessToken**: () => `Promise`\<`void`\>

Defined in: [index.d.ts:130](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L130)

#### Returns

`Promise`\<`void`\>

***

### getActiveSessions()

> **getActiveSessions**: () => `Promise`\<[`ActiveSession`](ActiveSession.md)[]\>

Defined in: [index.d.ts:131](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L131)

#### Returns

`Promise`\<[`ActiveSession`](ActiveSession.md)[]\>

***

### updateUser()

> **updateUser**: (`userData`) => `void`

Defined in: [index.d.ts:132](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L132)

#### Parameters

##### userData

`Partial`\<[`User`](User.md)\>

#### Returns

`void`
