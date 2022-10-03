import { URL } from "../api/APIS";
import axios from "axios";

const useUserAuth = (name: string, password: string) => {
  const response = axios(URL, {
    method: "POST",
    data: {
      username: name,
      password: password,
    },
  });
  return response;
};

// export default useUserAuth;
