import { createAction, createReducer } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { Todo } from '../../types';
import { RootState } from '.';

const addTodoWithID = createAction(
  'ADD_TODO_WITH_ID',
  (text: string, id: number) => ({payload: { id, text }})
);

function addTodo(text: string): ThunkAction<void, RootState, undefined, any> {
  return (dispatch, getState) => {
    const nextTodoId = getState().todos.nextTodoId + 1;
    dispatch(addTodoWithID(text, nextTodoId))
  }
}

const toggleTodo = createAction(
  'TOGGLE_TODO',
  (id: number) => ({payload: id})
);

export const actions = { addTodoWithID, addTodo, toggleTodo };


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
);

export default reducer