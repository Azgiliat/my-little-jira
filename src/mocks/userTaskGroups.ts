import { TaskGroup } from '@/http/dto/tasks';

export const USER_TASK_GROUPS: Record<string, TaskGroup[]> = {
  admin: [
    { name: 'ToDo', tasks: [] },
    { name: 'Paused', tasks: [] },
  ],
};
