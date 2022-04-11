import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthenticatedRoute } from '@/routes/ProtectedRoute';
import RouteWithLayout from '@/routes/RouteWithLayout';
import { routes } from '@/routes/routes';
import { IRoute, ITopLevelRoute } from '@/routes/types';

//TODO add recurtion for children
function createRoute(options: { route: IRoute | ITopLevelRoute; key: string }) {
  const routeWithLayout = RouteWithLayout({
    route: options.route,
    key: options.key,
  });

  if (options.route.needAuth) {
    return (
      <Route
        key={`authenticated-${options.key}`}
        element={<AuthenticatedRoute />}
      >
        {routeWithLayout}
      </Route>
    );
  }

  return routeWithLayout;
}

export default function CreateRoutes() {
  return (
    <Routes>
      {routes.map((route, index) =>
        createRoute({ route, key: `component-${index}` }),
      )}
    </Routes>
  );
}
