
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';
import { PayloadAction } from '@reduxjs/toolkit';
import { VisibilityFilters, Todo } from '../types';


const initialState = {
  todos: [] as Todo[],
  visibilityFilter: VisibilityFilters.SHOW_ALL
}

export function reducer(state=initialState, action: PayloadAction<any>) {
  switch(action.type) {
    case ADD_TODO:
      const newTodo = {...action.payload, completed: false} as Todo;
      return {
        ...state, todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === action.payload ?
          {...todo, completed: !todo.completed} :
          todo
        )
      };
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.payload as VisibilityFilters
      };
    default:
      return state;
  }
}

export type RootState = ReturnType<typeof reducer>

