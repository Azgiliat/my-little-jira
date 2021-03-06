import React from 'react';

import { Task, TaskPriority } from '@/http/dto/tasks';

export function TaskCard({ task }: { task: Task }) {
  const taskPriorityColor = {
    [TaskPriority.Critical]: 'bg-red-500',
    [TaskPriority.High]: 'bg-yellow-500',
    [TaskPriority.Medium]: 'bg-orange-500',
    [TaskPriority.Low]: 'bg-emerald-500',
  };

  return (
    <div className="bg-white rounded-xl p-2 pl-4 relative">
      <div
        className={`absolute w-2 top-0 left-0 h-full rounded-l-xl ${
          taskPriorityColor[task.priority]
        }`}
      />
      <h4 className="font-semibold mb-2">{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
}
