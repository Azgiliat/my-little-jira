import React from 'react';

import { LogInContext } from '@/contexts/LogInContext';

function FirstComponent() {
  return (
    <LogInContext.Consumer>
      {(logIn) => (
        <>
          <p>
            {logIn.loggedIn
              ? `You are logged in as ${logIn.user}`
              : ' You are not logged in'}
          </p>
          <button type="button" onClick={() => logIn.setUser('TmpUser')}>
            Log In
          </button>
          <button type="button" onClick={() => logIn.setUser(null)}>
            Log Out
          </button>
        </>
      )}
    </LogInContext.Consumer>
  );
}

export default FirstComponent;
