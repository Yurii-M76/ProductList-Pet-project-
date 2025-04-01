import { fetchProducts } from "@/lib/api";
import { TProduct } from "@/types/product.types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "products/getAll",
  async () => await fetchProducts<TProduct[]>()
);