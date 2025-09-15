import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../contextAPI/contextStore";
import StudentApp from "./student/StudentApp";
import TeacherApp from "./Teacher/TeacherApp";
import AdminApp from "./admin/AdminApp";

function Home() {
  const { setToken, role, setRole } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setRole(null); // also clear role
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  if (role === "student") {
    return (
      <div>
        <StudentApp />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (role === "teacher") {
    return (
      <div>
        <TeacherApp />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div>
        <AdminApp />
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return null;
}

export default Home;
