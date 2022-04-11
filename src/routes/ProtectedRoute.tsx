import React, { ReactNode, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { LogInContext } from '@/contexts/LogInContext';

export function AuthenticatedRoute(props: {
  children?: ReactNode | undefined;
}) {
  const logInCtx = useContext(LogInContext);

  if (!logInCtx.user) {
    return <Navigate to={'/login'} replace />;
  }

  return props.children ? <>{props.children}</> : <Outlet />;
}
