import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function LeftAside() {
  return (
    <div className="flex">
      <div className="h-full w-32">left aside</div>
      <Link to={'top'}>to TopAside</Link>
      <Outlet />
    </div>
  );
}
