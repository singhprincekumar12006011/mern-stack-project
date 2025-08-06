import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handlechange =  (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handlesubmit = async (e) => {
    
  }
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-8 w-[300px] sm:w-[400px] text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Username */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handlechange}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handlechange}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-sm mb-4">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="accent-purple-400" />
            Remember me
          </label>
          <a href="#" className="text-purple-200 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 transition">
          Login
        </button>

        {/* Register */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-200 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
