import { assert } from 'chai';

import { RoutePath } from './RoutePath';

describe('RouteParser', () => {
  describe('href', () => {
    it('should works on a route without parameters', () => {
      class Route extends RoutePath {
        public path = '/articles';
      }

      const value = Route.get().href();
      assert.equal(value, '/articles');
    });

    it('should works on a route with required parameters', () => {
      type Params = {
        category: string;
        article: string;
      };

      class Route extends RoutePath<Params> {
        public path = '/:category/:article';
      }

      const value = Route.get().href({
        category: 'news',
        article: 'last',
      });

      assert.equal(value, '/news/last');
    });

    it('should works on a route with optional parameters', () => {
      type Params = {
        category: string;
        article?: string;
      };

      class Route extends RoutePath<Params> {
        public path = '/:category/:article?';
      }

      const value = Route.get().href({
        category: 'news',
      });

      assert.equal(value, '/news');
    });
  });

  describe('test', () => {
    it('should works on a route without parameters', () => {
      class Route extends RoutePath {
        public path = '/articles';
      }

      const value = Route.get().test('/articles');
      assert.isTrue(value);
    });

    it('should works on a route with required parameters', () => {
      type Params = {
        category: string;
        article: string;
      };

      class Route extends RoutePath<Params> {
        public path = '/:category/:article';
      }

      const value = Route.get().test('/news/last');
      assert.isTrue(value);
    });

    it('should works on a route with optional parameters', () => {
      type Params = {
        category: string;
        article?: string;
      };

      class Route extends RoutePath<Params> {
        public path = '/:category/:article?';
      }

      const value = Route.get().test('/news');
      assert.isTrue(value);
    });
  });

  describe('exec', () => {
    it('should works on a route without parameters', () => {
      class Route extends RoutePath {
        public path = '/articles';
      }

      const value = Route.get().exec('/articles');
      assert.deepEqual(value, {});
    });

    it('should works on a route with required parameters', () => {
      type Params = {
        category: string;
        article: string;
      };

      class Route extends RoutePath<Params> {
        public path = '/:category/:article';
      }

      const value = Route.get().exec('/news/last');

      assert.deepEqual(value, {
        category: 'news',
        article: 'last',
      });
    });

    it('should works on a route with optional parameters', () => {
      type Params = {
        category: string;
        article?: string;
      };

      class Route extends RoutePath<Params> {
        public path = '/:category/:article?';
      }

      const value = Route.get().exec('/news');

      assert.deepEqual(value, {
        category: 'news',
        article: undefined,
      });
    });

    it("should returns an undefined if the href doesn't match with route", () => {
      class Route extends RoutePath {
        public path = '/articles';
      }

      const value = Route.get().exec('/categories');
      assert.isUndefined(value);
    });
  });
});
