import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RouteWithLayout from '@/routes/RouteWithLayout';
import { routes } from '@/routes/routes';

export default function CreateRoutes() {
  return (
    <Routes>
      {routes.map((route, index) =>
        RouteWithLayout({ route, key: `component-with-layout-${index}` }),
      )}
    </Routes>
  );
}
