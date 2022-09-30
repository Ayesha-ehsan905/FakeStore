import axios from "axios";
import useSWR from "swr";
import { ProductURL } from "../api/APIS";

const fetch = (url) => axios.get(url).then((res) => res.data);

const FetchProduct = () => {
  const { data, error } = useSWR(ProductURL, fetch);
  return { product: data, isLoading: !error && !data, isError: error };
};

export { FetchProduct };
