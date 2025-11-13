import React from "react";

const App = () => {
 
  const plans = [
    {
      name: "Basic",
      price: "5,000",
      period: "month",
      description: "Perfect for getting started",
      popular: false,
      features: [
        "5 Projects",
        "5GB Storage",
        "Email Support",
        "Basic Analytics",
        "Mobile App Access",
        "24/7 Support"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "Pro",
      price: "15,000",
      period: "month",
      description: "Best for growing businesses",
      popular: true,
      features: [
        "Unlimited Projects",
        "50GB Storage",
        "Priority Email Support",
        "Advanced Analytics",
        "Mobile App Access",
        "24/7 Priority Support",
        "Custom Domain",
        "API Access"
      ],
      buttonText: "Get Started",
      buttonColor: "bg-white text-blue-600 hover:bg-gray-100"
    },
    {
      name: "Enterprise",
      price: "50,000",
      period: "month",
      description: "For large organizations",
      popular: false,
      features: [
        "Unlimited Everything",
        "500GB Storage",
        "Dedicated Support",
        "Advanced Analytics",
        "Mobile App Access",
        "24/7 Dedicated Support",
        "Custom Domain",
        "Full API Access",
        "Custom Integration",
        "Security Features"
      ],
      buttonText: "Contact Sales",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4">
      
    
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Pricing Table
        </h1>
        <p className="text-xl text-gray-600">
          Choose the perfect plan for your needs. All plans include 14-day free trial.
        </p>
      </div>

   
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              bg-white rounded-2xl shadow-xl overflow-hidden
              ${plan.popular 
                ? 'md:scale-110 border-4 border-blue-600 md:z-10' 
                : 'border border-gray-200'
              }
              transition-transform duration-300 hover:scale-105
            `}
          >
         
            {plan.popular && (
              <div className="bg-blue-600 text-white text-center py-2 font-bold text-sm">
                ⭐ MOST POPULAR
              </div>
            )}

            
            <div className={`p-8 ${plan.popular ? 'bg-blue-600 text-white' : ''}`}>
           
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              
             
              <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                {plan.description}
              </p>

           
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ₦{plan.price}
                  </span>
                  <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

             
              <button className={`w-full py-3 rounded-lg font-bold transition ${plan.buttonColor} mb-8`}>
                {plan.buttonText}
              </button>
            </div>

           
            <div className="p-8 pt-0">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold flex-shrink-0 mt-1">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a custom plan?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer flexible pricing for teams and organizations with specific needs.
            Contact our sales team for a personalized quote.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition">
            Contact Sales Team
          </button>
        </div>

       
        <div className="mt-8 text-gray-600">
          <p>🔒 All plans include SSL encryption and data backup</p>
          <p className="mt-2">💳 We accept cards, bank transfers, and mobile money</p>
        </div>
      </div>
    </div>
  );
};

export default App;