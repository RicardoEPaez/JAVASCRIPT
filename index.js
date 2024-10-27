const txtOp1 = document.getElementById("op1"); //  Recupera el primer elemento de entrada de operando por su identificador "op1".
const txtOperacion = document.getElementById("operacion"); //Recupera el elemento de entrada de operación por su identificador "operacion".
const txtOp2 = document.getElementById("op2"); //Recupera el segundo elemento de entrada de operando por su identificador "op2".
const btnCalcular = document.getElementById("calcular"); //Recupera el elemento de botón "calcular" por su identificador.
const pResultado = document.getElementById("resultado"); //Recupera el elemento de párrafo "resultado" por su identificador.

btnCalcular.addEventListener('click', calcular); //Asigna un controlador de eventos de clic al botón "calcular", lo que desencadena la función calcular al hacer clic.

function calcular() { //Define la funcion calcular que realiza calculo segun la operacion deseada
    const operacion = txtOperacion.value;
    const op1 = parseFloat(txtOp1.value);
    const op2 = parseFloat(txtOp2.value);

    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)) {
        let resultado;
        switch (operacion) {
            case "+":
                resultado = op1 + op2;
                break;
            case "-":
                resultado = op1 - op2;
                break;
            case "*":
                resultado = op1 * op2;
                break;
            case "/":
                resultado = op1 / op2;
                break;
        }
        pResultado.style.color = "black";
        pResultado.innerText = "= " + resultado;
    } else {
        pResultado.style.color = "red";
        pResultado.innerText = "Cálculo imposible";
    }
}
