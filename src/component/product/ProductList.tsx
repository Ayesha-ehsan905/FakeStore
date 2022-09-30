import { Link } from "react-router-dom";
import Info from "../../icons/info";
import { FetchProducts } from "../../utlis/Product";

import Spinner from "./Spinner";

const ProductList = () => {
  const { product, isLoading, isError } = FetchProducts();

  if (isError) {
    return (
      <div className="container">
        <div className="row">
          <h1 className="text-center text-danger mt-5">Error!</h1>
          <p className=" h4 text-center text-danger mt-5">Failed to Reload</p>
        </div>
      </div>
    );
  }
  if (isLoading) return <Spinner />;
  else {
    return (
      <>
        {product.map((item) => {
          return (
            <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={item.id}>
              <div className="card text-center mt-5">
                <img
                  className="card-img rounded mx-auto d-block mt-3 "
                  src={item.image}
                  alt="Vans"
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="card-img-overlay d-flex justify-content-end">
                  <Link
                    to={`/productdetails/${item.id}`}
                    className="card-link text-danger like"
                  >
                    <Info />
                  </Link>
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <h6 className="card-subtitle mb-2 ">
                    <span className="font-weight-bold">Category:</span>
                    {item.category}
                  </h6>
                  {/* <p className="card-text">{item.description}</p> */}

                  <div className="buy d-flex justify-content-between align-items-center">
                    <div className="price text-success">
                      <h5 className="mt-4">${item.price}</h5>
                    </div>
                    <a href="#" className="btn btn-danger mt-3">
                      <i className="fas fa-shopping-cart"></i> Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
};
export default ProductList;
