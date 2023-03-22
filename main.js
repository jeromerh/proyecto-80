var nombres_invitados=[]
function enviar(){

var invitado=document.getElementById("name1").value
nombres_invitados.push(invitado)
document.getElementById("display_name").innerHTML=nombres_invitados

}
function mostrar(){
var i=nombres_invitados.join("<br>")
document.getElementById("p1").innerHTML=i
}
function ordenar(){
    nombres_invitados.sort()
    var j=nombres_invitados.join("<br>")
    document.getElementById("ordenar").innerHTML=j
    
}
function buscar(){
    var buscar=document.getElementById("buscar").value
    var resultado=0
    var longitud=nombres_invitados.length
    for (var a=0;a<longitud;a++){
    if(buscar==nombres_invitados[j]){
        buscar=buscar+1
    }    
    }

    document.getElementById("p2").innerHTML="buscar_nombre" +buscar+ "tiempo"
    console.log("buscar_nombre" +buscar+ "tiempo")
}
