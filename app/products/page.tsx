import { Metadata } from "next";
import Link from "next/link";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import { TProduct } from "@/types/product.types";
import classes from "./products.module.css";

const getData = async (): Promise<TProduct[]> => {
  return await fetchProducts<TProduct[]>();
};

export const metadata: Metadata = {
  title: "Products | SiteName",
  description: "All Products",
};

const ProductList = async () => {
  const products = await getData();

  const items = products.map((item) => {
    return (
      <Link href={`/products/${item.id}`} key={item.id}>
        <ProductCard
          id={item.id}
          key={item.id}
          category={item.category}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      </Link>
    );
  });

  return (
    <>
      <h1>Все продукты</h1>
      <div className={classes.products}>{items}</div>
    </>
  );
};

export default ProductList;
