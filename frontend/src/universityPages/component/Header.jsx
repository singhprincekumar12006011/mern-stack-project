import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full sticky px-5 md:px-0 lg:px-0 top-0 z-50 bg-white shadow-xl transition-all duration-300 ${
        isScrolled ? "pb-1 " : "py-4 "
      }`}
    >
      <div className="w-full lg:w-10/12 m-auto">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <a href="/">
            <div className="text-2xl pt-1 cursor-pointer">
              <div className="font-bold text-4xl">
                <span className="text-red-500">Super</span>lative
              </div>
              <div className="text-sm font-semibold">
                Same Degree, Now Online
              </div>
              <div className="w-47">
                <hr className="mb-[1px]" />
                <div className="text-[10px] font-semibold text-right bg-red-500 p-1 text-white">
                  <span className="font-bold border border-t-white px-2">
                    Affliated to BSBE
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="md:flex text-[18px] gap-4 items-center hidden">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/placement">Placements</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center gap-4 py-6 text-lg font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/programs" onClick={() => setIsOpen(false)}>
              Programs
            </Link>
            <Link to="/placement" onClick={() => setIsOpen(false)}>
              Placements
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
