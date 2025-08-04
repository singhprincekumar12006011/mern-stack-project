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

import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/SignUp';
import Home from './pages/Home';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';

function App() {
  const privateRoutes = [
    { path: '/', element: <Home /> }
  ];

  const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> }
  ];

  return (
    <Routes>
      {/* ✅ Private Routes */}
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
