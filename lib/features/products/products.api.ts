import { TProduct } from "@/types/product.types";

const URL = "https://fakestoreapi.com/products";

export const getProductsFromApi = async (): Promise<TProduct[]> => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};

export const fetchProduct = async (id: string): Promise<TProduct> => {
  if (!id) {
    throw new Error("ID not transmitted");
  }

  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch product:`, error);
    throw error;
  }
};

export const deleteProductFromApi = async (id: string): Promise<number> => {
  if (!id) {
    throw new Error("ID not transmitted");
  }

  try {
    const response = await fetch(`${URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.status;
  } catch (error) {
    console.error("Failed to delete product:", error);
    throw error;
  }
};
