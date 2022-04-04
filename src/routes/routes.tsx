import React, { LazyExoticComponent } from 'react';

import { LogInForm } from '@/components/LogInForm';

import { Layouts } from '@/layouts/Layouts';

type Element =
  | LazyExoticComponent<() => JSX.Element>
  | JSX.Element
  | (() => JSX.Element);

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
    element: <LogInForm />,
  },
];
