import { firestore } from "./firebase.js";

window.onload = async () => {

//     ////データの読み取り(1件)
//     const docId = "8VdhH86buIVuI5lZinH1";
//     const doc = await firestore.collection("todo").doc(docId).get();
    
//     if (doc.exists) {
//         console.log(doc.id);
//         console.log(doc.data());
//     } else {
//         console.log("Document does not exist!");
//     }
// };

// //データの読み取り(複数)
    // const snapShot = await firestore.collection("todo").get();
    // const proj = snapShot.docs.map((doc) => ({
    //     id: doc.id,
    //     shukudai: doc.data().shukudai,
    // }));

    // console.log(proj);


//データの読み取り(絞込みを行う)
    const snapShot = await firestore
        .collection("todo")
        .where("category", "==", "国語")
        .get();

    const proj = snapShot.docs.map((doc) => ({
        id: doc.id,
        dekita: doc.data().dekita,
        category: doc.data().category
    }));
    console.log(proj);
};

