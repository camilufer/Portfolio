
 

   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
      

   $(".dog").mouseover(function(){
        $(".dog-msj").removeClass("hide");
    });





function cambiaTamanio(){
  if (document.images) {
    document.images.logo.width=100;
    document.images.logo.height=100;
  } else {
    logo = document.getElementById("logo");
    logo.width = 80;
    logo.height = 80; 
  }
  event.preventDefault();
}