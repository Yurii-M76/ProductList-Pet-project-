import { Metadata } from "next";
import { fetchProduct } from "@/lib/features/products/products.api";
import Product from "@/components/Product/Product";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const getData = async (id: string) => {
  return await fetchProduct(id);
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
