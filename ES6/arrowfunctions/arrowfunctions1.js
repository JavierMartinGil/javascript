/* let viajando = function (destino) {
    return `Viajando a la ciudad de: ${destino}`;

}

let viaje = viajando('Paris');

console.log(viaje); */

let viajando = (destino, duracion) => `Viajando a la ciudad de: ${destino} por ${duracion} días`;

let viaje = viajando('Paris', 10)

console.log(viaje);
