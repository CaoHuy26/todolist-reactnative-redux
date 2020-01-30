import actionTypes from './types';

let todoId = 0;

const todoActions = {
  addNewTodo(newTodo) {
    return {
      type: actionTypes.ADD_NEW_TODO,
      id: todoId++,
      todo: newTodo
    }
  }
}

export default todoActions;