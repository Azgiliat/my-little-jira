import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';

import { LogInContext } from '@/contexts/LogInContext';
import RouteWithLayout from '@/routes/RouteWithLayout';
import { IRoute } from '@/routes/routes';

export function ProtectedRoute(options: { route: IRoute; key: string }) {
  const logInCtx = useContext(LogInContext);

  if (options.route.needAuth) {
    return logInCtx.user ? (
      RouteWithLayout(options)
    ) : (
      <Route
        path={options.route.path}
        key={options.key}
        element={<Navigate to={'/'} />}
      />
    );
  }

  return RouteWithLayout(options);
}
