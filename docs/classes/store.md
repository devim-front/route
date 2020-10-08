[@devim-front/react-route](../README.md) › [Store](store.md)

# Class: Store ‹**E**›

Хранилище состояния маршрутизации.

## Type parameters

▪ **E**: *StoreEvents*

## Hierarchy

* LazyStore

  ↳ **Store**

## Index

### Constructors

* [constructor](store.md#markdown-header-constructor)

### Properties

* [pathname](store.md#markdown-header-pathname)
* [search](store.md#markdown-header-search)
* [instance](store.md#markdown-header-static-protected-instance)

### Accessors

* [searchParams](store.md#markdown-header-searchparams)
* [isExists](store.md#markdown-header-static-protected-isexists)

### Methods

* [dispose](store.md#markdown-header-dispose)
* [emit](store.md#markdown-header-protected-emit)
* [off](store.md#markdown-header-off)
* [on](store.md#markdown-header-on)
* [push](store.md#markdown-header-push)
* [replace](store.md#markdown-header-replace)
* [sync](store.md#markdown-header-sync)
* [create](store.md#markdown-header-static-protected-create)
* [delete](store.md#markdown-header-static-delete)
* [get](store.md#markdown-header-static-get)
* [init](store.md#markdown-header-static-init)

## Constructors

### <a id="markdown-header-constructor" name="markdown-header-constructor"></a>  constructor

\+ **new Store**(...`_args`: any[]): *[Store](store.md)*

*Inherited from [RoutePath](routepath.md).[constructor](routepath.md#markdown-header-constructor)*

Создает экземпляр сервиса. Получить созданный экземпляр можно с помощью
статического метода get, вызов конструктора напрямую приводит к ошибке.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`..._args` | any[] | Аргументы, полученные из метода create.  |

**Returns:** *[Store](store.md)*

## Properties

### <a id="markdown-header-pathname" name="markdown-header-pathname"></a>  pathname

• **pathname**: *string*

Компонент пути из текущего адреса страницы.

___

### <a id="markdown-header-search" name="markdown-header-search"></a>  search

• **search**: *string*

Строка запроса из текущего адреса страницы.

___

### <a id="markdown-header-static-protected-instance" name="markdown-header-static-protected-instance"></a> `Static` `Protected` instance

▪ **instance**: *any*

*Inherited from [RoutePath](routepath.md).[instance](routepath.md#markdown-header-static-protected-instance)*

Экземпляр сервиса.

## Accessors

### <a id="markdown-header-searchparams" name="markdown-header-searchparams"></a>  searchParams

• **get searchParams**(): *object*

Строка запроса из текущего адреса страницы, представленная в виде
коллекции ключ - значение.

**Returns:** *object*

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

### <a id="markdown-header-push" name="markdown-header-push"></a>  push

▸ **push**(`href`: string): *void*

Вызывает перенаправление на указанный адрес.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`href` | string | Адрес.  |

**Returns:** *void*

___

### <a id="markdown-header-replace" name="markdown-header-replace"></a>  replace

▸ **replace**(`href`: string): *void*

Вызывает перенаправление на указанный адрес без записи в истории.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`href` | string | Адрес.  |

**Returns:** *void*

___

### <a id="markdown-header-sync" name="markdown-header-sync"></a>  sync

▸ **sync**(): *FunctionComponentElement‹object›*

Возвращает элемент React, который, будучи монтирован в React DOM,
синхронизирует данное хранилище и менеджер истории роутера из
библиотеки react-router-dom.

**Returns:** *FunctionComponentElement‹object›*

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
