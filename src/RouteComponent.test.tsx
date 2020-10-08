import React, { FC, createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Switch, StaticRouter } from 'react-router-dom';
import { assert } from 'chai';

import { RouteComponent } from './RouteComponent';

describe('RouteElement', () => {
  describe('route', () => {
    it('should returns a corrent Route element', () => {
      const Component: FC = () => createElement('div', {}, 'Hello world');

      class Route extends RouteComponent {
        public component = Component;
        public path = '/';
      }

      const value = renderToString(
        <StaticRouter location="/">
          <Switch>{Route.get().route()}</Switch>
        </StaticRouter>
      );

      assert.equal(value, `<div>Hello world</div>`);
    });
  });
});
