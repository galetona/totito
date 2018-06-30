var contenido_noticias = document.getElementById('caja');
var image = ['a', 'b', 'c', 'd', 'e']
var i= image.length;
var time= 1000;
var e=0

function siguienteImagen(){
  if (i<image.length){
    i=i+1;
  }else {
    i=1;
    }
    contenido_noticias.innerHTML = "<img src="+"Media/Fotos/"+image[i-1]+".png>";
  }

  function anteriorImagen(){
    if (i<image.length+1 && i>1){
      i=i-1;
    }else {
      i=1;
      }
      contenido_noticias.innerHTML = "<img src="+"Media/Fotos/"+image[i-1]+".png>";
    }
