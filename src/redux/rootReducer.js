import { combineReducers } from "@reduxjs/toolkit";
import cocktailReducer from "./cocktail/cocktailSlice";

const rootReducer = combineReducers({
  reducer: {
    cocktail: cocktailReducer,
  },
});

export default rootReducer;
