import "./Style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "../../utlis/Schema";
import { useContext, useState } from "react";
import useUserAuth from "../../utlis/UsersAuth";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const auth = useContext(AuthContext);
  const token = auth?.token;
  const [userName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = () => {
    useUserAuth(userName, Password)
      .then((Response) => {
        const token = Response.data.token;
        signIn(token, () => {
          let path = "/";
          navigate(path, { replace: true });
        });
      })
      .then((json) => console.log(json));
  };
  return (
    <>
      {token == null ? (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-2 "></div>
            <div className="col-sm-8">
              <h1 className="text-center mb-3">Login Form</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example1">
                    UserName
                  </label>
                  <input
                    type="text"
                    id="form1Example1"
                    className="form-control"
                    {...register("UserName")}
                    onChange={(e) => setUserName(e.target.value)}
                  />

                  {errors.UserName && (
                    <p className="Error">{errors.UserName.message}</p>
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form1Example2"
                    className="form-control"
                    {...register("Password")}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {errors.Password && (
                    <p className="Error">{errors.Password.message}</p>
                  )}
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
      ) : (
        <>
          <Navigate to="/" replace />
        </>
      )}
    </>
  );
};

export default Login;
