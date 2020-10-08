import React, { FC, ComponentProps } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { assert } from 'chai';

import { RouteGo } from './RouteGo';
import { Store } from './Store';

type Context = Exclude<ComponentProps<typeof StaticRouter>['context'], void>;

describe('RouteGo', () => {
  describe('go', () => {
    it('should works with href parameters only', () => {
      class Route extends RouteGo {
        public path = '/foo';
      }

      const Component: FC = () => {
        Route.get().go();
        return null;
      };

      const context: Context = {};

      renderToString(
        <StaticRouter context={context}>
          {Store.get().sync()}
          <Component />
        </StaticRouter>
      );

      const { url, action } = context;

      assert.equal(action, 'PUSH');
      assert.equal(url, '/foo');
    });

    it('should works with href and push flag', () => {
      class Route extends RouteGo {
        public path = '/foo';
      }

      const Component: FC = () => {
        Route.get().go(false);
        return null;
      };

      const context: Context = {};

      renderToString(
        <StaticRouter context={context}>
          {Store.get().sync()}
          <Component />
        </StaticRouter>
      );

      const { url, action } = context;

      assert.equal(action, 'REPLACE');
      assert.equal(url, '/foo');
    });
  });
});
