function verificar(){
    var data = new Date()

    var ano = data.getFullYear()

    var fano = document.getElementById('txtano')

    var res = document.getElementById('res')
    //var res = document.querySelector('div#res')

    if(fano.value.lenght == 0 || fano > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        window.alert('Tudo ok!!')
    }
}