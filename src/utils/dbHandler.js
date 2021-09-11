import {addDoc, getDocs, collection} from "firebase/firestore"
import {db} from "../services/firebase";

export const addDocument = async function(docName, info) {
  try {
    if (typeof info != 'object') {
      throw new Error('Info no es un objeto');
    }
    const docRef = await addDoc(collection(db, docName), info)

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("ERROR", e);
  }
}

export const retrieveAll = async function(docName) {
  const querySnapshot = await getDocs(collection(db, docName));
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  return data;
}