let num = [5, 8, 2, 9, 3]

num.sort()

console.log(`Nosso vetor é o ${num}`)

console.log(`Nosso vetor é o ${num}`)

num[5]= 10

console.log(`Nosso vetor é o ${num}`)

num[4]= 7

console.log(`Nosso vetor é o ${num}`)

num.push(1)

console.log(`Nosso vetor é o ${num}`)

num.push(100)

console.log(`Nosso vetor é o ${num}`)

num.push(200)

console.log(`Nosso vetor é o ${num}`)

console.log(`Tamanho do vetor é ${num.length}`)

num.sort() //coloca em ordem

console.log(`Nosso vetor é o ${num}`)

//percurso para exibição de vetor
for (var pos=0; pos < num.length; pos++)
     console.log(`A posição ${pos} tem o valor ${num[pos]}`)

for(let pos in num)
    console.log(num[pos])


let verifica = num.indexOf(300)

if(verifica == -1){
       console.log(`valor não encontrado`)
}else{
      console.log(`valor é igual a ${verifica}`)
}

