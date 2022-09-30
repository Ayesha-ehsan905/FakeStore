import { createContext, useState } from "react";

import { FakeSync } from "../helper/FakeSync";
import { IAuthContext } from "./IAuthContext";

export const AuthContext = createContext<IAuthContext>(null!);

const STORAGE_KEY = "STORAGE_KEY:token";

const AuthProvider = (props) => {
  const [token, settoken] = useState(() => {
    return localStorage.getItem(STORAGE_KEY);
  });

  const signIn = (token: any, callBack: VoidFunction) => {
    return FakeSync.signin(() => {
      localStorage.setItem(STORAGE_KEY, token);
      settoken(token);
      callBack();
    });
  };
  const signOut = (callBack: VoidFunction) => {
    return FakeSync.signin(() => {
      localStorage.clear();
      settoken(null);
    });
  };

  return (
    <AuthContext.Provider value={{ token: token, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
