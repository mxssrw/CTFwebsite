import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import { mockProducts } from "@/data/mockProducts";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const featured = mockProducts;
      setProducts(featured.slice(0, 8));
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && id) {
      const foundProduct = products.find((p) => p.id.toString() === id);
      setProduct(foundProduct || null);
    }
  }, [isLoading, id, products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            {product ? product.name : "Product not found"}
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Unique product identifier and details below.
          </p>
        </div>

        {product && (
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Secret Code:
            </h2>
            <p className="mt-1 text-green-600 font-mono break-all">
              {product.secret}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;