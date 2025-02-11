/* Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];

function swap(array, indice1, indice2) {
    let indiceTemporal = array[indice1];

    array[indice1] = array[indice2];
    array[indice2] = indiceTemporal;
    
    console.log(array);
    return array;
}

swap(fantasticFour, 0, 0);
