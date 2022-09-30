const AddProduct = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-2 "></div>
        <div className="col-sm-8">
          <h1 className="text-center mb-3">Add Product</h1>
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">
                Title
              </label>
              <input type="text" id="form1Example1" className="form-control" />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example2">
                Description
              </label>
              <textarea id="form1Example2" className="form-control" />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">
                Price
              </label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                // step="0.01"
                id="form1Example1"
                className="form-control"
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">
                Category
              </label>
              <select id="form1Example1" className="form-control">
                <option value="">Please Select</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Electronics</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn btn-outline-primary btn-lg"
            >
              Add Product
            </button>
          </form>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default AddProduct;
