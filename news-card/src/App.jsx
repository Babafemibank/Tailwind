function App() {
  return (
    <div className="bg-gray-100 p-8">
      

      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        
       
        <div className="relative">
          <img 
            src="https://i.pinimg.com/1200x/43/e6/11/43e611b84f075f9adab4689e7ef74d96.jpg" 
            className="w-full h-48"
          />
          <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
            Politics
          </span>
        </div>

       
        <div className="p-6">
          
          
          <h2 className="text-xl font-bold mb-3">
            Dr. Bosun Tijani Announces New Opputunity for AI Developers and AI Engineers
          </h2>
          
          
          <p className="text-gray-600 text-sm mb-4">
          The initiative focuses on expanding Nigeria’s AI talent pipeline by providing training, funding opportunities, and access to cutting-edge tools. According to the Minister, the program will support both aspiring and experienced AI developers, helping them build innovative solutions that can drive national growth. The announcement reflects the government’s commitment to positioning Nigeria as a leading hub for artificial intelligence in Africa.
          </p>

         
          <div className="flex justify-between text-sm text-gray-500 mb-4 pt-4 border-t">
            <span className="font-medium">Babafemi Usman</span>
            <span>Nov 11, 2024</span>
          </div>

          
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">⏱️ 5 min read</span>
            <button className="text-green-600 font-bold text-sm">Read More →</button>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;