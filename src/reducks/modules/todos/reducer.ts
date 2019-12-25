import { Todo } from '../../../types';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

export interface State {
  todos: Todo[],
  nextTodoId: number
}

export const initialState: State = {
  todos: [],
  nextTodoId: 0
}

export const reducer = createReducer(initialState, builder => 
  builder
    .addCase(actions.addTodoWithID, (state, action) => {
      state.nextTodoId ++;
      state.todos.push({...action.payload, completed: false});
      return state;
    })
    .addCase(actions.toggleTodo, (state, action) => {
      let todo = state.todos.find(todo => todo.id === action.payload);
      if(todo) {
        todo.completed = !todo.completed;
      }
      return state;
    })
);

export default reducer