import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  // Function to toggle between Sign Up and Login
  const toggleState = () => {
    setCurrentState(currentState === "Sign Up" ? "Login" : "Sign Up");
  };

  return (
    <div className="border-t">
      <div className="p-6 max-w-md mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <p className="text-3xl font-medium prata-regular">{currentState}</p>
          <hr className="w-8 h-[1.5px] bg-[#141414]" />
        </div>

        {/* Form */}
        <form
          className="flex flex-col gap-4 mt-6 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (currentState === "Sign Up") {
              setCurrentState("Login");
            }
          }}
        >
          {/* Name Field (Only for Sign Up) */}
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="Name"
              required
              className="border border-black px-4 py-3 w-full rounded-md outline-none focus:ring-2 focus:ring-gray-400"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            required
            className="border border-black px-4 py-3 w-full rounded-md outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="border border-black px-4 py-3 w-full rounded-md outline-none focus:ring-2 focus:ring-gray-400"
          />

          {/* Forgot Password (Only for Login) */}
          {currentState === "Login" && (
            <p className="text-sm text-left text-gray-600 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
          >
            {currentState}
          </button>
        </form>

        {/* Toggle Between Sign Up and Login */}
        <div className="flex  justify-between  mt-4 text-xs sm:text-sm">
          <p>
            {currentState === "Sign Up"
              ? "Already have an account?"
              : "Don't have an account?"}
          </p>
          <p
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={toggleState}
          >
            {currentState === "Sign Up" ? "Login" : "Create Account"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
