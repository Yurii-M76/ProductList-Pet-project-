import { Metadata } from "next";
import { NewProductForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Create new product | SiteName",
  description: "The form of adding a new product",
};

const NewProductPage = () => {
  return (
    <>
      <h1>Новый продукт</h1>
      <NewProductForm />
    </>
  );
};

export default NewProductPage;
