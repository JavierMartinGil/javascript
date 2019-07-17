var enlace = "https://jsonplaceholder.typicode.com/posts";

var contenedor = document.querySelector('.contenedor');

var miJson = new XMLHttpRequest();

// abrir la url que me pasan para poder hacer la peticion

miJson.open('GET', enlace, true);

// hago el pedido y me lo envio

miJson.send();

miJson.addEventListener('readystatechange', cargaArchivo);

function cargaArchivo(e){

    if(e.target.readyState == 4 && e.target.status == 200){
        // tengo todo y la conexion es correcta
        var listaPost = new Array();
        listaPost = JSON.parse(e.target.responseText);
        pintarLista(listaPost);
        
    }
}

function pintarLista(pListaPost){

    /* console.log(pListaPost); */

        var contenido = "";

    for (var i=0 ; i<pListaPost.length; i++){

        var estado = (i%2==0)?"par":"impar";

        contenido+=`<article class="${estado}"><h2>${pListaPost[i].title}</h2>
        <p>${pListaPost[i].body}</p><a href="${enlace}/${pListaPost[i].id}">Enlace a la noticia entera</a></article>`

        /* if(i%2==0){
            contenedor.innerHTML += '<article class="par"><h2>'+pListaPost[i].title+'</h2><p>'+pListaPost[i].body+'</p><a href="">Enlace a la noticia entera</a></article>'
        }
        else{
            contenedor.innerHTML += '<article class="impar"><h2>'+pListaPost[i].title+'</h2><p>'+pListaPost[i].body+'</p><a href="">Enlace a la noticia entera</a></article>'
        } */
    }
        contenedor.innerHTML = contenido;

}