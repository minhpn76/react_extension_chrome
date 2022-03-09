const nameInput = document.getElementById("name-input");
const saveButton = document.getElementById("save-button");
const timeInput = document.getElementById("time-input");

saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  const notificationTime = timeInput.value;
  // Storage
  chrome.storage.sync.set({ name, notificationTime }, () => {
    console.log("Name is set to " + name);
    console.log("Notification time " + notificationTime);
  });
  chrome.storage.sync.get(["name", "notificationTime"], function (result) {
    nameInput.textContent = result.name ?? "";
    timeInput.textContent = result.notificationTime ?? 1000;
  });
  // chrome.alarms.clearAll(() => {
  //   console.log("clear Timer");
  //   chrome.storage.local.set({
  //     timer: 0,
  //   });
  // });
});
