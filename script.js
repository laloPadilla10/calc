const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const resultado = document.getElementById("result");

console.log(numero1);
console.log(numero2);

const btnSum = document.getElementById('sum')
const btnRes = document.getElementById("res")
const btnMul = document.getElementById("mul")
const btnDiv = document.getElementById("div")

const sum = (a, b) => a + b
const res = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

const handleSum = () => {
    const num1 = parseInt(numero1.value)
    const num2 = parseInt(numero2.value)
    resultado.value = sum(num1,num2)
}
let n=0;
function sumas(numero1,numero2){
  return n=numero1.value*numero2.value;
}
/* 
const handleSum = () => {
    const num1 = parseInt(numero1.value)
    const num2 = parseInt(numero2.value)
    resultado.value = sum(num1, num2)
} */

const handleRes = () => {
    resultado.value = res(numero1.value, numero2.value)
}

const handleMul = () => {
    resultado.value = mul(numero1.value, numero2.value)
}

const handleDiv = () => {
    resultado.value = div(numero1.value, numero2.value)
}

btnSum.addEventListener("click", sumas(numero1,numero2))
btnRes.addEventListener("click", handleRes)
btnMul.addEventListener("click", handleMul)
btnDiv.addEventListener("click", handleDiv)




/* const resta = (a,b) => a-b;
 const suma = (a,b) => a+b;
 const multiplicacion = (a,b) => a*b;
const division = (a,b) => a/b;

const botonSuma = document.getElementById("suma");
const botonResta = document.getElementById("resta");

function suma(numero1,numero2){
    resultado.value = numero1-numero2;
    console.log(numero1);

}

botonSuma.addEventListener("click",suma(numero1,numero2));

console.log(numero1);
console.log(numero2);
botonSuma.addEventListener("click",resta)
*/



