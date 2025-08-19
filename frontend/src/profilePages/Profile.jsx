import React, { useContext, useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { MdPermContactCalendar } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { StoreContext } from "../contextStore/contextStore";
import { IoSaveSharp } from "react-icons/io5";
import axios from "axios";

function Profile() {
  const times = [
    "6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM",
    "11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM",
    "4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM",
  ];

  const { user, userName } = useContext(StoreContext);
  
  useEffect(() => {
    console.log(user, userName);
  }, [])

  // states
  const [editable, setEditable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [profileData, setProfileData] = useState({
    // name: user?.name || "User",
    // email: user?.email || "Not Provided",
    name: "User",
    email: "Not Provided",
    phoneNumber: "",
    address: "",
    age: "",
    height: "",
    weight: "",
    plan: "Standard",
    joiningDate: "",
    planExpireOn: "",
  });

  const [originalData, setOriginalData] = useState(profileData);

  useEffect(() => {
    // Set initial profile data from user context
    if (user) {
      setProfileData({
        ...profileData,
        name: user.name || "User",
        email: user.email || "Not Provided",
      });
    }
  }, [user])

  // fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/profile/get", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.data.success) {
          const p = res.data.profile;
          const profileInfo = {
            name: user?.name || "User",
            email: user?.email || "Not Provided",
            phoneNumber: p.phoneNumber || "",
            address: p.address || "",
            age: p.age || "",
            height: p.height || "",
            weight: p.weight || "",
            plan: "Premium",
            joiningDate: new Date(p.createdAt).toLocaleDateString(),
            planExpireOn: new Date(p.updatedAt).toLocaleDateString(),
          };
          setProfileData(profileInfo);
          setOriginalData(profileInfo);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  // handle input changes
  const onChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // save profile
  const handleSaveProfile = async () => {
    setIsSaving(true);
    try {
      const payload = {
        userId: user?.id || user?._id,
        phoneNumber: profileData.phoneNumber,
        address: profileData.address,
        age: parseInt(profileData.age) || 0,
        height: parseInt(profileData.height) || 0,
        weight: parseInt(profileData.weight) || 0,
      };

      const res = await axios.post(
        "http://localhost:4000/api/profile/save",
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        setEditable(false);
        setOriginalData(profileData);
        console.log("Profile updated successfully!");
      } else {
        throw new Error(res.data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <p className="text-center">Loading profile...</p>;

  return (
    <div className="pt-30">
      <div className="md:w-11/12 sm:w-full md:w-4/5 flex flex-col justify-center shadow-xl mx-auto pb-10 rounded-xl overflow-hidden mb-10">
        {/* Header */}
        <div className="w-full h-44 bg-gradient-to-r from-indigo-900 via-purple-600 to-blue-900 relative">
          <div className="flex justify-end mr-4 mt-4">
            {editable ? (
              <button
                onClick={handleSaveProfile}
                disabled={isSaving}
                className="border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 text-white bg-white/30 backdrop-blur-md text-sm md:text-base"
              >
                <IoSaveSharp /> {isSaving ? "Saving..." : "Save"}
              </button>
            ) : (
              <button
                onClick={() => setEditable(true)}
                className="border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 text-white bg-white/30 backdrop-blur-md text-sm md:text-base"
              >
                <MdModeEditOutline /> Edit
              </button>
            )}
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start z-10 sm:space-x-6 -mt-20 px-10">
          {/* Profile Image */}
          <img
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-lg"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=870&q=80"
            alt="profile"
          />

          {/* Info */}
          <div className="mt-4 sm:mt-12 justify-center items-center flex flex-col text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-black bg-red-300 rounded-full px-4 py-1 inline-block">
              {profileData.name}
            </h1>
            <p className="text-gray-900 font-semibold">{profileData.plan}</p>
          </div>
        </div>

        {/* contact information */}
        <div className="mt-8 px-10 sm:px-6">
          <h1 className="text-xl font-bold mb-4 gap-4 items-center flex flex-row">
            <IoPerson /> Personal Information
          </h1>
          <div className="flex justify-around lg:flex-row flex-col lg:mx-10 sm:mx-0 lg:gap-4 sm:gap-0">
            <div className="lg:w-1/2 sm:w-full flex flex-col text-lg ">
              <div className="bg-green-100 px-4 py-2 my-2 rounded-full">
                Email : {profileData.email}
              </div>
              <div className="bg-green-100 px-4 py-2 my-2 rounded-full">
                {editable ? (
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors"
                  />
                ) : (
                  <p>{profileData.phoneNumber || "Phone"}</p>
                )}
              </div>
              <div className="bg-green-100 px-4 py-2 my-2 rounded-full">
                {editable ? (
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={profileData.address}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors"
                  />
                ) : (
                  <p>{profileData.address || "Address"}</p>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 flex flex-col text-lg">
              <div className="bg-green-100 px-4 py-2 my-2 rounded-full">
                {editable ? (
                  <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={profileData.age}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors"
                  />
                ) : (
                  <p>{profileData.age || "Age"}</p>
                )}
              </div>
              <div className="bg-green-100 px-4 py-2 my-2 rounded-full">
                {editable ? (
                  <input
                    type="text"
                    name="height"
                    value={profileData.height}
                    onChange={onChange}
                    placeholder="Height"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors"
                  />
                ) : (
                  <p>{profileData.height || "Height"}</p>
                )}
              </div>
              <div className="bg-green-100 px-4 py-2 my-2 rounded-full">
                {editable ? (
                  <input
                    type="text"
                    placeholder="Weight"
                    name="weight"
                    value={profileData.weight}
                    onChange={onChange}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors"
                  />
                ) : (
                  <p>{profileData.weight || "Weight"}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="mt-8 px-4 sm:px-6 md:px-10">
          <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
            <MdPermContactCalendar /> Attendance
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 border rounded-2xl bg-white shadow relative">
              <Calendar className="mt-4 w-full h-auto mx-auto" />
              <p className="absolute bottom-0 right-0 w-full text-center px-4 py-2 rounded-b-2xl bg-[#2C3E50] text-white text-sm md:text-base">
                Selected date:
              </p>
            </div>

            <div className="w-full md:w-1/2 border border-black rounded-2xl bg-[#FBF3D5] shadow">
              <h1 className="text-lg font-bold text-white text-center mb-4 rounded-t-2xl p-4 bg-[#2C3E50]">
                Mark Attendance
              </h1>
              <div className="text-sm h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-[#2C3E50] scrollbar-track-[#FBF3D5]">
                {times.map((time, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <p className="border mx-3 border-black mr-[-24px] z-1 px-2 bg-white w-20 text-center text-xs md:text-sm">
                      {time}
                    </p>
                    <p className="border border-black flex-1 h-8"></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
