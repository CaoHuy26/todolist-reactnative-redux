import React from 'react';
import AppNavigation from './navigation/Navigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
};