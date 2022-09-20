const value = document.querySelector("input")
const index = document.getElementById("index")

const addButton = document.querySelector("button.add");

class HashTable{
	constructor(){
  	this.table = new Array(127)
  	this.size = 0
  }
  
  hash(key){
  	let hash = 0
    
  	for(let i = 0; i < key.length; i++){
  		hash += key.charCodeAt(i)
  	}
    
 		return hash % this.table.length
  }
  
  set(key, value){
  	const index = this.hash(key)
    this.table[index] = [key, value]
    this.size++
  }
  
  get(key){
  	const index = this.hash(key)
    return this.table[index]
  }
}

const ht = new HashTable()


addButton.onclick = () => {
    ht.set(value, index)
    
    document.getElementById("hash").innerHTML = "Sua tabela: <br>" + value.value + ', ' + index.value
}

ht.set("canadá", 300)
console.log(ht.get("canadá"))
