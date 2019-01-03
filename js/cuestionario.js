
var abrir = document.getElementById('abrir');

function normalQ(idPreg, preg, opta, optb, optc, answ, val)
{
    document.getElementById(idPreg).onclick = function() 
    {
       abrir.play();
       abrir.currentTime = 0; 
       $('#answer-back').removeClass('hide-question');
       $('#answer-back').addClass('show-question');
       $(this).attr('disabled','-1')
       pregunta(preg, opta, optb, optc, answ, val);
    }
}

function imgQ(idPreg, img, wi, he, preg, opta, optb, optc, answ, val)
{
    document.getElementById(idPreg).onclick = function() 
    {
        abrir.play();
        abrir.currentTime = 0;
        $('#answer-back').removeClass('hide-question');
        $('#answer-back').addClass('show-question');
        $(this).attr('disabled','-1')
        preguntaConImg(img, wi, he, preg, opta, optb, optc, answ, val);
    }
}

function imgOptionQ(idPreg, preg, opta, optb, optc, answ, val)
{
    document.getElementById(idPreg).onclick = function() 
    {
       abrir.play();
       abrir.currentTime = 0;
       $('#answer-back').removeClass('hide-question');
        $('#answer-back').addClass('show-question');
       $(this).attr('disabled','-1')
       preguntaImg(preg, opta, optb, optc, answ, val);
    }
}


