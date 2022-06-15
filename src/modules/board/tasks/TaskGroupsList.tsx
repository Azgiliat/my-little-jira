import React, { PropsWithChildren, useRef } from 'react';

import { TaskGroup as TaskGroupElement } from './TaskGroup';

import { useDragContainer } from '@/UI/drag-n-drop/useDragContainer';
import { TaskGroup } from '@/http/dto/tasks';

export function TaskGroupsList({
  taskGroups,
}: PropsWithChildren<{ taskGroups: TaskGroup[] }>) {
  const boardRef = useRef(null);
  const { registerContainer } = useDragContainer('board', boardRef);

  registerContainer();

  return (
    <div ref={boardRef} className="flex gap-2 py-5 flex-grow">
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
