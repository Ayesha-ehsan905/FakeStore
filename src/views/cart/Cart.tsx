import { useSelector } from "react-redux";
const Cart = () => {
  const carts = useSelector((state) => state.cart.cart);
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
            {carts.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <i className="badge badge-danger">X</i>
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
                    <span className="btn btn-primary" style={{ margin: "2px" }}>
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span className="btn btn-primary" style={{ margin: "2px" }}>
                      +
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Cart;
