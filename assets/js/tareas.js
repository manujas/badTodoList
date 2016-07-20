// marcar como hecha una tarea
$("ul").on("click", "li", function() { // el segundo argumento "li" permite que al hacer click en los nuevos li sigue funcionando
    $(this).toggleClass('hecho');
});

// click en la X para borrar la tarea
$("ul").on("click", "span", function (evento) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove(); // aqui this equivale a $(this).parent() del renglon anterior
    });
    evento.stopPropagation(); // evita que otros eventos se disparen
});

// Al presionar la tecla "enter" crea una nueva tarea
$("input[type='text']").keypress(function(evento) {
    if(evento.which === 13) { // 13 es ENTER
        // guarda la nueva tarea
        var textoNuevaTarea = $(this).val();
        if (textoNuevaTarea !== "") {
            $(this).val("");
            // creando nueva li y agregarla al ul
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + textoNuevaTarea + "</li>");
        }
        else {
            alert("Debes ingresar una tarea que debas hacer.");
        }
    }
});

// Click en el signo + permite mostrar y ocultar el input para crear una nueva tarea
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});