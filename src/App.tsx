import React from 'react';

import { LogInContextProvider } from '@/contexts/LogInContext';
import CreateRoutes from '@/routes/CreateRoutes';
import './index.css';
import './UI/index.css';

function App() {
  return (
    <LogInContextProvider>
      <CreateRoutes />
    </LogInContextProvider>
  );
}

export default App;
