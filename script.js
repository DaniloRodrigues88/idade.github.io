function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] verifique os dados e tente novamente!')
    } else{
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'Homem-Jovem.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'j-Homem.jpeg')
                
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Homem.jpeg')
            } else{
                //idoso
                img.setAttribute('src', 'Homem-Idoso.jpeg')
            }
            
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'Mulher-Jovem.jpeg' )
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'j-Mulher.jpeg')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'Mulher.jpeg')
            } else{
                //idoso
                img.setAttribute('src', 'Mulher-Idosa.jpeg')
            }
        }

        res.innerHTML =`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }

}