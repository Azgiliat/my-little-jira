import { TaskGroup } from '@/http/dto/tasks';
import { USER_TASK_GROUPS } from '@/mocks/userTaskGroups';

export function getTasksForUser(userLogin: string) {
  return new Promise<TaskGroup[]>((resolve) => {
    setTimeout(() => {
      resolve(USER_TASK_GROUPS?.[userLogin] || []);
    }, 2000);
  });
}
