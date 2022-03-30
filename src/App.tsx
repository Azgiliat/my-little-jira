import React from 'react';
import { Route, Routes } from 'react-router-dom';

import FirstComponent from '@/components/FirstComponent';

import CreateRoutes from '@/routes/CreateRoutes';

function App() {
  return (
    <>
      <CreateRoutes />
    </>
  );
}

export default App;
