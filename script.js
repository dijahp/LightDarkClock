const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

var months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const handSecond = document.querySelector('.hand.second');
  const handMinute = document.querySelector('.hand.minute');
  const handHour = document.querySelector('.hand.hour');

  const hourperiod = hours >= 12 ? 'PM' : 'AM';
  console.log(hoursForClock);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${
    (hours / 12) * 360
  }deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${
    (minutes / 60) * 360
  }deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${
    (seconds / 60) * 360
  }deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${hourperiod}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

  handHour.style.transition = `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`;

  handMinute.style.transition = `${
    minutes === 0 ? 'none' : 'all 0.5s ease-in'
  }`;

  handSecond.style.transition = `${
    seconds === 0 ? 'none' : 'all 0.5s ease-in'
  }`;
};

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

setTime();

setInterval(setTime, 1000);

toggle.addEventListener('click', (e) => {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light Mode';
  }
});
