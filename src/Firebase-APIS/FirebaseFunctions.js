import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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
