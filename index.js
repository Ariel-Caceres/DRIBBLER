let header = document.querySelector("body header");
let burguer = document.querySelector("body .burguer .fa-bars");
let x = document.querySelector("body header .fa-x");
let slider = document.querySelector("body main .imagenes");
let boton_oscuro = document.querySelector("body main .modo-oscuro ");
let body = document.querySelector("body");
let titulo = document.querySelector("body main span")
let logo = document.querySelector("body header .logo span")
let idioma = document.querySelector("body header .iconos-boton .fa-globe")
let nav = document.querySelector("body header nav ul li a")
let ul = document.querySelector("body header nav ul")
let li = document.querySelector("body header nav ul li")
let carrito = document.querySelector("body header .iconos-boton .carrito .fa-cart-plus")
let boton_cart =  document.querySelector("body header .iconos-boton .carrito button")

burguer.addEventListener("click",()=>{
    console.log("locura total")
    header.style.left = "0%"; 
})
x.addEventListener("click", ()=>{
    header.style.left="-100%";   
})

boton_oscuro.addEventListener("click",(event)=>{
    console.log("locura total y absoluta")
    if (body.style.backgroundColor=="white"){
        body.style.backgroundColor="black";
    }else{
        body.style.backgroundColor="white";
    }
    if (titulo.style.backgroundColor=="white"){
        titulo.style.backgroundColor="black";
    }else{
        titulo.style.backgroundColor="white";
    }
    if (titulo.style.color=="black"){
        titulo.style.color="white";
    }else{
        titulo.style.color="black";
    }
    if (logo.style.color=="black"){
        logo.style.color="white";
    }else{
        logo.style.color="black";
    }
    if (nav.style.color=="black"){
        nav.style.color="white";
    }else{
        nav.style.color="black";
    }
    if (ul.style.color=="black"){
        ul.style.color="white";
    }else{
        ul.style.color="black";
    }
    if (li.style.color=="black"){
        li.style.color="white";
    }else{
        li.style.color="black";
    }
    if (idioma.style.color=="black"){
        idioma.style.color="white";
    }else{
        idioma.style.color="black";
    }
    if (carrito.style.color=="black"){
        carrito.style.color="white";
    }else{
        carrito.style.color="black";
    }

    
    if (boton_cart.style.backgroundColor == "black"){
        boton_cart.style.backgroundColor = "white";
    }else{
        boton_cart.style.backgroundColor="black";
    }
    if (boton_cart.style.color =="white"){
        boton_cart.style.color = "black";
    }else{
        boton_cart.style.color = "white";
    }
  

})
