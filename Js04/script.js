var res = document.getElementById('res')

res.innerHTML=''

function verificar(){

    var cer1 = document.getElementsByName('radcer1')
    var cer2 = document.getElementsByName('radcer2')

    if (cer1[0].checked){
        res.innerHTML+="Você acertou a primeira<br>"
    }else{
        res.innerHTML+="Você errou a primeira<br>"
    }

    if (cer2[0].checked){
        res.innerHTML+="Você acertou a segunda<br>"
    }else{
        res.innerHTML+="Você errou a segunda<br>"
    }

}