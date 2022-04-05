import React, { ChangeEvent, Props, PropsWithChildren, useState } from 'react';

import { LoginOptions } from '@/http/auth';

export function LoginForm(
  props: PropsWithChildren<{
    tryLogin: (options: LoginOptions) => Promise<void>;
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
    <form className="w-full flex justify-center items-center">
      <input
        type="text"
        name="login"
        onInput={setInputData}
        className="border-2 mr-2"
      />
      <input
        type="password"
        name="pass"
        onInput={setInputData}
        className="border-2 mr-2"
      />
      <button
        type="button"
        onClick={() => props.tryLogin(state)}
        className="border-2"
      >
        Log in
      </button>
    </form>
  );
}
