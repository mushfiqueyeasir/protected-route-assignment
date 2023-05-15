import { useEffect, useState } from "react";
// import { getToken } from "../utility/token";

const useFetch = ({ api, parameter }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchData, setRefetchData] = useState(false);

  let uri;
  if (parameter) {
    uri = `${process.env.REACT_APP_serverLocation}/${api}/${parameter}`;
  } else {
    uri = `${process.env.REACT_APP_serverLocation}/${api}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(uri, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: "Bearer " + getToken(),
          },
        });
        const responseData = await response.json();
        if (parameter) {
          setData(responseData.data[0]);
        } else {
          setData(responseData.data);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (parameter === "none") {
      setLoading(false);
    } else {
      fetchData();
    }
  }, [uri, refetchData]);

  const refetch = () => setRefetchData((prevState) => !prevState);

  return [data, loading, refetch];
};

export default useFetch;
