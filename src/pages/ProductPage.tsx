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
      <div className="flex flex-col md:flex-row gap-8">

        <h1 className="text-3xl font-bold mb-4">
          {product ? product.name : "Product not found"}
        </h1>
        <h1 className="text-3xl font-bold mb-4 text-green-500">
          {product ? product.secret : ""}
        </h1>
      </div>
    </div>
  );
};

export default ProductPage;