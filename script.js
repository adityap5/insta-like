var image =document.querySelector("img");
var heart = document.querySelector("i");

image.addEventListener("dblclick",function(){
 heart.style.opacity ="0.4";
 heart.style.scale ="1.5";
 console.log("a");
 setTimeout(function(){
    heart.style.opacity ="0";
 console.log("b");

 },1000)
 setTimeout(function(){
    heart.style.opacity ="0.4";
 console.log("c");

 },1000)

 setTimeout(function(){
    heart.style.opacity ="0";
 console.log("d");

 },1000)
})