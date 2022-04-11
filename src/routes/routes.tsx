import React from 'react';

import { Layouts } from '@/layouts/Layouts';
import { LoginIndex } from '@/modules/login/LoginIndex';
import { PageNotFound } from '@/modules/page-not-found/PageNotFound';
import { StartPage } from '@/modules/start-page/StartPage';
import { ITopLevelRoute } from '@/routes/types';

export const routes: ITopLevelRoute[] = [
  {
    path: '/',
    layout: Layouts.TopAside,
    element: <StartPage />,
    needAuth: true,
  },
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
