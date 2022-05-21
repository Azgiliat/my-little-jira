import React, { useState } from 'react';

import { ILogInContext, LogInContext } from '@/contexts/LogInContext';
import { User } from '@/http/dto/auth';
import CreateRoutes from '@/routes/CreateRoutes';
import './index.css';
import './UI/index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState<{ user: User | null }>({
    user: null,
  });
  const logInCtx: ILogInContext = {
    user: loggedIn.user,
    setUser(user) {
      setLoggedIn(() => {
        return {
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
