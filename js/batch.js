// Cloud Firestore ドキュメント引用
import { writeBatch, doc, collection, getDocs, updateDoc, setDoc } from "./firebase.js"; 

// 新たなバッチを取得
const batch = writeBatch(db);

// userManagement コレクション内の全ドキュメントを取得
const userManagementRef = collection(db, "userManagement");
const userManagementSnapshot = await getDocs(userManagementRef);

// 全ドキュメントに対してバッチ処理を実行
userManagementSnapshot.forEach((doc) => {
    // ドキュメントに password フィールドが存在するかチェック
    if (doc.exists() && doc.data().hasOwnProperty("password")) {
        // 既に password フィールドが存在する場合は、"poimaru" を代入
        const docRef = doc(db, "userManagement", doc.id);
        batch.update(docRef, { "password": "poimaru" });
    } else {
        // password フィールドが存在しない場合は、新たに作成して "poimaru" を代入
        const docRef = doc(db, "userManagement");
        batch.set(docRef, { "password": "poimaru" });
    }
});

// 最後に保存
await batch.commit();
