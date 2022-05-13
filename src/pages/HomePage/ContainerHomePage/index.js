import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { ComponentHomePage } from "../ComponentHomePage";

import { GET_DATA } from "../../../graphQL/query";

export const ContainerHomePage = () => {
  const { data, loading, error } = useQuery(GET_DATA);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setDataList(data);
    }
  }, [data]);

  return <ComponentHomePage dataList={dataList} />;
};
