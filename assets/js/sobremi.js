


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
  let text = 'Hola, extraño... Mi nombre es Camila, tengo 28 años y soy de Valparaíso, mi historia con el código comenzó apenas el 2017, pero mis ganas de saber me han llevado a aprender más de lo que imaginaba!. En mis tiempos libres me gusta jugar video juegos, pasar largas horas viendo series y estar con mis gatitas <3. Me gusta mucho aprender y estoy segura que mi motivación y disciplina me llevarán a lograr grandes cosas :)';
  const typing = new Typing(text, 50);
  typing();
  $('#main-container').append('<span id="blinker">|</span>');

};
