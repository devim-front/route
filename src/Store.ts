import { LazyStore } from '@devim-front/store';
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
type Location = RouteComponentProps['location'];

/**
 * Хранилище состояния маршрутизации.
 */
export class Store extends LazyStore {
  /**
   * Менеджер истории маршрутизации.
   */
  private history: History;

  /**
   * Компонент пути из текущего адреса страницы.
   */
  @observable
  public pathname: string;

  /**
   * Строка запроса из текущего адреса страницы.
   */
  @observable
  public search: string;

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
  private setHistory = (history: History) => {
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
    const { pathname, search } = location;

    this.pathname = pathname;
    this.search = search;
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
