import React, { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/categories.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Categories</h2>
      <div className="mt-8 flex flex-wrap justify-center">
        {categories.map((category) => (
          <div key={category.id} className="w-full md:w-1/4 p-4">
            <a
              href={`/category/${category.id}`}
              className="block text-gray-700 hover:text-black text-center py-4 border border-gray-200 rounded"
            >
              {category.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

