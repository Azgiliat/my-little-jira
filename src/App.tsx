import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LogInContextProvider } from '@/contexts/LogInContext';
import CreateRoutes from '@/routes/CreateRoutes';

import './index.css';
import './UI/index.css';

function App() {
  return (
    <LogInContextProvider>
      <BrowserRouter>
        <CreateRoutes />
      </BrowserRouter>
    </LogInContextProvider>
  );
}

export default App;
