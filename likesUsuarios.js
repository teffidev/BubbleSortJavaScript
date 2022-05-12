/*En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. 
-- Ordenar los valores para poder indicar:
*¿Cuál fue la mayor cantidad de likes obtenidos?
*¿Cuánto obtuvo el segundo?
*¿Cuánto el tercero?
*y ¿Cuánto el que menos likes obtuvo?
—suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

const likes = [50, 60, 80, 15, 63, 48, 110, 45, 65, 23, 18, 98, 47, 78, 93, 210]

let ordenarLikes = (array) => {
    let temporal;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j + 1]){
                temporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temporal
            }
            // console.log(`Estoy en la vuelta ${i + 1}`);
            // console.log(array);
        }
    }
    return array
};
console.log('---Antes de ordenar likes:----');
console.log(likes);
let resOrdenarLikes = ordenarLikes(likes)
console.log('---Despues de ordenar likes:----');
console.log(resOrdenarLikes);

//¿Cuál fue la mayor cantidad de likes obtenidos?

let elMayor = (array) => {
    let maximo = array[0]
    
    for(let i = 0; i < array.length; i++){
        array[i] > maximo ? maximo = array[i] : maximo
        // if(array[i] > maximo){
        //     maximo = array[i]
        // }
    }
    return maximo
}
let resMayor = elMayor(likes)
console.log("--- Mayor cantidad de likes obtenidos: ----");
console.log(resMayor);

//*¿Cuánto obtuvo el segundo?

let elSegundo = (array) => {
    let maximo = array[0]
    let secundario = array[0]

    for(let i = 0; i < array.length; i++){
        if( array[i] > maximo){
            secundario = maximo
            maximo = array[i]           
        }

    }
    return secundario
}
elSegundo(likes)
console.log("--- El segundo fue: ----");
console.log(elSegundo(likes));

//*¿Cuánto el tercero?

let elTercero = (array) => {
    let maximo = array[0]
    let secundario = array[0]
    let tercero = array[0]

    for(let i = 0; i < array.length; i++){
        if( array[i] > maximo){
            secundario = maximo
            maximo = array[i]
            if(array[i] < secundario){
                tercero = array[i]
            }
            
        }
    }
    return tercero
}
elTercero(likes)
console.log("--- El Tercero fue: ----");
console.log(elTercero(likes));


//*¿Cuánto el que menos likes obtuvo?

let elMenor = (array) => {
    let minimo = array[0]
    
    for(let i = 0; i < array.length; i++){
        array[i] < minimo ? minimo = array[i] : minimo
        // if(array[i] < minimo){
        //     minimo = array[i]
        // }
    }
    return minimo
}
let resMenor = elMenor(likes)
console.log("--- Menor cantidad de likes obtenidos: ----");
console.log(resMenor);