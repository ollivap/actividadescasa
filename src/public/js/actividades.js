var aactividades =[];

function editar(i){
  if(aactividades[i]["cocinar"]=="h"){
      var coc = document.getElementById("coc1");
  } else if (aactividades[i]["cocinar"]=="m") {
      var coc = document.getElementById("coc2");
  }
  coc.checked =true;
  if(aactividades[i]["limpiar"]=="h"){
      var lim = document.getElementById("lim1");
  } else if (aactividades[i]["limpiar"]=="m") {
      var lim = document.getElementById("lim2");
  }
  lim.checked =true;
  if(aactividades[i]["barrer"]=="h"){
      var bar = document.getElementById("bar1");
  } else if (aactividades[i]["barrer"]=="m") {
      var bar = document.getElementById("bar2");
  }
  bar.checked =true;
  if(aactividades[i]["lavarr"]=="h"){
      var lavr = document.getElementById("lavr1");
  } else if (aactividades[i]["lavarr"]=="m") {
      var lavr = document.getElementById("lavr2");
  }
  lavr.checked =true;
  if(aactividades[i]["lavart"]=="h"){
      var lavt = document.getElementById("lavt1");
  } else if (aactividades[i]["lavart"]=="m") {
      var lavt = document.getElementById("lavt2");
  }
  lavt.checked =true;

  var x = document.getElementById('divguardar');
  var y = document.getElementById('divactualizar');
  document.actividades.encuesta.value=i;
  x.style.display="none";
  y.style.display="block";
}

function actualizartablero() { //metodo join()
         var caja = document.getElementById("caja");
         var cocinarh=0; var cocinarm=0;
         var limpiarh=0; var limpiarm=0;
         var barrerh=0; var barrerm=0;
         var lavarrh=0; var lavarrm=0;
         var lavarth=0; var lavartm=0;

         var texto ="<h1> Resumen de Actividades</h1>";
         for (var i = 0; i < aactividades.length; i++) {
           if(aactividades[i]["cocinar"]=="m"){
             cocinarm++;
           }else if (aactividades[i]["cocinar"]=="h") {
              cocinarh++;
           }
           if(aactividades[i]["limpiar"]=="m"){
             limpiarm++;
           }else if (aactividades[i]["limpiar"]=="h") {
              limpiarh++;
           }
           if(aactividades[i]["barrer"]=="m"){
             barrerm++;
           }else if (aactividades[i]["barrer"]=="h") {
              barrerh++;
           }
           if(aactividades[i]["lavarr"]=="m"){
             lavarrm++;
           }else if (aactividades[i]["lavarr"]=="h") {
              lavarrh++;
           }
           if(aactividades[i]["lavart"]=="m"){
             lavartm++;
           }else if (aactividades[i]["lavart"]=="h") {
              lavarth++;
           }
         }
         texto = texto + "Cocinar:  Hombres ("+cocinarh+")  Mujeres ("+cocinarm+") ";
         if(cocinarh > cocinarm){
            texto = texto + "Hombres MAS";
          }else if(cocinarh == cocinarm){
            texto = texto + "Estan empatados";
          }else {
            texto = texto + "Mujeres MAS";
          }
          texto = texto + "<br>Limpiar:  Hombres ("+limpiarh+")  Mujeres ("+limpiarm+") ";
          if(limpiarh > limpiarm){
             texto = texto + "Hombres MAS";
           }else if(limpiarh == limpiarm){
             texto = texto + "Estan empatados";
           }else {
             texto = texto + "Mujeres MAS";
           }
           texto = texto + "<br>Barrer:  Hombres ("+barrerh+")  Mujeres ("+barrerm+") ";
           if(barrerh > barrerm){
              texto = texto + "Hombres MAS";
            }else if(barrerh == barrerm){
              texto = texto + "Estan empatados";
            }else {
              texto = texto + "Mujeres MAS";
            }
            texto = texto + "<br>Lavar Ropa:  Hombres ("+lavarrh+")  Mujeres ("+lavarrm+") ";
            if(lavarrh > lavarrm){
               texto = texto + "Hombres MAS";
             }else if(lavarrh == lavarrm){
               texto = texto + "Estan empatados";
             }else {
               texto = texto + "Mujeres MAS";
             }
             texto = texto + "<br>Lavar Trastes:  Hombres ("+lavarth+")  Mujeres ("+lavartm+") ";
             if(lavarth > lavartm){
                texto = texto + "Hombres MAS";
              }else if(lavarth == lavartm){
                texto = texto + "Estan empatados";
              }else {
                texto = texto + "Mujeres MAS";
              }

         texto = texto + "<h2>Editar encuestas</h2>";
         for (var i = 0; i < aactividades.length; i++) {
           texto = texto + "Encuesta "+ (i+1)+"<input type='button' value='editar' onclick='editar(" + i +");'>"
                                              +"<input type='button' value='eliminar' onclick='eliminar(" + i +");'>  <br>";
         }
         caja.innerHTML = texto;
}
function reemplazaencuesta(){
     var i= document.actividades.encuesta.value;
    aactividades[i] = {
    "cocinar":document.actividades.cocinar.value,
    "limpiar":document.actividades.limpiar.value,
    "barrer":document.actividades.barrer.value,
    "lavarr":document.actividades.lavarr.value,
    "lavart":document.actividades.lavart.value,
    }
    actualizartablero();
    document.actividades.reset();
    var x = document.getElementById('divguardar');
    var y = document.getElementById('divactualizar');
    document.actividades.encuesta.value=i;
    x.style.display="block";
    y.style.display="none";
}

function guardarencuesta(){
 aactividades.push({
   "cocinar":document.actividades.cocinar.value,
   "limpiar":document.actividades.limpiar.value,
   "barrer":document.actividades.barrer.value,
   "lavarr":document.actividades.lavarr.value,
   "lavart":document.actividades.lavart.value,
 });
 actualizartablero();
 document.actividades.reset();
}

function eliminar(i) {
    aactividades.splice(i,1);
    actualizartablero();
    document.actividades.reset();
    var x = document.getElementById('divguardar');
    var y = document.getElementById('divactualizar');
    document.actividades.encuesta.value=i;
    x.style.display="block";
    y.style.display="none";
}
