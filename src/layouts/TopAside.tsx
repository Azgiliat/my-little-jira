import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { TopAsideTabs } from '@/components/TopAsideTabs';

import { UIElementsType } from '@/UI/UIElementsType';
import { BaseButton } from '@/UI/buttons/BaseButton';
import { LogInContext } from '@/contexts/LogInContext';

export default function TopAside() {
  const { user, logout } = useContext(LogInContext);

  return (
    <div className="h-screen w-full flex flex-col flex-grow">
      <div className="p-5 mb-5 shadow-xl flex">
        <div>
          <p className="mb-2">
            {user
              ? `You are logged in as ${user.login}`
              : 'You are not logged in'}
          </p>
          {user && <TopAsideTabs />}
        </div>
        {user && (
          <BaseButton
            className="ml-auto self-end"
            type={UIElementsType.Primary}
            onClick={logout}
          >
            Выйти
          </BaseButton>
        )}
      </div>
      <div className="flex-grow overflow-auto px-5 flex-col flex">
        <Outlet />
      </div>
    </div>
  );
}
