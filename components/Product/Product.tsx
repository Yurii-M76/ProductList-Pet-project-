import Image from "next/image";
import { FC } from "react";
import { ActionIcon, LikeIcon } from "../ui";
import { TProduct } from "@/types/product.types";
import classes from "./product.module.css";

type Props = {
  data: TProduct;
};

const Product: FC<Props> = ({ data }) => {
  const { image, title, description, category, price } = data;

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
          <ActionIcon variant="transparent" size="lg">
            <LikeIcon />
          </ActionIcon>
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
