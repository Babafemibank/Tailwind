import React from "react";

const App = () => {
  // Sample blog data
  const mainPost = {
    title: "The Confrontation That Sparked a National Conversation",
    author: "Babafemi Usman",
    date: "November 13, 2024",
    readTime: "8 min read",
    category: "Nigeria",
    image: "https://www.thecable.ng/wp-content/uploads/2025/11/Wike-and-military-officer.jpg",
    content: `
      A seemingly routine site inspection in the heart of Nigeria’s capital has become a flashpoint for questions about power, protocol, and public service. On 11 November 2025, Nyesom Wike, the Minister of the Federal Capital Territory (FCT), arrived at a disputed parcel of land in the Gaduwa district of Abuja. There he found uniformed officers (from the Nigerian Navy) refusing him entry. Their leader: Lieutenant A.M. Yerima. What followed was a heated verbal exchange captured on video and shared widely online.
    `
  };

  const relatedPosts = [
    {
      id: 1,
      title: "Nigeria Troops rescue 74 NYSC Members from Boko Haram Abduction in Borno",
      image: "https://cdn.vanguardngr.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-13-at-7.30.56-AM.jpeg",
      date: "Nov 13, 2025",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "OpenAI Launches GPT-5.1 with Advanced Reasoning and Customization",
      image: "https://www.geeky-gadgets.com/wp-content/uploads/2025/11/webdev-arena-openai-model-comparison_optimized.webp",
      date: "Nov 13, 2025",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "W/Cup: Nigeria Battle Gabon In Crucial Playoff Today",
      image: "https://cdn.foot-africa.com/20251113/8732ba7f05692624372667f03368cad6b778e0b65af6bd8571f1fa294bf8fc39-1200-675.webp",
      date: "Nov 13, 2025",
      readTime: "7 min"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="bg-green-50 p-8 flex justify-between items-center">
        <div className="flex gap-4 text-xl text-gray-600">
          
          <i className="fa-brands fa-facebook hover:text-green-600 cursor-pointer"></i>
          <i className="fa-brands fa-x-twitter hover:text-green-600 cursor-pointer"></i>
          <i className="fa-brands fa-instagram hover:text-green-600 cursor-pointer"></i>
          <i className="fa-brands fa-pinterest hover:text-green-600 cursor-pointer"></i>
        </div>
        <div>
          <span className="text-3xl font-bold">Babafemi</span>
          <span className="font-mono text-4xl text-red-400 font-bold">Blog</span>
        </div>
        <div className="flex gap-4 text-xl text-gray-600">
          <i className="fa-solid fa-magnifying-glass hover:text-green-600 cursor-pointer"></i>
          <i className="fa-solid fa-bars hover:text-green-600 cursor-pointer"></i>
        </div>
      </div>

   
      <div className="w-full">
        <img 
          src={mainPost.image} 
          alt={mainPost.title}
          className="w-full h-96 object-cover"
        />
      </div>

    
      <div className="max-w-7xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
         
          <div className="lg:col-span-2">
           
            <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              {mainPost.category}
            </span>

          
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {mainPost.title}
            </h1>

           
            <div className="flex items-center gap-4 text-gray-600 mb-8 pb-6 border-b">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-user"></i>
                <span className="font-medium">{mainPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-calendar"></i>
                <span>{mainPost.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-clock"></i>
                <span>{mainPost.readTime}</span>
              </div>
            </div>

        
            <div className="prose max-w-none">
              {mainPost.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

          
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex gap-4 text-2xl">
                <i className="fa-brands fa-facebook text-blue-600 hover:scale-110 cursor-pointer transition"></i>
                <i className="fa-brands fa-twitter text-blue-400 hover:scale-110 cursor-pointer transition"></i>
                <i className="fa-brands fa-linkedin text-blue-700 hover:scale-110 cursor-pointer transition"></i>
                <i className="fa-brands fa-whatsapp text-green-600 hover:scale-110 cursor-pointer transition"></i>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-1">
          
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  BJ
                </div>
                <div>
                  <h3 className="font-bold text-lg">{mainPost.author}</h3>
                  <p className="text-sm text-gray-600">Tech Writer</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Passionate about web development and sharing knowledge with the developer community.
              </p>
            </div>

        
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6">Related Posts</h3>
              <div className="space-y-6">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="group cursor-pointer">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-90 transition"
                    />
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span><i className="fa-solid fa-calendar mr-1"></i>{post.date}</span>
                      <span><i className="fa-solid fa-clock mr-1"></i>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          
            <div className="bg-green-600 rounded-lg shadow-lg p-6 mt-8 text-white">
              <h3 className="text-xl font-bold mb-3">Subscribe to Newsletter</h3>
              <p className="text-sm mb-4">Get the latest posts delivered right to your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3"
              />
              <button className="w-full bg-white text-green-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;