import { useState, useEffect } from "react";
import axios from "axios";
// /${endpoint}
// endpoint, query
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    // params: {
    //   query: "Python developer in Texas, USA",
    //   page: "1",
    //   num_pages: "1",
    // },
    headers: {
      "X-RapidAPI-Key": "73d3053e45msh1a97e1bcbcab791p149335jsnb291d6e0f709",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refecth = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refecth };
};

export default useFetch;
