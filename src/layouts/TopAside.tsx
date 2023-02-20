import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { TopAsideTabs } from '@/components/TopAsideTabs';

import { UIElementsType } from '@/UI/UIElementsType';
import { BaseButton } from '@/UI/buttons/BaseButton';
import { LogInContext } from '@/contexts/LogInContext';
import { useLoadWithState } from '@/custom-hooks/useLoadWithState';
import { logout } from '@/firebase/auth';

export default function TopAside() {
  const { user } = useContext(LogInContext);
  const tryLogout = () => logout();
  const { executeRequest } = useLoadWithState(tryLogout);

  return (
    <div className="h-screen w-full flex flex-col flex-grow">
      <div className="p-5 mb-5 shadow-xl flex">
        <div>
          <p className="mb-2">
            {user
              ? `You are logged in as ${user.displayName}`
              : 'You are not logged in'}
          </p>
          {user && <TopAsideTabs />}
        </div>
        {user && (
          <BaseButton
            className="ml-auto self-end"
            type={UIElementsType.Primary}
            onClick={executeRequest}
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
