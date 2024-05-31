"use client";

import { addProduct } from "@/action/productAction";
import InputField from "@/components/ui/input";
import { useState } from "react";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    originalPrice: "",
    price: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <form action={addProduct} className="px-4 w-full">
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
      <button
        type="submit"
        className="float-right mt-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Create
      </button>
    </form>
  );
};

export default AddProductForm;
