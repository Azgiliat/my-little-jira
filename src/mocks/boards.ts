import { Board } from '@/http/dto/board';

export const BOARDS: Board[] = [
  {
    title: 'DEV',
    description: 'Test board',
    taskGroups: ['ToDo', 'Done'],
    users: ['admin'],
  },
];
