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
export async function register(data:{
    fullname: string;
    email: string;
    password: string;
    role? : string;
}, callback: Function,) {
    const q = query(collection(firestore, "users"), where("email", "==", data.email)
);
const snapshot = await  getDocs(q)
const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
}))
if(users.length > 0) {
    callback({status: false, message: "Email already exist"})
}else {
    data.role = "admin";
    data.password = await bcrypt.hash(data.password, 10);

    await addDoc(collection(firestore, "users"), data)
    .then(() => {
        callback({status: true, message: "Register success"})
    })
    .catch((err) => {
        callback({status: false, message: err})
    })
}
}