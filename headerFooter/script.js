const headerMenuContents = document.querySelector("#header-menu-contents");
const headerMenuButton = document.querySelector("#header-menu-button");
const overlay = document.querySelector(".overlay");

/*========= ヘッダー用のメニューをコードから追加===============*/
var headerMenuTemplate = `
        <p>生活</p>
        <a href="../couponotoku/index.html">クーポンお得計算機</a>
        <a href="../natureSounds/index.html">自然音（環境音）</a>
        <a href="../nengouhenkan/index.html">年号変換</a>
        <p>開発</p>
        <a href="../dollarExtractor/index.html">$変数コピペツール</a>
        <a href="../hashExtractor/index.html">カラーコード抽出機</a>
        <a href="../fontsizeConverter/index.html">フォントサイズ単位変換</a>
`;
document.addEventListener('DOMContentLoaded', function() {
  headerMenuContents.innerHTML = headerMenuTemplate;
  /* 
  ここでは可変コンテンツを追加します。
  外部入力を受け取らないため、エスケープ処理は不要です。
  */
});

/*========= ヘッダーの動作（HTMLに記述してある要素を使う） ===============*/
headerMenuButton.addEventListener("click", function () {
  headerMenuContents.classList.toggle("show");
  updateMenuState();
});

overlay.addEventListener("click", function () {
  headerMenuContents.classList.remove("show");
  updateMenuState();
});

function updateMenuState() {
  if (headerMenuContents.classList.contains("show")) {
    headerMenuButton.classList.add("header-menu-showed");
    overlay.style.display = "block";
  } else {
    headerMenuButton.classList.remove("header-menu-showed");
    overlay.style.display = "none";
  }
}