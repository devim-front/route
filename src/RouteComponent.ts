import { UnreachableError } from '@devim-front/error';
import { createElement, ComponentType } from 'react';
import { Route } from 'react-router-dom';

import { RoutePath } from './RoutePath';
import { RouteParams } from './RouteParams';
import { RouteView } from './RouteView';
import { withRoute } from './withRoute';

/**
 * Родительский класс маршрута, содержащий методы для генерации элементов
 * компонента Route из библиотеки react-router-dom.
 */
export class RouteComponent<P extends RouteParams = void> extends RoutePath<P> {
  /**
   * Компонент, который должен быть монтирован в React DOM, когда
   * текущий адрес страницы совпадает с данным маршрутом.
   */
  public component: RouteView;

  /**
   * Кэшированное значение свойства requiredComponent.
   */
  private requiredComponentCache: ComponentType<any>;

  /**
   * Содержит значение свойства component. Если component не определено в
   * классе наследнике, то выбрасывается исключение. Если вам нужно получить
   * гарантированно существующий компонент для вставки в React DOM, то
   * следует использовать это свойство, а не вызывать component напрямую.
   */
  protected get requiredComponent(): ComponentType<any> {
    if (this.component == null) {
      const { name } = this.constructor;

      throw new UnreachableError(
        `The required property ${name}.component is undefined`
      );
    }

    if (this.requiredComponentCache == null) {
      this.requiredComponentCache = withRoute(this)(this.component);
    }

    return this.requiredComponentCache;
  }

  /**
   * Возвращает элемент Route из библиотеки react-router-dom с
   * предустановленными значениями свойств component, path и exact. Данный
   * метод используется для того, чтобы подключить маршрут в React DOM.
   */
  public route() {
    return createElement(Route, {
      component: this.requiredComponent,
      exact: this.requiredExact,
      path: this.requiredPath,
    });
  }
}
