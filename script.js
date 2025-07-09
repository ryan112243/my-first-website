/* JavaScript 程式碼 */

// 用來追蹤新增了多少內容的變數
var contentCount = 0;

// 函數：點擊按鈕後改變特定段落的文字內容
function changeText() {
    // 透過 ID 找到網頁上叫做 "myText" 的元素（就是那個 <p> 標籤）
    var paragraph = document.getElementById("myText");

    // 判斷目前的文字，然後改變它
    if (paragraph.innerHTML === "這是一段可以被 JavaScript 改變的文字。") {
        paragraph.innerHTML = "文字已經改變了！你點擊了按鈕！";
        // 也可以改變樣式
        paragraph.style.color = "#d9534f"; // 變成紅色
        paragraph.style.fontWeight = "bold"; // 變成粗體
    } else {
        paragraph.innerHTML = "這是一段可以被 JavaScript 改變的文字。";
        paragraph.style.color = "#333"; // 變回深灰色
        paragraph.style.fontWeight = "normal"; // 變回正常字體
    }
}

// 函數：點擊按鈕後新增一個內容段落
function addContent() {
    var contentArea = document.getElementById("contentArea"); // 找到放置內容的區域

    // 建立一個新的段落元素 <p>
    var newParagraph = document.createElement("p");
    contentCount++; // 每次新增就讓計數器加一
    newParagraph.innerHTML = "這是第 <strong>" + contentCount + "</strong> 個新增的內容。"; // 加入文字，注意這裡的 <strong> 會讓數字變粗體
    newParagraph.style.color = "#0056b3"; // 設定新增內容的文字顏色
    newParagraph.style.backgroundColor = "#e7f3ff"; // 設定背景色
    newParagraph.style.padding = "10px";
    newParagraph.style.borderRadius = "5px";
    newParagraph.style.marginTop = "10px";

    // 將新的段落加入到 contentArea 裡面，這樣它就會顯示在網頁上了
    contentArea.appendChild(newParagraph);
}

// 函數：點擊按鈕後移除最後一個新增的內容段落
function removeLastContent() {
    var contentArea = document.getElementById("contentArea"); // 找到內容區域
    var lastChild = contentArea.lastElementChild; // 找到 contentArea 裡最後一個子元素

    // 檢查是否有子元素，並且它是一個 <p> 標籤（避免誤刪按鈕或其他東西）
    if (lastChild && lastChild.tagName === 'P' && lastChild.id !== 'myText') { // 確保不是 myText 段落
        contentArea.removeChild(lastChild); // 從 contentArea 中移除這個元素
        contentCount--; // 移除內容後，計數器減一
        if (contentCount < 0) contentCount = 0; // 避免計數器變成負數
    } else {
        alert("沒有更多內容可以移除了！或者你正在嘗試移除不該移除的元素。"); // 彈出提示訊息
    }
}