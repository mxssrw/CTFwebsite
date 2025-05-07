
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, category, discountPercentage } = product;
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const discountedPrice = discountPercentage
    ? price - (price * (discountPercentage / 100))
    : price;

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <Link to={`/product/${id}`}>
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={image}
              alt={name}
              className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
        </Link>
        {discountPercentage && (
          <Badge className="absolute top-2 right-2 bg-red-500">
            {discountPercentage}% OFF
          </Badge>
        )}
      </div>

      <div className="p-4">
        <div className="mb-2">
          <Badge
            variant="outline"
            className={`text-xs font-normal ${category === "Click" ? "bg-red-500" : "bg-white-500"
              }`}
          >
            {category}
          </Badge>
        </div>

        <Link to={`/product/${id}`} className="block mb-2">
          <h3 className="font-medium text-lg line-clamp-2 hover:text-shop-600 transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            {discountPercentage ? (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-shop-900">${discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-semibold text-shop-900">${price.toFixed(2)}</span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="bg-shop-600 hover:bg-shop-700"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
