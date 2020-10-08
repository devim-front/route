import React, { FC, ComponentProps } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { assert } from 'chai';

import { Store } from './Store';

type Context = Exclude<ComponentProps<typeof StaticRouter>['context'], void>;

describe('RouterStore', () => {
  describe('sync', () => {
    it('should works', () => {
      renderToString(
        <StaticRouter location="/foo">{Store.get().sync()}</StaticRouter>
      );

      const { pathname } = Store.get();
      assert.equal(pathname, '/foo');
    });
  });

  describe('pathname', () => {
    it('should works if a current pathname is not empty', () => {
      renderToString(
        <StaticRouter location="/foo">{Store.get().sync()}</StaticRouter>
      );

      const { pathname } = Store.get();
      assert.equal(pathname, '/foo');
    });

    it('should works if a current pathname is empty', () => {
      renderToString(<StaticRouter>{Store.get().sync()}</StaticRouter>);
      const { pathname } = Store.get();
      assert.equal(pathname, '/');
    });
  });

  describe('search', () => {
    it('should works if a current search is not empty', () => {
      renderToString(
        <StaticRouter location="/foo?bar">{Store.get().sync()}</StaticRouter>
      );

      const { search } = Store.get();
      assert.equal(search, '?bar');
    });

    it('should works if a current search is empty', () => {
      renderToString(<StaticRouter>{Store.get().sync()}</StaticRouter>);

      const { search } = Store.get();
      assert.equal(search, '');
    });
  });

  describe('searchParams', () => {
    it('should works if a search part of href is empty', () => {
      renderToString(
        <StaticRouter location="/foo">{Store.get().sync()}</StaticRouter>
      );

      const { searchParams } = Store.get();
      assert.deepEqual(searchParams, {});
    });

    it("should works if a search part of href is '?'", () => {
      renderToString(
        <StaticRouter location="/foo?">{Store.get().sync()}</StaticRouter>
      );

      const { searchParams } = Store.get();
      assert.deepEqual(searchParams, {});
    });

    it('should works if a search part contains a pairs without values', () => {
      renderToString(
        <StaticRouter location="/foo?bar&baz=xyz">
          {Store.get().sync()}
        </StaticRouter>
      );

      const { searchParams } = Store.get();

      assert.deepEqual(searchParams, {
        bar: '',
        baz: 'xyz',
      });
    });
  });

  describe('push', () => {
    it('should works', () => {
      const Component: FC = () => {
        Store.get().push('/bar');
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
      assert.equal(url, '/bar');
    });
  });

  describe('replace', () => {
    it('should works', () => {
      const Component: FC = () => {
        Store.get().replace('/bar');
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
      assert.equal(url, '/bar');
    });
  });
});
