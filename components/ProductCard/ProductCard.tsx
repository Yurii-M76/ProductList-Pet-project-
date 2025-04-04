"use client";
import { FC, SyntheticEvent } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "@/lib/store";
import {
  getFavorites,
  setFavorites,
} from "@/lib/features/products/productsSlice";
import { ActionIcon, LikeIcon, TrashIcon } from "../ui";
import classes from "./product-card.module.css";

type TProductCard = {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
};

const crop = (str: string, limit: number): string => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

const ProductCard: FC<TProductCard> = ({
  id,
  image,
  category,
  title,
  description,
  price,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const isLike = favorites.includes(id);

  const likeHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    dispatch(setFavorites(id));
  };

  return (
    <div className={classes.card}>
      <div className={classes.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={340}
          height={300}
          unoptimized
          className={classes.image}
          loading="lazy"
        />
        <div className={classes.delete}>
          <ActionIcon variant="outline" size="md">
            <TrashIcon />
          </ActionIcon>
        </div>
        <div className={classes.category}>{category}</div>
      </div>
      <div className={classes.body}>
        <div className={classes.section}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{crop(title, 30)}</h2>
            <span className={classes.like}>
              <ActionIcon
                variant="transparent"
                size="sm"
                onClick={likeHandler}
                style={isLike ? { color: "red" } : undefined}
              >
                <LikeIcon />
              </ActionIcon>
            </span>
          </div>
          <p className={classes.description}>{crop(description, 150)}</p>
        </div>
        <span className={classes.price}>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
