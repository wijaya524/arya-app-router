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
    },
    callback: Function
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
      callback({ status: false, message: "Email already exists" });
    } else {
      userData.password = await bcrypt.hash(userData.password, 10);
      userData.role = "member";
      await addDoc(collection(firestore, "users"), userData)
        .then(() => {
          callback({ status: true, message: "Register success" });
        })
        .catch((error) => {
          callback({ status: false, message: error });
        });
    }
  }