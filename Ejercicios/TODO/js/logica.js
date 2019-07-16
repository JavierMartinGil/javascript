function addTarea(pTitulo, pPrioridad){
    var nuevaTarea = {
        idTarea: contadorTareas,
        titulo: pTitulo,
        prioridad: pPrioridad
    }

    listaTareas.push(nuevaTarea);
    //console.log(listaTareas);
    contadorTareas++;
    return nuevaTarea;
}

function borrartarea(pId){
    // buscar que existe una tarea con idTarea sea pId
    
    listaTareas = listaTareas.filter(function (tarea){
        return tarea.idTarea != pId;
    })

    pintarTareas(listaTareas);
}

function filtraTareas(pPrioridad){

    var listaTemporal = listaTareas.filter(function(tarea){

        return tarea.prioridad == pPrioridad;

    });

    return listaTemporal;
}

function buscarTarea(pPalabra){
    var listaTemporal = listaTareas.filter(function(tarea){
        
        return tarea.titulo.toLowerCase().startsWith(pPalabra);
        
    });

    return listaTemporal;
}