import React from 'react'
import TodoComponent from './Todo'
import { Todo } from '../../types'

export interface Props {
  todos: Todo[],
  toggleTodo: (id: number) => void
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
  <ul>
    {todos.map(todo =>
      <TodoComponent
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)}

export default TodoList