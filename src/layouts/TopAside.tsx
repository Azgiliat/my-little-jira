import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { LogInContext } from '@/contexts/LogInContext';

export default function TopAside() {
  const { user } = useContext(LogInContext);

  return (
    <div className="w-full">
      <div className="h-32">
        <p>{user ? `You are logged in as ${user}` : 'You are not logged in'}</p>
      </div>
      <Outlet />
    </div>
  );
}
