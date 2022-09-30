import { useContext } from "react";
import { Navigate } from "react-router-dom";
import ProductList from "../../component/product/ProductList";
import { AuthContext } from "../../context/AuthContext";

export default function Products() {
  const auth = useContext(AuthContext);
  const token = auth.token;

  return (
    <>
      {token != null ? (
        <div className="container">
          <div className="row">
            <div className="row mt-5">
              <figure className="text-center">
                <h1>Product List</h1>
              </figure>
            </div>

            {/* <div className="container"> */}
            {/* <div className="row"> */}
            <ProductList />
          </div>
        </div>
      ) : (
        <>
          <Navigate to="/login" replace />
        </>
      )}
    </>
  );
}
