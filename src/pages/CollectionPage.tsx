import React, { useEffect, useState } from "react";

interface Collection {
  id: number;
  name: string;
  description: string;
}

const CollectionPage: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await fetch("/collections.json");
      const data = await response.json();
      setCollections(data);
    };
    fetchCollections();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center">Collections</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="bg-white shadow-md rounded-lg p-4"
          >
            <h3 className="text-xl font-semibold">{collection.name}</h3>
            <p className="text-gray-700">{collection.description}</p>
            <a
              href={`/collection/${collection.id}`}
              className="block mt-4 text-blue-500 hover:underline"
            >
              Explore Collection
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;

