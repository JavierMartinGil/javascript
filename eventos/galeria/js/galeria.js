// script de la galeria

var imagen = document.getElementById('imagen');
var imagenInicial = parseInt(Math.random()*3)+1;
imagen.src = "images/image_"+ imagenInicial +".jpg";
var avance = imagenInicial;

var btnIzd = document.getElementById('izq');
var btnDer = document.getElementById('der');

btnIzd.addEventListener('click', cargarImagen);

btnDer.addEventListener('click', cargarImagen);

// crear intervalos para llamar a una funcion cada x segundos

var intervalo = setInterval(moverCarrusel, 3000);

function moverCarrusel(){

    console.log('moviendo');
    avance++;
    if (avance >= 4){avance = 1};
    
    imagen.src = "images/image_"+avance+".jpg";
}

function cargarImagen(event){

    switch(event.target.id){

    case "izd":
        // restar uno
        avance--;
        if (avance<=0) {
            avance= 3;
        }
    break;

    case "der":
        // sumar uno
        avance++;
        if (avance>=4) {
            avance= 1;
        }
    break;
   }
   console.log(avance);
   imagen.src = "images/image_"+avance+".jpg";
    
};
