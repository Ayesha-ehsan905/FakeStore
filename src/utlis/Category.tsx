import axios from "axios";
import useSWR from "swr";
import { Category } from "../api/APIS";

const fetch = (url) => axios.get(url).then((res) => res.data);

const FetchCategories = () => {
  const { data, error } = useSWR(Category, fetch);
  return { category: data, isLoading: !error && !data, isError: error };
};
const Fetchcategory = (id) => {
  let path = Category + "/" + id;
  const { data, error } = useSWR(path, fetch);
  return { category: data, isLoading: !error && !data, isError: error };
};

export { FetchCategories, Fetchcategory };
