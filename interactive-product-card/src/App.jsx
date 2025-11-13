import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      
      
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full hover:shadow-2xl transition-shadow duration-300">
        
      
        <div className="overflow-hidden">
          <img 
            src="https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-72383-scaled-1250x1250.jpg" 
            alt="MacBook"
            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        
        <div className="p-6">
          
        
          <h2 className="text-2xl font-bold text-gray-800 mb-2 transition-colors duration-300 hover:text-green-600 cursor-pointer">
            Authentic Apple Product
          </h2>

   
          <p className="text-gray-600 text-sm mb-4">
           Get your hands on a powerful MacBook at an unbeatable price!.
          </p>

         
          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">₦745,000</span>
            <span className="text-gray-500 line-through ml-2">₦950,000</span>
          </div>

         
          <button className="
            w-full 
            bg-green-600 
            text-white 
            font-bold 
            py-3 
            rounded-lg 
            transition-all 
            duration-300
            hover:bg-green-700 
            hover:shadow-lg
            hover:scale-105
            active:scale-95
            active:bg-green-800
          ">
            Add to Cart
          </button>

         
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>⭐ 4.8 (120 reviews)</span>
            <span>🚚 Free Delivery</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;