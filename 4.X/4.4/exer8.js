array = [2, 3, 2, 5, 8, 2, 3];


function mais_repete(a) {
    count = 0;
    for (key in array){
        if (a[key].length>a[count].length){
        count = key
        }
    }
    console.log(array[count]);    
}
mais_repete(array);