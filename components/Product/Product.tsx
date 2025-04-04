"use client";
import Image from "next/image";
import { FC, SyntheticEvent } from "react";
import { useDispatch, useSelector } from "@/lib/store";
import {
  getFavorites,
  setFavorites,
} from "@/lib/features/products/productsSlice";
import { ActionIcon, EditIcon, LikeIcon, TrashIcon } from "../ui";
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
        <h1>{title}</h1>
        <div className={classes.options}>
          <span className={classes.category}>{category}</span>
          <div className={classes.actionIcon}>
            <ActionIcon variant="transparent" size="md">
              <EditIcon />
            </ActionIcon>
            <ActionIcon variant="transparent" size="md">
              <TrashIcon />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size="md"
              onClick={likeHandler}
              style={isLike ? { color: "red" } : undefined}
            >
              <LikeIcon />
            </ActionIcon>
          </div>
        </div>

        <p className={classes.description}>
          <strong>Description:</strong> {description}
        </p>
        <p className={classes.price}>${price}</p>
      </div>
    </div>
  );
};

export default Product;
