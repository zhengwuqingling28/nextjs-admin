import { deleteProduct } from "@/action/productAction";
import Search from "@/components/ui/search";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProps) => {
  return (
    <div className="bg-gray-800 p-5 rounded-lg mt-5">
      <div className="flex items-center justify-between mb-5">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 bg-purple-600 text-white rounded">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full text-left text-gray-400">
        <thead className="bg-gray-700 text-gray-400 uppercase">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Original Price</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Slug</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: IProduct) => (
            <tr key={product.id} className="border-b border-gray-700">
              <td className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {product.title}
                </div>
              </td>
              <td className="px-4 py-2">{product.description}</td>
              <td className="px-4 py-2">{product.originalPrice}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">{product.slug}</td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="m-1 px-5 py-2 bg-teal-500 text-white rounded">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className="m-1 px-5 py-2 bg-red-500 text-white rounded">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductList;
