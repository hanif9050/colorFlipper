// selector
const bg = document.querySelector(".bg-color");

const btnChange = document.querySelector(".colorCode");

// random number generator
const randomColor = function () {
  const random = Math.floor(Math.random() * 255);
  return random;
};
// change background on click
btnChange.addEventListener("click", () => {
  bg.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
});
//
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
hexGenerator = () => {
  return Math.floor(Math.random() * (hex.length - 1));
};
const result = randomColor();
console.log(hex[hexGenerator()]);
