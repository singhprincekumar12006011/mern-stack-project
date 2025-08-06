import { Link } from "react-router-dom";

function Signup() {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-8 w-[300px] sm:w-[400px] text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Sign Up Button */}
        <button className="w-full py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 transition">
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-200 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
