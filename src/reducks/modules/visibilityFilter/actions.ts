import { createAction } from "@reduxjs/toolkit";
import { VisibilityFilters } from "../../../types";


const setVisibilityFilter = createAction(
  'SET_VISIBILITY_FILTER',
  (filter: VisibilityFilters) => ({payload: filter})
);
export const actions = { setVisibilityFilter };
export default actions