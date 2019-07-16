function addTarea(pTitulo, pPrioridad){
    var nuevaTarea = {
        
        idTarea: 0,
        titulo: pTitulo,
        prioridad: pPrioridad
        
    }

    listaTareas.push(nuevaTarea);
    console.log(listaTareas);
}