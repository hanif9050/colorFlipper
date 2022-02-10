// selector
const bg = document.querySelector(".bg-color");
const colorName = document.querySelector(".colorName");
const btnChange = document.querySelector(".colorCode");

// random number generator
const randomColor = function () {
  const random = Math.floor(Math.random() * 255);
  return random;
};
// change background on click
btnChange.addEventListener("click", () => {
  const rgb = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
  bg.style.backgroundColor = rgb;
  colorName.textContent = rgb;
});
//
