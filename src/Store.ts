import { LazyStore, reactive } from '@devim-front/store';
import { createElement, FC } from 'react';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { action, observable, computed } from 'mobx';

/**
 * История роутера.
 */
type History = RouteComponentProps['history'];

/**
 * Текущее местоположение роутера.
 */
type Location = RouteComponentProps<any, any, any>['location'];

/**
 * Сообщение об ошибке, которая возникает, когда пользователь пытается
 * обратиться к методам хранилища до его синхронизации с историей.
 */
const ERROR_MESSAGE =
  'The store is not syncronized with React Router. Please use the sync() method';

/**
 * Хранилище состояния маршрутизации.
 */
@reactive
export class Store extends LazyStore {
  /**
   * Менеджер истории маршрутизации.
   */
  private history: History;

  /**
   * Текущий адрес страницы.
   */
  @observable
  private location: Location | undefined = undefined;

  /**
   * Компонент пути из текущего адреса страницы.
   */
  @computed
  public get pathname() {
    Boolean(this.location);

    if (this.history == null) {
      throw new Error(ERROR_MESSAGE);
    }

    const { location } = this.history;
    const { pathname } = location;

    return pathname;
  }

  /**
   * Строка запроса из текущего адреса страницы.
   */
  @computed
  public get search() {
    Boolean(this.location);

    if (this.history == null) {
      throw new Error(ERROR_MESSAGE);
    }

    const { location } = this.history;
    const { search } = location;

    return search;
  }

  /**
   * Якорь запроса из текущего адреса страницы.
   */
  @computed
  public get hash() {
    Boolean(this.location);

    if (this.history == null) {
      throw new Error(ERROR_MESSAGE);
    }

    const { location } = this.history;
    const { hash } = location;

    return hash;
  }

  /**
   * Строка запроса из текущего адреса страницы, представленная в виде
   * коллекции ключ - значение.
   */
  @computed
  public get searchParams() {
    const rawSearch = this.search.replace(/^\?/, '');

    const values = rawSearch.split('&');
    const params: Record<string, string> = {};

    const { length } = values;

    for (let i = 0; i < length; i += 1) {
      const pair = values[i];

      if (pair === '') {
        continue;
      }

      const [title, value = ''] = pair.split('=');
      params[title] = value;
    }

    return params;
  }

  /**
   * Функция, которая прекращает наблюдение за изменениями адресов страниц.
   */
  private unregister: any;

  /**
   * Задаёт новый менеджер истории маршрутизатора.
   *
   * @internal
   * @param history История маршрутизатора.
   */
  public setHistory = (history: History) => {
    if (this.history === history) {
      return;
    }

    if (this.unregister != null) {
      this.unregister();
    }

    this.history = history;

    this.unregister = this.history.listen(this.setLocation);
    this.setLocation(this.history.location);
  };

  /**
   * Задаёт новый текущий адрес страницы.
   *
   * @param location Текущий адрес страницы.
   */
  @action
  private setLocation = (location: Location) => {
    this.location = location;
  };

  /**
   * Компонент React, который синхронизирует данное хранилище и менеджер истории
   * роутера из библиотеки react-router-dom.
   */
  private syncComponent: FC = () => {
    const history = useHistory();
    this.setHistory(history);
    return null;
  };

  /**
   * Возвращает элемент React, который, будучи монтирован в React DOM,
   * синхронизирует данное хранилище и менеджер истории роутера из
   * библиотеки react-router-dom.
   */
  public sync = () => createElement(this.syncComponent);

  /**
   * Вызывает перенаправление на указанный адрес.
   *
   * @param href Адрес.
   */
  public push = (href: string) => {
    this.history.push(href);
  };

  /**
   * Вызывает перенаправление на указанный адрес без записи в истории.
   *
   * @param href Адрес.
   */
  public replace = (href: string) => {
    this.history.replace(href);
  };
}
