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
      title: 'Задачи',
      value: 'tasks',
      path: '/tasks',
    },
    {
      title: 'Профиль',
      value: 'profile',
      path: '/profile',
    },
  ];
  const navigate = useNavigate();
  const goToTab = (tab: Tab) => {
    switch (tab.value) {
      case 'tasks':
        navigate(tab.path);
        break;
      default:
        break;
    }
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
