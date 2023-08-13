function mostrarDatos() {
    let n1 = parseFloat(traerNumero("num1"));
    let n2 = parseFloat(traerNumero("num2"));
    let operator = traerNumero("operador");
    let result = 0;
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                result = "Error";
                break;
            }
            result = n1 / n2;
            break;
        default:
            break;
    }
    result = result.toString().slice(0, 20);
    if (isNaN(result)) {
        result = "Error";
    }
    document.getElementById("resultado").innerHTML = result;
}
function borrarDatos() {
    document.getElementById("resultado").innerHTML = 0;
    document.getElementById("num1").innerHTML = "Ingrese el primer numero";
    document.getElementById("num2").innerHTML = "Ingrese el segundo numero";
}
function traerNumero(id) {
    return document.getElementById(id).value;
}
