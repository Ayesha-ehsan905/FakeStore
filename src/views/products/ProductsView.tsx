import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Categories from "../../component/category/Categories";
import ProductList from "../../component/product/ProductList";
import { AuthContext } from "../../context/AuthContext";

export default function Products() {
  const auth = useContext(AuthContext);
  const token = auth.token;

  return (
    <>
      {token != null ? (
        <div className="container-fluid">
          <div className="row">
            <div className="row mt-5">
              <figure className="text-center">
                <h1>Product List</h1>
              </figure>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-2">
                <div className="row ">
                  <Categories />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-10">
                <div className="row">
                  <ProductList />
                </div>
              </div>
            </div>
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
