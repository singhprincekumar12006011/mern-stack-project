import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { IoEyeOff } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import { StoreContext } from "../contextStore/contextStore"; 

function Signup() {
  const { setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [optEmail, setOptEmail] = useState("");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all fields',
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match',
      });
      return;
    }

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/register",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Signup Successful!',
        //   text: 'Please check your email for the OTP.',
        // });

        setShowModal(true);
        setOptEmail(data.email);
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Signup error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: error.response?.data?.message || 'Signup failed. Try again.',
      });
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || !optEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please enter your email and OTP',
      });
      return;
    }

    const otpData = {
      email: optEmail,
      otp: otp,
    };

    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/verify-otp",
        otpData
      );

      if (response.status === 200 && response.data?.token) {
        const token = response.data.token;

        console.log(response)

        setToken(token);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        Swal.fire({
          icon: 'success',
          title: 'OTP Verified',
          // title: 'Signup Successful',
          text: 'You are now logged in!',
        });

        setShowModal(false);
        setOtp("");
        setOptEmail("");

        navigate("/profile");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Verification Failed',
          text: 'OTP verification failed. Please try again.',
        });
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      Swal.fire({
        icon: 'error',
        title: 'OTP Failed',
        text: error.response?.data?.message || "OTP verification failed.",
      });
    }
  };

  return (
    <div>
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg')",
        }}
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg p-8 w-[300px] sm:w-[400px] text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

          {/* Username */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Password */}
          <div className="mb-4 flex flex-row items-center w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus-within:ring-2 focus-within:ring-purple-300">
            <input
              type={visible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
              className="border-none w-full rounded-md text-white placeholder-white focus:outline-none"
            />
            <span>
              <IoEyeOff
                onClick={() => setVisible(!visible)}
                className={visible ? "text-green-500" : "text-white cursor-pointer"}
              />
            </span>
          </div>

          {/* Confirm Password */}
          <div className="mb-1">
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-md bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>

          {/* Password Match Message */}
          <div className="text-sm pb-2">
            {data.password && data.confirmPassword ? (
              data.password !== data.confirmPassword ? (
                <span className="text-red-500">Passwords do not match</span>
              ) : (
                <span className="text-green-500">Passwords match</span>
              )
            ) : null}
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-white text-purple-700 mt-5 font-semibold rounded-md hover:bg-gray-200 transition"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-200 hover:text-purple-400">
              Login
            </Link>{" "}
            /{" "}
            <span
              onClick={() => setShowModal(true)}
              className="text-purple-200 hover:text-purple-400 cursor-pointer"
            >
              Verify OTP
            </span>
          </p>
        </div>
      </div>

      {/* OTP Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-lg font-bold mb-4 text-center text-purple-700">
              Verify OTP
            </h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={optEmail}
              onChange={(e) => setOptEmail(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="flex justify-between">
              <button
                onClick={handleVerifyOTP}
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                Verify
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
