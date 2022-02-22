let timeRemaining;
let getTime;

const timer = (deadline) => {
  const timerDays = document.getElementById("timer-days");
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  const updateClock = () => {
    getTime = getTimeRemaining();

    timerDays.textContent = getTime.days + " days";
    timerHours.textContent = getTime.hours + " h";
    timerMinutes.textContent = getTime.minutes + " min";
    timerSeconds.textContent = getTime.seconds + " sec";
  };

  updateClock();

  if (getTime.timeRemaining > 0) {
    setInterval(updateClock, 1000);
  } else if (getTime.timeRemaining <= 0) {
    timerDays.textContent = "00";
    timerHours.textContent = "00";
    timerMinutes.textContent = "00";
    timerSeconds.textContent = "00";
  }
};

export default timer;
