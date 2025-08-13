// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./auth/Login";
// import Signup from "./auth/SignUp";
// import PrivateRoute from "./auth/PrivateRoute";
// import PublicRoute from "./auth/PublicRoute";

// const App = () => {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/login"
//         element={
//           <PublicRoute>
//             <Login />
//           </PublicRoute>
//         }
//       />
//       <Route
//         path="/signup"
//         element={
//           <PublicRoute>
//             <Signup />
//           </PublicRoute>
//         }
//       />

//       <Route path="*" element={<Navigate to="/" />} />
//     </Routes>
//   );
// };

// export default App;

import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/SignUp";
import Home from "./pages/Home";
import PrivateRoute from "./auth/PrivateRoute";
import PublicRoute from "./auth/PublicRoute";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import Programs from "./pages/Programs";
import Profile from "./pages/Profile";
import DefaultRoutes from "./auth/DefaultRoutes";
import Workout from "./profilePages/Workout";
import Diet from "./profilePages/Diet";

function App() {
  const privateRoutes = [
    { path: "/profile", element: <Profile /> },
    { path: '/workout', element: <Workout /> },
    { path: '/diet', element: <Diet /> },
  ];

  const publicRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
  ];

  const defaultRoutes = [
    {
      path: "/",
      element: (
        <>
          {/* <Header /> */}
          <Home />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          {/* <Header /> */}
          <ContactUs />
        </>
      ),
    },
    {
      path: "/programs",
      element: (
        <>
          {/* <Header /> */}
          <Programs />
        </>
      ),
    },
  ];

  return (
    <Routes>
      {defaultRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<DefaultRoutes>{element}</DefaultRoutes>}
        />
      ))}

      {privateRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PrivateRoute>{element}</PrivateRoute>}
        />
      ))}

      {/* ✅ Public Routes */}
      {publicRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<PublicRoute>{element}</PublicRoute>}
        />
      ))}
    </Routes>
  );
}

export default App;
