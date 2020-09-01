array = [2, 4, 6, 7, 10, 0, -3];


function menorindece(a) {
    countmin = Infinity;
    for (key in array){
        if (a[key]<countmin){
        countmin = key
        }
    }
    console.log(countmin);    
}
menorindece(array);