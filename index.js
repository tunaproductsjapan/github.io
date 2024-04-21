import { firestore } from "./firebase.js";

window.onload = async () => {

const docId = "iha1dt84ul3r";
const doc = await firestore.collection("projectManagement").doc(docId).get();
console.log(doc);
console.log(doc.id);
console.log(doc.data());
};