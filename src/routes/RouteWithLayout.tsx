import React, { PropsWithChildren } from 'react';
import { Route } from 'react-router-dom';

import { Layouts } from '@/layouts/Layouts';
import LeftAside from '@/layouts/LeftAside';
import TopAside from '@/layouts/TopAside';
import { IRoute } from '@/routes/routes';

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
  props: PropsWithChildren<{ route: IRoute; key: string }>,
) {
  console.log(props);
  if (props.route.layout) {
    return (
      <Route key={props.key} element={LayoutComponent(props.route.layout)}>
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
