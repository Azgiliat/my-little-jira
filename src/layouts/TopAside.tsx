import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function TopAside() {
  return (
    <div className="w-full">
      <div className="h-32">You are </div>
      <Link to={''}>To LeftAside</Link>
      <Outlet />
    </div>
  );
}
