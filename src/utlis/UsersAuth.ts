import URL from "../api/APIS";
import axios from "axios";

const UserAuth = (name: string, password: string) => {
  const response = axios(URL, {
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
