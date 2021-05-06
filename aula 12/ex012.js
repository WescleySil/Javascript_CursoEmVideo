var horaAtual = new Date()
var hora = horaAtual.getHours
if (hora >= '6:00' && hora <= '12:59'){
    console.log('Bom dia')
}else if(hora >= '13:00' && hora <='17:59'){
    console.log('Boa tarde')
}else if(hora >= '18:00'){
    console.log('Boa noite')
}else{
    console.log('Vai dormir está de madrugada')
}