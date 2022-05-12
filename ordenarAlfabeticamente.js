/*Ordenar la siguiente lista alfabeticamente*/
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

const ordenarAsc = (array) => {
    let edadesTemporal; //Solo la declaro, no necesito que tenga ningun valor.
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j + 1]){
                edadesTemporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = edadesTemporal
            }
        }
        // console.log(`Estoy en la vuelta ${i + 1}`);
        // console.log(array);
    }
    return array /*Si el ejercicio no me pide retornar, 
    entonces solo hago console.log antes y despues, con la 
    función = ordenarAsc(edades)*/
};
console.log('---Lista de letras dada---');
console.log(letras)
ordenarAsc(letras)
console.log('---Letras ordenadas Alfabeticamente:---');
console.log(letras)