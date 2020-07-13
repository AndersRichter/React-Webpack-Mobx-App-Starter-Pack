import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from "mobx-react";

import ApplicationModel from "models/ApplicationModel";

import AppRouter from './AppRouter';

import s from './App.styl';

const store = new ApplicationModel();

const App = () => {
  return (
    <div className={ s.layout }>
      <Provider store={ store }>
        <AppRouter />
      </Provider>
    </div>
  )
};

export default hot(App);
