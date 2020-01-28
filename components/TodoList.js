import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Todo from './Todo';

const DATA = [
  '1',
  '2'
]

class TodoList extends React.Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.todos}
          renderItem={({item, index}) => <Todo todo={item}/>}
          keyExtractor={(item, index) => item} // Change key for each todo
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  // alert(`State send to task list: ${JSON.stringify(state)}`)
  return {
    todos: !state.todoReducers ? [] : state.todoReducers
  }
}

export default connect(mapStateToProps)(TodoList)