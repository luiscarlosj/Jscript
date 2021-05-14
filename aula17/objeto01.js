
let amigo = {nome:'José', 
sexo:'M', 
peso:85.4, 
engordar(p){
    console.log('Engordou')
    this.peso +=p
}}

amigo.engordar(2)

//dentro do objeto aindap posso implementar logo a função

console.log(typeof(amigo))

console.log(amigo)

console.log(amigo.nome)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

