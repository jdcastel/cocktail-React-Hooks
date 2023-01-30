import { combineReducers } from "@reduxjs/toolkit";
import cocktailReducer from "./cocktail/cocktailSlice";

const rootReducer = combineReducers({

    cocktail: cocktailReducer,

});

export default rootReducer;
