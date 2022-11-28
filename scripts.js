let curHour;
let curMinute;
let curSecond;

function updateTimer() {
  const curDate = new Date();
  curHour = curDate.getHours();
  curMinute = curDate.getMinutes();
  curSecond = curDate.getSeconds();

  document.getElementById("hours").innerHTML = timeFormatter(curHour);
  document.getElementById("minutes").innerHTML = timeFormatter(curMinute);
  document.getElementById("seconds").innerHTML = timeFormatter(curSecond);
}

let timeFormatter = (time) => {
  return time < 10 ? `0${time}` : time;
};

setInterval(updateTimer, 1000);
