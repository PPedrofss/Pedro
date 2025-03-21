function maior(arrayNumeros){

var maior = 0 
for(var i = 0; i < arrayNumeros.length; i ++){
    if (arrayNumeros[i] > maior){
        maior = arrayNumeros[i]
    }
}
console.log(maior)
}
maior([2, 3, 4, 5, 6, 8, 9, 12])
