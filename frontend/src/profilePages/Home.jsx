// import { FaDumbbell, FaAppleAlt, FaChartLine } from "react-icons/fa";
// import { Link } from "react-router-dom";


// const Profile = () => {
//   return (
//     <div className="text-white bg-black min-h-screen pt-20 pb-20">
//       <div className="w-10/10 fixed h-px bg-gradient-to-r from-transparent via-white to-transparent "></div>

//       <div className="flex flex-row h-screen mb-10">
//         {/* Sidebar */}
//         <div className="fixed top-0  left-0 mt-20 h-150 w-64 bg-gradient-to-b from-gray-900 to-black shadow-2xl border-r border-yellow-400 p-6">
//           <h1 className="text-3xl font-extrabold text-yellow-400 mb-8 text-center tracking-wider">
//             Profile
//           </h1>
//           <ul className="space-y-4 cursor-pointer">
//             <li className="text-white hover:text-yellow-400">Dashboard</li>
//             <li className="text-white hover:text-yellow-400">
//               <Link to="/workout">
//                 Workout Plan
//               </Link>
//             </li>
//             <li className="text-white hover:text-yellow-400">Diet Plan</li>
//             <li className="text-white hover:text-yellow-400">Progress</li>
//             <li className="text-white hover:text-yellow-400">Settings</li>
//           </ul>
//         </div>

//         {/* Main content */}

//         <div className="ml-72 p-10 m-5 flex flex-col bg-gradient-to-b from-gray-900 to-black text-black w-full  rounded-xl mt-20">
//           <div className="flex items-center justify-center flex-col">
//             <div className="text-black w-40 h-40 rounded-full flex items-center justify-center bg-white border-4 border-gray-800 z-[1]">
//               Profile
//             </div>
//             <div className="bg-white flex flex-row p-4 mt-[-60px] w-2/3 rounded-t-[50px] pt-20">
//               <div className="flex flex-row px-4 font-semibold text-lg gap-4 justify-">
//                 <span>
//                   <p>Name</p>
//                   <p>Plan</p>
//                   <p>Joining Data</p>
//                   <p>Plan Expire On</p>
//                 </span>
//                 <span>
//                   <p>:</p>
//                   <p>:</p>
//                   <p>:</p>
//                   <p>:</p>
//                 </span>
//                 <span className="flex flex-col font-light">
//                   <p>John Doe</p>
//                   <p>Basic</p>
//                   <p>01-01-2023</p>
//                   <p>01-01-2024</p>
//                 </span>
//               </div>
//               <hr className="rotate-90 0 mt-15 w-20 h-1 rounded-2xl bg-gray-800 bg-gray-800 " />

//               <div className="flex flex-row px-4 font-semibold text-lg gap-4">
//                 {/* Labels */}
//                 <span>
//                   <p>Weight</p>
//                   <p>Body Mass Index</p>
//                   <p>Height</p>
//                   <p>Body Fat %</p>
//                 </span>

//                 {/* Colons */}
//                 <span>
//                   <p>:</p>
//                   <p>:</p>
//                   <p>:</p>
//                   <p>:</p>
//                 </span>

//                 {/* Values */}
//                 <span className="flex flex-col font-light">
//                   <p>72 kg</p>
//                   <p>23.5</p>
//                   <p>175 cm</p>
//                   <p>16%</p>
//                 </span>
//               </div>
//             </div>
//              <div className="bg-gray-800 w-2/3 p-6 rounded-b-[20px] shadow-lg text-white">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <FaChartLine /> Progress Overview
//               </h2>

//               {/* Progress Bars */}
//               <div className="mb-4">
//                 <p>Weight Loss Goal (10 kg)</p>
//                 <div className="w-full bg-gray-700 rounded-full h-3">
//                   <div className="bg-yellow-400 h-3 rounded-full w-3/5"></div>
//                 </div>
//               </div>
//               <div className="mb-4">
//                 <p>Muscle Gain Goal (5 kg)</p>
//                 <div className="w-full bg-gray-700 rounded-full h-3">
//                   <div className="bg-green-400 h-3 rounded-full w-2/5"></div>
//                 </div>
//               </div>

//               {/* Activity */}
//               <h2 className="text-xl font-bold mt-6 mb-3 flex items-center gap-2">
//                 <FaDumbbell /> Recent Activity
//               </h2>
//               <ul className="list-disc list-inside text-sm space-y-1">
//                 <li>Attended Upper Body Strength Workout - Aug 7</li>
//                 <li>Completed Cardio Session - Aug 5</li>
//                 <li>Logged Meal Plan - Aug 4</li>
//               </ul>
//             </div>
          
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React from "react";
import { FaChartLine, FaDumbbell } from "react-icons/fa";

function Profile() {
  return (
    <div className="relative pt-30 flex justify-center items-center flex-col bg-gradient-to-b from-gray-900 to-black text-black w-full">
      <div className="flex items-center justify-center flex-col">
        {/* Profile Image Placeholder */}
        <div className="text-black w-40 h-40 rounded-full flex items-center justify-center bg-white border-4 border-gray-800 z-[1]">
          Profile
        </div>

        {/* Top Info Card */}
        <div className="bg-white flex flex-row p-4 -mt-16 rounded-t-[50px] pt-20">
          {/* Left Info */}
          <div className="flex flex-row px-4 font-semibold text-lg gap-4">
            <span>
              <p>Name</p>
              <p>Plan</p>
              <p>Joining Date</p>
              <p>Plan Expire On</p>
            </span>
            <span>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </span>
            <span className="flex flex-col font-light">
              <p>John Doe</p>
              <p>Basic</p>
              <p>01-01-2023</p>
              <p>01-01-2024</p>
            </span>
          </div>

          {/* Divider */}
          <hr className="rotate-90 mt-10 w-20 h-1 rounded-2xl bg-gray-800" />

          {/* Right Info */}
          <div className="flex flex-row px-4 font-semibold text-lg gap-4">
            <span>
              <p>Weight</p>
              <p>Body Mass Index</p>
              <p>Height</p>
              <p>Body Fat %</p>
            </span>
            <span>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </span>
            <span className="flex flex-col font-light">
              <p>72 kg</p>
              <p>23.5</p>
              <p>175 cm</p>
              <p>16%</p>
            </span>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-gray-800 w-2/3 p-6 rounded-b-[20px] shadow-lg text-white">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FaChartLine /> Progress Overview
          </h2>

          {/* Progress Bars */}
          <div className="mb-4">
            <p>Weight Loss Goal (10 kg)</p>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-yellow-400 h-3 rounded-full w-3/5"></div>
            </div>
          </div>
          <div className="mb-4">
            <p>Muscle Gain Goal (5 kg)</p>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-green-400 h-3 rounded-full w-2/5"></div>
            </div>
          </div>

          {/* Recent Activity */}
          <h2 className="text-xl font-bold mt-6 mb-3 flex items-center gap-2">
            <FaDumbbell /> Recent Activity
          </h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Attended Upper Body Strength Workout - Aug 7</li>
            <li>Completed Cardio Session - Aug 5</li>
            <li>Logged Meal Plan - Aug 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;

