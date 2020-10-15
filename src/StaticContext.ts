import { ComponentProps } from 'react';
import { StaticRouter } from 'react-router-dom';

/**
 * Статический контекст роутера из библиотеки react-router-dom.
 */
export type StaticContext = Exclude<
  ComponentProps<typeof StaticRouter>['context'],
  void
>;
