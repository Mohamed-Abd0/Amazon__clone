import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const updateProductQty = async (productId, qty) => {
  try {
    const productDocRef = doc(db, 'products', productId);
    const productDocSnapshot = await getDoc(productDocRef);
    const productData = productDocSnapshot.data();

    const updatedProductData = {
      ...productData,
      qty: qty
    };

    await updateDoc(productDocRef, updatedProductData);
    console.log(updatedProductData);

    // update the quantity value in local storage
    const cartData = JSON.parse(localStorage.getItem('cartItems'));
    const productIdx = cartData.findIndex((item) => item.id === productId);
    cartData[productIdx].qty = qty;
    localStorage.setItem('cartItems', JSON.stringify(cartData));


  } catch (error) {
    console.error("Error updating product qty: ", error);
  }
};

export default updateProductQty;


