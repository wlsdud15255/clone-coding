let a = document.querySelector("#Typing");

// blink
// 해당 요소에 active 클래스를 부여했다 없애는 함수

let blink = () => {
  a.classList.toggle("active");
};

setInterval(blink, 500);

//

function randomStr() {
  let learnArr = ["learn to HTML", "learn to CSS", "learn to JS"];
  let oneStr = learnArr[Math.floor(Math.random() * learnArr.length)];
  let strArr = oneStr.split("");

  return strArr;
}

let Typing = (selectStr) => {
  if (selectStr.length > 0) {
    a.textContent += selectStr.shift();

    setTimeout(function () {
      Typing(selectStr);
    }, 50);
  } else {
    setTimeout(reset, 3000);
  }
};

let reset = () => {
  a.textContent = "";

  Typing(randomStr());
};

Typing(randomStr());
