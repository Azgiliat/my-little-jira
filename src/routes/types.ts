import { ReactElement } from 'react';

import { Layouts } from '@/layouts/Layouts';

export type Element = ReactElement;
export type ITopLevelRoute = {
  layout?: Layouts;
  path: string;
  element: Element;
  needAuth?: boolean;
  children?: IRoute[];
};
export type IRoute = Omit<ITopLevelRoute, 'layout'>;
export function isTopLevelRoute(
  route: ITopLevelRoute | IRoute,
): route is ITopLevelRoute {
  return 'layout' in route;
}
