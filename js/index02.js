//Variables para texto
  var mensaje_bin = "";
  var mensaje_oct = "";
  var mensaje_hex = "";
//Variables para texto

$(document).on('ready',function(){

  //Esconder errores
  $('.invalid-numero').hide();
  $('.invalid-base').hide();
  //Esconder errores

  //Boton calcular
    $( "#calcular" ).click(function() {
        var numero = $( "#numero" ).val();
        var base = $( "#base" ).val();
        validar(numero,base);
    });
  //Boton calcular

});

  var validar = function(n,b){
        if (n=='') {
          $( "#numero" ).focus();
          $('.invalid-numero').show();
        }else{
          $('.invalid-numero').hide();
        }
        if (b=='') {
          $( "#base" ).focus();
          $('.invalid-base').show();
        }else{
          $('.invalid-base').hide();
        }
        if (n != '' && b != '') {
          calcular(n,b);
        }
    }

  var calcular = function(n,b){ 
    alert(n);
    alert(b);
  }



