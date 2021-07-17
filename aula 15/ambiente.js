let num = [3, 9, 7, 5]
num[7] = 2
num.push(1)
num.sort()
//Num.sort organiza os valores em forma crescente. 
//O num.push e o num[7] = 2 servem para adicionar valores ao vetor
console.log(`Nosso vetor é ${num} e ele tem ${num.length} posiçoes.\n
Eles na ordem crescente seria assim ${num.sort()}`)
//O num.length mostra quantos elementos/posições o vetor tem.
