/*Crear una función que ordene internamente 
de forma ascendente según él SALDO de cada cuenta, 
la misma deberá retornar él array ordenado.*/

/*Crear una función que ordene internamente de 
forma ascendente según la EDAD DEL TITULAR de cada 
cuenta, la misma deberá retornar él array ordenado.*/

const arrayCuentas = [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
];


/*Ordenando SALDO ascendentemente*/
const ordenarSaldoAsc = (array) => {
    let objetoTemporal;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j].saldo > array[j + 1].saldo){
                objetoTemporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = objetoTemporal
            }
        }
        // console.log(`Estoy en la vuelta ${i + 1}`);
        // console.log(array);
    }
};
console.log('---Saldo antes:---');
console.log(arrayCuentas)
ordenarSaldoAsc(arrayCuentas)
console.log('---Saldo despues:---');
console.log(arrayCuentas)


/*Ordenando EDAD DEL TITULAR ascendentemente*/
let ordenarEdadAsc = (array) => {
    let objetoTemporal;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j].edadTitular > array[j + 1].edadTitular){
                objetoTemporal = array[j]
                array[j] = array[j + 1]
                array[j + 1] = objetoTemporal
            }
        }
        // console.log(`Estoy en la vuelta ${i + 1}`);
        // console.log(array);
    }
};
console.log('---Edad titular antes:---');
console.log(arrayCuentas)
ordenarEdadAsc(arrayCuentas)
console.log('---Edad titular despues:---');
console.log(arrayCuentas)