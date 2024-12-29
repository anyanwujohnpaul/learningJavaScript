// External JavaScript

// created a createParagraph() function
function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "It was nice seeing you click the button!";
  document.body.appendChild(para);
}

//Queried the button selector
const buttons = document.querySelectorAll("button");

// //Looping through the buttons and implementing the .addEventListener
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}

// //A quick look into Document Object Model
// const button = document.querySelector("button");

// function updateName() {
//   const job = prompt("Enter a new name");
//   button.textContent = `Software Engineer: ${job}`;
// }

// button.addEventListener("click", updateName);
