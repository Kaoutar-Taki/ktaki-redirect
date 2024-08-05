import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
}

const CategoryDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      const filteredProducts = data.filter(
        (product: Product) => product.categoryId === parseInt(id!)
      );
      setProducts(filteredProducts);
    };
    fetchProducts();
  }, [id]);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">
        Products in this Category
      </h2>
      <div className="mt-8 flex flex-wrap justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            <img className="w-full" src={product.image} alt={product.name} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.name}</div>
              <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                ${product.price.toFixed(2)}
              </span>
              <a
                href={`/product/${product.id}`}
                className="bg-black text-white px-3 py-1 rounded"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;

