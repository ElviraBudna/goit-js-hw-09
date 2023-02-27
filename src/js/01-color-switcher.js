const ref = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  bodyEl: document.body,
};
let changeColorTimer = null;

ref.btnStart.addEventListener('click', onClickStart);
ref.btnStop.addEventListener('click', onClickStop);

function onClickStart(e) {
  e.currentTarget.disabled = true;
  changeColorTimer = setInterval(changeColorBody, 1000);
}

function onClickStop(e) {
  if (ref.btnStart.disabled) {
    ref.btnStart.disabled = false;
    clearTimeout(changeColorTimer);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColorBody() {
  ref.bodyEl.style.backgroundColor = getRandomHexColor();
}
