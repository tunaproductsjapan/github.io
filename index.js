import { firestore } from "./firebase.js";

window.onload = async () => {

const docId = "iha1dt84ul3r";
const docRef = firestore.collection("projectManagement").doc(docId);
const doc = await docRef.get();
console.log(doc);
console.log(doc.id);
console.log(doc.data());
};