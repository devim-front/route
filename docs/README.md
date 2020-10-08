[@devim-front/react-route](README.md)

# @devim-front/react-route

## Index

### Classes

* [Route](classes/route.md)
* [RouteComponent](classes/routecomponent.md)
* [RouteGo](classes/routego.md)
* [RoutePath](classes/routepath.md)
* [RouteRedirect](classes/routeredirect.md)
* [RouteStore](classes/routestore.md)
* [Store](classes/store.md)

### Type aliases

* [Element](README.md#markdown-header-element)
* [History](README.md#markdown-header-history)
* [Info](README.md#markdown-header-info)
* [Location](README.md#markdown-header-location)
* [RouteExecValues](README.md#markdown-header-routeexecvalues)
* [RouteHrefValues](README.md#markdown-header-routehrefvalues)
* [RouteParams](README.md#markdown-header-routeparams)
* [RouteView](README.md#markdown-header-routeview)

### Functions

* [withRoute](README.md#markdown-header-const-withroute)

## Type aliases

### <a id="markdown-header-element" name="markdown-header-element"></a>  Element

Ƭ **Element**: *ReactElement‹RedirectProps›*

Элемент Redirect из библиотеки react-router с предустановленными
значениями свойств.

___

### <a id="markdown-header-history" name="markdown-header-history"></a>  History

Ƭ **History**: *RouteComponentProps["history"]*

История роутера.

___

### <a id="markdown-header-info" name="markdown-header-info"></a>  Info

Ƭ **Info**: *object*

Сведения, необходимые для разбора адресов страниц.

#### Type declaration:

* **keys**: *Key[]*

* **regexp**: *RegExp*

___

### <a id="markdown-header-location" name="markdown-header-location"></a>  Location

Ƭ **Location**: *RouteComponentProps["location"]*

Текущее местоположение роутера.

___

### <a id="markdown-header-routeexecvalues" name="markdown-header-routeexecvalues"></a>  RouteExecValues

Ƭ **RouteExecValues**: *P extends Exclude‹RouteParams, void› ? object : object*

Коллекция значений, получаемая при разборе адреса страницы с помощью
маски.

___

### <a id="markdown-header-routehrefvalues" name="markdown-header-routehrefvalues"></a>  RouteHrefValues

Ƭ **RouteHrefValues**: *P extends Exclude‹RouteParams, void› ? object : void*

Коллекция значений, подставляемая в маску при генерации адресов страниц.

___

### <a id="markdown-header-routeparams" name="markdown-header-routeparams"></a>  RouteParams

Ƭ **RouteParams**: *Record‹string, string | undefined› | void*

Коллекция именованных параметров маски данного маршрута.

___

### <a id="markdown-header-routeview" name="markdown-header-routeview"></a>  RouteView

Ƭ **RouteView**: *ComponentType*

Компонент, который подключается в React DOM, когда адрес страницы
совпадает с маршрутом.

## Functions

### <a id="markdown-header-const-withroute" name="markdown-header-const-withroute"></a> `Const` withRoute

▸ **withRoute**‹**P**›(`route`: [RouteComponent](classes/routecomponent.md)‹P›): *(Anonymous function)*

Возвращает обёртку над указанным компонентом, которая связывает его
с переданным маршрутом.

**Type parameters:**

▪ **P**: *[RouteParams](README.md#markdown-header-routeparams)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`route` | [RouteComponent](classes/routecomponent.md)‹P› | Экземпляр маршрута.  |

**Returns:** *(Anonymous function)*
