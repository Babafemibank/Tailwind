import React from "react";

function App() {
  const products = [
    { id: 1, name: "Jollof Rice", price: 1500, emoji: "🍚" },
    { id: 2, name: "Ankara Fabric", price: 5000, emoji: "👗" },
    { id: 3, name: "Suya", price: 1000, emoji: "🍖" },
    { id: 4, name: "Aso-Ebi", price: 15000, emoji: "👘" },
    { id: 5, name: "Palm Wine", price: 1200, emoji: "🍷" },
    { id: 6, name: "Agbada", price: 25000, emoji: "🥻" },
    { id: 7, name: "Chin Chin", price: 500, emoji: "🍪" },
    { id: 8, name: "Puff Puff", price: 300, emoji: "🍩" },
  ];

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Publica Products Store
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-green-50 flex items-center justify-center">
                <span className="text-7xl">{product.emoji}</span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-green-600 mb-4">
                  {formatPrice(product.price)}
                </p>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;


