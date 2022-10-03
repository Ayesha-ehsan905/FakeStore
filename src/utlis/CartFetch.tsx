import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import { CartURL } from "../api/APIS";
const fetch = (url) => axios.get(url).then((res) => res.data);

const useFetchCart = () => {
  const { data, error } = useSWR(CartURL, fetch);
  return { listCart: data, isLoading: !error && !data, isError: error };
};

export { useFetchCart };
