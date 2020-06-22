import React from 'react';

import AppRouter from './AppRouter';

import s from './App.css';

const App = () => {
  return (
    <div className={ s.layout }>
      <AppRouter />
    </div>
  )
};

export default App;
