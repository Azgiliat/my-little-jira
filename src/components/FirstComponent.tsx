import React, { useContext } from 'react';

import { LogInContext, User } from '@/contexts/LogInContext';

function FirstComponent() {
  const logInCtx = useContext(LogInContext);
  const setUser = (user: User) => () => {
    logInCtx.setUser(user);
  };

  return (
    <>
      <p>
        {logInCtx.loggedIn
          ? `You are logged in as ${logInCtx.user}`
          : ' You are not logged in'}
      </p>
      <button type="button" onClick={setUser('TmpUser')}>
        Log In
      </button>
      <button type="button" onClick={setUser(null)}>
        Log Out
      </button>
    </>
  );
}

export default FirstComponent;
