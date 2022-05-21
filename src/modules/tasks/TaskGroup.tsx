import React, { PropsWithChildren } from 'react';

import { TaskGroup as TaskGroupType } from '@/http/dto/tasks';

export function TaskGroup({
  taskGroup,
}: PropsWithChildren<{ taskGroup: TaskGroupType }>) {
  return (
    <div>
      <p className="font-bold">{taskGroup.name}</p>
    </div>
  );
}
