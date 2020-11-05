import React, { FC, ComponentProps } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { autorun } from 'mobx';
import { assert } from 'chai';

import { Pool } from '@devim-front/service';
import { Store } from './Store';

type Context = Exclude<ComponentProps<typeof StaticRouter>['context'], void>;

describe('RouterStore', () => {
  describe('RouterStore.sync', () => {
    it('should works', () => {
      renderToString(
        <StaticRouter location="/foo">{Store.get().sync()}</StaticRouter>
      );

      const { pathname } = Store.get();
      assert.equal(pathname, '/foo');
    });
  });

  describe('RouterStore.pathname', () => {
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

    it('should triggers a reactions when it changes', (done) => {
      const pool = new Pool();
      const store = Store.get(pool);

      const history = createMemoryHistory();
      store.setHistory(history);

      let count: number = 0;

      const dispose = autorun(() => {
        const { pathname } = store;

        count += 1;

        if (count === 1) {
          return;
        }

        assert.equal(pathname, '/foo');

        dispose();
        done();
      });

      history.push('/foo');
    });
  });

  describe('RouterStore.search', () => {
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

    it('should triggers a reactions when it changes', (done) => {
      const pool = new Pool();
      const store = Store.get(pool);

      const history = createMemoryHistory();
      store.setHistory(history);

      let count: number = 0;

      const dispose = autorun(() => {
        const { search } = store;

        count += 1;

        if (count === 1) {
          return;
        }

        assert.equal(search, '?foo');

        dispose();
        done();
      });

      history.push('?foo');
    });
  });

  describe('RouterStore.searchParams', () => {
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

  describe('RouterStore.push', () => {
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

  describe('RouterStore.replace', () => {
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
