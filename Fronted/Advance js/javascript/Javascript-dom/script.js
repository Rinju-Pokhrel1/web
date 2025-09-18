// Select only the first .box
let firstBox = document.querySelector(".box");
firstBox.style.background = "orange";  // changes only the first box

// Select all .box elements
let allBoxes = document.querySelectorAll(".box");

// Change backgrounds
allBoxes[0].style.background = "yellow";
allBoxes[1].style.background = "red";
allBoxes[2].style.background = "blue";

// Loop through all boxes and apply random border width
allBoxes.forEach((box) => {
  let randomWidth = Math.floor(Math.random() * 10) + 1;
  box.style.border = `${randomWidth}px solid black`;
});
