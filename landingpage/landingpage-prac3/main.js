let seldynamic = document.querySelector("#dynamic");

const blink = () => {
  seldynamic.classList.toggle("active");
};

setInterval(blink, 500);

// ------------------------
function ranSTR() {
  let strArr = [
    "우리 집으로 가자",
    "너희 집으로 가자",
    "숙소로 가자",
    "어디로 갈까?",
  ];
  let ranStr = strArr[Math.floor(Math.random() * strArr.length)];
  let selStrArr = ranStr.split("");

  return selStrArr;
}

function Typing(STR) {
  if (STR.length > 0) {
    seldynamic.textContent += STR.shift();

    setTimeout(function () {
      Typing(STR);
    }, 100);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

let resetTyping = () => {
  seldynamic.textContent = "";

  Typing(ranSTR());
};

Typing(ranSTR());
