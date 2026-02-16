[**d-rts**](../README.md)

***

[d-rts](../README.md) / NavbarProps

# Interface: NavbarProps

Defined in: [index.d.ts:508](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L508)

## Extends

- `HTMLAttributes`\<`HTMLElement`\>

## Properties

### isCollapsed?

> `optional` **isCollapsed**: `boolean`

Defined in: [index.d.ts:509](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L509)

***

### breadcrumbs?

> `optional` **breadcrumbs**: [`BreadcrumbItem`](BreadcrumbItem.md)[]

Defined in: [index.d.ts:510](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L510)

***

### user?

> `optional` **user**: `object`

Defined in: [index.d.ts:511](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L511)

#### name

> **name**: `string`

#### role?

> `optional` **role**: `string`

#### avatarUrl?

> `optional` **avatarUrl**: `string`

***

### companyName?

> `optional` **companyName**: `string`

Defined in: [index.d.ts:516](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L516)

***

### notifications?

> `optional` **notifications**: [`NotificationItem`](NotificationItem.md)[]

Defined in: [index.d.ts:517](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L517)

***

### onNotificationRead()?

> `optional` **onNotificationRead**: (`id`) => `void`

Defined in: [index.d.ts:518](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L518)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### onMarkAllAsRead()?

> `optional` **onMarkAllAsRead**: () => `void`

Defined in: [index.d.ts:519](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L519)

#### Returns

`void`

***

### onClearAllNotifications()?

> `optional` **onClearAllNotifications**: () => `void`

Defined in: [index.d.ts:520](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L520)

#### Returns

`void`

***

### onViewAllNotifications()?

> `optional` **onViewAllNotifications**: () => `void`

Defined in: [index.d.ts:521](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L521)

#### Returns

`void`

***

### userMenuTrigger?

> `optional` **userMenuTrigger**: `ReactNode`

Defined in: [index.d.ts:522](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L522)

***

### actions?

> `optional` **actions**: `ReactNode`

Defined in: [index.d.ts:523](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L523)

***

### modules?

> `optional` **modules**: [`Module`](Module.md)[]

Defined in: [index.d.ts:524](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L524)

***

### currentModule?

> `optional` **currentModule**: `string`

Defined in: [index.d.ts:525](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L525)

***

### onModuleChange()?

> `optional` **onModuleChange**: (`moduleId`) => `void`

Defined in: [index.d.ts:526](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L526)

#### Parameters

##### moduleId

`string`

#### Returns

`void`

***

### onLogout()?

> `optional` **onLogout**: () => `void`

Defined in: [index.d.ts:527](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L527)

#### Returns

`void`
