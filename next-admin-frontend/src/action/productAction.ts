"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

interface ProductFormData {
  title: string;
  description: string;
  originalPrice: number | null;
  price: number | null;
  slug: string;
}

export const addProduct = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const originalPrice = formData.get("originalPrice") as number | null;
  const price = formData.get("price") as number | null;
  const slug = slugify(title, { lower: true });

  const productData: ProductFormData = {
    title,
    description,
    originalPrice,
    price,
    slug,
  };

  await fetch("http://localhost:8000/products", {
    method: "POST",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData: FormData) => {
  const id = formData.get("id") as number | null;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const originalPrice = formData.get("originalPrice") as number | null;
  const price = formData.get("price") as number | null;
  const slug = slugify(title, { lower: true });

  const productData: ProductFormData = {
    title,
    description,
    originalPrice,
    price,
    slug,
  };

  await fetch(`http://localhost:8000/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData: FormData) => {
  const id = formData.get("id") as number | null;

  await fetch(`http://localhost:8000/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};
