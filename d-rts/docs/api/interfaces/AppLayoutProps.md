[**d-rts**](../README.md)

***

[d-rts](../README.md) / AppLayoutProps

# Interface: AppLayoutProps

Defined in: [index.d.ts:68](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L68)

## Properties

### title

> **title**: `string`

Defined in: [index.d.ts:69](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L69)

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: [index.d.ts:70](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L70)

***

### logo?

> `optional` **logo**: `ReactNode`

Defined in: [index.d.ts:71](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L71)

***

### user

> **user**: `object`

Defined in: [index.d.ts:72](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L72)

#### name

> **name**: `string`

#### email

> **email**: `string`

#### role?

> `optional` **role**: `string`

#### avatarUrl?

> `optional` **avatarUrl**: `string`

***

### menuItems?

> `optional` **menuItems**: [`SidebarItemData`](SidebarItemData.md)[]

Defined in: [index.d.ts:78](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L78)

***

### menuGroups?

> `optional` **menuGroups**: [`SidebarGroup`](SidebarGroup.md)[]

Defined in: [index.d.ts:79](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L79)

***

### initialCollapsed?

> `optional` **initialCollapsed**: `boolean`

Defined in: [index.d.ts:80](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L80)

***

### onLogout()?

> `optional` **onLogout**: () => `void`

Defined in: [index.d.ts:81](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L81)

#### Returns

`void`

***

### notifications?

> `optional` **notifications**: [`NotificationItem`](NotificationItem.md)[]

Defined in: [index.d.ts:82](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L82)

***

### onNotificationRead()?

> `optional` **onNotificationRead**: (`id`) => `void`

Defined in: [index.d.ts:83](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L83)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### onMarkAllAsRead()?

> `optional` **onMarkAllAsRead**: () => `void`

Defined in: [index.d.ts:84](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L84)

#### Returns

`void`

***

### onClearAllNotifications()?

> `optional` **onClearAllNotifications**: () => `void`

Defined in: [index.d.ts:85](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L85)

#### Returns

`void`

***

### onViewAllNotifications()?

> `optional` **onViewAllNotifications**: () => `void`

Defined in: [index.d.ts:86](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L86)

#### Returns

`void`

***

### breadcrumbs?

> `optional` **breadcrumbs**: [`BreadcrumbItem`](BreadcrumbItem.md)[]

Defined in: [index.d.ts:87](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L87)

***

### modules?

> `optional` **modules**: [`Module`](Module.md)[]

Defined in: [index.d.ts:88](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L88)

***

### currentModule?

> `optional` **currentModule**: `string`

Defined in: [index.d.ts:89](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L89)

***

### onModuleChange()?

> `optional` **onModuleChange**: (`moduleId`) => `void`

Defined in: [index.d.ts:90](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L90)

#### Parameters

##### moduleId

`string`

#### Returns

`void`

***

### onLogoClick()?

> `optional` **onLogoClick**: () => `void`

Defined in: [index.d.ts:91](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L91)

#### Returns

`void`

***

### companyLogo?

> `optional` **companyLogo**: `string`

Defined in: [index.d.ts:92](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L92)

***

### headerMode?

> `optional` **headerMode**: [`SidebarHeaderMode`](../type-aliases/SidebarHeaderMode.md)

Defined in: [index.d.ts:93](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L93)

***

### headerLogo?

> `optional` **headerLogo**: `string`

Defined in: [index.d.ts:94](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L94)

***

### headerLogoCollapsed?

> `optional` **headerLogoCollapsed**: `string`

Defined in: [index.d.ts:95](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L95)

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [index.d.ts:96](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L96)
