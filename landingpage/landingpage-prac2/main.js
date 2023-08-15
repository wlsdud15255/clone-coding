let iii = document.querySelector("#dynamic");

let blink = () => {
  iii.classList.toggle("active");
};

setInterval(blink, 500);

// ----------

let str = "...";
let ArrStr = str.split("");

function resetTyping() {
  target.textContent = "";

  typing(ArrStr);
}

let typing = (Arr) => {
  if (Arr.length > 0) {
    iii.textContent += Arr.shift();

    setTimeout(function () {
      typing(Arr);
    }, 500);
  } else {
    setTimeout(resetTyping, 3000);
  }
};

typing(ArrStr);
