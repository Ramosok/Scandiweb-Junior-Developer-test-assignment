import { useFetchGraphQl } from "../../hooks";
import { GET_PRODUCT } from "../../graphQL/query";

export const ProductDetails = () => {
  const [data] = useFetchGraphQl(GET_PRODUCT);

  console.log(data);
  return <div>details</div>;
};
