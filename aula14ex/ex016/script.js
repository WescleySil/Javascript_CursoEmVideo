function contar(){
    var inicio = document.getElementById('comeco')
    var fim = document.getElementById('final')
    var pular = document.getElementById('passo')
    var res = document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = `Impossivel contar`
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(pular.value)
        if (p <= 0 || p == ''){
            alert(`Impossivel contar sem um passo definido\nVamos usar o 1`)
            var p  = 1
        }
        if (i < f){
            for(var cont = i; cont <= f; cont += p){
                res.innerHTML += `${cont} \u{1F449}`
            }
        }else{
            for (var cont = i; cont>= f; cont -= p){
                res.innerHTML += `${cont} \u{1F449}`
            }
        }
    }res.innerHTML+= `\u{1F3C1}`
}