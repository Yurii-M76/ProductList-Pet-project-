import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  loading: boolean;
  error?: string | null;
  favorites: string[];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  favorites: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites = [...state.favorites, action.payload];
      }
    },
  },
  selectors: {
    getFavorites: (state) => state.favorites,
  },
});

export const { setFavorites } = productsSlice.actions;
export const { getFavorites } = productsSlice.selectors;
export default productsSlice;
