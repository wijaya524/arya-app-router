import { collection, getDocs, getFirestore, getDoc, doc, query, where } from "firebase/firestore";
import app from "./init";

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
    const q = query(collection(firestore, "user"), where("email", "==", data.email)
);
const snapshot = await  getDocs(q)
const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
}))
if(users.length > 0) {
    callback({status: 200, message: "Email already exist"})
}else {
    data.role = "admin";
}
}