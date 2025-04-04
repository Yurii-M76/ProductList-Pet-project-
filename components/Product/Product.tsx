"use client";
import Image from "next/image";
import { FC, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "@/lib/store";
import {
  getFavorites,
  setFavorites,
} from "@/lib/features/products/productsSlice";
import { ActionIcon, LikeIcon } from "../ui";
import { TProduct } from "@/types/product.types";
import classes from "./product.module.css";

type Props = {
  data: TProduct;
};

const Product: FC<Props> = ({ data }) => {
  const { id, image, title, description, category, price } = data;
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isLike = favorites.includes(id);

  const likeHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch(setFavorites(id));
  };

  return (
    <div className={classes.product}>
      <div className={classes.image}>
        {image && (
          <Image
            src={image}
            blurDataURL={image}
            alt={title ? title : "image"}
            width={200}
            height={200}
            unoptimized
            layout="responsive"
            className={classes.img}
          />
        )}
      </div>

      <div className={classes.productInfo}>
        <div className={classes.titleWrapper}>
          <h1>{title}</h1>
          <span className={classes.like}>
            <ActionIcon
              variant="transparent"
              size="lg"
              onClick={likeHandler}
              style={isLike ? { color: "red" } : undefined}
            >
              <LikeIcon />
            </ActionIcon>
          </span>
        </div>
        <span className={classes.category}>{category}</span>
        <p className={classes.description}>
          <strong>Description:</strong> {description}
        </p>
        <p className={classes.price}>${price}</p>
      </div>
    </div>
  );
};

export default Product;
