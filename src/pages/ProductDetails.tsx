import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      const foundProduct = data.find((p: Product) => p.id === parseInt(id!));
      setProduct(foundProduct);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <img className="w-full" src={product.image} alt={product.name} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <button className="bg-black text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

