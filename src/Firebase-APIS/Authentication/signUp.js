
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";



const signUp = async (email , password , name)=>{

    // send request to Firebase to signIn with email and password & recieve the user credentials
    const userCredential = await createUserWithEmailAndPassword(auth , email, password);

    // add user name to his credential object
    

    
    return userCredential

}

export default signUp;


