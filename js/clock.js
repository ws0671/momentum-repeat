const clock = document.querySelector("#clock");
const daySpan = document.querySelector(".day");
const monthTag = document.querySelector(".month");
const monthNumberTag = document.querySelector(".month-number");

function getClock() {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const minute = String(time.getMinutes()).padStart(2, "0");
  const second = String(time.getSeconds()).padStart(2, "0");
  let day = time.getDay();
  const monthNumber = time.getMonth();
  let month = "";
  day = changeDay(day);
  month = changeMonth(monthNumber, month);
  daySpan.innerText = day;
  monthNumberTag.innerText = 1 + monthNumber;
  monthTag.innerText = month;
  clock.innerText = `${hour}:${minute}:${second}`;
}

function changeDay(day) {
  if (day === 0) day = "Sunday";
  if (day === 1) day = "Monday";
  if (day === 2) day = "Tuesday";
  if (day === 3) day = "Wednesday";
  if (day === 4) day = "Thursday";
  if (day === 5) day = "Friday";
  if (day === 6) day = "Saturday";
  return day;
}

function changeMonth(monthNumber, month) {
  if (monthNumber === 0) month = "January";
  if (monthNumber === 1) month = "February";
  if (monthNumber === 2) month = "March";
  if (monthNumber === 3) month = "April";
  if (monthNumber === 4) month = "May";
  if (monthNumber === 5) month = "June";
  if (monthNumber === 6) month = "July";
  if (monthNumber === 7) month = "August";
  if (monthNumber === 8) month = "September";
  if (monthNumber === 9) month = "October";
  if (monthNumber === 10) month = "November";
  if (monthNumber === 11) month = "December";
  return month;
}

getClock();
setInterval(getClock, 1000);
