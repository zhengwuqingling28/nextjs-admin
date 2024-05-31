import ProductList from "@/components/dashboard/product/product-list";

const Products = async () => {
  const res = await fetch(`http://localhost:8000/products`, {
    method: "GET",
  });

  const products = await res.json();

  return <ProductList products={products} />;
};

const ProductsPage = () => {
  return <Products />;
};
export default ProductsPage;
