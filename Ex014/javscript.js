function carregar(){
    var titulo = document.getElementById('titulo')
    var title = document.getElementById('title')
    var msg = document.getElementById('msg')
    var foto = document.getElementById('fotos')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`

    if (hora >= 0 && hora <=12){
        foto.src=  'bomdia.png'
        title.innerHTML= 'Bom dia !'
        titulo.innerHTML= 'Bom dia !'
        document.body.style.background = '#ffb021'
    }else if (hora >=13 && hora < 18){
        foto.src= 'boatarde.png'
        title.innerHTML= 'Boa Tarde'
        titulo.innerHTML= 'Boa tarde !'
        document.body.style.background = '#914700'
    }else{
        foto.src= 'boanoite.png'
        title.innerHTML= 'Boa noite'
        titulo.innerHTML= 'Boa noite !'
        document.body.style.background = '#4a575b'
    }
    
}