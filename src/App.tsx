import Navbar from "./component/navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import React, { Suspense, useContext, useState } from "react";

import AuthProvider, { AuthContext } from "./context/AuthContext";
import Login from "./views/login/Login";
import ProductDetail from "./component/product/ProductDetail";
const LoginIndex = React.lazy(() => import("./views/login/Login"));
const ProductIndex = React.lazy(() => import("./views/products/ProductsView"));

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

            <Route
              path="/productdetails/:productId"
              element={<ProductDetail />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
};

export default App;
