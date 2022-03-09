const timeEle = document.getElementById("time");
const nameEle = document.getElementById("name");
const timerEle = document.getElementById("timer");

chrome.storage.sync.get(["name"], function (result) {
  nameEle.textContent = `Name from option is: ${result.name ?? ""}`;
});

function updateTimerFunc() {
  chrome.storage.local.get(["timer"], function (result) {
    timerEle.textContent = `Timer loadding: ${result.timer ?? 0} s`;
  });
  const currentTime = new Date().toLocaleTimeString();
  timeEle.textContent = `The time is: ${currentTime}`;
}

updateTimerFunc();
setInterval(updateTimerFunc, 1000);

//handle action start, stop, reset
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

startBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});
stopBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  });
});
resetBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  });
});
