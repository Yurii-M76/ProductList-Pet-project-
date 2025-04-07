"use client";
import { useRouter } from "next/navigation";
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

  const router = useRouter();

  const handleClickByProduct = (productId: string) => {
    router.push(`/products/${productId}`);
  };

  const toggleLike = (evt: SyntheticEvent, id: string) => {
    evt.stopPropagation();
    dispatch(toggleFavorite(id));
  };

  const deleteHandler = async (evt: SyntheticEvent, id: string) => {
    if (!id) {
      console.error("ID not transmitted");
      return;
    }

    evt.stopPropagation();
    try {
      await deleteProductFromApi(id);
      dispatch(deleteProduct(id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleAddProduct = () => {
    router.push("/products/new");
  };

  const productList = items.map((item) => {
    const isLike = favorites.includes(item.id);

    return (
      <ProductCard
        key={item.id}
        product={item}
        isLike={isLike}
        toggleLike={toggleLike}
        onDelete={deleteHandler}
        handleClick={handleClickByProduct}
      />
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
          <ActionIcon
            variant="outline"
            size="md"
            color="blue"
            onClick={handleAddProduct}
          >
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
