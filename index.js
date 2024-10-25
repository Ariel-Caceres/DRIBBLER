let header = document.querySelector("body header");
let burguer = document.querySelector("body .burguer .fa-bars");
let x = document.querySelector("body header .fa-x");
let slider = document.querySelector("body main .imagenes");
let boton_oscuro = document.querySelector("body main .modo-oscuro button");
let body = document.querySelector("body");
let main = document.querySelector("body main")
let titulo = document.querySelector("body main span")
let logo = document.querySelector("body header .logo span")
let idioma = document.querySelector("body header .iconos-boton .fa-globe")
let nav = document.querySelectorAll("body header nav ul li a")
let ul = document.querySelector("body header nav ul")
let li = document.querySelector("body header nav ul li")
let carrito = document.querySelector("body header .iconos-boton .carrito .fa-cart-plus")
let boton_cart = document.querySelector("body header .iconos-boton .carrito button")
let imagen2 = document.querySelector("body main .imagenes .imagen2")
let imagen1 = document.querySelector("body main .imagenes .imagen1")
burguer.addEventListener("click", () => {
    console.log("locura total")
    header.style.left = "0%";
})
x.addEventListener("click", () => {
    header.style.left = "-100%";
})

boton_oscuro.addEventListener("click", (event) => {
    console.log("locura total y absoluta")

    if (imagen1.style.display == "inline") {
        imagen1.style.display = "none";
    } else {
        imagen1.style.display = "inline";
        imagen2.style.left = "-100%";
    }
    if (imagen2.style.left == "-100%") {
        imagen2.style.left = "0%";
        imagen2.style.display = "inline";

    } else {
        imagen2.style.left = "-100%";
        imagen1.style.display = "inline";
    }


    if (body.style.backgroundColor == "white") {
        body.style.backgroundColor = "black";
    } else {
        body.style.backgroundColor = "white";
    }
    if (main.style.backgroundColor == "white") {
        main.style.backgroundColor = "black";
    } else {
        main.style.backgroundColor = "white";
    }
    if (header.style.backgroundColor == "white") {
        header.style.backgroundColor = "black";
    } else {
        header.style.backgroundColor = "white";
    }
    if (x.style.color == "black") {
        x.style.color = "white";
    } else {
        x.style.color = "black";
    }
    if (boton_oscuro.style.backgroundColor == "black") {
        boton_oscuro.style.backgroundColor = "white";
    } else {
        boton_oscuro.style.backgroundColor = "black";
    }
    if (boton_oscuro.style.color == "white") {
        boton_oscuro.style.color = "black";
    } else {
        boton_oscuro.style.color = "white";
    }

    if (titulo.style.backgroundColor == "white") {
        titulo.style.backgroundColor = "black";
    } else {
        titulo.style.backgroundColor = "white";
    }
    if (titulo.style.color == "black") {
        titulo.style.color = "white";
    } else {
        titulo.style.color = "black";
    }
    if (logo.style.color == "black") {
        logo.style.color = "white";
    } else {
        logo.style.color = "black";
    }

    for (let i = 0; i < nav.length; i++) {
        if (nav[i].style.color == "black") {
            nav[i].style.color = "white";
        } else {
            nav[i].style.color = "black";
        }
    }
    for (let i = 0; i < carrito.length; i++) {
        carrito[i].style.border = "10px solid white";
    }

    if (ul.style.color == "black") {
        ul.style.color = "white";
    } else {
        ul.style.color = "black";
    }


    if (idioma.style.color == "black") {
        idioma.style.color = "white";
    } else {
        idioma.style.color = "black";
    }
    if (carrito.style.color == "black") {
        carrito.style.color = "white";
    } else {
        carrito.style.color = "black";
    }


    if (boton_cart.style.backgroundColor == "black") {
        boton_cart.style.backgroundColor = "white";
    } else {
        boton_cart.style.backgroundColor = "black";
    }

    if (boton_cart.style.color == "white") {
        boton_cart.style.color = "black";
    } else {
        boton_cart.style.color = "white";
    }
    if (burguer.style.color == "black") {
        burguer.style.color = "white";
    } else {
        burguer.style.color = "black";
    }

}
)
   
if (body.style.backgroundColor == "white") {
    body.style.backgroundColor = "black";
} else {
    body.style.backgroundColor = "white";
}
if (main.style.backgroundColor == "white") {
    main.style.backgroundColor = "black";
} else {
    main.style.backgroundColor = "white";
}
if (header.style.backgroundColor == "white") {
    header.style.backgroundColor = "black";
} else {
    header.style.backgroundColor = "white";
}
if (x.style.color == "black") {
    x.style.color = "white";
} else {
    x.style.color = "black";
}
if (boton_oscuro.style.backgroundColor == "black") {
    boton_oscuro.style.backgroundColor = "white";
} else {
    boton_oscuro.style.backgroundColor = "black";
}
if (boton_oscuro.style.color == "white") {
    boton_oscuro.style.color = "black";
} else {
    boton_oscuro.style.color = "white";
}

if (titulo.style.backgroundColor == "white") {
    titulo.style.backgroundColor = "black";
} else {
    titulo.style.backgroundColor = "white";
}
if (titulo.style.color == "black") {
    titulo.style.color = "white";
} else {
    titulo.style.color = "black";
}
if (logo.style.color == "black") {
    logo.style.color = "white";
} else {
    logo.style.color = "black";
}

for (let i = 0; i < nav.length; i++) {
    if (nav[i].style.color == "black") {
        nav[i].style.color = "white";
    } else {
        nav[i].style.color = "black";
    }
}
for (let i = 0; i < carrito.length; i++) {
    carrito[i].style.border = "10px solid white";
}

if (ul.style.color == "black") {
    ul.style.color = "white";
} else {
    ul.style.color = "black";
}


if (idioma.style.color == "black") {
    idioma.style.color = "white";
} else {
    idioma.style.color = "black";
}
if (carrito.style.color == "black") {
    carrito.style.color = "white";
} else {
    carrito.style.color = "black";
}


if (boton_cart.style.backgroundColor == "black") {
    boton_cart.style.backgroundColor = "white";
} else {
    boton_cart.style.backgroundColor = "black";
}

if (boton_cart.style.color == "white") {
    boton_cart.style.color = "black";
} else {
    boton_cart.style.color = "white";
}
if (burguer.style.color == "black") {
    burguer.style.color = "white";
} else {
    burguer.style.color = "black";
}

