import { createReducer } from "@reduxjs/toolkit";
import { VisibilityFilters } from "../../../types";
import actions from "./actions";

export const reducer = createReducer(VisibilityFilters.SHOW_ALL, builder => 
  builder
    .addCase(actions.setVisibilityFilter, (state, action) => {
      return action.payload;
    })
);

export default reducer;