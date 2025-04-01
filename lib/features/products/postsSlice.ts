import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions";
import { TProduct } from "@/types/product.types";
import { fetchProducts } from "@/lib/api";

type TInitialState = {
  loading: boolean;
  error?: string | null;
  items: TProduct[];
};

const initialItems = await fetchProducts<TProduct[]>();

const initialState: TInitialState = {
  loading: false,
  error: null,
  items: initialItems || [],
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  selectors: {
    getAllProducts: (state) => state,
  },
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { getAllProducts } = productsSlice.selectors;
export default productsSlice;
