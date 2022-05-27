import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { TopAsideTabs } from '@/components/TopAsideTabs';

import { LogInContext } from '@/contexts/LogInContext';

export default function TopAside() {
  const { user } = useContext(LogInContext);

  return (
    <div className="w-full">
      <div className="p-5 mb-5 shadow-xl">
        <p className="mb-2">
          {user
            ? `You are logged in as ${user.login}`
            : 'You are not logged in'}
        </p>
        {user && <TopAsideTabs />}
      </div>
      <Outlet />
    </div>
  );
}
