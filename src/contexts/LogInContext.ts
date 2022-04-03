import { createContext } from 'react';

export type User = string | null;

export interface ILogInContext {
  loggedIn: boolean;
  user: User;
  setUser: (user: User) => void;
}

export const LogInContext = createContext<ILogInContext>({
  loggedIn: false,
  user: null,
  setUser(user) {
    console.log(this);
    this.user = user;
  },
});
