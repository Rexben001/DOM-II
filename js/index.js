// Your code goes here

// mouseover
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", () => {
  logoHeading.setAttribute(
    "style",
    "color:red; cursor:pointer; box-shadow: 0 5px 5px #000"
  );
});

// mouseout
logoHeading.addEventListener("mouseout", () => {
  logoHeading.setAttribute("style", "color:inherit;");
});

const bodyPage = document.querySelector("body");
bodyPage.addEventListener("keydown", event => {
  if (event.key === "1") {
      bodyPage.style.backgroundColor = "rgba(0,0,0,.3)";
      alert(`You just pressed key ${event.key}`);
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



//resize
window.addEventListener('resize', (event) => {
    bodyPage.style.backgroundColor = 'rgba(0,0,0, .1)';
});

//scroll
window.addEventListener('scroll', () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
  
    bodyPage.style.color = `rgb(${red},${green},${blue})`;
});

// dbclick
const imgContent = document.querySelector('.img-content img');
imgContent.addEventListener('dblclick', () => {
    imgContent.classList.toggle('rotate-it');
})

//click
bodyPage.addEventListener('click', (event) => {
    event.stopPropagation();
    if (event.srcElement.className === 'nav-link' || event.srcElement.localName === 'img')
    {
        return;
    } else
    {
        event.target.style.display = 'none';
    }
});

//mouseleave

const link = document.getElementsByTagName('a');

for (let i of link)
{
    i.addEventListener('mouseleave', (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.target.setAttribute('style', 'color: green;');
    })
}

//mouseenter

for (let i of link)
{
    i.addEventListener('mouseenter', (event) => {
        event.target.setAttribute('style', 'color: blue;');
    })

}