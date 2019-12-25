import { RootState } from '../'
import { createSelector } from '@reduxjs/toolkit';
import { VisibilityFilters } from '../../../types';

export const todosSelector = (state: RootState) => state.todos.todos;
export const filterSelector = (state: RootState) => state.visibilityFilter; 

export const visibleTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)