let page1 = document.querySelector(".page-1");
let page2 = document.querySelector(".page-2");
let pageLoading = document.querySelector(".page-loading");
let startBtn = document.querySelector(".startBtn");
let loadingMessage = document.querySelector(".loading-message");

function viewMessage(str, time) {
  setTimeout(function() {
    loadingMessage.innerHTML = str;
  }, time);
}

function startClicked() {
  loadingMessage.innerHTML = "갓-파고 부팅중...";
  hiding(page1);
  showing(pageLoading);
  viewMessage("메모리카드 최적화중...", 1500);
  viewMessage("그래픽카드 2080ti로 갈아끼우는중...", 3000);
  viewMessage("CPU I9으로 갈아끼우는중...", 4500);
  viewMessage("갓-파고 로딩 완료!", 6000);
  setTimeout(function() {
    hiding(pageLoading);
    showing(page2);
  }, 7500);

}

startBtn.addEventListener("click", startClicked);

function hiding(name) {
  name.style.display = 'none';
}

function showing(name) {
  name.style.display = 'block';
}

function init() {
  hiding(page2);
  hiding(pageLoading);
}

init();
