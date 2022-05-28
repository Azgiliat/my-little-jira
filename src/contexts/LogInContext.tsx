import React, { createContext, ReactNode, useReducer } from 'react';

import { login, LoginOptions } from '@/http/auth';
import { User } from '@/http/dto/auth';

export interface ILogInContext {
  user: User | null;
  isLoading: boolean;
  errors: string[];
  login: (options: LoginOptions) => Promise<void>;
  logout: () => void;
}

export const LogInContext = createContext<ILogInContext>({
  user: null,
  isLoading: false,
  errors: [],
  async login() {
    this.user = null;
  },
  logout() {
    this.user = null;
  },
});

type State = {
  user: null | User;
  isLoading: boolean;
  errors: string[];
};

enum ActionType {
  SetLoading,
  SetUser,
  SetErrors,
}

type ActionLogin = {
  type: ActionType.SetLoading;
  payload: boolean;
};

type ActionSetUser = {
  type: ActionType.SetUser;
  payload: User | null;
};

type ActionSetErrors = {
  type: ActionType.SetErrors;
  payload: string[];
};

type Action = ActionLogin | ActionSetUser | ActionSetErrors;

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
        case ActionType.SetErrors:
          return { ...state, errors: action.payload };
      }

      return { ...state };
    },
    {
      user: null,
      isLoading: false,
      errors: [],
    },
  );
  const logInCtx: ILogInContext = {
    user: state.user,
    isLoading: state.isLoading,
    errors: [],
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
    logout() {
      dispatch({
        type: ActionType.SetUser,
        payload: null,
      });
    },
  };

  return (
    <LogInContext.Provider value={logInCtx}>{children}</LogInContext.Provider>
  );
};
