var c=1

//primeiro testa a condição, depois executa o bloco
while (c <= 6){
    console.log(`Passo ${c}`)
    c++
}

var c1=1

//primeiro executa o bloco, depois testa a condição
do{

    console.log(`Passo ${c1}`)
    c1++

}while(c1 < 6)

var c2

//poderia ter iniciado a variável dentro do for >> for (var c2=1; c2 < 6; c2++)

for (c2=1; c2<=6; c2++)
{
    console.log(`Passo ${c2}`)
}


