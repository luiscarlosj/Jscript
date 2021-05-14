
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')

let valores = []

function isNumero(n){
   
     if(Number(n) >= 1 && Number(n) <= 100){
          return true

     }else{
          return false
     }

}

function inLista(n, l){
     
     //-1 para indicar que não está na lista
     if(l.indexOf(Number(n)) != -1){
         return true
     }else{
         return false
     }

}

function adicionar(){
    
    //só vai adicionar se for um número e se não estiver na lista
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //window.alert('Tudo OK')

        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)

    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    } 
    
    num.value = ''
    num.focus()

}

function finalizar(){
      if(valores.length == 0){

          window.alert('Adicione valores antes de finalizar')
      }else{
          let tot = valores.length

          let maior = valores[0]
          let menor = valores[0]
          let soma = 0
          let media = 0
           
          //para pegar o maior e o menor numero
          for (let pos in valores){

              soma +=valores[pos]

              if (valores[pos] > maior)
                   maior = valores[pos]

              if(valores[pos] < menor)
                  menor = valores[pos]
          }
              
          media = soma / tot

          res.innerHTML = ''
          res.innerHTML += `<p>Temos ${tot} números cadastrados. </p>`
          res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
          res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`

          res.innerHTML += `<p>somando todos os valores temos: ${soma}.</p>`

          res.innerHTML += `<p>A média é ${media}.</p>`


      }

}



