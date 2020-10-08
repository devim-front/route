[@devim-front/react-route](../README.md) › [RoutePath](routepath.md)

# Class: RoutePath ‹**P, E**›

Родительский класс маршрута, содержащий методы для работы с маской адреса
страницы. Этот класс предоставляет возможность генерировать адреса
по маске, сравнивать их с данной маской и получать значения, соответствующие
именованным параметрам из маски.

## Type parameters

▪ **P**: *[RouteParams](../README.md#markdown-header-routeparams)*

▪ **E**: *StoreEvents*

## Hierarchy

* LazyStore

  ↳ **RoutePath**

  ↳ [RouteComponent](routecomponent.md)

## Index

### Constructors

* [constructor](routepath.md#markdown-header-constructor)

### Properties

* [exact](routepath.md#markdown-header-exact)
* [path](routepath.md#markdown-header-path)
* [instance](routepath.md#markdown-header-static-protected-instance)

### Accessors

* [requiredPath](routepath.md#markdown-header-protected-requiredpath)
* [isExists](routepath.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](routepath.md#markdown-header-dispose)
* [emit](routepath.md#markdown-header-protected-emit)
* [exec](routepath.md#markdown-header-exec)
* [href](routepath.md#markdown-header-href)
* [off](routepath.md#markdown-header-off)
* [on](routepath.md#markdown-header-on)
* [test](routepath.md#markdown-header-test)
* [create](routepath.md#markdown-header-static-protected-create)
* [delete](routepath.md#markdown-header-static-delete)
* [get](routepath.md#markdown-header-static-get)
* [init](routepath.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new RoutePath**(...`_args`: any[]): *[RoutePath](routepath.md)*

*Inherited from [RoutePath](routepath.md).[constructor](routepath.md#markdown-header-constructor)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._args` | any[] | Аргументы, полученные из метода create.  |

**Returns:** *[RoutePath](routepath.md)*

## Properties

### <a id="markdown-header-exact" name="markdown-header-exact"></a>  exact

• **exact**: *boolean* = false

Указывает, что адреса страниц должны соответствовать маске данного маршрута
в точности. При неточном совпадении, если маске соответствует страница,
то и все её дочерние страницы также будут соответствовать этой маске.
Флаг exact отключает это поведение.

___

### <a id="markdown-header-path" name="markdown-header-path"></a>  path

• **path**: *string*

Маска адресов страниц, обрабатываемых данным маршрутом.

___

### <a id="markdown-header-static-protected-instance" name="markdown-header-static-protected-instance"></a> `Static` `Protected` instance

▪ **instance**: *any*

*Inherited from [RoutePath](routepath.md).[instance](routepath.md#markdown-header-static-protected-instance)*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-protected-requiredpath" name="markdown-header-protected-requiredpath"></a> `Protected` requiredPath

• **get requiredPath**(): *string*

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

### <a id="markdown-header-test" name="markdown-header-test"></a>  test

▸ **test**(`href`: string): *boolean*

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
