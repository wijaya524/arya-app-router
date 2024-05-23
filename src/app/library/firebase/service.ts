import { collection, getDocs, getFirestore, getDoc, doc, query, where, addDoc } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt"

//Using to access fireStore on firebase
const firestore = getFirestore(app);

//Firebase service

//Get data products from firebase
export async function retrieveData(colectionName: string) {
    const snapshot = await getDocs(collection(firestore, colectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return data;
}

//Get data product id from firebase
export async function retrieveDataById(colectionName: string, id: string) {
    //Snapshot using to access data on database
    const snapshot = await getDoc(doc(firestore, colectionName, id));
     //Snapshot using to access data on database
    const data = snapshot.data();
    //Return data
    return data;
}


//Register
export async function register(
  //Types for userData
    userData: {
      email: string;
      password: string;
      fullname: string;
      role: string;
    }
  ) {
     //Query
    const q = query(
     //FireStore and collection Name
      collection(firestore, "users"),
     //Where using to filtering document on collection 
      where("email", "==", userData.email)
    );
      //Snapshot using to access data on database
    const snapshot = await getDocs(q);
      //For mapping data 
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    //If already have data, will show status false
    if (data.length > 0) {
      return{ status: false, statusCode: 400, message: "Email already exists" };
    } 
    //If don't have data, will show status true and hashing password to bcrypt 
    else {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "member";
      try {
        //Add document or data to firebase 
        await addDoc(collection(firestore, "users"), userData)
        return{ status: true, statusCode: 200, message: "Register success" };
        //If happen error
      } catch (error) {
        return{ status: false, statusCode: 500, message: "Something went wrong" };
      }
    }
  }


//Take data login from firebase
export async function login(data: {email: string}) {
  //Query
  const q = query( 
    //FireStore and collection Name
    collection(firestore, "users"),
    //Where using to filtering document on collection 
    where("email", "==", data.email)
  )
  //Snapshot using to access data on database
  const snapshot = await getDocs(q);
  //For mapping data 
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  
  if(user){
    return user[0]
  }else {
    return null
  }
}