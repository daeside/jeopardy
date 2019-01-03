var tempo = document.getElementById('temporizador');
var tiempo_corriendo = null;
var tiempo = {
        minuto: 0,
        segundo: 0
    };

$(document).ready(function(){

    $("#btn-comenzar").click(function(){
        if ( $(this).text() == 'Comenzar' )
        {
            tempo.play();
            $(this).text('Detener');                        
            tiempo_corriendo = setInterval(function(){
                // Segundos
                tiempo.segundo++;
                if(tiempo.segundo >= 60)
                {
                    tiempo.segundo = 0;
                    tiempo.minuto++;
                }      

                // Minutos
                if(tiempo.minuto >= 60)
                {
                    tiempo.minuto = 0;
                }

                $("#minute").text(tiempo.minuto < 10 ? '0' + tiempo.minuto : tiempo.minuto);
                $("#second").text(tiempo.segundo < 10 ? '0' + tiempo.segundo : tiempo.segundo);
            }, 1000);
        }
        else 
        {
            tempo.pause();
            $(this).text('Comenzar');
            clearInterval(tiempo_corriendo);
        }
    })
})