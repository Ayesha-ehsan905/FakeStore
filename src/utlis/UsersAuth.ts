import URL from "../api/APIS";
import axios from "axios";

const UserAuth = (name: string, password: string) => {
  const response = axios("https://fakestoreapi.com/auth/login", {
    method: "POST",
    data: {
      username: name,
      password: password,
    },
  });
  console.log("from user", response);
  return response;
};

export default UserAuth;
