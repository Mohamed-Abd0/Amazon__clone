
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";



const signIn = async (email , password)=>{

    // send request to Firebase to signIn with email and password & recieve the user credentials
    const userCredential = await signInWithEmailAndPassword(auth , email, password);
    
    return userCredential

}

export default signIn;