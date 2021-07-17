function calcular(){
    var txtnum = document.getElementById('numtab')
    var txttabuada = document.getElementById('tabuada')
    var num = Number(txtnum.value)
    if(txtnum.value.length == 0){
        alert(`[ERRO] Digite um número que seja diferente de 0`)
    }else{
        txttabuada.innerHTML = ''
        for(var c = 1; c <=10; c++){
            res = num * c
            var item = document.createElement('option')
            item.innerText +=  `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            txttabuada.appendChild(item)
        }
    }
}    