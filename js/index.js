//Variables para texto
  var mensaje_bin = "<strong>Dividir</strong> por<strong> 2 </strong> sucesivamente el valor hasta llegar a <strong>0</strong>. Cuando exista residuo poner un <strong>1</strong>, cuando la division sea exacta poner un <strong>0</strong>.<br> Finalmente tomar los residuos de abajo hacia arriba.";
  var mensaje_oct = "<strong>Dividir</strong> por<strong> 8 </strong> sucesivamente el valor hasta llegar a <strong>0</strong>. Cuando exista residuo poner un <strong>1</strong>, cuando la division sea exacta poner un <strong>0</strong>.<br> Finalmente tomar los residuos de abajo hacia arriba.";
  var mensaje_hex = "<strong>Dividir</strong> por<strong> 16 </strong> sucesivamente el valor hasta llegar a <strong>0</strong>. Cuando exista residuo poner un <strong>1</strong>, cuando la division sea exacta poner un <strong>0</strong>.<br> Finalmente tomar los residuos de abajo hacia arriba.";
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

      var base_numerica;
                switch (b) {
                        case ('Binario'):
                              base_numerica = 2;
                            break;
                        case ('Octal'):
                              base_numerica = 8;
                            break;
                        case ('Hexadecimal'):
                              base_numerica = 16;
                            break;
                        default:
                              base_numerica = 2;
                    }
                switch (base_numerica) {
                        case (2):
                              $('#mensaje__base').html(mensaje_bin);
                            break;
                        case (8):
                              $('#mensaje__base').html(mensaje_oct);
                            break;
                        case (16):
                              $('#mensaje__base').html(mensaje_hex);
                            break;
                        default:
                              $('#mensaje__base').html(mensaje_bin);
                    }

                $('#numero_print').html('El numero a convertir es: '+'<strong>'+n+'</strong>');
                $('#base_print').html('La base a convertir es: '+'<strong>'+b+'</strong>');

            var numero_temp = n;
            var cadena = ' ';
            var calculos = '';
            while (numero_temp >= 1) {
                operacion = numero_temp / base_numerica;
                remainder = numero_temp % base_numerica;
                calculos = calculos + '<div class="row"><div class="col-md-4"></div><div class="col-md-4"><strong>'+n+'</strong> / <strong>'+numero_temp+'</strong> = <strong>'+operacion+'</strong></div><div class="col-md-4">residuo = <strong>'+remainder+'</strong></div></div>';
                numero_temp = Math.trunc(operacion);
                  //convertir numeros superiores a 9 en hexa
                    if (b == 'Hexadecimal') {
                           switch (remainder) {
                                case (10):
                                      remainder = 'A'
                                break;
                                case (11):
                                      remainder = 'B'
                                break;
                                case (12):
                                      remainder = 'C'
                                break;
                                case (13):
                                      remainder = 'D'
                                break;
                                case (14):
                                      remainder = 'E'
                                break;
                                case (15):
                                      remainder = 'F'
                                break;
                           }
                    }
                  //convertir numeros superiores a 9 en hexa
                cadena = cadena + String(remainder);
            }

             $('#calculos').html(calculos);
             invertir_cadena = cadena.split("").reverse().join("");
             $('#resultado').html('El numero: '+'<strong>'+n+'</strong>'+' en base: '+'<strong>'+b+'</strong>'+' es '+'<strong>'+invertir_cadena+'</strong>');



  }



