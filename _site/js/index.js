import { firestore } from "./firebase.js";

window.onload = async () => {

    //データの読み取り(絞込みを行う)
    const snapShot = await firestore
        .collection("projectManagement")
        .limit(10)
        .get();

        const proj = snapShot.docs.map((doc) => ({
            id: doc.id,
            url: doc.data().url,
            image: doc.data().image,
            name: doc.data().name,
            how_to_get: doc.data().how_to_get,
            point: doc.data().point,
        }));

        console.log(proj);

    // HTMLにデータを表示する
    displayData(proj);
};

function displayData(projData) {
    // データ表示用の要素を取得
    const dataList = document.querySelector('.list__block');
    // const dataList = document.getElementById('list__block');

    // データをHTMLに追加して表示
    projData.forEach((data) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <a href="${data.url}">
                <div class="top__block__image">
                    <img src="${data.image}" alt="">
                </div>
                <div class="newList__info">
                    <p class="top__block__text--title">${data.name}</p>
                    <p class="top__block__text--s">${data.how_to_get}</p>
                    <p class="top__block__point--s"><span>${data.point}</span>P</p>
                </div>
            </a>
        `;
        dataList.appendChild(listItem);
    });
}
