
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
        window.alert('Tudo OK')
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }  


 
}





