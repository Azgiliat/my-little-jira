import React, { createContext, ReactNode, useReducer } from 'react';

import { login, LoginOptions } from '@/http/auth';
import { User } from '@/http/dto/auth';

export interface ILogInContext {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  login: (options: LoginOptions) => Promise<void>;
}

export const LogInContext = createContext<ILogInContext>({
  user: null,
  isLoading: false,
  async login() {
    this.user = null;
  },
  setUser(user) {
    this.user = user;
  },
});

type State = {
  user: null | User;
  isLoading: boolean;
};

enum ActionType {
  SetLoading,
  SetUser,
}

type ActionLogin = {
  type: ActionType.SetLoading;
  payload: boolean;
};

type ActionSetUser = {
  type: ActionType.SetUser;
  payload: User | null;
};

type Action = ActionLogin | ActionSetUser;

export const LogInContextProvider = function ({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case ActionType.SetLoading:
          return { ...state, isLoading: action.payload };
        case ActionType.SetUser:
          return { ...state, user: action.payload };
      }

      return { ...state };
    },
    {
      user: null,
      isLoading: false,
    },
  );
  const logInCtx: ILogInContext = {
    user: state.user,
    isLoading: state.isLoading,
    setUser(user: User) {
      dispatch({ type: ActionType.SetUser, payload: user });
    },
    async login(options) {
      dispatch({
        type: ActionType.SetLoading,
        payload: true,
      });
      try {
        const response = await login(options);
        dispatch({
          type: ActionType.SetUser,
          payload: response,
        });
      } finally {
        dispatch({
          type: ActionType.SetLoading,
          payload: false,
        });
      }
    },
  };

  return (
    <LogInContext.Provider value={logInCtx}>{children}</LogInContext.Provider>
  );
};
