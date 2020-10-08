import { RouteParams } from './RouteParams';

/**
 * Коллекция значений, подставляемая в маску при генерации адресов страниц.
 */
export type RouteHrefValues<P extends RouteParams> = P extends Exclude<
  RouteParams,
  void
>
  ? { [K in keyof P]: P[K] }
  : void;
