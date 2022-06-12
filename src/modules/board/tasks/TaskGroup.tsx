import React, { PropsWithChildren, useRef } from 'react';

import { useDrag } from '@/UI/drag-n-drop/useDrag';
import { useDragContainer } from '@/UI/drag-n-drop/useDragContainer';
import { TaskGroup as TaskGroupType } from '@/http/dto/tasks';
import { TaskCard } from '@/modules/board/tasks/TaskCard';

export function TaskGroup({
  taskGroup,
  className,
}: PropsWithChildren<{ taskGroup: TaskGroupType; className: string }>) {
  const group = useRef<HTMLDivElement>(null);
  const draggable = useRef(null);
  const { registerContainer } = useDragContainer(taskGroup.name, group);

  registerContainer();
  useDrag(taskGroup.name, draggable);

  return (
    <div ref={group} className={`${className} bg-gray-200 p-2`}>
      <p ref={draggable} className="font-bold p-2 mb-2 text-center">
        {taskGroup.name}
      </p>
      {taskGroup.tasks.map((task) => (
        <TaskCard task={task} key={task.title} />
      ))}
    </div>
  );
}
