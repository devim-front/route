import React, { FC } from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { assert } from 'chai';

import { RouteStore } from './RouteStore';
import { Store } from './Store';

describe('RouteStore', () => {
  describe('isActive', () => {
    it('should be true if the location matches with a route', () => {
      const Component: FC = () => null;

      class Route extends RouteStore {
        public component = Component;
        public path = '/foo';
      }

      renderToString(
        <StaticRouter location="/foo">
          {Store.get().sync()}
          {Route.get().route()}
        </StaticRouter>
      );

      const { isActive } = Route.get();
      assert.isTrue(isActive);
    });

    it("should be false if the location doesn't matches with a route", () => {
      const Component: FC = () => null;

      class Route extends RouteStore {
        public component = Component;
        public path = '/foo';
      }

      renderToString(
        <StaticRouter location="/bar">
          {Store.get().sync()}
          {Route.get().route()}
        </StaticRouter>
      );

      const { isActive } = Route.get();
      assert.isFalse(isActive);
    });
  });

  describe('params', () => {
    it("should be empty object if the route hasn't any parameters and the location matches with a route", () => {
      const Component: FC = () => null;

      class Route extends RouteStore {
        public component = Component;
        public path = '/foo';
      }

      renderToString(
        <StaticRouter location="/foo">
          {Store.get().sync()}
          {Route.get().route()}
        </StaticRouter>
      );

      const { params } = Route.get();
      assert.deepEqual(params, {});
    });

    it("should be non-empty object if the route hasn't any parameters and the location matches with a route", () => {
      const Component: FC = () => null;

      type Params = { id: string };

      class Route extends RouteStore<Params> {
        public component = Component;
        public path = '/foo/:id';
      }

      renderToString(
        <StaticRouter location="/foo/1">
          {Store.get().sync()}
          {Route.get().route()}
        </StaticRouter>
      );

      const { params } = Route.get();
      assert.deepEqual(params, { id: '1' });
    });

    it("should be undefined if the location doesn't matches with a route", () => {
      const Component: FC = () => null;

      class Route extends RouteStore {
        public component = Component;
        public path = '/foo';
      }

      renderToString(
        <StaticRouter location="/bar">
          {Store.get().sync()}
          {Route.get().route()}
        </StaticRouter>
      );

      const { params } = Route.get();
      assert.isUndefined(params);
    });
  });
});
