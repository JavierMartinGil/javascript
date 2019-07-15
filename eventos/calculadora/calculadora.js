var botones = document.getElementsByClassName('btn');
var primerNumero = 0;
var segundoNumero = 0;
var input = document.getElementById('valores')
var operacion = "";

for (boton of botones){
    boton.addEventListener('click', detectarBoton);
}

function detectarBoton(evento){

    switch(event.target.innerText){

        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            input.value+= event.target.innerText;
        break;
        case "SUMA":
        case "RESTA":
        case "MULTI":    
            primerNumero = parseInt(input.value);
            operacion = event.target.innerText;
            input.value = "";
        break;
        case "IGUAL":
            segundoNumero = parseInt(input.value);
            input.value = "";
            obtenerResultado(primerNumero, segundoNumero, operacion)
        break;
    }
}


function obtenerResultado(pNumero1,pNumero2,pOperacion){

    switch (pOperacion){
        case "SUMA":
        input.value = suma(pNumero1,pNumero2);
        break;

        case "RESTA":
        input.value = resta(pNumero1,pNumero2);
        break;

        case "MULTI":
        input.value = multiplicacion(pNumero1,pNumero2);
        break;

    }

}

// operaciones

function suma(pNumero1, pNumero2){

    return pNumero1 + pNumero2;
}

function resta(pNumero1, pNumero2){

    return pNumero1 - pNumero2;
}

function multiplicacion(pNumero1, pNumero2){

    return pNumero1 * pNumero2;
}