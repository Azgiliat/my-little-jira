import { User } from '@/http/dto/auth';
import { ISODateString } from '@/http/dto/common';

export enum TaskPriority {
  Low,
  Medium,
  High,
  Critical,
}

export type TaskGroup = {
  name: string;
  tasks: Task[];
};

export type Task = {
  id: string;
  title: string;
  description: string;
  taskGroup: string;
  assignedTo: User | null;
  priority: TaskPriority;
  dueDate?: ISODateString;
};
