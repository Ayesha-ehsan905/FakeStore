import { useNavigate } from "react-router-dom";
import { AddPorduct } from "../../utlis/Schema";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useAddProducts, useFetchProducts } from "../../utlis/Product";
import { mutate } from "swr";
import { ProductURL } from "../../api/APIS";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const { product } = useFetchProducts();

  const [title, settitle] = useState("");
  const [descp, setdescp] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState(0.0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddPorduct),
  });
  const notify = (title: string) => toast(title);
  const onSubmit = async () => {
    // let Response = "";
    console.log("submitted");
    const response = await useAddProducts(title, descp, category, image, price);
    mutate(ProductURL, [...product, response.data], false);

    if (response.data) {
      notify("Sucessfully Added!");
    }
    // console.log(response.data);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-2 "></div>
        <div className="col-sm-8">
          <h1 className="text-center mb-3">Add Product</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">
                Title
              </label>
              <input
                type="text"
                id="form1Example1"
                className="form-control"
                {...register("Title")}
                onChange={(e) => settitle(e.target.value)}
              />
              {errors.Title && (
                <p className="text-danger">{errors.Title.message}</p>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example2">
                Description
              </label>
              <textarea
                id="form1Example2"
                className="form-control"
                {...register("Description")}
                onChange={(e) => setdescp(e.target.value)}
              />
              {errors.Description && (
                <p className="text-danger">{errors.Description.message}</p>
              )}
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
                {...register("Price")}
                onChange={(e) => setprice(e.currentTarget.value)}
              />
              {errors.Price && (
                <p className="text-danger">{errors.Price.message}</p>
              )}
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">
                Category
              </label>
              <select
                id="form1Example1"
                className="form-control"
                {...register("Category")}
                onChange={(e) => setcategory(e.currentTarget.value)}
              >
                <option value="">Please Select</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Electronics</option>
              </select>
              {errors.Category && (
                <p className="text-danger">{errors.Category.message}</p>
              )}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form1Example1">
                Image URL
              </label>
              <input
                type="text"
                id="form1Example1"
                className="form-control"
                {...register("Image")}
                onChange={(e) => setimage(e.currentTarget.value)}
              />
              {errors.Image && (
                <p className="text-danger">{errors.Image.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn btn-outline-primary btn-lg"
            >
              Add Product
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default AddProduct;
