import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./component/login/Login";

// const LoginIndex = React.lazy(() => import("./component/login/Login"));

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      {/* <Login /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
