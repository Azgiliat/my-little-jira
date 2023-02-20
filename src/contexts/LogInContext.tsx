import React, { createContext, ReactNode, useEffect, useState } from 'react';

import { getAuthObserver } from '@/firebase/auth';
import { User } from '@/http/dto/auth';

export interface ILogInContext {
  user: User | null;
}

export const LogInContext = createContext<ILogInContext>({
  user: null,
});

type State = null | User;

export const LogInContextProvider = function ({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<State>(null);

  useEffect(() => {
    return getAuthObserver(setUser);
  }, []);

  const logInCtx: ILogInContext = { user };

  return (
    <LogInContext.Provider value={logInCtx}>{children}</LogInContext.Provider>
  );
};
