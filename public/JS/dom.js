


var parrafos = document.getElementsByTagName('p');
var nombre = document.getElementsByName('nombre');

var elementosClase = document.getElementsByClassName('clase');
var inputEdad = document.getElementById ('edad');

console.log(parrafos[0].innerHTML);
console.log(nombre[0].innerHTML);
console.log(elementosClase[0].innerHTML);
console.log(elementosClase);

console.log(inputEdad);
inputEdad.value = 1;
console.log(inputEdad.value);
