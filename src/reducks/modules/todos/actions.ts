import { createAction } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';
import { RootState } from "..";

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

const actions = { addTodoWithID, addTodo, toggleTodo };
export default actions;