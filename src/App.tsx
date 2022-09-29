import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Login from "./component/login/Login";
import Products from "./component/products/Products";

// const LoginIndex = React.lazy(() => import("./component/login/Login"));

const App: React.FC = () => {
  const STORAGE_KEY = "STORAGE_KEY:token";
  const [token, settoken] = useState(localStorage.getItem("usertoken") ?? null);
  return (
    <Router>
      <Navbar />
      <Routes>
        {token ? (
          <Route path="/product" element={<Products />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
