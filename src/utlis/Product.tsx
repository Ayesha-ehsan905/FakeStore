import axios from "axios";
import useSWR from "swr";
import { ProductURL } from "../api/APIS";

const fetch = (url) => axios.get(url).then((res) => res.data);

const FetchProducts = () => {
  const { data, error } = useSWR(ProductURL, fetch);
  return { product: data, isLoading: !error && !data, isError: error };
};
const FetchProduct = (id) => {
  let path = ProductURL + "/" + id;
  const { data, error } = useSWR(path, fetch);
  return { product: data, isLoading: !error && !data, isError: error };
};
const DeleteProduct = (id) => {
  let path = ProductURL + "/" + id;
  const { data, error } = useSWR(path, fetch);
  return { data, error };
};

export { FetchProducts, FetchProduct, DeleteProduct };
