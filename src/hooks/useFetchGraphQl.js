import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

export const useFetchGraphQl = (getData, defaultValue) => {
  const { data, loading, error } = useQuery(getData || defaultValue);
  const [receivedData, setReceivedData] = useState(defaultValue || null);

  useEffect(() => {
    if (error) {
      console.log(`Error:${error}`);
    }
    if (!loading) {
      setReceivedData(data);
    }
  }, [getData, loading, error]);
  return [receivedData, loading, error];
};
