import ProductDetail from "@/components/dashboard/product/product-detail";

const Product = async ({ id }: { id: number }) => {
  const res = await fetch(`http://localhost:8000/products/${id}`, {
    method: "GET",
    next: { tags: ["productDetail"] },
  });

  const data = await res.json();
  const product = { ...data };
  console.log(product);

  return <ProductDetail product={product} />;
};

const ProductDetailPage = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  return (
    <>
      <Product id={id} />
    </>
  );
};
export default ProductDetailPage;
