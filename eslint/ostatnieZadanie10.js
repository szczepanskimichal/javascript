// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// const controls = document.getElementById("controls");
// const createButton = controls.querySelector("[data-create]");
// const destroyButton = controls.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// createButton.addEventListener("click", () => {
//   const amount = parseInt(controls.querySelector("input").value);

//   if (isNaN(amount) || amount < 1 || amount > 100) {
//     alert("Please enter a valid number between 1 and 100.");
//     return;
//   }

//   const boxElements = [];

//   for (let i = 0; i < amount; i++) {
//     const size = 30 + i * 10;
//     const box = document.createElement("div");
//     box.style.width = `${size}px`;
//     box.style.height = `${size}px`;
//     box.style.backgroundColor = getRandomHexColor();
//     boxElements.push(box);
//   }

//   boxesContainer.append(...boxElements);
// });

// destroyButton.addEventListener("click", () => {
//   boxesContainer.innerHTML = "";
// });
//--------------------------------------------
// const inputAmount = document.getElementById("inputAmount");
// const createButton = document.getElementById("createButton");
// const destroyButton = document.getElementById("destroyButton");
// const boxesContainer = document.getElementById("boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// function createBoxes(amount) {
//   clearBoxes();
//   let size = 30;

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = size + "px";
//     box.style.height = size + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);
//     size += 10;
//   }
// }

// function clearBoxes() {
//   while (boxesContainer.firstChild) {
//     boxesContainer.removeChild(boxesContainer.firstChild);
//   }
// }

// createButton.addEventListener("click", function () {
//   const amount = parseInt(inputAmount.value, 10);
//   createBoxes(amount);
// });

// destroyButton.addEventListener("click", function () {
//   clearBoxes();
// });
//------------------------------------------------------------------
// const inputAmount = document.querySelector("#controls input");
// const createButton = document.querySelector("[data-create]");
// const destroyButton = document.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }

// function createBoxes(amount) {
//   clearBoxes();
//   let size = 30;

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.width = size + "px";
//     box.style.height = size + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     boxesContainer.appendChild(box);
//     size += 10;
//   }
// }

// function clearBoxes() {
//   while (boxesContainer.firstChild) {
//     boxesContainer.removeChild(boxesContainer.firstChild);
//   }
// }

// createButton.addEventListener("click", function () {
//   const amount = parseInt(inputAmount.value, 10);
//   createBoxes(amount);
// });

// // destroyButton.addEventListener("click", function () {
// //   clearBoxes();
// // });
// destroyButton.addEventListener("click", function () {
//   clearBoxes();
//   inputAmount.value = 1;
// });
//-------------------------------------------------------
