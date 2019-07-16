var contenedorTareas = document.querySelector('.tareas');


function pintarTareas(pListaTareas){

    contenedorTareas.innerHTML = "";

    for(tarea of pListaTareas){

        pintarUnaTarea(tarea)
    }
}

function pintarUnaTarea(pTarea){

   
        // boton eliminar
        var btnEliminar = document.createElement('a');
        var textEliminar = document.createTextNode('Eliminar');
        btnEliminar.appendChild(textEliminar);
        btnEliminar.href = "#";
        // set attribute modifica cualquier atributo de html pasado por parametro. getAttribute lo lee
        btnEliminar.setAttribute('onclick', 'borrartarea('+ pTarea.idTarea +')');
        

        // titulo tarea
        var tituloTarea = document.createElement('h2');
        var textoTarea = document.createTextNode(pTarea.titulo);
        tituloTarea.appendChild(textoTarea);

        //articulo o tarea completa
        var mitarea = document.createElement('article');
        mitarea.className = pTarea.prioridad;
        mitarea.dataset.id = pTarea.idTarea;

        mitarea.appendChild(tituloTarea);
        mitarea.appendChild(btnEliminar);

        contenedorTareas.appendChild(mitarea);
    
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
        pintarUnaTarea(addTarea(titulo, prioridad));
        document.getElementById('tituloTarea').value = "";
        document.getElementById('prioridad').value = "";

    } else{

        document.getElementById('mensaje').innerText = "Debes completar todos los campos";
    }
    
}

