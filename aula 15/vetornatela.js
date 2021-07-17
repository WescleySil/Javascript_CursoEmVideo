/*Primeira forma de mostrar os valores do vetor (pouco eficaz)

let num = [9, 2, 1, 3, 5, 8, 4, 7, 6]

console.log(valores)*/
/*Segunda forma de mostrar  os valores do vetor (Pior forma se vc faz isso vc DEVE parar.)

let num = [9, 2, 1, 3, 5, 8, 4, 7, 6]

console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])
console.log(num[6])
console.log(num[7])
console.log(num[8])
*/
//Forma mais eficaz de mostrar os valores
//poucas linhas e faz o mesmo que os de cima só que de forma melhor.
//Primeiramente eu começo declarando uma variavel composta(vetor).
/*let num = [9, 2, 1, 3, 5, 8, 4, 7, 6]
num.sort()
//O objetivo do progama é mostrar todos os valores do meu vetor de forma crescente.
for (let pos = 0; pos <num.length; pos++){
    console.log(num[pos])*/
    //A cada soma na variavel pos, o progama mostra um número diferente
    //pois em cada posição do vetor há um número diferente.
//}
//Forma eficiente mas com menos codigo ainda.
var val = [0, 2 ,1 ,3]
val.sort()
for(var pos in val){
    console.log(`${val[pos]}`)
    
}
console.log(`O número 2 está na posição  ${val.indexOf(2)}`)
//Para cada posição dentro de val eu mostro val[pos] -> valores do vetor