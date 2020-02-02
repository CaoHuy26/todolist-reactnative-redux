import actionTypes from '../actions/types';

const initialState = [
  {
    id: 996,
    todo: 'To do 1',
    isComplete: false
  },
  {
    id: 997,
    todo: 'To do 2',
    isComplete: true
  },
  {
    id: 998,
    todo: 'To do 3',
    isComplete: false
  }
];

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_TODO:
      return [...state,
        {
          id: action.id,
          todo: action.todo,
          isComplete: false
        }
      ];
    
    case actionTypes.TOOGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        else {
          return todo;
        }
      })
    
    default:
      return state;
  }
}

export default todoReducers;