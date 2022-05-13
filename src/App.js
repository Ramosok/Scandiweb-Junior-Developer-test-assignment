import "./App.css";
import "./app.scss";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "./graphQL/query";

export const App = () => {
  const { data, loading, error } = useQuery(GET_DATA);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(data);
  }, [data]);
  console.log(loading);
  console.log(dataList?.categories);
  return (
    <div className="App">
      <h1>Hello World test</h1>
      {/*{dataList?.map((item) => (*/}
      {/*  <div>{item}</div>*/}
      {/*))}*/}
    </div>
  );
};
