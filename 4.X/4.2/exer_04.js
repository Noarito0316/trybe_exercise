let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0
let media = numbers.length
for (let posi = 0; posi < numbers.length; posi++) {
    soma = soma + numbers[posi];
}
if (soma/media) {
    console.log("valor é " + soma/media + " e é maior que vinte");
}
else{
    console.log("valor é " + soma/media + " e é menor que vinte");
}