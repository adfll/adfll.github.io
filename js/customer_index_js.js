document.addEventListener('DOMContentLoaded', function () {
   // 対象要素を得る
   var tabs = document.getElementById('function_tab').getElementsByTagName('a');
   var pages = document.getElementById('function_tabbody').getElementsByTagName('div');

   // タブの切り替え処理
   function changeTab() {
      // href属性値から対象のid名を抜き出す
      var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);

      // 指定のタブページだけを表示する
      for(var i=0; i<pages.length; i++) {
         if( pages[i].id != targetid ) {
            pages[i].style.display = "none";
         }
         else {
            pages[i].style.display = "block";
         }
      }

      // クリックされたタブを前面に表示する
      for(var i=0; i<tabs.length; i++) {
         tabs[i].style.zIndex = "0";
      }
      this.style.zIndex = "10";

      // ページ遷移しないようにfalseを返す
      return false;
   }

   // すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する
   for(var i=0; i<tabs.length; i++) {
      tabs[i].onclick = changeTab;
   }

   // 最初は先頭のタブを選択しておく
   tabs[0].onclick();

   // ローカルストレージから保存されたタブの情報を取得
   var selectedTab = localStorage.getItem('selectedTab');

   // もし前回選択されていたタブがあれば、それを選択状態にする
   if (selectedTab) {
      var selectedTabElement = document.querySelector('a[href="#' + selectedTab + '"]');
      if (selectedTabElement) {
         selectedTabElement.click();
      }
   }
});



// htmlと連携
let goods1 = document.getElementById("box1");
let goods2 = document.getElementById("box2");
let disaster = document.getElementById("saigai1");
let home = document.getElementById("bosai1");
let bosai = document.getElementById("bosai2");
let family = document.getElementById("bosai3");


// 防災グッズのボタンをクリック
goods1.addEventListener("click", () => {
   location.href = "customer_water.html";
});

goods2.addEventListener("click", () => {
   location.href = "customer_can.html";
});

disaster.addEventListener("click", () => {
   location.href = "customer_disaster.html";
});

home.addEventListener("click", () => {
   location.href = "customer_home.html";
   console.log("customer_home.html");
});

bosai.addEventListener("click", () => {
   location.href = "customer_bosai.html";
   console.log("customer_bosai.html");
});

family.addEventListener("click", () => {
   location.href = "customer_family.html";
   console.log("customer_family.html");
});