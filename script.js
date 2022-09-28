const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
const resultado = document.getElementById("result");
console.log("Scrpts 2");
//getElementById necesita un Obj
document.getElementById("sum").addEventListener("click",function(){resultado.value = parseInt(numero1.value)+parseInt(numero2.value); });
document.getElementById("res").addEventListener("click",function(){resultado.value = parseInt(numero1.value)-parseInt(numero2.value); });
document.getElementById("mul").addEventListener("click",function(){resultado.value = parseInt(numero1.value)*parseInt(numero2.value); });
/* document.getElementById("div").addEventListener("click",function(){resultado.value = parseInt(numero1.value)/parseInt(numero2.value); }); */

const botonDiv = document.getElementById("div")
const div = (a, b) => a / b
const dividir = () => {
    resultado.value = div(numero1.value, numero2.value)
}
botonDiv.addEventListener("click", dividir)
