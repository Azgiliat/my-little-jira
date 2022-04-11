import React, { ChangeEvent, PropsWithChildren, useState } from 'react';

import { LoginOptions } from '@/http/auth';

export function LoginForm(
  props: PropsWithChildren<{
    tryLogin: (options: LoginOptions) => Promise<void>;
    isLoading: boolean;
  }>,
) {
  const [state, setState] = useState<LoginOptions>({
    login: '',
    pass: '',
  });
  const setInputData = (evt: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => {
      return {
        ...prevState,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  return (
    <form className="w-full flex justify-center items-center mb-5">
      <input
        type="text"
        name="login"
        onInput={setInputData}
        className="border-2 mr-2 p-2 rounded"
      />
      <input
        type="password"
        name="pass"
        onInput={setInputData}
        className="border-2 mr-2 p-2 rounded"
      />
      <button
        type="button"
        onClick={() => props.tryLogin(state)}
        className="border-2 p-2 rounded disabled:cursor-not-allowed"
        disabled={props.isLoading}
      >
        Log in
      </button>
    </form>
  );
}
