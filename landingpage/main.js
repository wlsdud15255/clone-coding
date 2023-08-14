// 커서 깜빡임 효과

let target = document.querySelector("#dynamic");

function blink() {
  // 3. classList와 내장함수
  // 3-1. add : 해당 요소의 클래스 속성값을 추가, 동일 클래스가 있을 경우 무시한다.
  // 3-2. remove : 해당 요소의 클래스 속성값을 제거
  // 3-3. toggle : 해당 요소의 클래스 값을 있을경우 제거하고 없을 경우 추가한다.
  // 3-4. contains : 해당 요소의 클래스 값을 ture와 false로 답변한다.

  target.classList.toggle("active");
}

// 4. setInterval함수
// 해당 함수를 지정 시간 마다 계속 반복한다

setInterval(blink, 500);

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 타이핑 될 문장을 배열로 담고 랜덤으로 뽑은 문장을 문자로 배열 반환 받아 찍기

function randomString() {
  let stringArr = ["learn to html", "learn to css", "learn to javascript"];

  // 5. math 내장함수
  // 5-1. Math.floor() : 내림처리
  // 5-2. Math.random() : 랜덤값

  let selectStr = stringArr[Math.floor(Math.random() * stringArr.length)];

  // 문자열 내장함수
  // split() : 파라미터로 전달 받은 문자(열)를 기준으로 잘라서 array 객체로 반환(기준 문자열은 제외된다.)
  let selectStrArr = selectStr.split("");

  return selectStrArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";

  dynamic(randomString());
}

// 한글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    // 6.textContent
    // element.textContent = '내용'
    // 해당 요소에 내용을 추가해 준다.

    // ※ innerText는 공백을 가져오지 않는다

    // 7. shift 내장함수
    // 해당 배열의 첫번째 요소를 빼온다

    target.textContent += randomArr.shift();

    // 8. window 내장함수
    // settimeout : 지정된 시간이 지나면 함수 실행

    // 9. 재귀함수란?
    // 정의 단계에서 자기 자신을 재참조하는 함수,
    // 어떤 사건이 자신을 포함하고 그로 인해 다시 자기 자신이 사용 될 때 재귀적이라고 한다.
    // => 위에서 문자열 중 첫번째 문자를 반환 받았지만 나머지는 받지 못했기 때문에
    //    아래의 과정을 통해 dynamic 함수를 재귀하여 if 조건을 만족 시켜 실행 시킨다.

    // 8. setTimeout(function () {dynamic(randomArr);}, 80); 와
    //    setTimeout(dynamic(randomArr);, 80);
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

// 위의 재귀함수를 다르게 바꿔보기 반복문

// 28분

dynamic(randomString());
