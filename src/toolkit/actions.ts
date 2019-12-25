import { createAction } from '@reduxjs/toolkit';
import { VisibilityFilters } from '../types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './reducer';


export const addTodoWithID = createAction(
  'ADD_TODO_WITH_ID',
  (text: string, id: number) => ({payload: { id, text }})
);

export function addTodo(text: string): ThunkAction<void, RootState, undefined, any> {
  return (dispatch, getState) => {
    const nextTodoId = getState().nextTodoId + 1;
    dispatch(addTodoWithID(text, nextTodoId))
  }
}

export const toggleTodo = createAction(
  'TOGGLE_TODO',
  (id: number) => ({payload: id})
);

export const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  (filter: VisibilityFilters) => ({payload: filter})
);