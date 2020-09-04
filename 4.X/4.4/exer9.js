array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];


function menorindece(a) {
    count = 0;
    for (key in array){
        if (a[key].length>a[count].length){
        count = key
        }
    }
    console.log(array[count]);    
}
menorindece(array);