var trabajo = $('.trabajo');

trabajo.on('click', cargarModal);

function cargarModal(){

$('body').append(`<div class="modal">
                        <div class="manto">
                            <div class="contenedor">
                                <img src="images/g-architecture.jpg">
                                <h4>User experience - dinamicos</h4>
                                <h3>Architechture</h3>
                                <div class="cerrar">
                                    <img src="images/cerrar.png" alt="cerrar">
                                </div>
                            </div>
                        </div>
                    </div>`);
$('.modal').fadeIn(400);
$('.modal .contenedor').animate({'top': '4%',})

}