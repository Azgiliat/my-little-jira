import React, { PropsWithChildren } from 'react';
import { Route } from 'react-router-dom';

import { Layouts } from '@/layouts/Layouts';
import LeftAside from '@/layouts/LeftAside';
import TopAside from '@/layouts/TopAside';
import { IRoute, isTopLevelRoute, ITopLevelRoute } from '@/routes/types';

const LayoutComponent = (layoutName: Layouts) => {
  switch (layoutName) {
    case Layouts.LeftAside:
      return <LeftAside />;
    case Layouts.TopAside:
      return <TopAside />;
    default:
      return <LeftAside />;
  }
};

export default function RouteWithLayout(
  props: PropsWithChildren<{ route: ITopLevelRoute | IRoute; key: string }>,
) {
  if (isTopLevelRoute(props.route) && props.route?.layout) {
    return (
      <Route
        key={`with-layout-${props.key}`}
        element={LayoutComponent(props.route.layout)}
      >
        <Route
          key={props.key}
          element={props.route.element}
          path={props.route.path}
        />
      </Route>
    );
  }

  return (
    <Route
      key={props.key}
      element={props.route.element}
      path={props.route.path}
    />
  );
}
