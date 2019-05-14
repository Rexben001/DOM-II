// Your code goes here

const logoHeading = document.querySelector('.logo-heading');
console.log(logoHeading);
logoHeading.addEventListener('mouseover', () => {
    logoHeading.setAttribute("style", "color:red; cursor:pointer; box-shadow: 0 5px 5px #000");
});
logoHeading.addEventListener('mouseout', () => {
    logoHeading.setAttribute("style", "color:inherit;");
});
