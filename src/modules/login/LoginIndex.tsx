import { useContext, useState } from 'react';
import React from 'react';

import { LogInContext } from '@/contexts/LogInContext';
import { login, LoginOptions } from '@/http/auth';
import { LoginErrors } from '@/modules/login/LoginErrors';
import { LoginForm } from '@/modules/login/LoginForm';

export function LoginIndex() {
  const loginCtx = useContext(LogInContext);
  const [errors, setErrors] = useState<string[]>([]);
  const tryLogin = async (options: LoginOptions) => {
    try {
      const user = await login(options);
      loginCtx.setUser(user.firstName);
      setErrors([]);
    } catch (err) {
      setErrors([err as string]);
    }
  };

  return (
    <section>
      <LoginForm tryLogin={tryLogin} />
      <LoginErrors errors={errors} />
    </section>
  );
}
