const input = document.querySelector("input");

const addButtonPilha = document.querySelector("button.addPilha");
const removeButtonPilha = document.querySelector("button.removePilha");

const pilha = []

function addNumberPilha() {
    pilha.push(input.value);
  }
  
  addButtonPilha.onclick = () => {
    addNumberPilha();
    console.log(pilha + "\n");
    document.getElementById("pilha").innerHTML = "Sua pilha: <br>" + pilha
  };
  
  function removeNumberPilha() {
    pilha.pop();
  }
  
  removeButtonPilha.onclick = () => {
    removeNumberPilha();
    console.log(pilha + "\n");
    document.getElementById("pilha").innerHTML = "Sua pilha: <br>" + pilha
  };