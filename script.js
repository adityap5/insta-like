var image =document.querySelector("img");
var heart = document.querySelector("i");

image.addEventListener("dblclick",function(){
 heart.style.opacity ="0.6";
 heart.style.scale ="1";

 setTimeout(function(){
 heart.style.opacity ="0";
 },1000) ;
 setTimeout(function(){
   heart.style.scale ="0";
   },1000) ;





})
 

