let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//resolução não ideal fazer ele ser menos que todos 
let maior = null;
let contImp = null
for (let posi = 0; posi < numbers.length; posi++) {
    if (numbers[posi] % 2 == 1) {
        contImp++;
    }
    else{
        if (contImp==0) {
            console.log("Nem um numero é impar")
        }
    }
}
console.log("temos " + contImp + " numeros impares");
