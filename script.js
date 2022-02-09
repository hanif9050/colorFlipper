const bg = document.querySelector(".bg-color");
// random number generator
const randomColor = function () {
  const random = Math.floor(Math.random() * 255);
  return random;
};
bg.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;

const result = randomColor();
console.log(randomColor(), randomColor(), randomColor());
