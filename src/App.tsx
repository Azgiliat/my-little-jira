import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Toaster } from '@/UI/toaster/Toaster';
import { LogInContextProvider } from '@/contexts/LogInContext';
import { ToasterContextProvider } from '@/contexts/ToasterContext';
import CreateRoutes from '@/routes/CreateRoutes';

function App() {
  return (
    <LogInContextProvider>
      <ToasterContextProvider>
        <Toaster />
        <BrowserRouter>
          <CreateRoutes />
        </BrowserRouter>
      </ToasterContextProvider>
    </LogInContextProvider>
  );
}

export default App;
