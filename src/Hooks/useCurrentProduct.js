import { useParams } from "react-router-dom";
import { productContent } from "../Data/TestData";

const useCurrentProduct = (property) => {
  const { productId } = useParams();
  return productContent[+productId][property];
};

export default useCurrentProduct;
