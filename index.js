let header = document.querySelector("body header");
let burguer = document.querySelector("body .burguer .fa-bars");
let x = document.querySelector("body header .fa-x");
let slider = document.querySelector("body main .imagenes")

burguer.addEventListener("click",()=>{
    console.log("locura total")
    header.style.left = "0%"; 
})
x.addEventListener("click", ()=>{
    header.style.left="-100%";   
})

// slider.style.transform = "translateX(-100%)"
