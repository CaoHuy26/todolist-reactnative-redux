import actionTypes from './types';

const todoActions = {
  addNewTodo(newTodo) {
    return {
      type: actionTypes.ADD_NEW_TODO,
      todo: newTodo
    }
  }
}

export default todoActions;