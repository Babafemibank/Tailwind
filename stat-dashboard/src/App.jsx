import React from "react";

const App = () => {

  const stats = [
    {
      title: "Total Sales",
      value: "₦2.5M",
      change: "+12%",
      isPositive: true,
      icon: "💰",
      color: "from-blue-500 to-blue-600",
      bgLight: "bg-blue-50"
    },
    {
      title: "Orders",
      value: "1,234",
      change: "+8%",
      isPositive: true,
      icon: "📦",
      color: "from-green-500 to-green-600",
      bgLight: "bg-green-50"
    },
    {
      title: "Customers",
      value: "567",
      change: "+23%",
      isPositive: true,
      icon: "👥",
      color: "from-purple-500 to-purple-600",
      bgLight: "bg-purple-50"
    },
    {
      title: "Revenue",
      value: "₦4.2M",
      change: "+15%",
      isPositive: true,
      icon: "📈",
      color: "from-orange-500 to-orange-600",
      bgLight: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      
 
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-600">Track your business performance in real-time</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="
              bg-white 
              rounded-2xl 
              shadow-lg 
              p-6 
              transition-all 
              duration-300
              hover:shadow-2xl 
              hover:-translate-y-2
              cursor-pointer
            "
          >
            
            <div className={`${stat.bgLight} w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4`}>
              {stat.icon}
            </div>

            <h3 className="text-gray-600 text-sm font-medium mb-2">
              {stat.title}
            </h3>

            <div className="flex items-end justify-between">
              
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>

              <div className={`
                flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-lg
                ${stat.isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}
              `}>
                <span>{stat.change}</span>
                <span>{stat.isPositive ? '↑' : '↓'}</span>
              </div>
            </div>

           
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-500`}
                  style={{ width: stat.change }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-300">
              <span className="font-medium text-green-700">📊 View Full Report</span>
            </button>
            <button className="w-full text-left px-4 py-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-300">
              <span className="font-medium text-blue-700">📥 Export Data</span>
            </button>
            <button className="w-full text-left px-4 py-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-300">
              <span className="font-medium text-purple-700">⚙️ Settings</span>
            </button>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-medium text-gray-900">New order received</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">👤</span>
              <div>
                <p className="font-medium text-gray-900">New customer signup</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">💳</span>
              <div>
                <p className="font-medium text-gray-900">Payment processed</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;