

function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){

        window.alert('Por favor, digite um número')

    }else{

        let n = Number(num.value)

        let c = 1

        tab.innerHTML='' //para limpar o tab quando for realziar outra tabuada

        while(c<=10){
            let item = document.createElement('option')  //criou um item dentro de select

            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) //acrescentou o item ao tab

            c++
        }
    }

}





