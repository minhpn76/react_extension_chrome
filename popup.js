const timeEle = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
timeEle.textContent = `The time is: ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("TimeXXXX");
  }
);
