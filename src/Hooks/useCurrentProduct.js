import { useParams } from "react-router-dom";
 import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const useCurrentProduct =  async (property) => {
  const { productId } = useParams();

  // now we constract a ref to the product document 
  const productRef = doc(collection(db, "products"), productId);

  try{
    // 1- fetch the product data from the Firebase
    const productDoc = await getDoc(productRef);

    if (productDoc.exists()) {
      // 2- return the product's property requested
      return productDoc.data()[property];
    } else {
      console.log("No such product!")
    }
  }catch (err) {
    console.log("Error getting document:", err);
  }
}

export default useCurrentProduct;
