let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

console.log(mainTitle.innerText);

mainTitle.innerText = "Hola Chicas Tec";

console.log(mainTitle.innerText);

let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);

console.log(mainTexts[0].innerText);

let subtitles = document.getElementsByTagName("h2");
console.log(subtitles);
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);

let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);
/*
let mainButton = document.getElementById("main-button");
mainButton.addEventListener("click", function () {
  console.log("Has Presionado");
});*/
let mainButton = document.getElementById("main-button");
let currentBackgroundColor = document.body.style.backgroundColor;
if (currentBackgroundColor == "red") {
  document.body.style.backgroundColor = "white";
  mainButton.style.color = "white";
} else {
  document.body.style.backgroundColor = "red";
  mainButton.style.color = "red";
}
let magicNumber = document.querySelector("#magic-number").value;
console.log(`Valor ingresado en el input ${magicNumber}`);
