import axios from "axios";
import useSWR from "swr";
import { CategorySpecificURL, CategoryURL } from "../api/APIS";

const fetch = (url) => axios.get(url).then((res) => res.data);

const useFetchCategories = () => {
  const { data, error } = useSWR(CategoryURL, fetch);
  return { category: data, isLoading: !error && !data, isError: error };
};
const useFetchcategory = (id) => {
  let path = CategorySpecificURL + "/" + id;
  const { data, error } = useSWR(path, fetch);
  return { category: data, isLoading: !error && !data, isError: error };
};

export { useFetchCategories, useFetchcategory };
