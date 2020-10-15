import React, { Component, PropsWithChildren } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

/**
 * Свойства компонента.
 */
type Props = PropsWithChildren<RouteComponentProps>;

/**
 * Будучи помещен в DOM, добавляет в статический контекст роутера статус
 * ответа 404.
 */
class NotFound extends Component<Props> {
  /**
   * @inheritdoc
   */
  public render() {
    const { staticContext, children } = this.props;

    if (staticContext != null) {
      staticContext.statusCode = 404;
    }

    return <>{children}</>;
  }
}

const component = withRouter(NotFound);
export { component as NotFound };
