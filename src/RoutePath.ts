import { UnreachableError } from '@devim-front/error';
import { LazyStore } from '@devim-front/store';
import { compile, Key, PathFunction, pathToRegexp } from 'path-to-regexp';

import { RouteParams } from './RouteParams';
import { RouteHrefValues } from './RouteHrefValues';
import { RouteExecValues } from './RouteExecValues';

/**
 * Сведения, необходимые для разбора адресов страниц.
 */
type Info = {
  /**
   * Регулярное выражение, соответствующее маске.
   */
  regexp: RegExp;

  /**
   * Массив именованных параметров, содержащихся в маске.
   */
  keys: Key[];
};

/**
 * Родительский класс маршрута, содержащий методы для работы с маской адреса
 * страницы. Этот класс предоставляет возможность генерировать адреса
 * по маске, сравнивать их с данной маской и получать значения, соответствующие
 * именованным параметрам из маски.
 */
export class RoutePath<P extends RouteParams = void> extends LazyStore {
  /**
   * Маска адресов страниц, обрабатываемых данным маршрутом.
   */
  public path: string;

  /**
   * Указывает, что адреса страниц должны соответствовать маске данного маршрута
   * в точности. При неточном совпадении, если маске соответствует страница,
   * то и все её дочерние страницы также будут соответствовать этой маске.
   * Флаг exact отключает это поведение.
   */
  public exact: boolean = false;

  /**
   * Содержит значение свойства path. Если path не определено в
   * классе-наследнике, выбрасывается исключение. Если вам нужно получить
   * гарантировано существующую маску адресов, следует воспользоваться этим
   * свойством, а не использовать path напрямую.
   */
  protected get requiredPath() {
    if (this.path == null) {
      const { name } = this.constructor;

      throw new UnreachableError(
        `The required property '${name}.path' is undefined`
      );
    }

    return this.path;
  }

  /**
   * Кэшированное значение функции для компиляции адресов страниц по маске.
   */
  private compileCache: PathFunction;

  /**
   * Генерирует адрес страницы, подставляя в маску этого маршрута указанные
   * значения вместо её именованных параметров.
   *
   * @param params Значения именованных параметров маски адреса.
   */
  private get compile() {
    if (this.compileCache == null) {
      this.compileCache = compile(this.requiredPath);
    }

    return this.compileCache;
  }

  /**
   * Кэшированное значение свойства info.
   */
  private infoCache: Info;

  /**
   * Сведения о маске, используемые для разбора адресов страниц.
   */
  private get info() {
    if (this.infoCache == null) {
      const keys: Key[] = [];
      const regexp = pathToRegexp(this.requiredPath, keys);
      this.infoCache = { keys, regexp };
    }

    return this.infoCache;
  }

  /**
   * Массив именованных параметров из маски.
   */
  private get keys() {
    return this.info.keys;
  }

  /**
   * Регулярное выражение, соответствующее маске маске.
   */
  private get regexp() {
    return this.info.regexp;
  }

  /**
   * Возвращает массив значений именованных параметров маски данного маршрута,
   * содержащихся в указанном адресе страницы. Если у данной маски нет
   * именованных параметров, возвращается пустой массив. Если переданный адрес
   * страницы не совпадает с маской, то возвращается undefined.
   *
   * @param href Адрес страницы.
   */
  private match(href: string) {
    const match = this.regexp.exec(href);

    if (match == null) {
      return undefined;
    }

    const [matchedHref, ...values] = match;

    if (this.exact) {
      return matchedHref === href ? values : undefined;
    }

    return values;
  }

  /**
   * Возвращает true, если указанный адрес страницы соответствует маске.
   *
   * @param href Адрес страницы.
   */
  public test(href: string) {
    return this.match(href) != null;
  }

  /**
   * Возвращает коллекцию значений именованных параметров маски данного
   * маршрута, содержащуюся в указанном адресе страницы. Если адрес не
   * соответствует данному маршруту, метод возвращает undefined. Если
   * в маске маршрута нет именованных параметров, возвращается пустой объект.
   *
   * @param href Адрес страницы.
   */
  public exec(href: string) {
    const match = this.match(href);

    if (match == null) {
      return undefined;
    }

    const params: RouteExecValues<P> = {} as RouteExecValues<P>;
    const { length } = match;

    for (let i = 0; i < length; i += 1) {
      const { name } = this.keys[i];
      const value = match[i];
      // @ts-ignore
      params[name] = value;
    }

    return params;
  }

  /**
   * Генерирует адрес страницы, подставляя в маску этого маршрута указанные
   * значения вместо её именованных параметров.
   *
   * @param values Значения именованных параметров, которые должны быть
   * подставлены в адрес.
   */
  public href(values: RouteHrefValues<P>) {
    return this.compile(values as object);
  }
}
