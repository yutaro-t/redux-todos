import { PayloadAction } from '@reduxjs/toolkit';
import { VisibilityFilters } from '../types';

export const ADD_TODO = 'ADD_TODO' as const;
export const TOGGLE_TODO = 'TOGGLE_TODO' as const;
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER' as const;

let nextTodoId = 0;

export function addTodo(text: string)
    :PayloadAction<{ id: number, text: string}, typeof ADD_TODO> {
  return {
    type: ADD_TODO,
    payload: { id: nextTodoId++, text }
  };
}
export function toggleTodo(id: number)
    :PayloadAction<number, typeof TOGGLE_TODO> {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}

export function setVisibilityFilter(filter: VisibilityFilters)
    :PayloadAction<VisibilityFilters, typeof SET_VISIBILITY_FILTER>{
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter
  }
};
