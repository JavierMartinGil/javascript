$('.faq h2').on('click', desplegar);

function desplegar(){
    
    var contenido = $(this).next();

    $('.faq p').slideUp(400);
    $('.faq h2').removeClass('titulo');


    if(contenido.css('display')=='none'){

        // desplegar
        contenido.slideDown(400);
        $('.faq h2').css('content','-');
        $(this).addClass('titulo');


    } else {

        // replegar
        contenido.slideUp(400);
    }

}