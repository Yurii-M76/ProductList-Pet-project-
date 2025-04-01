"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getAllProducts } from "@/lib/features/products/postsSlice";
import { useSelector } from "@/lib/store";
import classes from "./products.module.css";

const ProductList = () => {
  const { items } = useSelector(getAllProducts);

  const products = items.map((item) => {
    return (
      <ProductCard
        key={item.id}
        category={item.category}
        image={item.image}
        title={item.title}
        description={item.description}
        price={item.price}
      />
    );
  });

  return <div className={classes.products}>{products}</div>;
};

export default ProductList;
