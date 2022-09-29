import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Products() {
  const auth = useContext(AuthContext);
  const token = auth.token;
  return (
    <>
      {token != null ? (
        <div>Products Page View</div>
      ) : (
        <>
          <Navigate to="/login" replace />
        </>
      )}
    </>
  );
}
