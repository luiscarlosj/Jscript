var nome1 = "Gustavo Deschamps"  //permite tanto redeclaração quanto reatribuição; também hoisting
let nome2 = "Sousa Deschamps"   //não permite redeclaração mas permite reatribuição; também hoisting
const nome3 = "Luis Deschamps"  //não pode ser redeclarado e nem reatribuído

console.log(nome2)
console.log(nome3+`\n`)

//exemplo de redeclaração do var
function retornarNome1(){
    var nome1 = "Felipe Deschamps" 
    return nome1     
}

console.log(retornarNome1())
console.log(`aqui 1: ${nome1}\n`)

//exemplo de reatribuição do var
function retornarNome2(){
    nome1 = "Carlos Deschamps" 
    return nome1     
}

console.log(retornarNome2())
console.log(`aqui 2: ${nome1}\n`) 

//exemplo de reatribuição do let
function retornarNome3(){
    nome2 = "Junior Deschamps" 
    return nome2    
}

console.log(retornarNome3())
console.log(`aqui let 1: ${nome2}\n`) 

//exemplo de redeclaração do let
function retornarNome4(){
    let nome2 = "Junior2 Deschamps" 
    return nome2    
}

console.log(retornarNome4())
console.log(`aqui let 2: ${nome2}\n`) 