import React, { PropsWithChildren, useRef } from 'react';

import { useDrop } from '@/UI/drag-n-drop/useDrop';
import { TaskGroup as TaskGroupType } from '@/http/dto/tasks';
import { TaskCard } from '@/modules/board/tasks/TaskCard';

export function TaskGroup({
  taskGroup,
  className,
}: PropsWithChildren<{ taskGroup: TaskGroupType; className: string }>) {
  const groupRef = useRef(null);
  useDrop(groupRef);

  return (
    <div ref={groupRef} className={`${className} bg-gray-200 p-2`}>
      <p className="font-bold p-2 mb-2 text-center">{taskGroup.name}</p>
      {taskGroup.tasks.map((task) => (
        <TaskCard task={task} key={task.title} />
      ))}
    </div>
  );
}
