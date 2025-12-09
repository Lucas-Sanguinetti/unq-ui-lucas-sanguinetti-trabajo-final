import React from 'react';
import RoutesConfig from './RoutesConfig.jsx';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
      <main className="all">
        <RoutesConfig />
      </main>
  );
}


export default App
