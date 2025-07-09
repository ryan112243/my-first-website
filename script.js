/* 這是 JavaScript 的註解 */

// 這是一個叫做 changeText 的函數
function changeText() {
    // 透過 ID 找到網頁上叫做 "myText" 的元素
    var paragraph = document.getElementById("myText");

    // 改變這個元素的文字內容
    paragraph.innerHTML = "文字已經改變了！你點擊了按鈕！";
}