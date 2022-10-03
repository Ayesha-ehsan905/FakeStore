import axios from "axios";
import useSWR from "swr";
import { ProductURL } from "../api/APIS";

const fetch = (url) => axios.get(url).then((res) => res.data);

const useFetchProducts = () => {
  const { data, error } = useSWR(ProductURL, fetch);
  return { product: data, isLoading: !error && !data, isError: error };
};
const useFetchProduct = (id) => {
  let path = ProductURL + "/" + id;
  const { data, error } = useSWR(path, fetch);
  return { product: data, isLoading: !error && !data, isError: error };
};

const useAddProducts = async (
  title: string,
  descp: string,
  category: string,
  image: string,
  price: number
) => {
  const response = await axios(ProductURL, {
    method: "POST",
    data: {
      title: title,
      description: descp,
      category: category,
      image: image,
      price: price,
    },
  });
  return response;
};

export { useFetchProducts, useFetchProduct, useAddProducts };
