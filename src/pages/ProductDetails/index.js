import { useFetchGraphQl } from "../../hooks";
import { GET_PRODUCT } from "../../graphQL/query";

export const ProductDetails = () => {
  const [dataCreatingHook] = useFetchGraphQl(
    GET_PRODUCT,
    {},
    { id: "huarache-x-stussy-le" }
  );

  return <div>details</div>;
};
