import React, { useState } from "react";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Products data
  const products = [
    {
      id: 1,
      name: "Solar Fans",
      price: "₦125,000",
      image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/14/483317/1.jpg?7085",
      category: "Electronics"
    },
    {
      id: 2,
      name: "G-Shock",
      price: "₦55,000",
      image: "https://www.maybrands-casio.com/cdn/shop/articles/Original_G-Shock_Watches_Price_in_Nigeria.jpg?v=1746451487",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Travelling Bag",
      price: "₦225,000",
      image: "https://4.imimg.com/data4/XO/UJ/MY-20998809/luggage-travel-bag-500x500.jpg",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Slides",
      price: "₦35,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAgd7VcjHNMdBqNrh-s8z9mU80fDdyKJ31Dw&s",
      category: "Fashion"
    },
    {
      id: 5,
      name: "Digital Camera",
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
      category: "Electronics"
    },
    {
      id: 6,
      name: "Sunglasses",
      price: "₦15,000",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      category: "Accessories"
    },
    {
      id: 7,
      name: "Food Flask",
      price: "₦10,000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-6Gfbdl2zDqsjG2byzClnSqGrwiMPjZ0pUw&s",
      category: "Accessories"
    },
    {
      id: 8,
      name: "Football Jersey",
      price: "₦48,000",
      image: "https://skit.ng/wp-content/uploads/2024/02/Nigeria-Football-Jersey-Away-Kit-Skit-Store.jpg",
      category: "Fashion"
    }
  ];

  const categories = [
    { name: "Electronics", icon: "💻", color: "bg-blue-500" },
    { name: "Fashion", icon: "👔", color: "bg-pink-500" },
    { name: "Home & Living", icon: "🏠", color: "bg-green-500" },
    { name: "Accessories", icon: "⌚", color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
     
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
         
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">
                <span className="text-green-600">Easylam</span>
                <span className="text-gray-900">Store</span>
              </h1>
            </div>

           
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
            </div>

          
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
                🛒
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-700"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Home</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Products</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Categories</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">About</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-green-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

     
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Shop the Best Products in Nigeria
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Quality products, affordable prices, fast delivery. Shop now and enjoy amazing deals!
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 hover:scale-105 active:scale-95 transition-all">
                Shop Now →
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://retaildesignblog.net/wp-content/uploads/2020/04/P1A2227-1-780x520.jpg" 
                alt="Shopping"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:border-green-600 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h4 className="font-bold text-gray-900">{category.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-green-600 font-bold">{product.category}</span>
                  <h4 className="font-bold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           
            <div>
              <h4 className="text-2xl font-bold mb-4">
                <span className="text-green-500">Easylam</span>Store
              </h4>
              <p className="text-gray-400 text-sm">
                Your trusted online marketplace for quality products in Nigeria.
              </p>
            </div>

           
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Shipping Info</a></li>
              </ul>
            </div>

           
            <div>
              <h5 className="font-bold mb-4">Customer Service</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            
            <div>
              <h5 className="font-bold mb-4">Contact Us</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>easylam@gmail.com</li>
                <li> +234 816 065 4914</li>
                <li> Lagos, Nigeria</li>
              </ul>
             
            </div>
          </div>

       
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 EasylamStore. All rights reserved. Made with ❤️ in Nigeria</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;