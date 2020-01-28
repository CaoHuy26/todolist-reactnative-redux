import React from 'react';
import { View } from 'react-native';
import ToDoListManager from './components/TodoListManager';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <ToDoListManager />
      </View>
    </Provider>
  );
}