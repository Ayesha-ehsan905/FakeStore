import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/ProductSlice";

const Cart = () => {
  const carts = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const TotalPrice = (price, qty) => {
    return Number(price * qty).toLocaleString("en-US");
  };

  const getTotalQuantity = () => {
    let total = 0;
    carts.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {carts?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <i
                      className="badge badge-light"
                      style={{ color: "black" }}
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      X
                    </i>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={item.image}
                      style={{ width: "100px", height: "80px" }}
                    />
                  </td>
                  <td>{item.price} $</td>
                  <td>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => dispatch(incrementQuantity(item.id))}
                    >
                      +
                    </span>
                  </td>
                  <td>{TotalPrice(item.price, item.quantity)} $</td>
                </tr>
              );
            })}

            <tr>
              <td colSpan="5" className="h3 ">
                Total Carts
              </td>
              <td className="h5">{getTotalQuantity() || 0} Items</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
