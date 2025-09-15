import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoutes";
import Home from "./universityPages/Home";
import Placement from "./universityPages/component/Placement";
import About from "./universityPages/Pages/About";
import ExploreProgram from "./universityPages/component/ExploreProgram";
import Contact from "./universityPages/Pages/Contact";
import Login from "./universityPages/Pages/Login";
import LoginRoutes from "./routes/LoginRoutes";

function App() {
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/placement", element: <Placement /> },
    { path: "/about", element: <About /> },
    { path: "/programs", element: <ExploreProgram /> },
    { path: "/contact", element: <Contact /> },
  ];

  const loginRoutes = [{ path: "/login", element: <Login /> }];

  const protectedRoutes = [
     {path: '/', element: <Home />}
  ];
  return (
    <Routes>
      {/* this is for public routes */}
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PublicRoute>{element}</PublicRoute>}
        />
      ))}
      {loginRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<LoginRoutes>{element} </LoginRoutes>}
        />
      ))}
    </Routes>
  );
}

export default App;
