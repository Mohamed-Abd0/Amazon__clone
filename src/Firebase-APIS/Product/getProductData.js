import { db } from '../../firebase';
import {  doc , getDoc } from 'firebase/firestore';


const getProductData = async ( ProductId )=>{
    const docsnapshot = await getDoc(doc(db , 'products' , ProductId) );
    
    const productData = docsnapshot.data();

    return productData;

}

export default getProductData;