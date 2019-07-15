var selectDiagnostico = document.getElementById('selectDiagnostico');
var selectEdad = document.getElementById('selectEdad');

var listaEnfermedades = [...new Set(listaDePacientes.map(paciente => paciente.diagnostico))];

// var edades = [...new Set(listaDePacientes.map(paciente => paciente.edad))];

// console.log(listaEnfermedades);

// var listaEnfermedades = new Array();

/* for (paciente of listaDeEnfermedades) {
    listaEnfermedades[paciente.diagnostico] = paciente.diagnostico;
} */

// pintar el contenido dentro de los option del select recorriendo el array de pacientes
for (enfermedad of listaEnfermedades) {
    selectDiagnostico.innerHTML += '<option value="'+ enfermedad +'">'+ enfermedad +'</option>';
}

selectDiagnostico.addEventListener('change', obtenerDiagnostico);
selectEdad.addEventListener('change', obtenerEdades)
// selectEdad.addEventListener('blur', obtenerEdades)

function obtenerDiagnostico(e) {
    filtrarPorDiagnostico(listaDePacientes, e.target.value);
}

function obtenerEdades(e){
    var listaOpciones = e.target.options;
    
    var listaSeleccionados = new Array();
    for (var i=1; i<listaOpciones.length; i++){
        if(listaOpciones[i].selected){
            listaSeleccionados.push(listaOpciones[i].value);
        }
        if(listaSeleccionados.length == 2){
            break;
        }
    }
    
    filtrarPorEdad(listaDePacientes, listaSeleccionados[0], listaSeleccionados[listaSeleccionados.length-1])
}
