let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = Infinity;
for (let posi = 0; posi < numbers.length; posi++) {
    if (numbers[posi]<menor) {
        menor = numbers[posi];        
    }
}
console.log(menor);