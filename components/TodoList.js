import React from 'react';
import { View, FlatList } from 'react-native';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={[
            {todo: 'Todo 1...'},
            {todo: 'Todo 2...'},
            {todo: 'Todo 3...'},
          ]}
          renderItem={({item, index}) => <Todo todo={item.todo}/>}
          keyExtractor={(item, index) => item.todo}
        />
      </View>
    );
  }
}