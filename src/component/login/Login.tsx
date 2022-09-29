import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-2 "></div>
          <div className="col-sm-8">
            <h1 className="text-center mb-3">Login Form</h1>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form1Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form1Example2">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="btn btn btn-outline-primary btn-lg"
              >
                Sign in
              </button>
            </form>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
