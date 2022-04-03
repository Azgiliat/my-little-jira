import React from 'react';
import { Routes } from 'react-router-dom';

import { ProtectedRoute } from '@/routes/ProtectedRoute';
import { routes } from '@/routes/routes';

export default function CreateRoutes() {
  return (
    <Routes>
      {routes.map((route, index) =>
        ProtectedRoute({ route, key: `component-${index}` }),
      )}
    </Routes>
  );
}
