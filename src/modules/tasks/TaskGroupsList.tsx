import React, { useContext, useEffect, useState } from 'react';

import { TaskGroup as TaskGroupElement } from './TaskGroup';

import { LogInContext } from '@/contexts/LogInContext';
import { TaskGroup } from '@/http/dto/tasks';
import { getTasksForUser } from '@/http/tasks';

export function TaskGroupsList() {
  // TODO add loader
  const loginCtx = useContext(LogInContext);
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>([]);
  const loadTaskGroups = async () => {
    if (!loginCtx.user) {
      return;
    }

    try {
      setTaskGroups(await getTasksForUser(loginCtx.user.login));
    } catch {}
  };

  useEffect(() => {
    loadTaskGroups();
  }, []);

  return (
    <div className="flex">
      {taskGroups.map((taskGroup) => (
        <TaskGroupElement key={taskGroup.name} taskGroup={taskGroup} />
      ))}
    </div>
  );
}
