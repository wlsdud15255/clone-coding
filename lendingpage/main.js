let target = document.querySelector("#dynamic");

function blink() {
  // 3. classList와 toggle에 대해
  target.classList.toggle("active");
}

// 4. setInterval함수
setInterval(blink, 500);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

let stringArr = ["learn to html", "learn to css", "learn to javascript"];
let selectStr = stringArr[Math.floor(Math.random() * stringArr.length)];
// 5. js의 math 내장함수
// let selectStr = stringArr[Math.random() * 3];

let selectStrArr = selectStr.split("");

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    // 6. shift 내장함수
    target.textContent += randomArr.shift();
    // 7. settimeout 내장함수
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  }
}

// 28분

dynamic(selectStrArr);
