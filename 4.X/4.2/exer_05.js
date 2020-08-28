let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//resolução não ideal fazer ele ser menos que todos 
let maior = null;
for (let posi = 0; posi < numbers.length; posi++) {
    if (numbers[posi]>maior) {
        maior = numbers[posi];        
    }
}
console.log(maior);
