import React from "react";
import Spinner from "../../component/product/Spinner";
import { FetchCart } from "../../utlis/CartFetch";

const Cart = () => {
  const { ListCart, isLoading, isError } = FetchCart();

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
  else
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Product ID</th>

                <th>Product Quantity</th>
              </tr>
            </thead>
            <tbody>
              {ListCart.map((item, key) => {
                return (
                  <>
                    {item.products.map((items, key) => {
                      return (
                        <tr key={key}>
                          <td>
                            <i className="badge badge-danger">X</i>
                          </td>

                          <td>{items.productId} </td>
                          <td>{items.quantity} </td>
                          <td>
                            <span
                              className="btn btn-primary"
                              style={{ margin: "2px" }}
                            >
                              -
                            </span>
                            <span className="btn btn-info">
                              {items.quantity}
                            </span>
                            <span
                              className="btn btn-primary"
                              style={{ margin: "2px" }}
                            >
                              +
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                );
              })}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};
export default Cart;
