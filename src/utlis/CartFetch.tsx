import axios from "axios";
import useSWR from "swr";
import { CartURL } from "../api/APIS";
const fetch = (url) => axios.get(url).then((res) => res.data);

const FetchCart = () => {
  const { data, error } = useSWR(CartURL, fetch);
  return { ListCart: data, isLoading: !error && !data, isError: error };
};

export { FetchCart };
