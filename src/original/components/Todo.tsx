import React from 'react'
import { VisibilityFilters } from '../../types'

export interface Props {
  onClick: () => void,
  completed: VisibilityFilters,
  text: string
}

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)
export default Todo