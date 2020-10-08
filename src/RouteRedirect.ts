import { ReactElement, createElement } from 'react';
import { Redirect, RedirectProps } from 'react-router-dom';

import { RouteComponent } from './RouteComponent';
import { RouteParams } from './RouteParams';
import { RouteHrefValues } from './RouteHrefValues';

/**
 * Элемент Redirect из библиотеки react-router с предустановленными
 * значениями свойств.
 */
type Element = ReactElement<RedirectProps>;

/**
 * Родительский класс маршрута, который содержит методы организации
 * перенаправлений.
 */
export class RouteRedirect<P extends RouteParams = void> extends RouteComponent<
  P
> {
  /**
   * Возвращает элемент Redirect из библиотеки react-router с предустановленными
   * значениями свойств.
   *
   * @param push True, если при перенаправлении следует делать запись в истории
   * браузера.
   * @param args Коллекция аргуметов, с которыми были вызваны методы
   * redirect или replace.
   */
  private createElement(push: boolean, args: any[]): Element {
    let exact: boolean | undefined = undefined;
    let from: string | undefined = undefined;

    let value = args.shift();

    if (value instanceof RouteRedirect) {
      from = value.requiredPath;
      exact = value.exact;

      value = args.shift();
    }

    if (typeof value === 'string') {
      from = value;

      value = args.shift();

      if (typeof value === 'boolean') {
        exact = value;

        value = args.shift();
      } else {
        exact = false;
      }
    }

    const to = this.href(value);

    return createElement(Redirect, {
      exact,
      push,
      from,
      to,
    });
  }

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на указанный маршрут
   * в любом случае.
   *
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса страницы.
   */
  public redirect(params: RouteHrefValues<P>): Element;

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на данный маршрут лишь
   * тогда, когда адрес страницы совпадает указанной маской.
   *
   * @param from Маска адреса страницы.
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса данного маршрута.
   */
  public redirect(from: string, params: RouteHrefValues<P>): Element;

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на данный маршрут лишь
   * тогда, когда адрес страницы совпадает указанной маской.
   *
   * @param from Маска адреса страницы.
   * @param exact Значение свойства "exact" элемента Redirect.
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса данного маршрута.
   */
  public redirect(
    from: string,
    exact: boolean,
    params: RouteHrefValues<P>
  ): Element;

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на данный маршрут лишь
   * тогда, когда адрес страницы совпадает с указанным маршрутом.
   *
   * @param from Маршрут.
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса данного маршрута.
   */
  public redirect(from: RouteRedirect<any>, params: P): Element;

  /**
   * Реализация всех перегрузок метода redirect.
   *
   * @param args Список аргументов.
   */
  public redirect(...args: any[]) {
    return this.createElement(true, args);
  }

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на указанный маршрут
   * в любом случае. Переправление происходит без записи в браузерной истории.
   *
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса страницы.
   */
  public replace(params: RouteHrefValues<P>): Element;

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на данный маршрут лишь
   * тогда, когда адрес страницы совпадает указанной маской. Переправление
   * происходит без записи в браузерной истории.
   *
   * @param from Маска адреса страницы.
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса данного маршрута.
   */
  public replace(from: string, params: RouteHrefValues<P>): Element;

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на данный маршрут лишь
   * тогда, когда адрес страницы совпадает указанной маской. Переправление
   * происходит без записи в браузерной истории.
   *
   * @param from Маска адреса страницы.
   * @param exact Значение свойства "exact" элемента Redirect.
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса данного маршрута.
   */
  public replace(
    from: string,
    exact: boolean,
    params: RouteHrefValues<P>
  ): Element;

  /**
   * Возвращает элемент Redirect из библиотеки react-router, сконфигурированный
   * таким образом, чтобы вызывать перенаправление на данный маршрут лишь
   * тогда, когда адрес страницы совпадает с указанным маршрутом. Переправление
   * происходит без записи в браузерной истории.
   *
   * @param from Маршрут.
   * @param params Коллекция именованных параметров для подстановки в маску
   * адреса данного маршрута.
   */
  public replace(from: RouteRedirect<any>, params: RouteHrefValues<P>): Element;

  /**
   * Реализация всех перегрузок метода replace.
   *
   * @param args Список аргументов.
   */
  public replace(...args: any[]) {
    return this.createElement(false, args);
  }
}
