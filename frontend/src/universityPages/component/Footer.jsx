import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-2 mt-10">
      <div className="w-full lg:w-10/12 m-auto py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}

        <div>
          <hr className="mb-3" />
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">
              <span className="text-red-500">Super</span>lative
            </h2>
            <p className=" text-sm text-white">
              Empowering Minds, Shaping Futures
            </p>
            <p className="mt-2 text-gray-400 text-sm">
              Affiliated to BSBE University
            </p>
          </div>
          <hr className="mt-3" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-red-500">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm">
            📍 123 University Road, Patna, Bihar, India
          </p>
          <p className="text-gray-300 text-sm mt-2">📞 +91 98765 43210</p>
          <p className="text-gray-300 text-sm">📧 info@superlative.edu</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Superlative University. All Rights
        Reserved.
      </div>
    </footer>
  );
}

export default Footer;
