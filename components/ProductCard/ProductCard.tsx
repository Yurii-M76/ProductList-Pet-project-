"use client";
import { FC, SyntheticEvent } from "react";
import Image from "next/image";
import { ActionIcon, LikeIcon, Tooltip, TrashIcon } from "../ui";
import { TProduct } from "@/types/product.types";
import classes from "./product-card.module.css";

type TProductCard = {
  product: TProduct;
  isLike: boolean;
  handleClick: (id: string) => void;
  toggleLike: (event: SyntheticEvent, id: string) => void;
  onDelete: (event: SyntheticEvent, id: string) => void;
  onEdit?: (event: SyntheticEvent, id: string) => void;
};

const crop = (str: string, limit: number): string => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

const ProductCard: FC<TProductCard> = ({
  isLike,
  product,
  handleClick,
  toggleLike,
  onDelete,
}) => {
  const { id, image, title, description, category, price } = product;

  return (
    <div className={classes.card} onClick={() => handleClick(id)}>
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
          <Tooltip label="Удалить">
            <ActionIcon
              variant="outline"
              size="md"
              onClick={(evt: SyntheticEvent) => onDelete(evt, id)}
            >
              <TrashIcon />
            </ActionIcon>
          </Tooltip>
        </div>
        <div className={classes.category}>{category}</div>
      </div>
      <div className={classes.body}>
        <div className={classes.section}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{crop(title, 30)}</h2>
            <span className={classes.like}>
              <Tooltip
                label={
                  !isLike ? "Добавить в избранное" : "Удалить из избранного"
                }
              >
                <ActionIcon
                  variant="transparent"
                  size="sm"
                  onClick={(evt: SyntheticEvent) => toggleLike(evt, id)}
                  style={isLike ? { color: "red" } : undefined}
                >
                  <LikeIcon />
                </ActionIcon>
              </Tooltip>
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
