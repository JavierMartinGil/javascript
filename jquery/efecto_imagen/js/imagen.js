var contenedor = $('.contenedor');

contenedor.hover(entra, sale);

function entra(){
    
    $(this).find('.info').animate({'left':'0px'})
}

function sale(){

    $(this).find('.info').animate({'left':'-400px'})
}