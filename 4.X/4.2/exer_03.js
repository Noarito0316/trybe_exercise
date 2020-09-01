let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let media = numbers.length
for (let posi = 0; posi < numbers.length; posi++) {
    soma = soma + numbers[posi];
}
console.log(soma/media);