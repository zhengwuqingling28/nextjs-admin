"use client";

import { updateProduct } from "@/action/productAction";
import InputField from "@/components/ui/input";
import { useState } from "react";

interface IProps {
  product: IProduct;
}

const UpdateProductForm = ({ product }: IProps) => {
  const [formData, setFormData] = useState({
    title: product.title,
    description: product.description,
    originalPrice: product.originalPrice,
    price: product.price,
    slug: product.slug,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <form action={updateProduct} className="px-4 w-full">
      <input type="hidden" name="id" value={product.id} />
      <InputField
        label="Title"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <InputField
        label="Description"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <InputField
        label="Original Price"
        id="originalPrice"
        name="originalPrice"
        type="number"
        value={formData.originalPrice}
        onChange={handleChange}
        required
      />
      <InputField
        label="Price"
        id="price"
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <InputField
        label="Slug"
        id="slug"
        name="slug"
        value={formData.slug}
        onChange={handleChange}
        readonly
      />
      <button
        type="submit"
        className="float-right mt-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Update
      </button>
    </form>
  );
};

export default UpdateProductForm;
