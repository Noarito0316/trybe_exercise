array = [2, 3, 6, 7, 10, 1];


function maiorindece(a) {
    countmax = null;
    for (key in array){
        if (a[key]>countmax){
        countmax = key
        }
    }
    console.log(countmax);    
}
maiorindece(array);