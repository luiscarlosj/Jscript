
function parimp(n){
    if(n%2==0){
      return 'par'
    }else{
      return 'impar' 
    }
}


//poderia ser function soma(n1=0, n2), com um parâmetro já iniciado
function soma(n1, n2){
   return n1+n2
}

let res = parimp(11) //linha que faz o disparo da funçao e envia como parâmetro o número 11

console.log(res)

console.log(parimp(2))

console.log(soma(2, 3))

//aqui iniciando uma variavel com uma função e passando parâmetro para ela
let v = function(x){
   return x*2
}

console.log(v(2))

//função fatorial
function fatorial(y){
     let fat = 1;

     for(let c=y; c>1; c--)
     {
         fat*=c
     }

     return fat
}

console.log(fatorial(5))

//fatorial com função recurssiva
function fatorial2(n){
  if(n==1){
    return 1
  }else{
    return n * fatorial2(n-1)
  }

}

console.log(fatorial2(5))
