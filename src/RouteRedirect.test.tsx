import React, { ComponentProps } from 'react';
import { StaticRouter, Switch } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { assert } from 'chai';

import { RouteRedirect } from './RouteRedirect';

type Context = Exclude<ComponentProps<typeof StaticRouter>['context'], void>;

describe('RouteRedirect', () => {
  describe('redirect', () => {
    it('should works with a parameters only', () => {
      type Params = { id: string };

      class Route extends RouteRedirect<Params> {
        public path = '/:id';
      }

      const element = Route.get().redirect({ id: 'foo' });
      const context: Context = {};
      renderToString(<StaticRouter context={context}>{element}</StaticRouter>);

      assert.equal(context.url, '/foo');
    });

    it("should works with a 'from' argument as a Route", () => {
      class FromRoute extends RouteRedirect {
        public path = '/foo';
        public exact = true;
      }

      class Route extends RouteRedirect {
        public path = '/bar';
      }

      const element = Route.get().redirect(FromRoute.get());

      const context: Context = {};

      renderToString(
        <StaticRouter context={context} location="/foo">
          <Switch>{element}</Switch>
        </StaticRouter>
      );

      assert.equal(context.url, '/bar');
    });

    it("should works with a 'from' argument as a string", () => {
      class Route extends RouteRedirect {
        public path = '/bar';
      }

      const element = Route.get().redirect('/foo');

      const context: Context = {};

      renderToString(
        <StaticRouter context={context} location="/foo">
          <Switch>{element}</Switch>
        </StaticRouter>
      );

      assert.equal(context.url, '/bar');
    });

    it("should works with a 'from' and 'exact' arguments", () => {
      class Route extends RouteRedirect {
        public path = '/bar';
      }

      const element = Route.get().redirect('/foo', true);

      const context: Context = {};

      renderToString(
        <StaticRouter context={context} location="/foo">
          <Switch>{element}</Switch>
        </StaticRouter>
      );

      assert.equal(context.url, '/bar');
    });
  });

  describe('replace', () => {
    it('should works with a parameters only', () => {
      type Params = { id: string };

      class Route extends RouteRedirect<Params> {
        public path = '/:id';
      }

      const element = Route.get().replace({ id: 'foo' });
      const context: Context = {};
      renderToString(<StaticRouter context={context}>{element}</StaticRouter>);

      assert.equal(context.url, '/foo');
    });

    it("should works with a 'from' argument as a Route", () => {
      class FromRoute extends RouteRedirect {
        public path = '/foo';
        public exact = true;
      }

      class Route extends RouteRedirect {
        public path = '/bar';
      }

      const element = Route.get().replace(FromRoute.get());

      const context: Context = {};

      renderToString(
        <StaticRouter context={context} location="/foo">
          <Switch>{element}</Switch>
        </StaticRouter>
      );

      assert.equal(context.url, '/bar');
    });

    it("should works with a 'from' argument as a string", () => {
      class Route extends RouteRedirect {
        public path = '/bar';
      }

      const element = Route.get().replace('/foo');

      const context: Context = {};

      renderToString(
        <StaticRouter context={context} location="/foo">
          <Switch>{element}</Switch>
        </StaticRouter>
      );

      assert.equal(context.url, '/bar');
    });

    it("should works with a 'from' and 'exact' arguments", () => {
      class Route extends RouteRedirect {
        public path = '/bar';
      }

      const element = Route.get().replace('/foo', true);

      const context: Context = {};

      renderToString(
        <StaticRouter context={context} location="/foo">
          <Switch>{element}</Switch>
        </StaticRouter>
      );

      assert.equal(context.url, '/bar');
    });
  });
});
