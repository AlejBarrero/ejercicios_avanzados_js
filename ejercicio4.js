/* 1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.
Haz varios ejemplos y compruébalos. */

function findArrayIndex(array, text) {
    for (let item of array) {
            if (text === item) {
                console.log("La posicion del elemento es: " + array.indexOf(item));
                return array.indexOf(item);
        }
    }
}

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];

// findArrayIndex(mainCharacters, "Anakin");

/* ********************************************************** 
2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.
Finalmente retorna el array.
De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function removeItem(array, texto) {
    let index = findArrayIndex(array, texto);

    if (index !== -1) {
        array.splice(index, 1);
    } else {
        console.log("El elemento no se encuentra en el array");
    }
    console.log(array);
    return array;
}

removeItem(mainCharacters, "Han Solo");
