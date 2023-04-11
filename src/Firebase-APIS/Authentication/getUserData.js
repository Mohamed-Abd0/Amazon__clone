
import { db } from '../../firebase';
import {  doc , getDoc } from 'firebase/firestore';


const getUserData = async (uid )=>{
    const docsnapshot = await getDoc(doc(db , 'users' , uid) );
    
    const userData = docsnapshot.data();

    return userData;

}

export default getUserData;