window.onload = function() 
{
    /* ---------------------------------------------------
                  Categoria 1
    ----------------------------------------------------- */

    normalQ("10categoria1", "¿Cuál de los incisos sus figuras geométricas corresponden a la familia de cuadriláteros?", "Rectángulo, pentágono y trapezoide.", "Rombo, trapecio y triángulo.", "Cuadrado, rectángulo, rombo.", "3", "10");
    imgQ("20categoria1", "c120.png", "400", "100", "De las siguientes imágenes señala cuáles son figuras geométricas", "Figura 1 y 2", "Figura 2 y 3", "Figura 3 y 1", "2", "20");
    imgQ("30categoria1", "c130.png", "130", "140", "De las siguientes opciones elige la fórmula correcta para calcular el perímetro de un triángulo isósceles", "2 * 1 + b", "B * H / 2", "A + B + C", "3", "30");
    imgQ("40categoria1", "c140.png", "180", "80", "Si Paco quiere calcular el área de un triángulo escaleno ¿Cuál fórmula utilizaría de las siguientes opciones?", "b / h * 2", "b * h / 2", "a + b + c", "2", "40");
    normalQ("50categoria1", "Adivina, adivinador, adivina que figura soy: Si tengo 4 lados, 2 ejes de simetría, 2 diagonales, 4 ángulos de 90° y 2 pares paralelos", "Rectángulo", "Trapecio", "Círculo", "1", "50");
    normalQ("60categoria1", "Pertenezco a la familia de cuadriláteros y todos mis lados son iguales, entonces, ¿Quién soy?", "Trapecio", "Romboide", "Trapezoide", "2", "60");
    normalQ("70categoria1", "Adivina, adivinador, adivina que figura soy: Si tengo 3 lados y mis 3 ángulos suman  180° además de que tengo 3 ejes de simetría", "Tríangulo equilátero", "Tríangulo obtusángulo", "Tríangulo escaleno", "1", "70");
    imgQ("80categoria1", "c180.gif", "200", "140", "Don pedro tiene terreno de forma hexagonal cuyas medidas son 5m y un apotema de 4.33 m. ¿Cuánto mide en total el terreno de don Pedro?", "30 m2", "64.95 m2", "21.6 m2", "2", "80");
    imgQ("90categoria1", "c190.jpg", "200", "120", "Juanito quiere pintar la base de su barco que tiene forma de trapecio pero no sabe cuanta pintura comprar. Para ello primero tiene que hallar el área de la base del barco. Si sus medidas son de altura 4 cm, su base mayor de 6 cm y la base menor de 3 cm. ¿Cuánto será el área de la base del barco?", "15 cm2", "25 cm2", "9", "1", "90");
    imgQ("100categoria1", "98765.jpg", "150", "150", "En base a la figura de arriba, ¿Cuántos triángulos hay?", "6", "8", "3", "2", "100");

    /* ---------------------------------------------------
                  Categoria 2
    ----------------------------------------------------- */

    imgQ("10categoria2", "c210.png", "150", "120", "Elige la opción correcta que corresponde al nombre de la imagen de arriba.", "Dodecaedro", "Icosaedro", "Octaedro", "1", "10");
    imgOptionQ("20categoria2", "Observa las figuras y en base a ello elige la opción  en la que se representa un icosaedro", "icosaedro204.jpg", "octa204.jpg", "icosaedrotrun204.gif", "1", "20");
    imgOptionQ("30categoria2", "¿Cuál de los siguientes cuerpos no es un poliedro?", "c230.png", "c230b.png", "c230c.png", "2", "30");
    imgOptionQ("40categoria2", "¿Cuál figura en 3D posee menos de 8 aristas?", "1.png", "2.png", "3.png", "1", "40");
    normalQ("50categoria2", "¿Con qué nombre se le conoce al polígono que tiene siete lados ? ", "Hexágono", "Heptágono", "Pentágono", "2", "50");
    normalQ("60categoria2", "Según la medida de sus lados y ángulos interiores, los polígonos se clasifican en", "Convexos o cóncavos", "Regulares e irregulares", "Triángulos y cuadrados", "2", "60");
    imgOptionQ("70categoria2", "Noemí quiere formar un cilindro para eso fue a la papelería a comprar el material que la ayudará a hacer el cilindro, pero no sabe cuál de las siguientes opciones elegir. Ayuda a Noemí a elegir la imagen que al armarse corresponda a un cilindro. ", "4.png", "5.png", "6.png", "1", "70");
    imgQ("80categoria2", "789.png", "300", "150", "Laura encontró en el suelo la siguiente imagen y quiere saber qué cuerpo geométrico se forma al armarse. Elige la opción correcta del nombre de la figura geométrica que se forma", "Icosaedro", "Dodecaedro", "Octaedro", "3", "80");
    normalQ("90categoria2", "Un recipiente de leche en polvo tiene 7 cm de radio y 12 cm de altura ¿Cuál es su volúmen?", "1846 cm", "153.86 cm", "1,846.32 cm", "3", "90");
    normalQ("100categoria2", "Tengo un cubo con una arista de 5 cm ¿Cuántos cubos le cabrían dentro con una arista de 1 cm?", "50 cm3", "40 cm3", "125 cm3", "3", "100");

    /* ---------------------------------------------------
                  Categoria 3
    ----------------------------------------------------- */

    imgOptionQ("10categoria3", "Identifica cuál imagen forma un ángulo cóncavo", "66.jpg", "67.png", "68.png", "1", "10");
    imgOptionQ("20categoria3" ,"Identifica cuál imagen forma un ángulo de 90°", "12.png", "13.png", "14.png", "2", "20");
    imgOptionQ("30categoria3", "Soy un ángulo obtuso, mido más de 90° y menos de 180°", "12.png", "13.png", "14.png", "3", "30");
    normalQ("40categoria3", "A paco le encargó el profesor comprar una tira de madera  que contenga un ángulo llano. Ayuda a paco a recordar los grados que tiene el ángulo llano para que pueda elegir la tira de madera correcta. ", "45°", "90°", "180°", "3", "40");
    normalQ("50categoria3", "¿Qué  ángulo tiene el contorno de un balón de futbol? ", "Ángulo perigonal", "Ángulo agudo", "Ángulo llano", "1", "50");
    normalQ("60categoria3", "¿Cómo se le llama al ángulo que se forma en la esquina de un pizarrón rectangular? ", "Ángulo agudo", "Ángulo obtuso", "Ángulo recto", "3", "60");
    normalQ("70categoria3", "¿Qué es un ángulo?", "Es la abertura de dos semirrectas que parten de una arista", "Es la abertura de dos semirrectas que parten de un vértice", "Es la abertura de dos semirrectas que parten de una cúspide", "2", "70");
    normalQ("80categoria3", "Ángulo que mide más de 180° pero menos de 360°", "Ángulo recto", "Ángulo obtuso", "Ángulo concavo", "3", "80");
    imgQ("90categoria3", "741.png", "150", "150",  "María compró una rebanada de pizza de la cual quiere saber sus ángulos interiores. Pero solo tiene los siguientes ángulos. Ayuda a María a hallar el ángulo faltante  ", "110°", "180°", "100°", "1", "90");
    imgQ("100categoria3", "52.png", "330", "230",  "Don  Pedro quiere colocar sus pisos en la cocina la cual es triangular pero desconoce dos ángulos de ella. Ayuda a encontrar los ángulos desconocidos para que pueda realizar los cortes correctos y así poder terminar su piso de la cocina.", "Inferiores 60°, 40°. Exteriores 140°", "Inferiores 75°, 32°. Exteriores 125°", "Inferiores 98°, 25°. Exteriores 90°", "1", "100");

    /* ---------------------------------------------------
                  Categoria 4
    ----------------------------------------------------- */

    normalQ("10categoria4", "Si el área de un campo de fútbol gigante con forma de cuadrado es 49 km2, ¿Cuál es la longitud total de las vallas que rodean al campo?", "10 km", "28 km", "65 km", "2", "10");
    normalQ("20categoria4", "Halla la apotema de la tapa de un tinaco cuya  forma es de un hexágono regular y su área es de 314,86 cm2 y su lado es de 11 cm. ", "2.25 cm", "4.77 cm", "6 cm", "2", "20");
    normalQ("30categoria4", "Una valla publicitaria mide 9 metros de base y su área es de 27 m2 .Entonces si sabemos esto  ¿Cuál es su altura?", "5 mts", "7 mts", "3  mts", "3", "30");
    normalQ("40categoria4", "En una ciudad hay un parque cuya forma es la de un pentágono irregular. Los lados miden respectivamente, 45, 39, 29, 17 y 39 metros. ¿Qué longitud tiene la valla que lo rodea?", "789 mts", "169 mts", "167 mts", "2", "40");
    normalQ("50categoria4", "Una vela triangular de un bote  se ha estropeado y hay que sustituirla por otra. Para confeccionar la nueva vela nos cobran 21 pesos por m2 . ¿Cuánto costará esa nueva vela si debe tener 8 m de alto y 4 m de base?", "336 pesos", "254 pesos", "600 pesos", "1", "50");
    normalQ("60categoria4", "Hemos fabricado una cometa con forma de rombo, cuyas diagonales miden 393 cm y 205 cm respectivamente. Para ello se ha usado una lámina plástica rectangular cuya longitud y anchura son las de la cometa. Calcula el área de la cometa y la de la lámina", "7.81 metros, 7.29 metros", "4.98 metros, 3.24 metros", "3.64 metros, 7.29 metros", "3", "60");
    normalQ("70categoria4", "Queremos enmarcar un cuadro cuyas dimensiones totales son 103 cm de base por 63 cm de alto. ¿Qué longitud deberá tener la moldura que debemos usar? Si la moldura cuesta a 7.2 pesos el metro, calcula el precio de dicho marco", "23.97 pesos", "30.86 pesos", "45 pesos", "1", "70");
    normalQ("80categoria4", "Se tiene que colocar mosaicos en el patio interior de un edificio los cuales son de forma cuadrada y cada lado mide 30 cm. Si el patio es rectangular y sus medidas son 10 m por 12 m. ¿Cuántos mosaico se necesitarán?", "100 mosaicos", "1400 mosaicos", "1333 mosaicos", "3", "80");
    normalQ("90categoria4", "Un rollo de tela de 2 m de ancho se ha usado para cortar 1050 pañuelos cuadrados de 20 cm de lado. ¿Qué longitud de tela había en el rollo si no ha faltado ni sobrado tela?", "45 mts", "21 mts", "20 mts", "2", "90");
    normalQ("100categoria4", "Una empresa fabrica sombrillas para la playa. Para ello usa tela cortada en forma de polígono regular. Calcula la cantidad de tela que necesitará para fabricar 36 sombrillas de 10 lados si sabemos que el lado mide 173 cm y su apotema mide 266.21 cm. ¿Cuanta tela necesitará? ", "23.02 m2", "30 m2", "12.56 m2", "1", "100");

    /* ---------------------------------------------------
                  Termina Cuestionario
    ----------------------------------------------------- */

    document.getElementById('reinicio').onclick = function() 
    {
	   $(".btn-warning").removeAttr('disabled');
	   document.getElementById('10').value = 0;
	   document.getElementById('20').value = 0;
	   document.getElementById('30').value = 0;
    }

    $('[data-toggle="tooltip"]').tooltip(); 
 }