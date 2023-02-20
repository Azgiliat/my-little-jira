import React, { ChangeEvent, PropsWithChildren } from 'react';

import { UIElementsType } from '@/UI/UIElementsType';
import { BaseButton } from '@/UI/buttons/BaseButton';

export function LoginForm(
  props: PropsWithChildren<{
    setLoginCredentials: (evt: ChangeEvent<HTMLInputElement>) => void;
    tryLogin: () => Promise<void>;
    isLoading: boolean;
  }>,
) {
  return (
    <form className="w-full flex justify-center items-center mb-5">
      <input
        type="text"
        name="login"
        onInput={props.setLoginCredentials}
        className="border-2 mr-2 p-2 rounded"
      />
      <input
        type="password"
        name="pass"
        onInput={props.setLoginCredentials}
        className="border-2 mr-2 p-2 rounded"
      />
      <BaseButton
        type={UIElementsType.Primary}
        onClick={props.tryLogin}
        className="border-2 p-2 rounded disabled:cursor-not-allowed"
        disabled={props.isLoading}
      >
        Log in
      </BaseButton>
    </form>
  );
}
