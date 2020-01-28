import actionTypes from '../actions/types';

const initialState = [];

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TODO:
      return [...state, action.todo]
    default:
      return state;
  }
}

export default todoReducers;