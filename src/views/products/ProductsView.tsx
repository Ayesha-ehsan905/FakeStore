import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Categories from "../../component/category/Categories";
import ProductList from "../../component/product/ProductList";
import { AuthContext } from "../../context/AuthContext";

export default function Products() {
  const auth = useContext(AuthContext);
  const token = auth?.token;

  return (
    <>
      {token != null ? (
        <div className="container-fluid">
          <div className="row">
            <div className="row mt-5">
              <div className="row text-right ">
                <div className="col-6 col-sm-6 col-md-6 col-lg-10"></div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-2">
                  <button
                    className="btn btn-outline-success  btn-sm"
                    style={{
                      marginTop: "15px",
                      marginBottom: "20px",
                      width: "150px",
                    }}
                  >
                    <Link to="/addproduct" className="nav-link">
                      Add Product
                    </Link>
                  </button>
                </div>
              </div>
              <figure className="text-center">
                <h1>Product List</h1>
              </figure>
            </div>
            <div className="row" style={{ marginLeft: "0px" }}>
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
