
import { PayloadAction, createReducer } from '@reduxjs/toolkit';
import { VisibilityFilters, Todo } from '../types';
import { addTodo, toggleTodo, setVisibilityFilter, addTodoWithID } from './actions';


const initialState: RootState = {
  todos: [],
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  nextTodoId: 0
}

export const reducer = createReducer(initialState, builder => 
  builder
    .addCase(addTodoWithID, (state, action) => {
      state.nextTodoId ++;
      state.todos.push({...action.payload, completed: false});
      return state;
    })
    .addCase(toggleTodo, (state, action) => {
      let todo = state.todos.find(todo => todo.id === action.payload);
      if(todo) {
        todo.completed = !todo.completed;
      }
      return state;
    })
    .addCase(setVisibilityFilter, (state, action) => {
      state.visibilityFilter = action.payload;
    })
);

export type RootState = {
  todos: Todo[]
  visibilityFilter: VisibilityFilters,
  nextTodoId: number
}

