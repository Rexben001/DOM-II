// Your code goes here

// mouseover and mouseout
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", () => {
  logoHeading.setAttribute(
    "style",
    "color:red; cursor:pointer; box-shadow: 0 5px 5px #000"
  );
});
logoHeading.addEventListener("mouseout", () => {
  logoHeading.setAttribute("style", "color:inherit;");
});

const bodyPage = document.querySelector("body");
bodyPage.addEventListener("keydown", event => {
  if (event.key === "1") {
    bodyPage.style.backgroundColor = "rgba(0,0,0,.3)";
  } else {
    bodyPage.style.backgroundColor = "inherit";
  }
});

// wheel
const firstImage = document.querySelector("img:first-child");

firstImage.addEventListener("wheel", () => {
  firstImage.setAttribute("style", "box-shadow: 0 5px 5px #000");
});

// load
firstImage.style.display = "none";
window.addEventListener("load", () => {
  setTimeout(() => (firstImage.style.display = "block"), 1000);
});
