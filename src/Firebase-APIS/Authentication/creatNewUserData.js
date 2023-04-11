
import { db } from '../../firebase';
import {  doc , setDoc } from 'firebase/firestore';


const creatNewUserData = async (uid , name , email)=>{
    await setDoc(doc(db , 'users' , uid) , {name , email});
}

export default creatNewUserData;