import React, { ChangeEvent, useContext, useReducer } from 'react';

import { LogInContext } from '@/contexts/LogInContext';
import { login } from '@/http/auth';

type GenericAction<T> = {
  [Key in keyof T]: {
    type: Key;
    payload: T[Key];
  };
}[keyof T];

type InputState = {
  login: string;
  pass: string;
};
type InputAction = GenericAction<InputState>;
type LoadingState = {
  isLoading: boolean;
  error: string;
};
type LoadingAction = GenericAction<LoadingState>;
type State = {
  input: InputState;
  loading: LoadingState;
};
type Action = InputAction | LoadingAction;

export function LogInForm() {
  const loginCtx = useContext(LogInContext);
  const reducer = (state: State, action: Action) => {
    const newState = { ...state };
    switch (action.type) {
      case 'login':
      case 'pass':
        newState.input[action.type] = action.payload;
        break;
      case 'error':
        newState.loading.error = action.payload;
        break;
      case 'isLoading':
        newState.loading.isLoading = action.payload;
        break;
    }

    return newState;
  };
  const [state, dispatch] = useReducer(reducer, {
    input: {
      login: '',
      pass: '',
    },
    loading: {
      isLoading: false,
      error: '',
    },
  });
  const setLogin = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'login',
      payload: evt.target.value,
    });
  };
  const setPass = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'pass',
      payload: evt.target.value,
    });
  };
  const startLogIn = async () => {
    dispatch({
      type: 'isLoading',
      payload: true,
    });

    try {
      await login({
        pass: state.input.pass,
        login: state.input.login,
      });
      dispatch({
        type: 'error',
        payload: '',
      });
      loginCtx.setUser(state.input.login);
    } catch {
      dispatch({
        type: 'error',
        payload: 'Login error!',
      });
    } finally {
      dispatch({
        type: 'isLoading',
        payload: false,
      });
    }
  };
  const Error = () => {
    if (state.loading.error) {
      return <p className="text-red-500">{state.loading.error}</p>;
    }

    return null;
  };

  return (
    <form className="w-full flex justify-center items-center">
      <input
        type="text"
        onInput={setLogin}
        value={state.input.login}
        className="border-2"
      />
      <input
        type="password"
        onInput={setPass}
        value={state.input.pass}
        className="border-2"
      />
      <button type="button" className="border-2" onClick={startLogIn}>
        Log in
      </button>
      <Error />
    </form>
  );
}
