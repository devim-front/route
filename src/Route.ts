import { RouteGo } from './RouteGo';
import { RouteParams } from './RouteParams';

/**
 * Базовый класс маршрутов приложения.
 */
export class Route<P extends RouteParams = void> extends RouteGo<P> {}
