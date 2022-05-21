import { createContext } from 'react';

import { User } from '@/http/dto/auth';

export interface ILogInContext {
  user: User | null;
  setUser: (user: User) => void;
}

export const LogInContext = createContext<ILogInContext>({
  user: null,
  setUser(user) {
    this.user = user;
  },
});
