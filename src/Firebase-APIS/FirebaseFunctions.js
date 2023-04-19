import { collection, doc, getDoc, getDocs , query, where } from "firebase/firestore";
import { db } from "../firebase";


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


