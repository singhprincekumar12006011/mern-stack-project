import React, { useState } from "react";
import { Camera, Calendar, Crown, User, Mail, Phone, MapPin, Edit3, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Attendance from "../profilePages/Attendance.jsx";
import { useContext } from "react";
import { StoreContext } from "../contextStore/contextStore";


function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const {user} = useContext(StoreContext);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    plan: "Premium",
    joiningDate: "01-01-2023",
    planExpireOn: "01-01-2025"
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-30 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        
        
        {/* Main Profile Card */}
        <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          {/* Cover Section */}
          <div className="relative h-48 bg-gradient-to-r from-indigo-900 via-purple-500 to-blue-900">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Edit3 size={16} />
                {isEditing ? 'Save' : 'Edit Profile'}
              </button>
            </div>
          </div>

          <div className="relative px-8 pb-8">
            {/* Profile Image Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 -mt-20">
              <div className="relative group">
                <div className="h-40 w-40 rounded-full bg-cover bg-center overflow-hidden border-6 border-white shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEUDGiX7afT_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683642132129?e=1758153600&v=beta&t=wL5FB0jO8xnjKcGyrMaqCN1aymQXEDd1gjaVePi3kuc"
                    alt="Profile"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <button className="absolute -bottom-2 -right-2 h-12 w-12 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                  <Camera size={20} />
                </button>
              </div>

              {/* Name and Plan Status */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={user.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="text-3xl  font-bold text-gray-800 bg-transparent border-b-2 border-indigo-300 focus:border-indigo-500 outline-none transition-colors"
                    />
                  ) : (
                    <h2 className="text-3xl  bg-red-300 w-fit  shadow-2xxl  px-4 py-2 rounded-full font-bold text-gray-800">{user.name}</h2>
                  )}
                  <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-gray-800 text-white rounded-full text-sm font-semibold shadow-lg">
                    <Crown size={14} />
                    {profileData.plan}
                  </div>
                </div>
                
                <span className="flex items-center ring-2 ring- white bg-gray-700 w-fit  shadow-2xxl text-white px-4 py-2 rounded-full gap-2 text-gray-600 mb-4">
                  <Star className="text-yellow-500" size={16} />
                  <span>Member since {profileData.joiningDate}</span>
                </span>

                {/* Quick Stats */}
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">2.5k</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">98%</div>
                    <div className="text-sm text-gray-500">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">4.9</div>
                    <div className="text-sm text-gray-500">Rating</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Details Grid */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
                  <User className="text-indigo-500" size={24} />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", field: "email", type: "email" },
                    { icon: Phone, label: "Phone", field: "phone", type: "tel" },
                    { icon: MapPin, label: "Location", field: "location", type: "text" }
                  ].map(({ icon: Icon, label, field, type }) => (
                    <div key={field} className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-indigo-50 hover:from-indigo-50 hover:to-purple-50 transition-all duration-300">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-600">{label}</p>
                        {isEditing ? (
                          <input
                            type={type}
                            value={profileData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            className="mt-1 w-full bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-semibold text-gray-800 transition-colors"
                          />
                        ) : (
                          <p className="font-semibold text-gray-800">{profileData[field]}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
                  <Calendar className="text-indigo-500" size={24} />
                  Account Details
                </h3>
                
                <div className="space-y-4">
                  {[
                    { label: "Current Plan", field: "plan", value: profileData.plan, color: "from-yellow-400 to-orange-400" },
                    { label: "Member Since", field: "joiningDate", value: profileData.joiningDate, color: "from-green-400 to-blue-400" },
                    { label: "Plan Expires", field: "planExpireOn", value: profileData.planExpireOn, color: "from-pink-400 to-red-400" }
                  ].map(({ label, field, value, color }) => (
                    <div key={field} className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{label}</p>
                          {isEditing && field !== "plan" ? (
                            <input
                              type="date"
                              value={profileData[field]}
                              onChange={(e) => handleInputChange(field, e.target.value)}
                              className="mt-1 bg-transparent border-b border-gray-300 focus:border-indigo-500 outline-none font-bold text-gray-800 transition-colors"
                            />
                          ) : (
                            <p className="text-lg font-bold text-gray-800">{value}</p>
                          )}
                        </div>
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg`}>
                          <Calendar size={20} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Upgrade Plan Button */}
                <div className="mt-6">
                  <button className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    Upgrade Plan
                  </button>
                </div>
              </div>
            </div>
            <hr className="mt-8 border-gray-800 w-full h-3 text-black" />

            <div>
              <Attendance/>
              <h2 className="text-xl font-bold mt-6 mb-3 flex items-center gap-2">
                 Recent Activity
              </h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Attended Upper Body Strength Workout - Aug 7</li>
                <li>Completed Cardio Session - Aug 5</li>
                <li>Logged Meal Plan - Aug 4</li>
              </ul>
            </div>

          </div>
        </div>
        
        {/* Additional Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {[
            { label: "Download Profile", color: "from-blue-500 to-cyan-500" },
            { label: "Share Profile", color: "from-green-500 to-teal-500" },
            { label: "Account Settings", color: "from-purple-500 to-pink-500" }
          ].map(({ label, color }) => (
            <button
              key={label}
              className={`px-6 py-3 bg-gradient-to-r ${color} text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
            >
              {label}
            </button>
          ))}
        </div>
        
      </div>
      
    </div>
  );
}

export default Profile;