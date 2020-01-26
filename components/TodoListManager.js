import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default class ToDoListManager extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <TodoList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34
  }
})