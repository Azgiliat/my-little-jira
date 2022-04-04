import { createContext } from 'react';

export type User = string | null;

export interface ILogInContext {
  user: User;
  setUser: (user: User) => void;
}

export const LogInContext = createContext<ILogInContext>({
  user: null,
  setUser(user) {
    this.user = user;
  },
});
