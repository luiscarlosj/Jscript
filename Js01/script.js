
let num1 = document.querySelector('input#num1')
let num2 = document.querySelector('input#num2')


let res = document.querySelector('div#res')

res.innerHTML=''

function isNumero(n){
   
     if(Number(num1) != null && Number(num2) != null){
          return true

     }else{
          return false
     }

}

function somar(){
    
    if(isNumero)
       res.innerHTML+= `A soma entre ${num1.value} e ${num2.value} é ${Number(num1.value)+Number(num2.value)}<br>`
    else
       window.alert(`preencha todos os números`)
}


function subtrair(){
    if (isNumero)
    res.innerHTML+= `A subtração entre ${num1.value} e ${num2.value} é ${Number(num1.value) - Number(num2.value)}<br>`
    else
       window.alert(`preencha todos os números`)
}

function multiplicar(){
    if (isNumero)
    res.innerHTML+= `A multiplicação entre ${num1.value} e ${num2.value} é ${Number(num1.value)*Number(num2.value)} <br>`
    else
       window.alert(`preencha todos os números`)
}

function dividir(){

    if (isNumero) {
      if(Number(num2) != 0)
         res.innerHTML+= `A divisão entre ${num1.value} e ${num2.value} é ${Number(num1.value)/Number(num2.value)}<br>`
      else
         window.alert(`Divisão não realizada. Não há divisão por zero!!!`)
    }
}

function limpar(){

    num1.value=''
    num2.value=''
    res.innerHTML=''
    num.focus()

}



