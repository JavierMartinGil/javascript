function pintarTareas(pListaTareas){

    var contenedorTareas = document.querySelector('.tareas');

    for (tarea of listaTareas) {
        // boton eliminar
        var btnEliminar = document.createElement('a');
        var textEliminar = document.createTextNode('Eliminar');
        btnEliminar.appendChild(textEliminar);

        // titulo tarea
        var tituloTarea = document.createElement('h2');
        var textoTarea = document.createTextNode(tarea.titulo);
        tituloTarea.appendChild(textoTarea);

        //articulo o tarea completa
        var mitarea = document.createElement('article');
        mitarea.className = tarea.prioridad;

        mitarea.appendChild(tituloTarea);
        mitarea.appendChild(btnEliminar);

        contenedorTareas.appendChild(mitarea);
    }
    
}

pintarTareas(listaTareas);

// capturar los elementos del formulario de insercion para añadir la tarea.

var btnGuardar = document.getElementById('guardar');

btnGuardar.addEventListener('click', recogerTarea);

function recogerTarea(e){

    e.preventDefault();
    var titulo = document.getElementById('tituloTarea').value;
    var prioridad = document.getElementById('prioridad').value;

    if(titulo != "" && prioridad != ""){

        addTarea(titulo, prioridad);
        document.getElementById('mensaje').innerText = "";
        pintarTareas(listaTareas);

    } else{

        document.getElementById('mensaje').innerText = "Debes completar todos los campos";
    }
    
}

