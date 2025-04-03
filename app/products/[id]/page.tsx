import { Metadata } from "next";
import { fetchProduct } from "@/lib/api";
import Product from "@/components/Product/Product";
import { TProduct } from "@/types/product.types";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getData = async (id: string) => {
  return await fetchProduct<TProduct>(id);
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getData(id);

  return {
    title: `${product.title} | SiteName`,
  };
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const product = await getData(id);

  return <Product data={product} />;
};

export default ProductPage;
