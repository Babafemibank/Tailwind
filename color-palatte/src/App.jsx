function App() {
 
  const flagColors = [
    { name: 'Nigerian Green', hex: '#008751' },
    { name: 'Nigerian White', hex: '#FFFFFF' }
  ];

  const greenShades = [
    { name: 'Green 50', hex: '#f0fdf4' },
    { name: 'Green 100', hex: '#dcfce7' },
    { name: 'Green 200', hex: '#bbf7d0' },
    { name: 'Green 300', hex: '#86efac' },
    { name: 'Green 400', hex: '#4ade80' },
    { name: 'Green 500', hex: '#22c55e' },
    { name: 'Green 600', hex: '#16a34a' },
    { name: 'Green 700', hex: '#15803d' },
    { name: 'Green 800', hex: '#166534' },
    { name: 'Green 900', hex: '#14532d' },
    { name: 'Green 950', hex: '#052e16' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
    
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-center mb-2">Nigerian Color Palette</h1>
        <p className="text-center text-gray-600">Official flag colors and Naija green shades</p>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Nigerian Flag Colors Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nigerian Flag Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flagColors.map((color) => (
              <div key={color.hex} className="text-center">
                {/* Color Square */}
                <div 
                  className="w-full h-32 rounded-lg shadow-lg mb-3 border-2 border-gray-200"
                  style={{ backgroundColor: color.hex }}
                ></div>
                {/* Color Name */}
                <p className="font-bold text-gray-800">{color.name}</p>
                {/* Hex Code */}
                <p className="text-sm text-gray-500 font-mono">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Green Shades Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Naija Green Shades (50-950)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {greenShades.map((color) => (
              <div key={color.hex} className="text-center">
                {/* Color Square */}
                <div 
                  className="w-full h-32 rounded-lg shadow-lg mb-3"
                  style={{ backgroundColor: color.hex }}
                ></div>
                {/* Color Name */}
                <p className="font-bold text-gray-800 text-sm">{color.name}</p>
                {/* Hex Code */}
                <p className="text-xs text-gray-500 font-mono">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#008751' }}></div>
              <div>
                <p className="font-bold">Primary Brand Color</p>
                <p className="text-sm text-gray-600">Use for main buttons, headers, and brand elements</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#22c55e' }}></div>
              <div>
                <p className="font-bold">Success Messages</p>
                <p className="text-sm text-gray-600">Use for positive feedback and success states</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg" style={{ backgroundColor: '#dcfce7' }}></div>
              <div>
                <p className="font-bold">Light Backgrounds</p>
                <p className="text-sm text-gray-600">Use for subtle backgrounds and highlights</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;