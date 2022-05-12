// BUBBLE SORT / ORDENAMIENTO BURBUJA

let numeros = [4, 10, 2, 1, 18, 15, 9, 3];

let ordenar = (arr) => {
    let temporal;
    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr.length - 1; j++){
            
            if(arr[j] > arr[j + 1]){
                temporal = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temporal
            }            
        }
        // console.log(`Estoy en la vuelta ${i + 1}`);
        // console.log(arr);
    }
}
console.log('---Antes de ordenar los numeros de menor a mayor:---');
console.log(numeros);
ordenar(numeros);
console.log('---Los numeros de menor a mayor:---');
console.log(numeros);