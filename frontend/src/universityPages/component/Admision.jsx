import { useState } from "react";
import axios from "axios";

const Admission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    program: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        // "http://localhost:4000/api/admision/student/",
        `${import.meta.env.VITE_BACKEND_URL}/admision/student/`,
        formData
      );

      if (res.status === 201 || res.status === 200) {
        alert("Application submitted successfully ✅");
        setIsOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          qualification: "",
          program: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit ❌ " + (err.response?.data?.error || ""));
    }
  };

  return (
    <div className="mx-auto">
      <div className="mt-20 text-center">
        <div className="flex justify-around items-center">
          <p className="text-xl font-semibold">
            Admissions Open for{" "}
            <span className="text-[#ff3300]">
              Online | Offline Degree Courses
            </span>{" "}
            - 2025 Batch
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-2 border border-[#ff3300] rounded-full bg-[#ff3300] text-white transition"
          >
            <span className="text-xl font-semibold">Apply Now</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="bg-white rounded-lg p-8 w-[400px] relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="qualification"
                placeholder="Qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="program"
                placeholder="Program"
                value={formData.program}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#ff3300] text-white py-2 rounded font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admission;
