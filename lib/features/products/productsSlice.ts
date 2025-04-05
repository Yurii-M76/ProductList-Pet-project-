import { TProduct } from "@/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  isLoading: boolean;
  items: TProduct[];
  favorites: string[];
};

const initialState: TInitialState = {
  isLoading: true,
  items: [],
  favorites: [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<TProduct[]>) {
      state.items = action.payload;
      state.isLoading = false;
    },
    toggleFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.includes(action.payload)
        ? state.favorites.filter((id) => id !== action.payload)
        : [...state.favorites, action.payload];
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  selectors: {
    getFavorites: (state) => state.favorites,
  },
});

export const { setProducts, toggleFavorite, deleteProduct } =
  productsSlice.actions;
export const { getFavorites } = productsSlice.selectors;
export default productsSlice;
