// what happens when we hover over balloons
document.addEventListener("mouseover", (event) => {
  // create a bool that checks if a class contains "balloon"
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");

  // if a balloon is hovered and has "balloon" as class, display POP! from html
  if (isBalloon) {
    event.target.classList.add("popped");
    const poppedCount = document.querySelectorAll(".balloon.popped").length;
    const balloonCount = document.querySelectorAll(".balloon").length;

    // if the amount of popped balloons is the same as the total amount, display a message
    if (poppedCount === balloonCount) {
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      // create the message using h1 element in html
      const h1 = document.createElement("h1");
      h1.textContent = "YAY!";
      h1.classList.add("congratsMessage");
      balloons.appendChild(h1);
    }
  }
});
