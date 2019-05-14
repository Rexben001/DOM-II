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

const contentDestination = document.querySelector('.content-destination');

const navLink = document.querySelector('.nav-link:first-child');

navLink.addEventListener('click', (event) => {
    console.log(2345678)
    event.preventDefault();
    contentDestination.focus();
});

if (contentDestination.focus())
{
    contentDestination.setAttribute('style', 'color: red');
}

//resize
window.addEventListener('resize', (event) => {
    bodyPage.style.backgroundColor = 'rgba(0,0,0, .1)';
});

//cscroll
window.addEventListener('scroll', () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
  
    bodyPage.style.color = `rgb(${red},${green},${blue})`;

    console.log('its working')
});