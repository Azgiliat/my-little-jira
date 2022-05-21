import { User, UserAuth } from '@/http/dto/auth';

export const USERS: UserAuth[] = [
  {
    login: 'admin',
    pass: 'admin',
  },
];
export const USERS_DATA: Record<string, User> = {
  admin: {
    login: 'admin',
    firstName: 'Admin',
  },
};
