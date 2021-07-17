//fatorial de um numero
//Exemplo 4f = 4x3x2x1
function fatorial(n){
    let fatorial = 1
    for (var c = n; c > 1; c--){
        fatorial = fatorial * c
    }
    return fatorial
}
console.log(fatorial(6))