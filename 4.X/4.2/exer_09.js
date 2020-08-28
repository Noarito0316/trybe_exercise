let numbers = [null];
let divArray = [null];
for (let posi = 1; posi < 26; posi++) {
        numbers.push(posi);
        divArray[posi-1] = numbers[posi]/2; 
}
console.log(divArray);