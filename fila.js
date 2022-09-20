const input = document.querySelector("input");
const addButton = document.querySelector("button.add");
const removeButton = document.querySelector("button.remove");

const fila = [];

function addNumber() {
  fila.push(input.value);
}

addButton.onclick = () => {
  addNumber();
  console.log(fila);
  document.getElementById("fila").innerHTML = "Sua fila: <br>" + fila
};

function removeNumber() {
  fila.shift();
}

removeButton.onclick = () => {
  removeNumber();
  console.log(fila);
  document.getElementById("fila").innerHTML = "Sua fila: <br>" + fila
};