// balloon-popping
document.addEventListener("mouseover", (event) => {
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");
  if (isBalloon) {
    event.target.classList.add("popped");
    const poppedCount = document.querySelectorAll(".balloon.popped").length;
    const balloonCount = document.querySelectorAll(".balloon").length;
    if (poppedCount === balloonCount) {
      console.log("all popped");
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "YAY!";
      h1.classList.add("congratsMessage");
      balloons.appendChild(h1);
    }
  }
});
