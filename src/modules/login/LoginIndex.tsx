import { useContext, useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LineDotsLoader } from '@/UI/loaders/line-dots-loader/LineDotsLoader';
import { LogInContext } from '@/contexts/LogInContext';
import { login, LoginOptions } from '@/http/auth';
import { LoginErrors } from '@/modules/login/LoginErrors';
import { LoginForm } from '@/modules/login/LoginForm';

export function LoginIndex() {
  const navigate = useNavigate();
  const loginCtx = useContext(LogInContext);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const tryLogin = async (options: LoginOptions) => {
    setIsLoading(true);
    try {
      const user = await login(options);
      loginCtx.setUser(user.firstName);
      setErrors([]);
      navigate('/');
    } catch (err) {
      setErrors([err as string]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <LoginForm tryLogin={tryLogin} isLoading={isLoading} />
      <LoginErrors errors={errors} />
      <div className="flex justify-center">
        {isLoading && <LineDotsLoader />}
      </div>
    </section>
  );
}
