import React, { useState } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Please login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="
                w-full 
                px-4 
                py-3 
                border-2 
                border-gray-300 
                rounded-lg 
                transition-all 
                duration-300
                focus:outline-none 
                focus:border-green-600 
                focus:ring-4 
                focus:ring-green-100
                hover:border-gray-400
              "
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="
                w-full 
                px-4 
                py-3 
                border-2 
                border-gray-300 
                rounded-lg 
                transition-all 
                duration-300
                focus:outline-none 
                focus:border-green-600 
                focus:ring-4 
                focus:ring-green-100
                hover:border-gray-400
              "
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="
                  w-4 
                  h-4 
                  text-green-600 
                  border-2 
                  border-gray-300 
                  rounded 
                  cursor-pointer
                  focus:ring-4 
                  focus:ring-green-100
                  transition-all
                "
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="
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
              active:scale-95
              disabled:bg-gray-400
              disabled:cursor-not-allowed
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Logging in...</span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="space-y-3">
          <button
            className="
            w-full 
            border-2 
            border-gray-300 
            py-3 
            rounded-lg 
            font-medium 
            text-gray-700 
            hover:bg-gray-50 
            hover:border-gray-400
            transition-all
            duration-300
          "
          >
            Continue with Google
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?
          <a
            href="#"
            className="text-green-600 hover:text-green-700 font-bold ml-1 transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;
