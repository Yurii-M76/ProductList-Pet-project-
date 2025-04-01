import { FC } from "react";
import Image from "next/image";
import classes from "./product-card.module.css";

type TProductCard = {
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
  isLike?: boolean;
};

const crop = (str: string, limit: number): string => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

const ProductCard: FC<TProductCard> = ({
  image,
  category,
  title,
  description,
  price,
  isLike,
}) => {
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
        />
        <div className={classes.delete}>Del</div>
        <div className={classes.category}>{category}</div>
      </div>
      <div className={classes.body}>
        <div className={classes.section}>
          <div className={classes.titleWrapper}>
            <h2 className={classes.title}>{crop(title, 40)}</h2>
            <div className={classes.like}>Like</div>
          </div>
          <p className={classes.description}>{crop(description, 180)}</p>
        </div>
        <span className={classes.price}>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
