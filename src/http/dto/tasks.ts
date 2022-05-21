import { User } from '@/http/dto/auth';

export type TaskGroup = {
  name: string;
  tasks: Task[];
};

export type Task = {
  title: string;
  description: string;
  assignedTo: User;
};
