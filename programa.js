/*let nombre;
nombre=prompt();
console.log("hola "+ nombre);
*/

let base, altura;

function calcular(base, altura){
    let area= base*altura;
    let perimetro=2*(base+altura);
    //valores que retorna la funcion a quien la llama
    return[area, perimetro];
}

function calcular_hipotenusa(a,b){
    const hipotenusa= Math.sqrt(a**2+b**2);
    return hipotenusa;
}

/*esta funcion retorrna valores
let resultado=calcular(10, 20);

//imprimer el area
console.log(resultado[0]);
*/

let resultado=calcular_hipotenusa(10,20);

console.log(resultado);