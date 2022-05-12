/*Crear una función que ordene de forma 
ascendente las edades dadas. El simbolo > es Asc*/
const edades = [33, 27, 34, 30, 34, 25];

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
console.log('---Lista de edades dada---');
console.log(edades)
let arrayOrdenadoAsc = ordenarAsc(edades)
console.log('---Números ordenados de menor a mayor---');
console.log(arrayOrdenadoAsc)


/*Crear una función que ordene de forma 
descendente las edades. El simbolo < es Desc*/
const edades2 = [33, 27, 34, 30, 34, 25];

const ordenarDesc = (array) => {
    let edadesTemporal;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] < array[j + 1]){
                edadesTemporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = edadesTemporal
            }
        }
        // console.log(`Estoy en la vuelta ${i + 1}`);
        // console.log(array);
    }
    return array
};
console.log('---Lista de edades dada---');
console.log(edades2)
let arrayOrdenadoDesc = ordenarDesc(edades2)
console.log('---Numeros ordenados de mayor a menor---');
console.log(arrayOrdenadoDesc)