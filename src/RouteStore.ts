import { reactive } from '@devim-front/store';
import { computed } from 'mobx';

import { RouteRedirect } from './RouteRedirect';
import { Store } from './Store';
import { RouteParams } from './RouteParams';

/**
 * Родительский класс маршрута, который содержит наблюдаемые свойства,
 * основанные на текущем адресе страницы.
 */
@reactive
export class RouteStore<P extends RouteParams = void> extends RouteRedirect<P> {
  /**
   * True, если текущий адрес страницы соответствует данному маршруту.
   */
  @computed
  public get isActive() {
    const { pathname } = Store.get(this);
    return this.test(pathname);
  }

  /**
   * Содержит коллекцию значений именованных параметров данного маршрута,
   * полученную из текущего адреса страницы. Если адрес не соответствует
   * маршруту, то свойство равно undefined.
   */
  @computed
  public get params() {
    const { pathname } = Store.get(this);
    return this.exec(pathname);
  }
}
