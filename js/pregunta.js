
var soundRespuesta = document.getElementById('soundRespuesta');
var soundCorrecto = document.getElementById('soundCorrecto');
var soundIncorrecto = document.getElementById('soundIncorrecto');
var tempo = document.getElementById('temporizador');

function cronoTime()
{
    alert($(this).text());
}

function respuesta(answer, team, val)
{
	var punt = parseInt(document.getElementById(team).value);

	if(document.getElementById(answer).checked)
	{
    soundCorrecto.play();
    soundCorrecto.currentTime = 0;
		punt = punt + parseInt(val);
        $(function() {
        $('.mensaje').html('<span style="color: green;">Correcto</span>');
      });

	}
	else
	{
    soundIncorrecto.play();
    soundIncorrecto.currentTime = 0;
		punt = punt + 0;
        $(function() {
        $('.mensaje').html('<span style="color: red;">Incorrecto</span>');
      });
	}

	document.getElementById(team).value = punt; 
}

function mostrar(answer)
{
   soundRespuesta.play();
   soundRespuesta.currentTime = 0;
	 $(function() {
        $('.mensaje').html('<span style="color: #404040;">Respuesta: opcion '+ answer +'</span>');
      });
}

function destroy()
{
  $('#answer-back').removeClass('show-question');
  $('#answer-back').addClass('hide-question');
  $('#btn-comenzar').text('Comenzar');
  $("#minute").text("00");
  $("#second").text("00");
  tempo.pause();
  tempo.currentTime = 0;
  tiempo.segundo = 0;
  tiempo.minuto = 0;
  clearInterval(tiempo_corriendo);
  
  setTimeout(function(){
    $('.answer-container').remove();
    }, 180);
}

function pregunta(question, option1, option2, option3, answer, value)
{
  var inicio = "<div class='answer-container'><p>" + question + "</p>";
  var pre1 = "<input class='check' type='radio' name='respuesta' id='1'><label class='respuesta' for='1'>1) " + option1 + "</label><br>";
  var pre2 = "<input class='check' type='radio' name='respuesta' id='2'><label class='respuesta' for='2'>2) " + option2 + "</label><br>";
  var pre3 = "<input class='check' type='radio' name='respuesta' id='3'><label class='respuesta' for='3'>3) " + option3 + "</label><br>";
  var bot1 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 10, \"" + value + "\")'>Equipo 1</button>";
  var bot2 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 20, \"" + value + "\")'>Equipo 2</button>";
  var bot3 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 30, \"" + value + "\")'>Equipo 3</button>";
  var res = "<button type='button' class='btn btn-primary' onclick='mostrar(\"" + answer + "\")'>Respuesta</button>";
  var men = "<p class='mensaje'></p>";
  var cerrar = "<button type='button' class='btn btn-success' id='clos' onclick='destroy()'>Cerrar</button></div>";
  var cadena = inicio + pre1 + pre2 + pre3 + bot1 + bot2 + bot3 + res + men + cerrar;

  $("#answer-back").append(cadena);
}

function preguntaConImg(image, largo, alto, question, option1, option2, option3, answer, value)
{
  var inicio = "<div class='answer-container'><img style='width: " + largo + "px; height: " + alto + "px;' src='img/" + image + "' alt=''>";
  var preg = "<p>" + question + "</p>";
  var pre1 = "<input class='check' type='radio' name='respuesta' id='1'><label class='respuesta' for='1'>1) " + option1 + "</label><br>";
  var pre2 = "<input class='check' type='radio' name='respuesta' id='2'><label class='respuesta' for='2'>2) " + option2 + "</label><br>";
  var pre3 = "<input class='check' type='radio' name='respuesta' id='3'><label class='respuesta' for='3'>3) " + option3 + "</label><br>";
  var bot1 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 10, \"" + value + "\")'>Equipo 1</button>";
  var bot2 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 20, \"" + value + "\")'>Equipo 2</button>";
  var bot3 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 30, \"" + value + "\")'>Equipo 3</button>";
  var res = "<button type='button' class='btn btn-primary' onclick='mostrar(\"" + answer + "\")'>Respuesta</button>";
  var men = "<p class='mensaje'></p>";
  var cerrar = "<button type='button' class='btn btn-success' id='clos' onclick='destroy()'>Cerrar</button></div>";
  var cadena = inicio + preg + pre1 + pre2 + pre3 + bot1 + bot2 + bot3 + res + men + cerrar;

  $("#answer-back").append(cadena);
}

function preguntaImg(question, option1, option2, option3, answer, value)
{ 
  var inicio = "<div class='answer-container'><p>" + question + "</p>";
  var pre1 = "<input class='check' type='radio' name='respuesta' id='1'><label class='respuesta' for='1'> 1) <img src='img/" + option1 + "' alt=''></label><br>";
  var pre2 = "<input class='check' type='radio' name='respuesta' id='2'><label class='respuesta' for='2'> 2) <img src='img/" + option2 + "' alt=''></label><br>";
  var pre3 = "<input class='check' type='radio' name='respuesta' id='3'><label class='respuesta' for='3'> 3) <img src='img/" + option3 + "' alt=''></label><br>";
  var bot1 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 10, \"" + value + "\")'>Equipo 1</button>";
  var bot2 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 20, \"" + value + "\")'>Equipo 2</button>";
  var bot3 = "<button type='button' class='btn btn-info' onclick='respuesta(\"" + answer + "\", 30, \"" + value + "\")'>Equipo 3</button>";
  var res = "<button type='button' class='btn btn-primary' onclick='mostrar(\"" + answer + "\")'>Respuesta</button>";
  var men = "<p class='mensaje'></p>";
  var cerrar = "<button type='button' class='btn btn-success' id='clos' onclick='destroy()'>Cerrar</button></div>";
  var cadena = inicio + pre1 + pre2 + pre3 + bot1 + bot2 + bot3 + res + men + cerrar;

  $("#answer-back").append(cadena);
}