let dat1 = 24 * 60 * 60 * 1000;
let millenium;
let count = 0;
let countSecond = 0;
let study = document.getElementById("study");
let rest = document.getElementById("rest");

function time(value) {
  for (let i = 0; i < 60; i++) {
    let option = `<option value="${i}">${i}</option>`;
    if (i == 25) {
      if (value == "study") {
        option = `<option value="${i}" selected>${i}</option>`;
      }
    } else if (i == 5) {
      if (value == "rest") {
        option = `<option value="${i}" selected>${i}</option>`;
      }
    }
    document.getElementById(`${value}`).insertAdjacentHTML("beforeend", option);
  }
}
time("study");
time("rest");

function setLastMinutes(max) {
  millenium = new Date();
  millenium.setMinutes(millenium.getMinutes() + max);
}

function display() {
  let today = new Date();
  // let second = study.value * 60;
  let hour;
  // if ( !millenium || (millenium < today) ) setLastMinute(5);
  if (!millenium) {
    setLastMinutes(Number(study.value));
    countSecond + 1;
    // hour = study.value / 60;
  }
  countSecond++;
  if (millenium < today) {
    count++;
    if (count % 2 !== 0) {
      setLastMinutes(Number(rest.value));
      //  hour = study.value * (count + 1) / (60 * 2);
    } else {
      setLastMinutes(Number(study.value));
      //  hour = study.value * ((count + 2) / 2) / 60;
    }
  }

  const language = document.querySelector("#language");
  document.f.languages.value = language.value;

  if (count % 2 !== 0) {
    countSecond--;
    hour = (study.value * (count + 1)) / (60 * 2);
    document.f.languages.value = "休憩中";
  } else {
    hour = (study.value * ((count + 2) / 2)) / 60;
  }
  let milliSec = (millenium - today) % dat1;
  time1 = Math.floor(milliSec / (60 * 60 * 1000));
  time2 = Math.floor(milliSec / (60 * 1000)) % 60;
  time3 = (Math.floor(milliSec / 1000) % 60) % 60;

  times2 = ("00" + time2).slice(-2);
  times3 = ("00" + time3).slice(-2);

  document.f.days.value = times2 + ":" + times3;

  const timeRecord = document.querySelector(".timerRecord");

  document.e.style.display = "none";
  timeRecord.style.display = "block";
  document.f.days.style.display = "block";
  document.f.languages.style.display = "block";

  tid = setTimeout("display()", 1000);

  const timerHour = document.querySelector(".timerHour");
  // let hour = countSecond / 3600;
  console.log(hour);
}

const borders = document.querySelectorAll(".border");

borders.forEach(function (border) {
  border.style.width = "50%";
});

const times = document.querySelector(".times");
document.querySelector(".btn").addEventListener("click", function () {
  console.log(times.value);
});
