import { Link, useParams } from "react-router-dom";
import { FetchProduct } from "../../utlis/Product";
import Spinner from "./Spinner";

const ProductDetail = () => {
  const params = useParams();
  const { product, isLoading, isError } = FetchProduct(params.productId);
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
  return (
    <>
      <div
        className="card mb-3"
        style={{
          maxWidth: "900px",
          margin: "10% auto",
          backgroundColor: "#F5FFFA",
        }}
      >
        <div className="row no-gutters">
          <div className="row mt-5">
            <figure className="text-center">
              <h1>Product Detail</h1>
            </figure>
          </div>
          <div className="col-md-4">
            <img
              src={product.image}
              className="card-img"
              alt="Guide to Web Design"
              style={{ padding: "5px", borderRadius: "8px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">
                <strong>$: {product.price}</strong>
              </h4>
              <button
                type="button"
                className="btn btn-outline-success"
                style={{ marginTop: "15px", marginBottom: "20px" }}
              >
                Buy Now
              </button>
              <div>
                <h4 style={{ fontWeight: "400" }}>
                  <span className="fs-4 fw-bold"> Category:</span>
                  {product.category}
                </h4>
                <h4 style={{ fontWeight: "400" }}>Product Description</h4>
                <hr></hr>
                <p className="card-text" style={{ padding: "5px" }}>
                  {product.description}
                </p>
                <button
                  className="btn btn-outline-success "
                  style={{ marginTop: "15px", marginBottom: "20px" }}
                >
                  <Link to="/" className="nav-link">
                    Back Home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
