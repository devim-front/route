import { RouteStore } from './RouteStore';
import { RouteHrefValues } from './RouteHrefValues';
import { RouteParams } from './RouteParams';
import { Store } from './Store';

/**
 * Родительский класс маршрута, который предоставляет методы для программного
 * редиректа (без использования компонентов React).
 */
export class RouteGo<P extends RouteParams = void> extends RouteStore<P> {
  /**
   * Совершает перенаправление на адрес, полученный путём подстановки переданных
   * значений в маску данного маршрута.
   *
   * @param push Указывает, следует ли делать запись о перенаправлении в
   * истории маршрутизатора.
   * @param values Коллекция значений именованных параметров.
   */
  public go(push: boolean, values: RouteHrefValues<P>): void;

  /**
   * Совершает перенаправление на адрес, полученный путём подстановки переданных
   * значений в маску данного маршрута.
   *
   * @param values Коллекция значений именованных параметров.
   */
  public go(values: RouteHrefValues<P>): void;

  /**
   * Совершает перенаправление на адрес, полученный путём подстановки переданных
   * значений в маску данного маршрута.
   *
   * @param args Список аргументов, описанный в других перегрузках метода.
   */
  public go(...args: any[]) {
    let values: RouteHrefValues<P>;
    let push: boolean = true;

    let value = args.shift();

    if (typeof value === 'boolean') {
      push = value;

      value = args.shift();
    }

    values = value;

    const href = this.href(values);

    if (push) {
      Store.get(this).push(href);
    } else {
      Store.get(this).replace(href);
    }
  }
}
