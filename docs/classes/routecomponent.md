[@devim-front/route](../README.md) › [RouteComponent](routecomponent.md)

# Class: RouteComponent ‹**P, E**›

Родительский класс маршрута, содержащий методы для генерации элементов
компонента Route из библиотеки react-router-dom.

## Type parameters

▪ **P**: *[RouteParams](../README.md#markdown-header-routeparams)*

▪ **E**: *StoreEvents*

## Hierarchy

  ↳ [RoutePath](routepath.md)‹P›

  ↳ **RouteComponent**

  ↳ [RouteRedirect](routeredirect.md)

## Index

### Constructors

* [constructor](routecomponent.md#markdown-header-constructor)

### Properties

* [component](routecomponent.md#markdown-header-component)
* [exact](routecomponent.md#markdown-header-exact)
* [path](routecomponent.md#markdown-header-path)
* [instance](routecomponent.md#markdown-header-static-protected-instance)

### Accessors

* [requiredComponent](routecomponent.md#markdown-header-protected-requiredcomponent)
* [requiredPath](routecomponent.md#markdown-header-protected-requiredpath)
* [isExists](routecomponent.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](routecomponent.md#markdown-header-dispose)
* [emit](routecomponent.md#markdown-header-protected-emit)
* [exec](routecomponent.md#markdown-header-exec)
* [href](routecomponent.md#markdown-header-href)
* [off](routecomponent.md#markdown-header-off)
* [on](routecomponent.md#markdown-header-on)
* [route](routecomponent.md#markdown-header-route)
* [test](routecomponent.md#markdown-header-test)
* [create](routecomponent.md#markdown-header-static-protected-create)
* [delete](routecomponent.md#markdown-header-static-delete)
* [get](routecomponent.md#markdown-header-static-get)
* [init](routecomponent.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new RouteComponent**(...`_args`: any[]): *[RouteComponent](routecomponent.md)*

*Inherited from [RoutePath](routepath.md).[constructor](routepath.md#markdown-header-constructor)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._args` | any[] | Аргументы, полученные из метода create.  |

**Returns:** *[RouteComponent](routecomponent.md)*

## Properties

### <a id="markdown-header-component" name="markdown-header-component"></a>  component

• **component**: *[RouteView](../README.md#markdown-header-routeview)*

Компонент, который должен быть монтирован в React DOM, когда
текущий адрес страницы совпадает с данным маршрутом.

___

### <a id="markdown-header-exact" name="markdown-header-exact"></a>  exact

• **exact**: *boolean* = false

*Inherited from [RoutePath](routepath.md).[exact](routepath.md#markdown-header-exact)*

Указывает, что адреса страниц должны соответствовать маске данного маршрута
в точности. При неточном совпадении, если маске соответствует страница,
то и все её дочерние страницы также будут соответствовать этой маске.
Флаг exact отключает это поведение.

___

### <a id="markdown-header-path" name="markdown-header-path"></a>  path

• **path**: *string*

*Inherited from [RoutePath](routepath.md).[path](routepath.md#markdown-header-path)*

Маска адресов страниц, обрабатываемых данным маршрутом.

___

### <a id="markdown-header-static-protected-instance" name="markdown-header-static-protected-instance"></a> `Static` `Protected` instance

▪ **instance**: *any*

*Inherited from [RoutePath](routepath.md).[instance](routepath.md#markdown-header-static-protected-instance)*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-protected-requiredcomponent" name="markdown-header-protected-requiredcomponent"></a> `Protected` requiredComponent

• **get requiredComponent**(): *ComponentType‹any›*

Содержит значение свойства component. Если component не определено в
классе наследнике, то выбрасывается исключение. Если вам нужно получить
гарантированно существующий компонент для вставки в React DOM, то
следует использовать это свойство, а не вызывать component напрямую.

**Returns:** *ComponentType‹any›*

___

### <a id="markdown-header-protected-requiredpath" name="markdown-header-protected-requiredpath"></a> `Protected` requiredPath

• **get requiredPath**(): *string*

*Inherited from [RoutePath](routepath.md).[requiredPath](routepath.md#markdown-header-protected-requiredpath)*

Содержит значение свойства path. Если path не определено в
классе-наследнике, выбрасывается исключение. Если вам нужно получить
гарантировано существующую маску адресов, следует воспользоваться этим
свойством, а не использовать path напрямую.

**Returns:** *string*

___

### <a id="markdown-header-static-protected-isexists" name="markdown-header-static-protected-isexists"></a> `Static` `Protected` isExists

• **get isExists**(): *boolean*

*Inherited from [RoutePath](routepath.md).[isExists](routepath.md#markdown-header-static-protected-isexists)*

Указывает, что экземпляр данного класса уже был создан.

**Returns:** *boolean*

## Methods

### <a id="markdown-header-dispose" name="markdown-header-dispose"></a>  dispose

▸ **dispose**(): *void*

*Inherited from [RoutePath](routepath.md).[dispose](routepath.md#markdown-header-dispose)*

*Overrides void*

Освобождает все занятые экземпляром сервиса ресурсы, подготавливая его к
удалению. Для строго или ленивого сервиса прямой вызов этого метода
запрещён и приведет к ошибке, поскольку это может создать неоднозначность
в коде. Используйте вместо него статический метод delete.

**Returns:** *void*

___

### <a id="markdown-header-protected-emit" name="markdown-header-protected-emit"></a> `Protected` emit

▸ **emit**‹**T**›(`event`: T, ...`args`: Parameters‹E[T]›): *void*

*Inherited from [RoutePath](routepath.md).[emit](routepath.md#markdown-header-protected-emit)*

Вызывает указанное событие, передавая аргументы в его обработчики.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`...args` | Parameters‹E[T]› | Аргументы, передаваемые в обработчики.  |

**Returns:** *void*

___

### <a id="markdown-header-exec" name="markdown-header-exec"></a>  exec

▸ **exec**(`href`: string): *undefined | P extends object ? object : object*

*Inherited from [RoutePath](routepath.md).[exec](routepath.md#markdown-header-exec)*

Возвращает коллекцию значений именованных параметров маски данного
маршрута, содержащуюся в указанном адресе страницы. Если адрес не
соответствует данному маршруту, метод возвращает undefined. Если
в маске маршрута нет именованных параметров, возвращается пустой объект.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`href` | string | Адрес страницы.  |

**Returns:** *undefined | P extends object ? object : object*

___

### <a id="markdown-header-href" name="markdown-header-href"></a>  href

▸ **href**(`values`: [RouteHrefValues](../README.md#markdown-header-routehrefvalues)‹P›): *string*

*Inherited from [RoutePath](routepath.md).[href](routepath.md#markdown-header-href)*

Генерирует адрес страницы, подставляя в маску этого маршрута указанные
значения вместо её именованных параметров.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`values` | [RouteHrefValues](../README.md#markdown-header-routehrefvalues)‹P› | Значения именованных параметров, которые должны быть подставлены в адрес.  |

**Returns:** *string*

___

### <a id="markdown-header-off" name="markdown-header-off"></a>  off

▸ **off**‹**T**›(`event`: T, `handler`: E[T]): *void*

*Inherited from [RoutePath](routepath.md).[off](routepath.md#markdown-header-off)*

Удаляет указанный обработчик события.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*

___

### <a id="markdown-header-on" name="markdown-header-on"></a>  on

▸ **on**‹**T**›(`event`: T, `handler`: E[T]): *void*

*Inherited from [RoutePath](routepath.md).[on](routepath.md#markdown-header-on)*

Добавляет обработчик указанному событию.

**Type parameters:**

▪ **T**: *keyof E*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | T | Событие. |
`handler` | E[T] | Обработчик.  |

**Returns:** *void*

___

### <a id="markdown-header-route" name="markdown-header-route"></a>  route

▸ **route**(): *ComponentElement‹RouteProps, Route‹RouteProps››*

Возвращает элемент Route из библиотеки react-router-dom с
предустановленными значениями свойств component, path и exact. Данный
метод используется для того, чтобы подключить маршрут в React DOM.

**Returns:** *ComponentElement‹RouteProps, Route‹RouteProps››*

___

### <a id="markdown-header-test" name="markdown-header-test"></a>  test

▸ **test**(`href`: string): *boolean*

*Inherited from [RoutePath](routepath.md).[test](routepath.md#markdown-header-test)*

Возвращает true, если указанный адрес страницы соответствует маске.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`href` | string | Адрес страницы.  |

**Returns:** *boolean*

___

### <a id="markdown-header-static-protected-create" name="markdown-header-static-protected-create"></a> `Static` `Protected` create

▸ **create**‹**T**›(...`args`: ConstructorParameters‹T›): *void*

*Inherited from [RoutePath](routepath.md).[create](routepath.md#markdown-header-static-protected-create)*

Создает экземпляр сервиса и сохраняет его. Для создания экземпляра класса
следует использовать именно его; вызов оператора new приводит к ошибке.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | ConstructorParameters‹T› | Аргументы конструктора.  |

**Returns:** *void*

___

### <a id="markdown-header-static-delete" name="markdown-header-static-delete"></a> `Static` delete

▸ **delete**(): *void*

*Inherited from [RoutePath](routepath.md).[delete](routepath.md#markdown-header-static-delete)*

Удаляет существующий экземпляр сервиса, освобождая все занятые им ресурсы.

**Returns:** *void*

___

### <a id="markdown-header-static-get" name="markdown-header-static-get"></a> `Static` get

▸ **get**‹**T**›(`this`: T): *InstanceType‹T›*

*Inherited from [RoutePath](routepath.md).[get](routepath.md#markdown-header-static-get)*

*Overrides void*

Возвращает экземпляр сервиса. Если экземпляр сервиса ещё не был создан,
создаёт его.

**Type parameters:**

▪ **T**: *typeof SingleService*

**Parameters:**

Name | Type |
------ | ------ |
`this` | T |

**Returns:** *InstanceType‹T›*

___

### <a id="markdown-header-static-init" name="markdown-header-static-init"></a> `Static` init

▸ **init**(): *void*

*Inherited from [RoutePath](routepath.md).[init](routepath.md#markdown-header-static-init)*

*Overrides void*

Инициализирует экземпляр сервиса. В случае с ленивым сервисом, метод
просто создаёт экземпляр класса, если тот не был создан ранее. Повторные
вызовы init его не пересоздают. Чтобы пересоздать экземпляр принудительно,
используйте метод delete, а затем init.

**Returns:** *void*
