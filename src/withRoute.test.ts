import { assert } from 'chai';
import { createElement, FC } from 'react';
import { renderToString } from 'react-dom/server';

import { RouteComponent } from './RouteComponent';
import { withRoute } from './withRoute';

describe('withRoute', () => {
  it("should returns a component with a display name based on a route's classname", () => {
    const Component: FC = () => null;
    class TestRoute extends RouteComponent {}

    const route = TestRoute.get();
    const component = withRoute(route)(Component);

    assert.equal(component.displayName, 'WithTestRoute(Component)');
  });

  it('should blocks a passing of a route properties into nested component', () => {
    let properties: any;

    const Component: FC<any> = (props) => {
      properties = props;
      return null;
    };

    class TestRoute extends RouteComponent {}

    const route = TestRoute.get();
    const component = withRoute(route)(Component);

    // @ts-ignore
    const element = createElement(component, { foo: 'bar' });
    renderToString(element);

    assert.deepEqual(properties, {});
  });
});
