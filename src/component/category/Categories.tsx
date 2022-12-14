import { Link } from "react-router-dom";
import { useFetchCategories } from "../../utlis/Category";
import Spinner from "../product/Spinner";
import "./style.css";

const Categories = () => {
  const { category, isLoading, isError } = useFetchCategories();

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
        <div className="card mt-5" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {category.map((item, key) => {
              return (
                <div key={key}>
                  <li
                    className="list-group-item text-lg-start text-capitalize font-italic font-weight-bold hover"
                    style={{ fontSize: "20px" }}
                    key={key}
                  >
                    <Link className="nav-link" to={`/category/${item}`}>
                      {item}
                    </Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
};
export default Categories;
