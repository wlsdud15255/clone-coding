let target = document.querySelector("#dynamic");

let blink = () => {
  target.classList.toggle("active");
};

// function blink() {
//   target.classList.toggle("active");
// }

setInterval(blink, 500);

// ----------------------------------
function randomString() {
  let stringArr = ["Who am I?", "Learn to css", "Learn to javascript"];
  let selecStr = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStrArr = selecStr.split("");

  return selectStrArr;
}

function resetTyping() {
  target.textContent = "";

  dynamic(randomString());
}

let dynamic = (randomArr) => {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();

    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
};

dynamic(randomString());
