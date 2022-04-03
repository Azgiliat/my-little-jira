import React, { useState } from 'react';

import { ILogInContext, LogInContext } from '@/contexts/LogInContext';
import CreateRoutes from '@/routes/CreateRoutes';

function App() {
  const [loggedIn, setLoggedIn] = useState<ILogInContext>({
    loggedIn: false,
    user: null,
  });
  const logInCtx: ILogInContext = {
    loggedIn: loggedIn.loggedIn,
    user: loggedIn.user,
    setUser(user) {
      setLoggedIn(() => {
        return {
          loggedIn: !!user,
          user,
        };
      });
    },
  };

  return (
    <LogInContext.Provider value={logInCtx}>
      <CreateRoutes />
    </LogInContext.Provider>
  );
}

export default App;
