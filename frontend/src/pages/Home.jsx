// import gym from "../assets/gym.jpg";
// import Details from "./Details";
// import Contents from "./Contents";

// function Home() {
//   return (
//     <>
//       <div
//         className="min-h-screen bg-cover bg-center  md:mt-[-105px]  pt-[90px] sm:mt-[-202px] z-[-1] relative"
//         style={{ backgroundImage: `url(${gym})` }}
//       >
// <div className="absolute hidden md:block bottom-10 right-30 w-60 h-80 z-10 backdrop-blur-md bg-white/5 p-8 rounded-lg shadow-lg">
//   <h1>
//     <span className="text-yellow-400 text-4xl font-extrabold tracking-widest uppercase">
//       Body
//     </span>
//     <span
//       className="text-4xl font-extrabold text-white"
//       style={{
//         WebkitTextStroke: "0.05px white",
//         color: "white",
//       }}
//     >
//       Fuel
//     </span>
//   </h1>
// </div>

// <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-white p-4 rounded-lg shadow-lg">
//   <h2 className="text-2xl font-bold">Welcome to Body Fuel</h2>
//   <p className="text-sm mt-2">
//     This box is only visible on small screens. Resize the window to
//     test!
//   </p>
// </div>
// </div>
// <div className="bg-black/90">
// <Contents />
// <Details />
// </div>
//     </>
//   );
// }

// export default Home;

import React from "react";
import gym from "../assets/gym.jpg";
import Details from "./Details";
import Contents from "./Contents";

function Home() {
  return (
    <>
      {/* Outer container set to relative so absolute children work properly */}
      <div className="relative  min-h-screen w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-1]"
          style={{ backgroundImage: `url(${gym})` }}
        />

        {/* Large screen floating box */}
        <div className="hidden md:block absolute bottom-10 right-[30px] w-60 h-80 z-1 backdrop-blur-md bg-white/5 p-8 rounded-lg shadow-lg">
          <h1>
            <span className="text-yellow-400 text-4xl font-extrabold tracking-widest uppercase">
              Body
            </span>
            <span
              className="text-4xl font-extrabold text-white"
              style={{
                WebkitTextStroke: "0.05px white",
                color: "white",
              }}
            >
              Fuel
            </span>
          </h1>
        </div>

        {/* Small screen centered box */}
        <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/90 text-white p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold">Welcome to Body Fuel</h2>
          <p className="text-sm mt-2">
            This box is only visible on small screens. Resize the window to test!
          </p>
        </div>
      </div>

      {/* Main content below hero section */}
      <div>
        <Contents />
        <Details />
      </div>
    </>
  );
}

export default Home;
