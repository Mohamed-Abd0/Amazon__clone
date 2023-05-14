
import { db , auth} from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, setDoc , updateDoc ,  getDocs , query, where } from "firebase/firestore";





/******************** sign up *************************/
export const signUp = async (email , password , name)=>{
  
  // send request to Firebase to signIn with email and password & recieve the user credentials
  const userCredential = await createUserWithEmailAndPassword(auth , email, password);
  
  // add user name to his credential object
  
  return userCredential
  
}




/******************** sign in *************************/
export const signIn = async (email , password)=>{
  
  // send request to Firebase to signIn with email and password & recieve the user credentials
  const userCredential = await signInWithEmailAndPassword(auth , email, password);
  
  return userCredential
  
}



/******************** creat new user after sign up  *************************/
export const creatNewUserData = async (uid , name , email)=>{
  await setDoc(doc(db , 'users' , uid) , {name , email});
}



/******************** get user data   *************************/
export const getUserData = async (uid )=>{
  const docsnapshot = await getDoc(doc(db , 'users' , uid) );
  
  const userData = docsnapshot.data();
  
  return userData;
  
}


/******************** get product data   *************************/
export const getProductData = async ( ProductId )=>{
  const docsnapshot = await getDoc(doc(db , 'products' , ProductId) );
  
  const productData = docsnapshot.data();
  
  return productData;
  
}


/******************** update product qty  *************************/
export const updateProductQty = async (productId, qty) => {
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




/******************** get products by category    *************************/
export async function getProductsByGategory  (categoryLang, categoryType)  {
  const productsCollectionRef = collection(db, "products");
  const queryResults = [];
  const q = query(
    productsCollectionRef,
    where(categoryLang, "==", categoryType)
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    queryResults.push({ ...doc.data(), id: doc.id });
  });
  // console.log("query", queryResults);
  return queryResults;
};





export async function getCategory() {
  const req = doc(db, "category", "IjcIcmJzA3qlFATugZm0");
  const citySnapshot = await getDoc(req);
  return citySnapshot.data();
}

export async function getDataByFirebase(namecol) {
  const citiesCol = collection(db, namecol);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => [doc.data(), doc.id]);
  return cityList;
}



