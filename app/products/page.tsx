import { Metadata } from "next";
import Products from "@/components/Products/Products";
import { getProductsFromApi } from "@/lib/features/products/products.api";

export const metadata: Metadata = {
  title: "Products | SiteName",
  description: "All Products",
};

const ProductsPage = async () => {
  const products = await getProductsFromApi();

  return <Products products={products} />;
};

export default ProductsPage;
