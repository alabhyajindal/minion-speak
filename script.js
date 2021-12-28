var button = document.querySelector(".translate");
var textInput = document.querySelector(".textarea");
var outputArea = document.querySelector(".output");

function clickHandler() {
  outputArea.innerText = "Translated: " + textInput.value;
}

button.addEventListener("click", clickHandler);
