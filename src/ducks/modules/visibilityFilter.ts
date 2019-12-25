import { VisibilityFilters } from "../../types";
import { createSlice, createAction, createReducer } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: 'visibilityFilter',
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => action.payload
  }
})


export default reducer