$(document).on('ready',function(){

  $('.invalid-numero').hide();
  $('.invalid-base').hide();

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

