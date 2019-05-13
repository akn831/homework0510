// 作成の流れ
// 1. 追加ボタンにclickのイベントを登録する
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function() {
  // 2. 追加ボタンがクリックされた時の処理を書く
  // 2.1 画面の入力欄、入力値を取得する
    let inputColor = document.getElementById("inputColor");
    let color = inputColor.value;

  // 2.2 新しくdivを作成する
    let divBoxes = document.createElement("div");
  
  // 2.3 divの背景色に画面の「2.1」で取得した入力値を設定する
    divBoxes.style.backgroundColor = color;

  // 2.4 新しく作成したdivにCSSのクラスを追加する
    divBoxes.classList.add("panel");

  // 2.5 div[id=box]を取得する
    let box = document.getElementById("box");

  // 2.6 作成したdivを追加する  
    box.insertBefore(divBoxes, box.firstChild);
});