const second = document.querySelector('.second');
const minute = document.querySelector('.minute');
const hour = document.querySelector('.hour');

setInterval(() => {
  let date = new Date();
  let second_deg = date.getSeconds() * 6 + 180;
  let minute_deg = (date.getMinutes() * 6) + (date.getSeconds() / 10) + 180;
  let hour_deg = (date.getHours() * 30) + (date.getMinutes() / 2) + (date.getSeconds() * 0.0083) + 180;
  minute.style.transform = `rotate(${minute_deg}deg)`;
  second.style.transform = `rotate(${second_deg}deg)`;
  hour.style.transform = `rotate(${hour_deg}deg)`;
}, 1000);