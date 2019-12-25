import React from 'react'
import { actions } from '../modules/todos'
import { useDispatch } from 'react-redux';

// Presentational ComponentとContainer Componentを分けてない例

export const AddTodo: React.FC = () => {

  const [value, setValue] = React.useState('')
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value ?? ''), []
  );
  const dispatch = useDispatch();
  const handleClick = React.useCallback(
    () => {
      dispatch(actions.addTodo(value));
      setValue('');
    },
    [value, dispatch, setValue]
  )
  return (
    <>
      <input value={value} onChange={handleChange} />
      <button onClick={handleClick}>Add Todo</button>
    </>
  )
}

export default AddTodo;