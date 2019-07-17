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
    
        var busqueda = pPalabra.replace(/ /g,""); // quito los espacios en blanco
        busqueda = busqueda.toLowerCase(); // lo paso a minusculas
        /*
        includes //funcion que busca una cadena contenidaen otra
        startsWith // funcion que busca una cadena que empiece por otra
        endsWith // funcion que busca una cadena que termine por otra
        
        */

        var listaTemporal = listaTareas.filter(function (tarea){
            var mitarea = tarea.titulo.replace(/ /g,"");
            mitarea = mitarea.toLowerCase();

            return mitarea.includes(busqueda);
            
        })
        
        return listaTemporal;
        
    };

    
