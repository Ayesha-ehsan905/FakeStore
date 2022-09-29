import Navbar from "./component/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import React, { Suspense, useContext, useState } from "react";
import Login from "./component/login/Login";
import Products from "./component/products/Products";
import AuthProvider, { AuthContext } from "./context/AuthContext";
const LoginIndex = React.lazy(() => import("./component/login/Login"));
const ProductIndex = React.lazy(() => import("./component/products/Products"));

function LogoutCheck({ children }: { children: JSX.Element }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (auth.token == null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <LogoutCheck>
                  <Suspense>
                    <ProductIndex />
                  </Suspense>
                </LogoutCheck>
              }
            />
            <Route
              path="/login"
              element={
                <Suspense>
                  <LoginIndex />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
