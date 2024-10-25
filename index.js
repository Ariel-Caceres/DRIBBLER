let header = document.querySelector("body header");
let burguer = document.querySelector("body .burguer .fa-bars");
let x = document.querySelector("body header .fa-x");

burguer.addEventListener("click",()=>{
    console.log("locura total")
    header.style.left = "0%"; 
})
x.addEventListener("click", ()=>{
    header.style.left="-100%";   
})
