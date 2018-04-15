$(document).ready(function(){
    writeText();
   //funcion para cambiar avatar
  $("#btn").click(function(){
  $(".camilu").replaceWith("<img style=' position: fixed; bottom: 0;' src='assets/img/cami22.png'/>");
   event.preventDefault();
    })
 
});


// Typing Function

const writeText = () => {
  let text = 'Hola, Mi nombre es Camila, tengo 28 años y soy de Valparaíso, Chile. <br> Me encanta todo lo que tiene que ver con la tecnología, pero mi historia con el código comenzó apenas el 2017 en <a href="http://www.laboratoria.la/">Laboratoria</a>, donde adquirí conocimientos sobre lenguajes de programación y metodologías ágiles, sin embargo el self learning es fundamental SIEMPRE. En mis tiempos libres me gusta jugar video juegos, ver series y disfrutar con mis amigos <3. <br> Ser disciplinado y constante siempre te ayudarán a conseguir tus objetivos :)';
  const typing = new Typing(text, 50);
  typing();
  $('#main-container').append('<span id="blinker">|</span>');
 
};
