const input = document.querySelector("input")
const addBtn = document.querySelector("button.add")

class No {
  constructor(valor) {
    this.valor = valor
    this.esquerdo = null
    this.direito = null
  }
}

class Arvore {
  constructor() {
    this.raiz = null
  }

  adicionar(valor) {
    const novoNo = new No(valor)

    if (!this.raiz) {
      this.raiz = novoNo
    } else {
      let atual = this.raiz
      while (atual) {
        if (valor < atual.valor) {
          if (!atual.esquerdo) {
            atual.esquerdo = novoNo
            break
          } else {
            atual = atual.esquerdo
          }
        } else if (valor > atual.valor) {
          if (!atual.direito) {
            atual.direito = novoNo
            break
          } else {
            atual = atual.direito
          }
        } else {
          throw new Error("Tente um novo valor")
        }
      }
    }

  }
}

const arvore = new Arvore()

addBtn.onclick = () => {
    arvore.adicionar(input.value)
    console.log(arvore)  
    document.getElementById("arvore").innerHTML = "Sua árvore: <br>" + arvore
}