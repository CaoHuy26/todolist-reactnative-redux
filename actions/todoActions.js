import actionTypes from './types';

let todoId = 0;

const todoActions = {
  addNewTodo(newTodo) {
    return {
      type: actionTypes.ADD_NEW_TODO,
      id: todoId++,
      todo: newTodo
    }
  },
  toggleTodo(id) {
    return {
      type: actionTypes.TOOGLE_TODO,
      id
    }
  }
}

export default todoActions;