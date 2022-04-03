import React, { LazyExoticComponent } from 'react';

import FirstComponent from '@/components/FirstComponent';

import { Layouts } from '@/layouts/Layouts';

type Element =
  | LazyExoticComponent<() => JSX.Element>
  | JSX.Element
  | (() => JSX.Element);

export interface IRoute {
  layout?: Layouts;
  path: string;
  element: Element;
  children?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: '/',
    layout: Layouts.LeftAside,
    element: <FirstComponent />, // React.lazy(() => import('@/components/FirstComponent')),
  },
  {
    layout: Layouts.TopAside,
    path: 'top',
    element: <FirstComponent />, // React.lazy(() => import('@/components/FirstComponent')),
  },
  {
    layout: Layouts.TopAside,
    path: 'top/top',
    element: <FirstComponent />, // React.lazy(() => import('@/components/FirstComponent')),
  },
  {
    path: 'tmp',
    element: <FirstComponent />, // React.lazy(() => import('@/components/FirstComponent')),
  },
];
