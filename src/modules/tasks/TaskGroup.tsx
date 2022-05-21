import React, { PropsWithChildren } from 'react';

import { TaskGroup } from '@/http/dto/tasks';

export function TaskGroup({
  taskGroup,
}: PropsWithChildren<{ taskGroup: TaskGroup }>) {
  return (
    <div>
      <p className="font-bold">{taskGroup.name}</p>
    </div>
  );
}
