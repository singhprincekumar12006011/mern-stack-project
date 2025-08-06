import React from "react";
import { Link } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import { useState } from "react";


function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Programs", "Contact", "Profile"];
  return (
    <header >
      <div className="container mx-auto px-6 flex flex-col pt-4 md:flex-row justify-between items-center bg-black md:bg-transparent">

        {/* Logo / Brand Name */}
        <h1 className="text-4xl font-extrabold tracking-widest uppercase mb-4 md:mb-0 p-2">
          <span className="text-yellow-400">Body</span>
          <span
            className="text-4xl font-extrabold text-black"
            style={{
              WebkitTextStroke: "0.05px white",
              color: "black",
            }}
          >
            Fuel
          </span>
          <span className="text-black  text-[15px] bg-white px-3 rounded-full ">
            gym
          </span>
        </h1>

        {/* Navigation - Hidden on small screens */}
        {/* <nav className="hidden md:flex gap-4 flex-wrap justify-center">
          {["Home", "Programs",  "Contact" , "Profile",].map((item) => (
            <a
              key={item}
              // href={`/${item.toLowerCase()}`}
              Link={`/${item.toLowerCase()}`}
              className="px-7 py-2 backdrop-blur-md bg-white/10 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
            >
              {item}
            </a>
          ))}
        </nav> */}
        <nav className="hidden md:flex gap-4 flex-wrap justify-center">
          {["Home", "Programs", "Contact", "Profile"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="px-7 py-2 backdrop-blur-md bg-white/10 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
            >
              {item}
            </Link>
          ))}
        </nav>

        
      </div>
      {/* <span className="md:hidden absolute top-8 ml-3 right-3 text-right text-3xl text-white cursor-pointer">
          <RiMenuFold2Fill />
      </span> */}
       <span
          className="md:hidden absolute top-6 right-3 text-3xl text-white cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RiMenuFold2Fill />
        </span>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-6 w-48 bg-white rounded-lg shadow-lg p-4 z-40 backdrop-blur-md bg-white/10">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="block text-white text-sm font-semibold py-2 px-4 hover:bg-yellow-400 hover:text-black rounded transition duration-300"
                onClick={() => setIsMenuOpen(false)} // Close on click
              >
                {item}
              </Link>
            ))}
          </div>
        )}
    </header>
  );
}

export default Header;

// import React from "react";

// function Header() {
//   return (
//     <header className="pt-4">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//         {/* Logo / Brand Name */}
//         <h1 className="text-4xl font-extrabold tracking-widest uppercase mb-4 md:mb-0  p-2">
//           <span className="text-yellow-400">Gym</span>
//           <span
//             className="text-4xl font-extrabold text-black "
//             style={{
//               WebkitTextStroke: "0.05px white",
//               color: "black",
//             }}
//           >
//             Zone
//           </span>
//         </h1>

//         {/* Navigation */}
//         <nav className="flex gap-4 flex-wrap justify-center">
//           {["Home", "Programs", "Trainers", "Contact"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="px-5 py-2 bg-white text-black rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
//             >
//               {item}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

// in this menu items should not be visiable at small screen
