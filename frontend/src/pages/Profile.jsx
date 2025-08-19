// import React, { useState, useEffect, useContext } from "react";
// import { Camera, Calendar, Crown, User, Mail, Phone, MapPin, Edit3, Star, Save, Loader } from "lucide-react";
// import { Link } from "react-router-dom";
// import Attendance from "../profilePages/Attendance.jsx";
// import { StoreContext } from "../contextStore/contextStore";
// import axios from "axios";

// function Profile() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [isSaving, setIsSaving] = useState(false);
//   const { user } = useContext(StoreContext);
//   const [loading, setLoading] = useState(true);
//   const [profileData, setProfileData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     age: "",
//     height: "",
//     weight: "",
//     plan: "Premium",
//     joiningDate: "",
//     planExpireOn: "",
//   });

//   // Store original data for cancel functionality
//   const [originalData, setOriginalData] = useState({});

//   // Fetch profile data from API
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get("http://localhost:4000/api/profile/get", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (res.data.success) {
//           const p = res.data.profile;
//           const profileInfo = {
//             name: user?.name || "User",
//             email: user?.email || "Not Provided",
//             phoneNumber: p.phoneNumber || "",
//             address: p.address || "",
//             age: p.age || "",
//             height: p.height || "",
//             weight: p.weight || "",
//             plan: "Premium",
//             joiningDate: new Date(p.createdAt).toLocaleDateString(),
//             planExpireOn: new Date(p.updatedAt).toLocaleDateString(),
//           };
//           setProfileData(profileInfo);
//           setOriginalData(profileInfo);
//         }
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [user]);

//   const handleInputChange = (field, value) => {
//     setProfileData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSaveProfile = async () => {
//     setIsSaving(true);
//     try {
//       const payload = {
//         userId: user?.id || user?._id, // Adjust based on your user object structure
//         phoneNumber: profileData.phoneNumber,
//         address: profileData.address,
//         age: parseInt(profileData.age) || 0,
//         height: parseInt(profileData.height) || 0,
//         weight: parseInt(profileData.weight) || 0,
//       };

//       const res = await axios.post("http://localhost:4000/api/profile/save", payload, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (res.data.success) {
//         setIsEditing(false);
//         setOriginalData(profileData); // Update original data
//         // You might want to show a success message here
//         console.log("Profile updated successfully!");
//       } else {
//         throw new Error(res.data.message || "Failed to update profile");
//       }
//     } catch (error) {
//       console.error("Error saving profile:", error);
//       // You might want to show an error message to the user here
//       alert("Failed to save profile. Please try again.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const handleCancelEdit = () => {
//     setProfileData(originalData); // Restore original data
//     setIsEditing(false);
//   };

//   const handleEditToggle = () => {
//     if (isEditing) {
//       handleSaveProfile();
//     } else {
//       setIsEditing(true);
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-20 text-lg">Loading profile...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-30 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Main Profile Card */}
//         <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
//           {/* Cover Section */}
//           <div className="relative h-48 bg-gradient-to-r from-indigo-900 via-purple-500 to-blue-900">
//             <div className="absolute inset-0 bg-black/20"></div>
//             <div className="absolute top-6 right-6 flex gap-2">
//               <button
//                 onClick={handleEditToggle}
//                 disabled={isSaving}
//                 className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSaving ? (
//                   <>
//                     <Loader size={16} className="animate-spin" />
//                     Saving...
//                   </>
//                 ) : (
//                   <>
//                     {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
//                     {isEditing ? "Save" : "Edit Profile"}
//                   </>
//                 )}
//               </button>
              
//               {isEditing && (
//                 <button
//                   onClick={handleCancelEdit}
//                   disabled={isSaving}
//                   className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-md border border-red-300/20 rounded-full text-white hover:bg-red-500/30 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           </div>

//           <div className="relative px-8 pb-8">
//             {/* Profile Image Section */}
//             <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 -mt-20">
//               <div className="relative group">
//                 <div className="h-40 w-40 rounded-full bg-cover bg-center overflow-hidden border-6 border-white shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
//                   <img
//                     src="https://media.licdn.com/dms/image/v2/D4D03AQEUDGiX7afT_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683642132129?e=1758153600&v=beta&t=wL5FB0jO8xnjKcGyrMaqCN1aymQXEDd1gjaVePi3kuc"
//                     alt="Profile"
//                     className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                 </div>
//                 <button className="absolute -bottom-2 -right-2 h-12 w-12 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 hover:scale-110 flex items-center justify-center">
//                   <Camera size={20} />
//                 </button>
//               </div>

//               {/* Name and Plan Status */}
//               <div className="flex-1">
//                 <div className="flex items-center gap-3 mb-2">
//                   {isEditing ? (
//                     <input
//                       type="text"
//                       value={profileData.name}
//                       onChange={(e) => handleInputChange("name", e.target.value)}
//                       disabled={isSaving}
//                       className="text-3xl font-bold text-gray-800 bg-transparent border-b-2 border-indigo-300 focus:border-indigo-500 outline-none transition-colors disabled:opacity-50"
//                     />
//                   ) : (
//                     <h2 className="text-3xl bg-red-300 w-fit shadow-2xxl px-4 py-2 rounded-full font-bold text-gray-800">
//                       {/* {profileData.name} */}
//                       {user.name}
//                     </h2>
//                   )}
//                   <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-gray-800 text-white rounded-full text-sm font-semibold shadow-lg">
//                     <Crown size={14} />
//                     {profileData.plan}
//                   </div>
//                 </div>

//                 <span className="flex items-center ring-2 bg-gray-700 w-fit shadow-2xxl text-white px-4 py-2 rounded-full gap-2 mb-4">
//                   <Star className="text-yellow-500" size={16} />
//                   <span>Member since {profileData.joiningDate}</span>
//                 </span>
//               </div>
//             </div>

//             {/* Profile Details Grid */}
//             <div className="mt-12 grid md:grid-cols-2 gap-8">
//               {/* Contact Information */}
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
//                   <User className="text-indigo-500" size={24} />
//                   Contact Information
//                 </h3>

//                 <div className="space-y-4">
//                   {[
//                     { icon: Mail, label: "Email", field: "email", type: "email", readonly: true },
//                     { icon: Phone, label: "Phone", field: "phoneNumber", type: "tel", readonly: false },
//                     { icon: MapPin, label: "Address", field: "address", type: "text", readonly: false },
//                   ].map(({ icon: Icon, label, field, type, readonly }) => (
//                     <div
//                       key={field}
//                       className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-indigo-50 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300"
//                     >
//                       <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
//                         <Icon size={18} />
//                       </div>
//                       <div className="flex-1">
//                         <p className="text-sm font-medium text-gray-600">{label}</p>
//                         {isEditing && !readonly ? (
//                           <input
//                             type={type}
//                             value={profileData[field]}
//                             onChange={(e) => handleInputChange(field, e.target.value)}
//                             disabled={isSaving}
//                             className="mt-1 w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors disabled:opacity-50"
//                           />
//                         ) : (
//                           <p className="font-semibold text-gray-800">{profileData[field] || "Not provided"}</p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Account Details */}
//               <div className="space-y-6">
//                 <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
//                   <Calendar className="text-indigo-500" size={24} />
//                   Account Details
//                 </h3>

//                 <div className="space-y-4">
//                   {[
//                     { label: "Age", field: "age", value: profileData.age, color: "from-yellow-400 to-orange-400" },
//                     { label: "Height (cm)", field: "height", value: profileData.height, color: "from-green-400 to-blue-400" },
//                     { label: "Weight (kg)", field: "weight", value: profileData.weight, color: "from-pink-400 to-red-400" },
//                   ].map(({ label, field, value, color }) => (
//                     <div
//                       key={field}
//                       className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <div className="flex items-center justify-between">
//                         <div>
//                           <p className="text-sm font-medium text-gray-600">{label}</p>
//                           {isEditing ? (
//                             <input
//                               type="number"
//                               value={profileData[field]}
//                               onChange={(e) => handleInputChange(field, e.target.value)}
//                               disabled={isSaving}
//                               className="mt-1 bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-bold text-gray-800 transition-colors disabled:opacity-50"
//                             />
//                           ) : (
//                             <p className="text-lg font-bold text-gray-800">{value || "Not set"}</p>
//                           )}
//                         </div>
//                         <div
//                           className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}
//                         >
//                           <Calendar size={20} />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <hr className="mt-8 border-gray-800 w-full h-3 text-black" />

//             <div>
//               <Attendance />
//               <h2 className="text-xl font-bold mt-6 mb-3 flex items-center gap-2">Recent Activity</h2>
//               <ul className="list-disc list-inside text-sm space-y-1">
//                 <li>Profile created - {profileData.joiningDate}</li>
//                 <li>Last updated - {profileData.planExpireOn}</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Additional Actions */}
//         <div className="mt-8 flex flex-wrap gap-4 justify-center">
//           {[
//             { label: "Download Profile", color: "from-blue-500 to-cyan-500" },
//             { label: "Share Profile", color: "from-green-500 to-teal-500" },
//             { label: "Account Settings", color: "from-purple-500 to-pink-500" },
//           ].map(({ label, color }) => (
//             <button
//               key={label}
//               className={`px-6 py-3 bg-gradient-to-r ${color} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;



import React from 'react'

function Profile() {
  return (
    <div className='pt-30'>Profile</div>
  )
}

export default Profile