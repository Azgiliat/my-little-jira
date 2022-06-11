import { Task, TaskPriority } from '@/http/dto/tasks';

type BoardTitle = string;
export const TASKS: Record<BoardTitle, Task[]> = {
  DEV: [
    {
      id: 'DEV-1',
      title: 'First task',
      description: 'first test task',
      taskGroup: 'ToDo',
      assignedTo: null,
      priority: TaskPriority.Medium,
    },
    {
      id: 'DEV-2',
      title: 'Second task',
      description: 'second test task',
      taskGroup: 'Done',
      assignedTo: null,
      priority: TaskPriority.High,
    },
  ],
};
