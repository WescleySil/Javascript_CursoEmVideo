function carregar(){
    var msg = document.getElementById('msg')
    var foto = document.getElementById('fotobomdia')
    var titulo = document.getElementById('titulo')
    var agora = new Date()
    var hora = agora.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        fotobomdia.src='bomdia.png'
        document.body.style.background = '#ffb021'
        titulo.innerHTML = 'Bom dia !'
        }else if (hora >= 12 && hora < 18){
            //BOA TARDE!
            fotobomdia.src='boatarde.png'
            document.body.style.background = '#914700'
            titulo.innerHTML = 'Boa tarde !'
        }else{
        //BOA NOITE
        fotobomdia.src='boanoite.png'
        document.body.style.background = '#4a575b'
        titulo.innerHTML = 'Boa noite !'
        }
    }