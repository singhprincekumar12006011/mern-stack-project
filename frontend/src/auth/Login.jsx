import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../contextStore/contextStore";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const { setToken } = useContext(StoreContext);

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handlechange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: form.email,
      password: form.password
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/login",
        loginData
      );

      if (response.status === 200 && response.data?.token) {
        const token = response.data.token;

        // Optional: store token or user info locally
        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

         Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Welcome, ${response.data.user.name}`,
          confirmButtonColor: '#6b46c1'
        });

        setForm({
          email: '',
          password: ''
        });

        navigate("/profile");
      }
    } catch (error) {
       Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Please check your email or password.',
        confirmButtonColor: '#e53e3e'
      });
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')",
      }}
    >
      <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-8 w-[300px] sm:w-[400px] text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handlechange}
            className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        {/* Password Input */}
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

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm mb-4">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="accent-purple-400" />
            Remember me
          </label>
          <a href="#" className="text-purple-200 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          onClick={handlesubmit}
          className="w-full py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 transition"
        >
          Login
        </button>

        {/* Register Redirect */}
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
