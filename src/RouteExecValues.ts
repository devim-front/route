import { RouteParams } from './RouteParams';

/**
 * Коллекция значений, получаемая при разборе адреса страницы с помощью
 * маски.
 */
export type RouteExecValues<P extends RouteParams> = P extends Exclude<
  RouteParams,
  void
>
  ? { [K in keyof P]: P[K] }
  : {};
