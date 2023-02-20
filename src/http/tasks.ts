import { Task } from '@/http/dto/tasks';
import { TASKS } from '@/mocks/tasks';

export function getTasksInBordByUser(
  boardTitle: string,
  userLogin: string,
): Promise<Task[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        TASKS[boardTitle].filter(
          (task) => task.assignedTo?.displayName === userLogin,
        ),
      );
    }, 2000);
  });
}

export function getTasksInBord(boardTitle: string): Promise<Task[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(TASKS[boardTitle]);
    }, 2000);
  });
}
