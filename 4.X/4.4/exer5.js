function verificaPalindrome(a) {
    let contpali = 0;
    for (let i = 0;i<a.length;i++){
        let oposeposi = a.length-1-i;
        if ( a[i] == a[oposeposi]){
            contpali++;
        }
        else{
            console.log("não é palindromo");
            return 0;
        }    
        if (contpali == a.length) {
            console.log("É um palindromo");
        }
    }    
}
verificaPalindrome("arara");
verificaPalindrome("desenvolvimento")