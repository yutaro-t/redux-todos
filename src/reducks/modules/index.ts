import { combineReducers } from "redux";
import todosReducer from './todos';
import visibilityFilterReducer from './visibilityFilter'

export const reducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});

export type RootState = ReturnType<typeof reducer>