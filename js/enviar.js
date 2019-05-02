$(document).ready(function () {
    $('#btn-enviar').click(function () {

        if ($('#nombre').val() < 1 || $('#apellidos').val() < 1 ||
            $('#correo').val() < 1 || $('#telefono').val() < 1) {
                $("body").overhang({
                    type: "error",
                    message: "Favor de a completar los campos en blanco",
                    closeConfirm: true
                });
        } else {
            var ruta = "nom="+$('#nombre').val()+"&ape="+$('#apellidos').val()+"&cor="+$('#correo').val()+
            "&tel="+$('#telefono').val();

            $.ajax({
                url:"php/datos.php",
                type:"POST",
                data:ruta,
            })
            .done(function(res){
                $("body").overhang({
                    type: "success",
                    message: "Sus datos: "+res,
                    closeConfirm: true
                  });
            })
            .fail(function() {
                $("body").overhang({
                    type: "error",
                    message: "Error al procesar los datos",
                    closeConfirm: true
                });
            })
        }
    });


});