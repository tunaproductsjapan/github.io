import { firestore } from "./firebase.js";

window.onload = async () => {

////データの読み取り(1件)
const docId = "iha1dt84ul3r";
const doc = await firestore.collection("projectManagement").doc(docId).get();
console.log(doc);
console.log(doc.id);
console.log(doc.data());
};
//データの読み取り(複数)
// const snapShot = await firestore.collection("advertisementConsultation").get();
// const proj = snapShot.docs.map((doc) => ({
//     id: doc.id,
// }));

// console.log(proj);