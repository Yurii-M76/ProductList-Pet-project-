"use client";
import Link from "next/link";
import { FC, SyntheticEvent, useEffect } from "react";
import { deleteProductFromApi } from "@/lib/features/products/products.api";
import { useDispatch, useSelector } from "@/lib/store";
import {
  deleteProduct,
  setProducts,
  toggleFavorite,
} from "@/lib/features/products/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import { ActionIcon, Tooltip } from "../ui";
import AddIcon from "../ui/icons/AddIcon";
import { TProduct } from "@/types/product.types";
import classes from "./products.module.css";

type Props = {
  products: TProduct[];
};

const Products: FC<Props> = ({ products }) => {
  const dispatch = useDispatch();
  const { isLoading, items, favorites } = useSelector(
    (state) => state.productsSlice
  );

  const toggleLike = (evt: SyntheticEvent, id: string) => {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch(toggleFavorite(id));
  };

  const deleteHandler = async (evt: SyntheticEvent, id: string) => {
    if (!id) {
      console.error("ID not transmitted");
      return;
    }

    evt.preventDefault();
    evt.stopPropagation();
    try {
      await deleteProductFromApi(id);
      dispatch(deleteProduct(id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const productList = items.map((item) => {
    const isLike = favorites.includes(item.id);

    return (
      <Link href={`/products/${item.id}`} key={item.id}>
        <ProductCard
          key={item.id}
          product={item}
          isLike={isLike}
          toggleLike={toggleLike}
          onDelete={deleteHandler}
        />
      </Link>
    );
  });

  useEffect(() => {
    if (products.length) {
      dispatch(setProducts(products));
    }
  }, [dispatch, products]);

  return (
    <>
      <div className={classes.header}>
        <h1>Все продукты</h1>
        <Tooltip label="Добавить товар">
          <ActionIcon variant="outline" size="md" color="blue">
            <AddIcon />
          </ActionIcon>
        </Tooltip>
      </div>
      <div className={classes.products}>
        {!products.length
          ? "Products not found"
          : isLoading
          ? "Загрузка..."
          : productList}
      </div>
    </>
  );
};

export default Products;
