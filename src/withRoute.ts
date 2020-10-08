import { Component, createElement } from 'react';

import { RouteComponent } from './RouteComponent';
import { RouteParams } from './RouteParams';
import { RouteView } from './RouteView';

/**
 * Возвращает обёртку над указанным компонентом, которая связывает его
 * с переданным маршрутом.
 *
 * @param route Экземпляр маршрута.
 */
export const withRoute = <P extends RouteParams = void>(
  route: RouteComponent<P>
) => (target: RouteView) => {
  const { name } = route.constructor;
  const displayName = `With${name}(${target.displayName || target.name})`;

  return class WithRoute extends Component {
    /**
     * @inheritdoc
     */
    public static displayName = displayName;

    /**
     * @inheritdoc
     */
    public render() {
      return createElement(target);
    }
  };
};
