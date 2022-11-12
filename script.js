const pages = document.querySelectorAll("#app-slider > .page");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const appSlider = document.getElementById("app-slider");
let numberOfPage = 0;

btnLeft.addEventListener("click", () => {
  btnLeft.style.display = "none";
  activeAnimation();
  let time = 0;
  let interval = setInterval(() => {
    time++;
    if (time == 1) {
      clearInterval(interval);
      moveToLeft();
    }
  }, 500);
});
btnLeft.addEventListener("click", removeAnimation);

btnRight.addEventListener("click", () => {
  btnRight.style.display = "none";
  activeAnimation();
  let time = 0;
  let interval = setInterval(() => {
    time++;
    if (time == 1) {
      clearInterval(interval);
      moveToRight();
    }
  }, 500);
});
btnRight.addEventListener("click", removeAnimation);

function activeAnimation() {
  appSlider.classList.add("activated-animation");
}

function manageTheButtons() {
  numberOfPage == 0
    ? (btnLeft.style.display = "none")
    : (btnLeft.style.display = "block");
  numberOfPage == 10
    ? (btnRight.style.display = "none")
    : (btnRight.style.display = "block");
}

function moveToLeft() {
  numberOfPage--;
  let prevPage = pages[numberOfPage];
  if (numberOfPage == 0) {
    prevPage.style.display = "grid";
  } else {
    prevPage.style.display = "block";
  }

  console.log(numberOfPage);

  manageTheButtons();
}

function moveToRight() {
  let thisPage = pages[numberOfPage];
  thisPage.style.display = "none";
  numberOfPage++;
  console.log(numberOfPage);
  manageTheButtons();
}

function removeAnimation() {
  let time = 0;
  let interv = setInterval(() => {
    time++;
    if (time == 1) {
      appSlider.classList.remove("activated-animation");
      clearInterval(interv);
    }
  }, 500);
}
