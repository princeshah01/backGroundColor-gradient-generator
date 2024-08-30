const btn1 = document.getElementById("mybtn1");
const btn2 = document.getElementById("mybtn2");
const div = document.querySelector(".copycode");
const h2 = document.querySelector(".btn-copy");
h2.addEventListener("click", () => {
  navigator.clipboard
    .writeText(div.innerText)
    .then(() => {
      // h2.innerText = "Copied!";
      setTimeout(() => {
      //   h2.innerText = "Click to copy";
      }, 1000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
});
function updateGradient() {
  const btn1Color = getComputedStyle(btn1).backgroundColor;
  const btn2Color = getComputedStyle(btn2).backgroundColor;
  let a = `linear-gradient(to right, ${btn1Color}, ${btn2Color})`;
  document.querySelector("section").style.backgroundImage = a;
  div.innerText = a;
}
updateGradient();

const generateColor = () => {
  let hexValues = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};

btn1.addEventListener("click", () => {
  let color = generateColor();
  btn1.innerText = color;
  btn1.style.backgroundColor = color;
  updateGradient();
});

btn2.addEventListener("click", () => {
  let color = generateColor();
  btn2.innerText = color;
  btn2.style.backgroundColor = color;
  updateGradient();
});