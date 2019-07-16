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