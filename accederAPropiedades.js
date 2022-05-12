/*Objeto Personas*/

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

//Acceder a propiedades:
console.log(personas[0].estatura);
console.log(personas[1].estatura);
console.log(personas[2].estatura);

/*Podemos crear un loop que itere sobre todo el array
y mostrar por consola alguna propiedad, así: */

for(let i = 0; i < personas.length; i++){
    console.log(personas[i].apellido);
    console.log(personas[i].estatura);
}

/*Ademas podemos aplicar condicionales dentro de un ciclo: */

for(let i = 0; i < personas.length; i++){
    if(personas[i].estatura > 170){
        console.log(personas[i].nombre);
    }
}

