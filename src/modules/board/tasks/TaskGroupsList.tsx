import React, { PropsWithChildren } from 'react';

import { TaskGroup as TaskGroupElement } from './TaskGroup';

import { TaskGroup } from '@/http/dto/tasks';



export function TaskGroupsList({
  taskGroups,
}: PropsWithChildren<{ taskGroups: TaskGroup[] }>) {
  return (
    <div className="flex gap-2 py-5 flex-grow">
      {taskGroups.map((taskGroup) => (
        <TaskGroupElement
          className="w-1/5"
          key={taskGroup.name}
          taskGroup={taskGroup}
        />
      ))}
    </div>
  );
}
