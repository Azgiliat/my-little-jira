import { useContext, useEffect } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LineDotsLoader } from '@/UI/loaders/line-dots-loader/LineDotsLoader';
import { LogInContext } from '@/contexts/LogInContext';
import { LoginErrors } from '@/modules/login/LoginErrors';
import { LoginForm } from '@/modules/login/LoginForm';

export function LoginIndex() {
  const navigate = useNavigate();
  const loginCtx = useContext(LogInContext);

  useEffect(() => {
    if (loginCtx.user) {
      navigate('/');
    }
  });

  return (
    <section>
      <LoginForm tryLogin={loginCtx.login} isLoading={loginCtx.isLoading} />
      <LoginErrors errors={loginCtx.errors} />
      <div className="flex justify-center">
        {loginCtx.isLoading && <LineDotsLoader />}
      </div>
    </section>
  );
}
