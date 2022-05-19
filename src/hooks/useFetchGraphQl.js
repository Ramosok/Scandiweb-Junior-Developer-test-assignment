import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

export const useFetchGraphQl = (getData, defaultValue, defaultVariables) => {
  const { data, loading, error } = useQuery(getData, {
    variables: defaultVariables,
  });

  const [receivedData, setReceivedData] = useState(defaultValue || null);

  useEffect(() => {
    if (error) {
      console.log(`Error:${error}`);
    }
    if (!loading) {
      setReceivedData(data);
    }
  }, [getData, loading, error, data]);

  return [receivedData, loading, error];
};
