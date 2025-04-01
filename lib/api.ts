const URL = "https://fakestoreapi.com/products";

export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const fetchProducts = async <T>(): Promise<T> => {
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      } as HeadersInit,
    });
    return await checkResponse<T>(response);
  } catch (error) {
    console.error(`Request failed (get products):`, error);
    return Promise.reject(error);
  }
};
