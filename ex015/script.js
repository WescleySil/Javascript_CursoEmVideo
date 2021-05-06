function verificar(){
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')
        if(nasc.value.length == 0 || nasc.value > anoatual){
            window.alert('[ERRO]Verifique os dados e tente novamente')
        }
    var sexf = document.getElementsByName('radio')
    var idade = anoatual - Number(nasc.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var genero = ''
    if(sexf[0].checked){
        genero ='Homem'
        if(idade >=0 && idade <= 10){
            //Criança
            img.setAttribute('src', 'criança-m.png')
        }else if(idade >=11 && idade < 22){
            //Jovem
            img.setAttribute('src', 'jovem-m.png')
        }else if(idade >=22 && idade < 40){
            //Adulto
            img.setAttribute('src', 'homem-m.png')
        }else{
            //Idoso
            img.setAttribute('src', 'idoso-m.png')
        }
    }else{
        genero ='Mulher'
        if(idade >=0 && idade <= 10){
            //Criança
            img.setAttribute('src', 'crianca-f.png')
        }else if(idade >=11 && idade < 22){
            //Jovem
            img.setAttribute('src', 'jovem-f.png')
        }else if(idade >=22 && idade < 40){
            //Adulta
            img.setAttribute('src', 'mulher-f.png')
        }else{
            //Idosa
            img.setAttribute('src', 'idoso-f.png')
        }
    }
    res.style.textAlign='center'
    res.innerHTML= (`Detectamos um(a) ${genero} com ${idade} anos.`)
    res.appendChild(img)
}
