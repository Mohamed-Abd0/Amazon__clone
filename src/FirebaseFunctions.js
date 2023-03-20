import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function getCategory() {
  const req = doc(db, "category", "IjcIcmJzA3qlFATugZm0");
  const citySnapshot = await getDoc(req);
  return citySnapshot.data();
}
