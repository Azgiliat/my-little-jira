import React, { LazyExoticComponent } from 'react';

import { Layouts } from '@/layouts/Layouts';
import { PageNotFound } from '@/modules/PageNotFound/PageNotFound';
import { LoginIndex } from '@/modules/login/LoginIndex';

type Element = LazyExoticComponent<() => JSX.Element> | JSX.Element;

export interface IRoute {
  layout?: Layouts;
  path: string;
  element: Element;
  needAuth?: boolean;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: '/login',
    layout: Layouts.TopAside,
    element: <LoginIndex />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
