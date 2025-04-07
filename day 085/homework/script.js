let premiumUsed = false;

document.addEventListener("keydown", (e) => {
  playSound(e.key.toUpperCase());
});

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    playSound(button.dataset.key);
  });
});

function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) return;

  if (key === "P") {
    if (premiumUsed) {
      alert("Premium sound მხოლოდ ერთხელ შეიძლება მოისმინო!");
      return;
    }
    premiumUsed = true;
  }

  audio.currentTime = 0;
  audio.play();
}
