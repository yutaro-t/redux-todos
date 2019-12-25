import React from 'react';
import { RootState } from '../modules';
import { actions } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters, Todo } from '../../types';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
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

export const VisibleTodoList: React.FC = () => {
  const todos = useSelector<RootState, Todo[]>(state => getVisibleTodos(state.todos.todos, state.visibilityFilter));
  const dispatch = useDispatch();
  const handleToggle = React.useCallback(
    (id: number) => dispatch(actions.toggleTodo(id))
  , [dispatch]);
  return <TodoList todos={todos} toggleTodo={handleToggle} />
}

export default VisibleTodoList