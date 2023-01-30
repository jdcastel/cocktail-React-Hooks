import { createAsyncThunk } from "@reduxjs/toolkit";
import { cocktailApi } from "../../redux/api";

export const getCocktailAsync = createAsyncThunk(
  "cocktail/fetchCocktail",
  async (filter) => {
    const response = await cocktailApi(filter);
    console.log(response.data);
    return response.data.drinks;
  }
);
