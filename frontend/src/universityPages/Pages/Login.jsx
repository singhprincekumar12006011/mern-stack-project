import { Link } from "react-router-dom";
import { IoArrowBackSharp, IoEyeOff, IoEye } from "react-icons/io5";
import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { StoreContext } from "../../contextAPI/contextStore";

function Login() {
  const {setRole, setToken} = useContext(StoreContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        formData
      );

      console.log(res);
      // If success
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: res.data?.message,
          text: "Welcome back to Superlative University",
        });

        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        setRole(res.data.role);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.response?.data?.message || "Invalid email or password",
      });
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.hud.ac.uk/media/assets/photo/buildings/University-Square-Student-Central-web-banner.jpg')",
      }}
    >
      <div className="w-full h-full flex justify-center items-center px-4">
        <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-2xl w-full sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[28%] min-h-[400px] p-6">
          <h1 className="pt-2 font-bold text-3xl text-white text-center">
            Login
          </h1>
          <form className="mx-2 sm:mx-4 pt-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              required
              className="border border-white/30 w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 font-medium text-base sm:text-lg"
            />

            {/* Password field with toggle */}
            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border border-white/30 w-full p-3 pr-10 rounded-lg bg-white/20 text-white placeholder-white/70 font-medium text-base sm:text-lg"
              />
              <span
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOff size={22} /> : <IoEye size={22} />}
              </span>
            </div>

            <p className="mt-2 text-right text-[14px] sm:text-[15px] cursor-pointer text-purple-200 hover:underline">
              Forgot Password?
            </p>
            <div className="flex justify-center items-center mt-6">
              <button
                type="submit"
                className="border border-white/30 w-full p-3 rounded-lg bg-white text-lg sm:text-xl font-bold hover:bg-white/80 hover:text-black transition"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-4 text-right text-[16px] sm:text-[18px] font-semibold text-white">
            <IoArrowBackSharp className="inline-block" /> Back to{" "}
            <Link to="/">
              <span className="text-yellow-300 cursor-pointer mr-1">Page</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
