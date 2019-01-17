let page1 = document.querySelector(".page-1");
let page2 = document.querySelector(".page-2");
let pageLoading = document.querySelector(".page-loading");
let startBtn = document.querySelector(".startBtn");
let loadingMessage = document.querySelector(".loading-message");
let pagePlay = document.querySelector(".page-play");
let text = document.querySelector(".text");
let biggerBtn = document.querySelector(".biggerBtn");
let sameBtn = document.querySelector(".sameBtn");
let smallerBtn = document.querySelector(".smallerBtn");
let number = document.querySelector(".number");
let maxNum = 10000;
let minNum = 0;
let num = maxNum;
let answerTime = 0;

biggerBtn.addEventListener("click", biggerPlay);
sameBtn.addEventListener("click", samePlay);
smallerBtn.addEventListener("click", smallerPlay);

function biggerPlay() {
  halfNum = Math.ceil((maxNum+minNum)/2);
  minNum = halfNum;
  answer();
}

function samePlay() {
  text.innerHTML = `${answerTime}번 만에 맞췄네요!\n다시하려면 f5를 눌러주세요.`;
  hiding(pagePlay);
}

function smallerPlay() {
  halfNum = Math.ceil((maxNum+minNum)/2);
  maxNum = halfNum;
  answer();
}

function viewMessage(str, time) {
  setTimeout(function() {
    loadingMessage.innerHTML = str;
  }, time);
}

function playMessage(str, time) {
  setTimeout(function() {
    text.innerHTML = str;
  }, time);
}

function startClicked() {
  loadingMessage.innerHTML = "갓-파고 부팅중...";
  hiding(page1);
  showing(pageLoading);
  viewMessage("이세돌이랑 맞짱뜨는중...", 1000);
  viewMessage("정보화혁명 일으키는중...", 2000);
  viewMessage("페이커랑 1ㄷ1뜨는중...", 3000);
  viewMessage("갓-파고 로딩 완료!", 4000);
  setTimeout(function() {
    hiding(pageLoading);
    showing(page2);
    startPlay();
  }, 5000);
}

function answer() {
  answerTime++;
  let halfNum = Math.ceil((maxNum+minNum)/2);
  number.innerHTML = halfNum;
  smallerBtn.value = `${halfNum}보단 작아요`
  biggerBtn.value = `${halfNum}보단 커요`
}

function startPlay() {
  playMessage(`1~${maxNum} 사이의 자연수를 생각하세요.`, 0);
  playMessage(`1~${maxNum} 사이의 자연수를 생각하세요..`, 1000);
  playMessage(`1~${maxNum} 사이의 자연수를 생각하세요...`, 2000);
  playMessage("생각하셨나요?", 3000);
  playMessage("그럼 시작하겠습니다.", 4000);
  playMessage("제가 제시하는 숫자를 보고 버튼을 눌러주세요.", 5000);
  setTimeout(function() {
    showing(pagePlay);
    showing(number);
    answer();
  }, 5000);
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
  hiding(pagePlay);
  hiding(number);
}

init();
