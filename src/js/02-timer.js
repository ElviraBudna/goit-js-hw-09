import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  inputEl: document.querySelector('#datetime-picker'),
  btnEl: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days]'),
  hoursEl: document.querySelector('span[data-hours]'),
  minutesEl: document.querySelector('span[data-minutes]'),
  secondsEl: document.querySelector('span[data-seconds]'),
};

ref.btnEl.disabled = true;
ref.btnEl.addEventListener('click', onClickBtn);

let timerId = null;
let selectedData = null;
let timerData = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = Date.now();

    if (selectedDates[0] - currentTime > 0) {
      selectedData = selectedDates[0];
      ref.btnEl.disabled = false;
    } else {
      alert('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

function onClickBtn(e) {
  e.currentTarget;
  timerId = setInterval(startTimer, 1000);
  options.enableTime = false;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function startTimer(time) {
  const currentTime = Date.now();
  const timerTimeMs = selectedData - currentTime;
  timerData = convertMs(timerTimeMs);
  changeTimerTime(timerData);
  if (timerTimeMs === 0) {
    clearInterval(timerId);
  }
}

function changeTimerTime(data) {
  ref.daysEl.textContent = addLeadingZero(data.days);
  ref.hoursEl.textContent = addLeadingZero(data.hours);
  ref.minutesEl.textContent = addLeadingZero(data.minutes);
  ref.secondsEl.textContent = addLeadingZero(data.seconds);
}
