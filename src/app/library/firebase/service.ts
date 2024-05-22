import { collection, getDocs, getFirestore, getDoc, doc, query, where, addDoc } from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt"


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
    const snapshot = await getDoc(doc(firestore, colectionName, id));
    const data = snapshot.data();
    return data;
}


//Register
export async function register(
    userData: {
      email: string;
      password: string;
      fullname: string;
      role: string;
    }
  ) {
    const q = query(
      collection(firestore, "users"),
      where("email", "==", userData.email)
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    if (data.length > 0) {
       return{ status: false, statusCode: 400, message: "Email already exists" };
    } else {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "member";
      try {
        await addDoc(collection(firestore, "users"), userData)
        return{ status: true, statusCode: 200, message: "Register success" };
      } catch (error) {
        return{ status: false, statusCode: 500, message: "Something went wrong" };
      }
    }
  }


//Take data login from firebase
export async function login(data: {email: string}) {
  const q = query( 
    collection(firestore, "users"),
    where("email", "==", data.email)
  )
  const snapshot = await getDocs(q);
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