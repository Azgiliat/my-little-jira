import React from 'react';
import { useNavigate } from 'react-router-dom';

import { UIElementsType } from '@/UI/UIElementsType';
import { BaseButton } from '@/UI/buttons/BaseButton';

type Tab = {
  title: string;
  value: string;
  path: string;
};

export function TopAsideTabs() {
  const tabs: Tab[] = [
    {
      title: 'Tasks',
      value: 'tasks',
      path: '/tasks',
    },
    {
      title: 'Profile',
      value: 'profile',
      path: '/profile',
    },
  ];
  const navigate = useNavigate();
  const goToTab = (tab: Tab) => {
    navigate(tab.path);
  };

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <BaseButton
          className="mr-2 last:mr-0"
          type={UIElementsType.Primary}
          onClick={() => goToTab(tab)}
          key={tab.value}
        >
          {tab.title}
        </BaseButton>
      ))}
    </div>
  );
}
