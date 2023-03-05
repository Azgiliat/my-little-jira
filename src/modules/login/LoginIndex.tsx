import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UIElementsType } from '@/UI/UIElementsType';
import { LineDotsLoader } from '@/UI/loaders/line-dots-loader/LineDotsLoader';
import { LogInContext } from '@/contexts/LogInContext';
import { useToasterContext } from '@/contexts/ToasterContext';
import { useLoadWithState } from '@/custom-hooks/useLoadWithState';
import { tryLogin } from '@/http/auth';
import { LoginCredentials } from '@/http/dto/auth';
// import { LoginErrors } from '@/modules/login/LoginErrors';
import { LoginForm } from '@/modules/login/LoginForm';

export function LoginIndex() {
  const navigate = useNavigate();
  const loginCtx = useContext(LogInContext);
  const { addNotification } = useToasterContext();
  const [state, setState] = useState<LoginCredentials>({
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

  useEffect(() => {
    if (loginCtx.user) {
      navigate('/');
    }
  });

  const executeLogin = () => tryLogin(state);
  const { isLoading, executeRequest, errors, response } =
    useLoadWithState(executeLogin);

  useEffect(() => {
    if (response !== null) {
      addNotification({
        type: UIElementsType.Primary,
        message: 'Login successful!',
      });
    }
  }, [response]);
  useEffect(() => {
    if (errors.length) {
      for (const error of errors) {
        addNotification({
          type: UIElementsType.Error,
          message: error,
        });
      }
    }
  }, [errors]);

  return (
    <section>
      <LoginForm
        tryLogin={executeRequest}
        setLoginCredentials={setInputData}
        isLoading={isLoading}
      />
      {/*<LoginErrors errors={errors} />*/}
      <div className="flex justify-center">
        {isLoading && <LineDotsLoader />}
      </div>
    </section>
  );
}
