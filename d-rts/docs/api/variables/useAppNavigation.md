[**d-rts**](../README.md)

***

[d-rts](../README.md) / useAppNavigation

# Variable: useAppNavigation()

> `const` **useAppNavigation**: (`config`) => `object`

Defined in: [index.d.ts:937](https://github.com/pivetoo/dRTS/blob/20ed1214fdcbc14010e64f9cce351cfa7776ed43/d-rts/dist/index.d.ts#L937)

## Parameters

### config

[`NavigationConfig`](../interfaces/NavigationConfig.md)

## Returns

`object`

### isActive()

> **isActive**: (`path`) => `boolean`

#### Parameters

##### path

`string`

#### Returns

`boolean`

### handleNavigate()

> **handleNavigate**: (`path`) => `void`

#### Parameters

##### path

`string`

#### Returns

`void`

### createMenuItem()

> **createMenuItem**: (`key`, `label`, `path`, `icon?`) => [`SidebarItemData`](../interfaces/SidebarItemData.md)

#### Parameters

##### key

`string`

##### label

`string`

##### path

`string`

##### icon?

`React.ReactNode`

#### Returns

[`SidebarItemData`](../interfaces/SidebarItemData.md)

### createMenuGroup()

> **createMenuGroup**: (`label`, `items`) => [`SidebarGroup`](../interfaces/SidebarGroup.md)

#### Parameters

##### label

`string`

##### items

`object`[]

#### Returns

[`SidebarGroup`](../interfaces/SidebarGroup.md)

### currentPath

> **currentPath**: `string`
