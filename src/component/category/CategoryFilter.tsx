import { Link, useParams } from "react-router-dom";
import Info from "../../icons/info";
import { useFetchcategory } from "../../utlis/Category";
import Spinner from "../product/Spinner";
import CatProductList from "./CatProductList";

const CategoryFilter = () => {
  const params = useParams();

  const { category, isLoading, isError } = useFetchcategory(params.category);

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
    <div className="container">
      <div className="row">
        <div className="row mt-5">
          <figure className="text-center">
            <h1>Category Base Product</h1>
          </figure>
        </div>
        <CatProductList Category={category} />
        <div className="row text-right ">
          <div className="col-6 col-sm-6 col-md-6 col-lg-8"></div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-4">
            <button
              className="btn btn-outline-success  btn-sm"
              style={{
                marginTop: "15px",
                marginBottom: "20px",
                width: "150px",
              }}
            >
              <Link to="/" className="nav-link">
                Back Home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
