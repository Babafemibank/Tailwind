import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full">
        <div className="h-32 bg-gradient-to-r from-green-600 via-white to-green-600 relative"></div>

        <div className="px-6 -mt-16 relative">
          <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 shadow-lg overflow-hidden mx-auto">
            <div className="w-full h-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">BB</span>
            </div>
          </div>
        </div>

        <div className="text-center px-6 mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Babafemi Bankole</h2>
          <p className="text-gray-600 mt-1">AI Developer</p>
          <p className="text-gray-500 text-sm mt-1 flex items-center justify-center gap-1">
            Abeokuta, Nigeria
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 px-6 mt-6">
          <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-green-600">2.5K</div>
            <div className="text-gray-600 text-sm mt-1">Followers</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-green-600">419</div>
            <div className="text-gray-600 text-sm mt-1">Posts</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="text-2xl font-bold text-green-600">8.9K</div>
            <div className="text-gray-600 text-sm mt-1">Likes</div>
          </div>
        </div>

        <div className="px-6 mt-6">
          <h3 className="text-sm  text-gray-700  tracking-wide mb-2">About</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            A dedicated AI developer with proficiency in front-end and back-end
          </p>
        </div>

        <div className="px-6 py-6">
          <button className="w-full bg-green-600  text-white font-semibold py-3 px-6 rounded-lg shadow-md">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
