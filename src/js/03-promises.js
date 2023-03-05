const ref = {
  firstDelayInput: document.querySelector('input[name="delay"]'),
  delayStepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button'),
};

const FIRST_DELAY = firstDelayInput.value;
const AMOUNT = amountInput.value;
const DELAY_STEP = delayStepInput.value;

console.log(FIRST_DELAY);

addEventListener.btnSubmit('submit', onBtnSubmit);

function onBtnSubmit(e) {
  e.currentTarget;
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
