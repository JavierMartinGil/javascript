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

function obtenerDiagnostico(e) {
    filtrarPorDiagnostico(listaDePacientes, e.target.value);
}