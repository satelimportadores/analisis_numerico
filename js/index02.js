//Variables para texto
  var mensaje_bin = "Para realizar la conversión de un numero <strong>binario a decimal</strong> de debe tomar el primer carácter de derecha a izquierda y elevarlo a potencia <strong>1</strong>, se deben realizar el mismo procedimiento con los demás caracteres aumentando la potencia al <strong>doble</strong> de la anterior.<br/> terminado este proceso se deben <strong>sumar</strong> los resultados obtenidos y dará como resultado el numero decimal.";
  var mensaje_oct = "Para realizar la conversion de un numero <strong>Octal a Decimal</strong> se debe tomar el primer caracter de derecha a izquierda y multiplicarlo por <strong>8</strong> elevarlo a potencia <strong>0</strong>, se debe continuar con este proceso con los demas caracteres aumentando la potencia al doble de la anterior.<br/> terminado este proceso se deben <strong>sumar</strong> los resultados obtenidos y dara como resultado el numero decimal.<br/>";
  var mensaje_hex = "Para realizar la conversion de un numero <strong>Hexadecial a Decimal</strong> se debe tomar el primer caracter de derecha a izquierda y multiplicarlo por <strong>16</strong> elevarlo a potencia <strong>0</strong>, se debe continuar con este proceso con los demas caracteres aumentando la potencia al doble de la anterior.<br/> terminado este proceso se deben <strong>sumar</strong> los resultados obtenidos y dara como resultado el numero decimal.";
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

            switch (base) {
                case ('Hexadecimal'):
                     validar_Hexadecimal(numero);
                    break;
                case ('Octal'):
                     validar_octal(numero);
                    break;
                case ('Binario'):
                     validar_binario(numero);
                    break;
                      
            }
     });
  //Boton calcular

  //Cambia el select
    $( "#base" ).change(function() {
              var base = $( "#base" ).val();
            switch (base) {
                case ('Hexadecimal'):
                      $('#texto').html('Ingresa un numero en hexadecial');
                    break;
                case ('Octal'):
                     $('#texto').html('Ingresa un numero en octal');
                    break;
                case ('Binario'):
                     $('#texto').html('Ingresa un numero en Binario');
                    break;                    
            }
    });
  //Cambia el select

});

  var validar_Hexadecimal = function(numeros){
          var cont =0;
          var base =0;
          var result =0;
          var valor =0;
          var calculos = '';

          $('#mensaje__base').html(mensaje_hex);

                for (var index=numeros.length-1; index >=0;index--){

                    valor =numeros.substr(index,1);

                        switch (valor) {
                            case ('A'):
                            valor = 10
                            break;
                            case ('B'):
                            valor = 11
                            break;
                            case ('C'):
                            valor = 12
                            break;
                            case ('D'):
                            valor = 13
                            break;
                            case ('E'):
                            valor = 14
                            break;
                            case ('F'):
                            valor = 15
                            break;
                        }

                    calculos = calculos + "valor:"+valor+"<br/>";  
                    calculos = calculos + "base:"+base+"<br/>";
                    cont=valor*Math.pow(16,base);
                    calculos = calculos + cont;  
                    calculos = calculos + "<br/>";
                    base = base+1
                    result =result+parseInt(cont);
                }

        $('#calculos').html(calculos);
        $('#resultado').html("<strong>El resultado es: "+result+'</strong>');
    }

  var validar_octal = function(numeros){
      var cont =0;
      var base =0;
      var result =0;
      var valor =0;
      var total =0;
      var calculos = '';
      
      $('#mensaje__base').html(mensaje_oct);

      for (var index=numeros.length-1; index >=0;index--){

      valor =numeros.substr(index,1);

      calculos = calculos + "valor:"+valor+"<br/>";  
      calculos = calculos + "base:"+base+"<br/>";
      cont=valor*Math.pow(8,base);  
      calculos = calculos + cont;  
      calculos = calculos + "<br/>";  
      base = base+1

      total =total + cont
      }

      $('#calculos').html(calculos);
      $('#resultado').html("<strong>El resultado es: "+total+'</strong>'); 
    }

  var validar_binario = function(numeros){
      
      $('#mensaje__base').html(mensaje_bin);

      var cont =0;
      var base =1;
      var result =0;
      var total =0;
      var calculos = '';

        for (var index=numeros.length-1; index >=0;index--){
        result =numeros.substr(index,1)*base;
        
        calculos = calculos + "Se toma el digito <strong>"+(index+1)+"</strong> y se multiplica por la base <strong>"+base+"</strong> y su resultado es: <strong>"+result+"</strong><br/>";
        base =base*2
        total =total + result
        }

        $('#calculos').html(calculos);
        $('#resultado').html("<strong>El resultado es: "+total+'</strong>');

    }




