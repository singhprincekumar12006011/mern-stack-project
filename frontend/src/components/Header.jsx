import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiMenuFold2Fill } from "react-icons/ri";
import { StoreContext } from "../contextStore/contextStore";
import { useLocation } from "react-router-dom";

function Header() {
  const { token, setToken } = useContext(StoreContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = ["Home", "Programs", "Contact"];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    navigate('/login');
  };

  const handleDropdownEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Delay to hide dropdown
    setDropdownTimeout(timeout);
  };


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className={ location.pathname === "/" ? "" : "bg-black " && location.pathname === "/profile" ? "fixed bg-black top-0 left-0 right-0 z-50" : "" }>
    <header className={`fixed  top-0 left-0 right-0 z-2 ${scrolled ? "backdrop-blur-md bg-red-900 " : ""}`}>
      <div className="container  mx-auto px-6 flex flex-col pt-4 md:flex-row justify-between items-center  ">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-widest uppercase mb-4 md:mb-0 pb-6 p-2">
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

        {/* Desktop Nav */}
        <nav className={"hidden md:flex gap-4 flex-wrap justify-center"}>
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="px-7 py-2 backdrop-blur-md bg-white/10 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"
            >
              {item}
            </Link>
          ))}

          {/* Profile Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="px-7 py-2 backdrop-blur-md bg-white/10 text-white rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md">
              Profile
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-50">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-yellow-200 transition"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-4 py-2 hover:bg-yellow-200 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <span
        className="md:hidden absolute top-6 right-3 text-3xl text-white cursor-pointer z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RiMenuFold2Fill />
      </span>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-6 w-48 bg-white rounded-lg shadow-lg p-4 z-40 backdrop-blur-md bg-white/10">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="block text-white text-sm font-semibold py-2 px-4 hover:bg-yellow-400 hover:text-black rounded transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Logout for mobile */}
          <span
            onClick={() => {
              setIsMenuOpen(false);
              handleLogout();
            }}
            className="block text-white text-sm font-semibold py-2 px-4 hover:bg-yellow-400 hover:text-black rounded transition duration-300"
          >
            Logout
          </span>
        </div>
      )}
    </header>
  );
}

export default Header;
