import React from 'react';
import { RootState } from '../modules';
import { actions, visibleTodosSelector } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters, Todo } from '../../types';


export const VisibleTodoList: React.FC = () => {
  const todos = useSelector<RootState, Todo[]>(visibleTodosSelector);
  const dispatch = useDispatch();
  const handleToggle = React.useCallback(
    (id: number) => dispatch(actions.toggleTodo(id))
  , [dispatch]);
  return <TodoList todos={todos} toggleTodo={handleToggle} />
}

export default VisibleTodoList