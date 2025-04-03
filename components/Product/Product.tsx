"use client";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useDispatch } from "@/lib/store";
import { setProduct } from "@/lib/features/products/productsSlice";
import { TProduct } from "@/types/product.types";

type Props = {
  data: TProduct;
};

const Product: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const { image, title, description, category, price } = data;

  useEffect(() => {
    dispatch(setProduct(data));
  }, [data, dispatch]);

  return (
    <div className="product">
      {image && (
        <Image
          src={image}
          alt={title ? title : "image"}
          width={420}
          height={320}
          unoptimized
        />
      )}

      <div className="product-info">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Category: {category}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default Product;
