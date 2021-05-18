var res = document.getElementById('res')

var img = document.createElement('img')

img.setAttribute('id', 'foto')

var num = 0
var classif=''

function avancar(){

    res.innerHTML=''
    
            if (num==0){
                
                num++             
                img.setAttribute('src', '1.png')
                classif = 'número 1 (um)'
                res.innerHTML+= `Está no número ${num} <br>`
            }else if(num==1){ 
                
                num++              
                img.setAttribute('src', '2.png')
                classif = 'número 2 (dois)'
                res.innerHTML+= `Está no número ${num} <br>` 
            }else if(num==2){
                
                num++
                img.setAttribute('src', '3.jpg')
                classif = 'número 3 (três)'
                res.innerHTML+= `Está no número ${num} <br>`
            }else if(num==3){
                res.innerHTML+= `Está no limite ${num} <br>`
                window.alert(`Não pode mais avançar. Só vai até 3 (três)`)                
            }

       
        res.style.textAlign = 'center'
        res.innerHTML+= `${classif}`
        res.appendChild(img)
}

function retornar(){

    res.innerHTML=''
    
            if(num==1){ 
                
                res.innerHTML+= `Está no limite ${num} <br>`
                window.alert(`Não pode mais retornar.`) 
                
            }else if(num==2){
                
                num--
                img.setAttribute('src', '1.png')
                classif = 'número 1 (um)'
                res.innerHTML+= `Está no número ${num} <br>`

            }else if(num==3){
                num--             
                img.setAttribute('src', '2.png')
                classif = 'número 2 (dois)'
                res.innerHTML+= `Está no número ${num} <br>`            
            }

       
        res.style.textAlign = 'center'
        res.innerHTML+= `${classif}`
        res.appendChild(img)
}
