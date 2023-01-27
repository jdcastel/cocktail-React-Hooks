import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCocktailAsync } from "./cocktailThunk";
import { initialState } from "./initialState";

export const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setCocktails: (state, action) => {
      state.drinks = action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder 
    .addCase(getCocktailAsync.fulfilled,(state,action)=>{
      state.drinks = action.payload;
    });
  }
});

export const { setCocktails } = cocktailSlice.actions;

export default cocktailSlice.reducer;