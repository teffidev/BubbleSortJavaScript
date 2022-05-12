/*¿Cómo podrías ordenar la colección, de menor a mayor, 
considerando solo la estatura?*/ 

let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

let ordenarAsc = (array) => {
    let temporal;
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++){
            if(array[j].estatura > array[j + 1].estatura){
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
console.log('---Antes de ordenar estaturas:---');
console.log(personas);
let edadesOrdenadasAsc = ordenarAsc(personas)
console.log('----Estaturas ordenadas:----');
console.log(edadesOrdenadasAsc);