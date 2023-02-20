import React from 'react';

import { Layouts } from '@/layouts/Layouts';
import { Board } from '@/modules/board/Board';
import { LoginIndex } from '@/modules/login/LoginIndex';
import { PageNotFound } from '@/modules/page-not-found/PageNotFound';
import { Profile } from '@/modules/profile/Profile';
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
    path: '/tasks',
    layout: Layouts.TopAside,
    element: <Board />,
    needAuth: true,
  },
  {
    path: '/login',
    layout: Layouts.TopAside,
    element: <LoginIndex />,
  },
  {
    path: '/profile',
    layout: Layouts.TopAside,
    element: <Profile />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
];
