[**d-rts**](../README.md)

***

[d-rts](../README.md) / AuthService

# Class: AuthService

Defined in: [index.d.ts:142](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L142)

## Constructors

### Constructor

> **new AuthService**(): `AuthService`

#### Returns

`AuthService`

## Methods

### identify()

> `static` **identify**(`credentials`): `Promise`\<[`LoginResult`](../interfaces/LoginResult.md) \| [`IdentifyResult`](../interfaces/IdentifyResult.md)\>

Defined in: [index.d.ts:143](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L143)

#### Parameters

##### credentials

[`LoginCredentials`](../interfaces/LoginCredentials.md)

#### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md) \| [`IdentifyResult`](../interfaces/IdentifyResult.md)\>

***

### loginWithContract()

> `static` **loginWithContract**(`request`): `Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

Defined in: [index.d.ts:144](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L144)

#### Parameters

##### request

[`ContractLoginRequest`](../interfaces/ContractLoginRequest.md)

#### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

***

### login()

> `static` **login**(`credentials`): `Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

Defined in: [index.d.ts:145](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L145)

#### Parameters

##### credentials

[`LoginCredentials`](../interfaces/LoginCredentials.md)

#### Returns

`Promise`\<[`LoginResult`](../interfaces/LoginResult.md)\>

***

### logout()

> `static` **logout**(): `void`

Defined in: [index.d.ts:146](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L146)

#### Returns

`void`

***

### isAuthenticated()

> `static` **isAuthenticated**(): `boolean`

Defined in: [index.d.ts:147](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L147)

#### Returns

`boolean`

***

### getCurrentUser()

> `static` **getCurrentUser**(): `any`

Defined in: [index.d.ts:148](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L148)

#### Returns

`any`

***

### getAccessToken()

> `static` **getAccessToken**(): `string`

Defined in: [index.d.ts:149](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L149)

#### Returns

`string`

***

### getRefreshToken()

> `static` **getRefreshToken**(): `string`

Defined in: [index.d.ts:150](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L150)

#### Returns

`string`

***

### logoutFromServer()

> `static` **logoutFromServer**(): `Promise`\<`void`\>

Defined in: [index.d.ts:151](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L151)

#### Returns

`Promise`\<`void`\>

***

### logoutAllDevices()

> `static` **logoutAllDevices**(): `Promise`\<`void`\>

Defined in: [index.d.ts:152](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L152)

#### Returns

`Promise`\<`void`\>

***

### refreshAccessToken()

> `static` **refreshAccessToken**(): `Promise`\<[`RefreshTokenResponse`](../interfaces/RefreshTokenResponse.md)\>

Defined in: [index.d.ts:153](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L153)

#### Returns

`Promise`\<[`RefreshTokenResponse`](../interfaces/RefreshTokenResponse.md)\>

***

### revokeRefreshToken()

> `static` **revokeRefreshToken**(`refreshToken?`): `Promise`\<`void`\>

Defined in: [index.d.ts:154](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L154)

#### Parameters

##### refreshToken?

`string`

#### Returns

`Promise`\<`void`\>

***

### getActiveSessions()

> `static` **getActiveSessions**(): `Promise`\<[`ActiveSession`](../interfaces/ActiveSession.md)[]\>

Defined in: [index.d.ts:155](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L155)

#### Returns

`Promise`\<[`ActiveSession`](../interfaces/ActiveSession.md)[]\>

***

### isTokenExpiringSoon()

> `static` **isTokenExpiringSoon**(`token`, `minutesBeforeExpiry?`): `boolean`

Defined in: [index.d.ts:156](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L156)

#### Parameters

##### token

`string`

##### minutesBeforeExpiry?

`number`

#### Returns

`boolean`

***

### ensureValidToken()

> `static` **ensureValidToken**(): `Promise`\<`boolean`\>

Defined in: [index.d.ts:157](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L157)

#### Returns

`Promise`\<`boolean`\>
