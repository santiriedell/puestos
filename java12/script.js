
function enviar(){

    let nombre=document.getElementById("nombre").value
    let apellido=document.getElementById("apellido").value
    let edad=document.getElementById("edad").value
    let pais=document.getElementById("pais").value
    let puesto=document.getElementById("puesto").value
   

   if (puesto==="1"){
     document.getElementById("mostrar" ).innerHTML =  nombre
     document.getElementById("mostrar1").innerHTML = apellido
     document.getElementById("mostrar2").innerHTML = edad
     document.getElementById("mostrar3").innerHTML = pais
     document.getElementById("mostrar4").innerHTML = puesto
    }
      
   else if (puesto==="2"){
     document.getElementById("mostrar5").innerHTML = nombre
     document.getElementById("mostrar6").innerHTML = apellido
     document.getElementById("mostrar7").innerHTML = edad
     document.getElementById("mostrar8").innerHTML = pais
     document.getElementById("mostrar9").innerHTML = puesto
   }
      
   else if (puesto==="3"){
     document.getElementById("mostrar10").innerHTML = nombre
     document.getElementById("mostrar11").innerHTML = apellido
     document.getElementById("mostrar12").innerHTML = edad
     document.getElementById("mostrar13").innerHTML = pais
     document.getElementById("mostrar14").innerHTML = puesto
   }
   else{
    alert("No Califica")
   }
}   