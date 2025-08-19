import React from "react";
import { useContext } from "react";
import { StoreContext } from "../contextStore/contextStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const { setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/login");
  };
  return (
    <div className="flex h-16 z-10 bg-[#2C3E50] text-white fixed z-100 top-0 w-full flex-row justify-between px-15 items-center">
      <span className="text-2xl font-bold">BodyFuel</span>
      <span className="flex flex-row gap-8 text-sm cursor-pointer">
        <Link to="/profile">
          <p>Home</p>
        </Link>
        <Link to="/profile2">
          <p>Profile </p>
        </Link>
        <p>Page2</p>
        <p className="cursor-pointer" onClick={handleLogout}>
          Logout
        </p>
      </span>
    </div>
  );
}

export default Header;
