import React, { useState } from "react";

const initialProducts = [
  {
    id: 1,
    title: "Wooden Chair",
    description: "Elegant and sturdy wooden chair",
    image: "https://via.placeholder.com/150",
    color: "Brown",
    price: 1200,
    saved: false,
  },
  {
    id: 2,
    title: "Dining Table",
    description: "Classic six-seater dining table",
    image: "https://via.placeholder.com/150",
    color: "Walnut",
    price: 4500,
    saved: false,
  },
  {
    id: 3,
    title: "Bookshelf",
    description: "Compact bookshelf with 3 layers",
    image: "https://via.placeholder.com/150",
    color: "Teak",
    price: 2300,
    saved: false,
  },
  {
    id: 4,
    title: "Study Desk",
    description: "Minimalist desk for work & study",
    image: "https://via.placeholder.com/150",
    color: "Oak",
    price: 3100,
    saved: false,
  },
  {
    id: 5,
    title: "Coffee Table",
    description: "Modern coffee table for your living room",
    image: "https://via.placeholder.com/150",
    color: "Mahogany",
    price: 1700,
    saved: false,
  },
];

const Product_List_Card = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleSaveToggle = (id) => {
    const updated = products.map((product) =>
      product.id === id ? { ...product, saved: !product.saved } : product
    );
    setProducts(updated);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow-lg p-4 bg-white"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="text-sm mt-1">
            <span className="font-semibold">Color:</span> {product.color}
          </p>
          <p className="text-md font-bold mt-2">₹{product.price}</p>
          <button
            onClick={() => handleSaveToggle(product.id)}
            className={`mt-3 px-4 py-2 rounded-md text-white ${
              product.saved ? "bg-green-600" : "bg-blue-600"
            }`}
          >
            {product.saved ? "Saved" : "Add to Save"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product_List_Card;