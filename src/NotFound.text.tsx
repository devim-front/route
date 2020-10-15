import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { assert } from 'chai';

import { StaticContext } from './StaticContext';
import { NotFound } from './NotFound';

describe('NotFound', () => {
  it('should assigns a statusCode 404', () => {
    const context: StaticContext = {};

    renderToString(
      <StaticRouter context={context}>
        <NotFound />
      </StaticRouter>
    );

    assert.equal(context.statusCode, 404);
  });
});
