let num = document.getElementById('txtval')
let lista = document.getElementById('msg')
let resfinal = document.getElementById('res')
let values = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n)<= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function botar(){
    if(isNumero(num.value) && !inLista(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        alert('[ERRO] Valor inválido ou já na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(values.length == 0){
        alert('[ERRO]Adicione algum número para finalizar')
    }else{
        let totalelementos = values.length
        let maior = Math.max.apply(null, values)
        let menor = Math.min.apply(null, values)
        let soma = 0
        for(var c = 0;c < totalelementos;c++){
            soma = soma + values[c]
        }
        var media = totalelementos/soma

        resfinal.innerHTML = ''
        resfinal.innerHTML += `<p>Ao todo, temos ${totalelementos} números cadastrados.</p>`
        resfinal.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        resfinal.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resfinal.innerHTML += `<p>A soma de todos os valores digitado foi de ${soma}</p>`
        resfinal.innerHTML += `<p>A média de todos os valores digitados foi de ${media}</p>`
    }
}